const express = require('express');
const cors = require('cors');
const User = require("./DB/Users/UserSchema");
const WebSocket = require('ws');
const mongoose = require('mongoose');
const Auth = require('./Auth');
const Geofence = require('./DB/Data/geofenceSchema');
require('./DB/Configuration');
const turf = require('@turf/turf');
const { Worker } = require('worker_threads');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

let websocketOnAndOff = true;
let AlertOnAndOff = true;
const Timer = 5000;  // Thread run timer.

// Server configuration.
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9901;

// Mail configuration.
const MailHost = process.env.MAIL_HOST || "mail.coraltele.com";
const MailPort = parseInt(process.env.MAIL_PORT, 10);
const MailSecure = (process.env.MAIL_SECURE === 'true') ? true : false;
const MailUser = process.env.MAIL_USER || "mailgateway@coraltele.com";
const MailPassword = process.env.MAIL_PASSWORD || "%$#Maig#$&7634";
const MailSubject = process.env.MAIL_SUBJECT || "Geofencing emergency alert!.";
const MailText = process.env.MAIL_TEXT || "Hello,\n\nThe following members are outside the geofencing range: ";

// Run time globle data structure.
let connections = {};

// Websocket code.
wss.on('connection', (ws, req) => {
  if (!websocketOnAndOff) {
    ws.send(JSON.stringify({ message: 'WebSocket is currently disabled.', status: 0 }));
    ws.close();
    return;
  }

  const token = req.headers['sec-websocket-protocol'];
  if (!token) {
    ws.send(JSON.stringify({ message: 'Authorization token is missing or invalid.', status: 0 }));
    ws.close();
    return;
  }

  const mockReq = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const mockRes = {
    status: (code) => ({
      json: (data) => {
        ws.send(JSON.stringify({ message: data.message, status: 0 }));
        ws.close();
      },
    }),
  };

  const mockNext = () => {
    const username = mockReq.username;
    connections[username] = { ws: ws, location: null };
    const userLength = Object.keys(connections).length;
    const usernames = Object.keys(connections);
    console.log(`Total users connected: ${userLength}`);
    console.log('Usernames:', usernames);
    ws.on('message', async (message) => {
      try {
        const parsedMessage = JSON.parse(message);
        const { LiveLocation } = parsedMessage;
        if (
          typeof LiveLocation !== 'object' || LiveLocation === null ||
          typeof LiveLocation.latitude !== 'number' || typeof LiveLocation.longitude !== 'number'
        ) {
          ws.send(JSON.stringify({ message: 'Live location must be an object with latitude and longitude as numbers.', status: 0 }));
          return;
        }
        connections[username].location = LiveLocation;
        console.log('Received LiveLocation:', username, ":", LiveLocation);
        ws.send(JSON.stringify({ message: 'Live location updated or created successfully!', status: 1 }));
      } catch (error) {
        ws.send(JSON.stringify({ message: 'Internal server error', error: error.message, status: -1 }));
      }
    });

    ws.on('close', () => {
      console.log(`${username} disconnected from the WebSocket`);
      delete connections[username];
      const userLength = Object.keys(connections).length;
      const usernames = Object.keys(connections);
      console.log(`Total users connected: ${userLength}`);
      console.log('Usernames:', usernames);
    });
  };
  Auth.verifyToken(mockReq, mockRes, mockNext);
});

// Check device outside the polygon range.
const checkDeviceOutsidePolygon = async (polygonCoordinates, members) => {
  const outsideDevices = [];
  if(polygonCoordinates.length === 0)
  {
    return outsideDevices;
  }
  if (
    polygonCoordinates.length > 0 &&
    (polygonCoordinates[0][0] !== polygonCoordinates[polygonCoordinates.length - 1][0] ||
     polygonCoordinates[0][1] !== polygonCoordinates[polygonCoordinates.length - 1][1])
  ) {
    polygonCoordinates.push(polygonCoordinates[0]);
  }
  const polygon = turf.polygon([polygonCoordinates.map(coord => [coord[1], coord[0]])]);
  for (const member of members) {
    const user = connections[member];
    if (user && user.location) {
      const { latitude, longitude } = user.location;
      const point = turf.point([longitude, latitude]);
      if (!turf.booleanPointInPolygon(point, polygon)) {
        outsideDevices.push(member);
      }
    }
  }
  return outsideDevices;
};

// Function of sending mail.
const Sendmail = async (username, memberList) => {
  const transporter = nodemailer.createTransport({
    host: MailHost,
    port: MailPort,
    secure: MailSecure,
    auth: {
      user: MailUser,
      pass: MailPassword,
    },
  });
  const mailOptions = {
    from: MailUser,
    to: username,
    subject: MailSubject,
    text: `${MailText} ${memberList.join(", ")}.\n\nBest regards,\nRahul singh`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to: ${username}`);
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
};

// Function of check mail to send every 4 hourse logic.
const CheckMailTime = async (lastMailTime) => {
  console.log(lastMailTime)
  const lastTime = new Date(lastMailTime);
  const currentTime = new Date();        
  const timeDifferenceInHours = (currentTime - lastTime) / (1000 * 60 * 60);
  if (timeDifferenceInHours > 4) {
    return true;
  }
  return false;
};

// Function to check all devices.
const CheckAllDevices = async () => {
  try {
      const devices = await Geofence.find();
      devices.forEach(async device => {
      if(device.alert)
      {
          const outsideDevices = await checkDeviceOutsidePolygon(device.polygonCoordinates, device.members);
          const OneMailOnly = await CheckMailTime(device.lastMailTime);
          console.log(OneMailOnly);
          if (OneMailOnly && outsideDevices.length > 0) {
            await Sendmail(device.username, outsideDevices);
            device.lastMailTime = new Date();
            await device.save();
          }
      }
  });
  } catch (error) {
      console.error("Database fetch error.");
  }
};

// Thread.
async function AllFunctionOfThread() {
  if(websocketOnAndOff){
    await CheckAllDevices();
  }
}

// Thread worker.
function runWorker() {
  return new Promise((resolve, reject) => {
      const worker = new Worker(`
          const { parentPort } = require('worker_threads');
          const fetchData = async () => {
            parentPort.postMessage('Processed');
          };
          fetchData();
      `, { eval: true });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
          if (code !== 0) {
              reject(new Error(`Worker stopped with exit code ${code}`));
          }
      });
  });
}

// Function of thread.
async function main() {
  const executeWorker = async () => {
      if (!AlertOnAndOff) return;
      try {
          await AllFunctionOfThread();
          const result = await runWorker();
          console.log("Worker result:", result);
          console.log("Thread success.");
      } catch (error) {
          console.error('Error in executing worker:', error);
      } finally {
          setTimeout(executeWorker, Timer);
      }
  };

  executeWorker();
}

// Call main thread function.
main();

// Api of user login.
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found", status: 0 });
    }
    const isPasswordValid = await Auth.checkPassword(existingUser.HashPassword, password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password", status: 0 });
    }
    const token = Auth.GenerateToken(username);
    return res.status(200).json({ message: "Login successful", status: 1, token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message, status: -1 });
  }
});

// Api of create user.
app.post('/api/signup', async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists.", status: 0 });
    }
    const HashPassword = await Auth.CreateHashPassword(password);
    const newUser = new User({
      name,
      username,
      HashPassword: HashPassword
    });
    const newGeofence = new Geofence({
      username: username,
      polygonCoordinates: [],
      LocationHistory: [],
      members: [],
      alert: false,
      updatedtime: Date.now()
    });
    await Promise.all([
      newUser.save(),
      newGeofence.save()
    ]);
    return res.status(201).json({ message: "Signup successful", status: 1 });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: error.message, status: -1 });
  }
});

// POST handler for receiving set alert.
app.post('/api/setAlert', Auth.verifyToken, async (req, res) => {
  try {
    const { alert } = req.body;
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: 'Authorization token is missing or invalid.', status: 0 });
    }
    const username = req.username;
    if (!username || typeof username !== 'string') {
      return res.status(400).json({ message: 'Username is required and should be a string.', status: 0 });
    }
    if (typeof alert !== 'boolean') {
      return res.status(400).json({ message: 'Alert must be a boolean value.', status: 0 });
    }
    const existingUser = await Geofence.findOne({ username });
    if (existingUser) {
      await Geofence.findOneAndUpdate(
        { username },
        { alert: alert, updatedtime: Date.now() }
      );
      return res.status(200).json({ message: 'Alert updated successfully!', status: 1 });
    } else {
      const newGeofence = new Geofence({
        username: username,
        polygonCoordinates: [],
        LocationHistory: [],
        alert: alert,
        updatedtime: Date.now()
      });
      await newGeofence.save();
      return res.status(201).json({ message: 'Geofence created and alert set successfully!', status: 1 });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: error.message, status: -1 });
  }
});

// POST handler for receiving set member.
app.post('/api/setMember', Auth.verifyToken, async (req, res) => {
  try {
    const { members } = req.body;
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: 'Authorization token is missing or invalid.', status: 0 });
    }
    const username = req.username;
    if (!username || typeof username !== 'string') {
      return res.status(400).json({ message: 'Username is required and should be a string.', status: 0 });
    }
    if (!Array.isArray(members)) {
      return res.status(400).json({ message: 'Members must be an array.', status: 0 });
    }
    const existingUser = await Geofence.findOne({ username });
    if (existingUser) {
      await Geofence.findOneAndUpdate(
        { username },
        { members: members, updatedtime: Date.now() }
      );
      return res.status(200).json({ message: 'Members updated successfully!', status: 1 });
    } else {
      const newGeofence = new Geofence({
        username: username,
        polygonCoordinates: [],
        LocationHistory: [],
        members: members,
        alert: false,
        updatedtime: Date.now()
      });
      await newGeofence.save();
      return res.status(201).json({ message: 'Geofence created and members set successfully!', status: 1 });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: error.message, status: -1 });
  }
});

// POST handler for receiving polygon coordinates.
app.post('/api/setgeofencing', Auth.verifyToken, async (req, res) => {
  try {
    const { polygonCoordinates } = req.body;
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: 'Authorization token is missing or invalid.', status: 0 });
    }
    if (!Array.isArray(polygonCoordinates)) {
      return res.status(400).json({ message: 'Polygon coordinates must be an array.', status: 0 });
    }
    const username = req.username;
    if (!username || typeof username !== 'string') {
      return res.status(400).json({ message: 'Username is required and should be a string.', status: 0 });
    }
    const geofence = await Geofence.findOneAndUpdate(
      { username },
      {
        polygonCoordinates: polygonCoordinates,
        updatedtime: Date.now()
      },
      {
        new: true,
        upsert: true
      }
    );
    res.status(200).json({ message: 'Geofence updated or created successfully!', status: 1, geofence });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message, status: -1 });
  }
});

// GET handler for retrieving userData.
app.get('/api/getUserData', Auth.verifyToken, async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: 'Authorization token is missing or invalid.', status: 0 });
    }
    const username = req.username;
    if (!username || typeof username !== 'string') {
      return res.status(400).json({ message: 'Username is required and should be a string.', status: 0 });
    }
    const userData = await Geofence.findOne({ username });
    if (userData && Array.isArray(userData.polygonCoordinates)) {
      return res.status(200).json({
        message: 'User data retrieved successfully!',
        status: 1,
        polygonCoordinates: userData.polygonCoordinates,
        LocationHistory: userData.LocationHistory,
        alert: userData.alert,
        members: userData.members,
        lastUpdateTime: userData.updatedtime
      });
    } else {
      return res.status(404).json({
        message: 'User data not found for the specified username.',
        status: 0,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message,
      status: -1,
    });
  }
});

// POST handler for receiving location history.
app.post('/api/setLocationHistory', Auth.verifyToken, async (req, res) => {
  try {
    const { locationHistory } = req.body;
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: 'Authorization token is missing or invalid.', status: 0 });
    }
    if (!Array.isArray(locationHistory)) {
      return res.status(400).json({ message: 'Location history coordinates must be an array.', status: 0 });
    }
    const username = req.username;
    if (!username || typeof username !== 'string') {
      return res.status(400).json({ message: 'Username is required and should be a string.', status: 0 });
    }
    const geofence = await Geofence.findOneAndUpdate(
      { username },
      {
        LocationHistory: locationHistory,
        updatedTime: Date.now()
      },
      {
        new: true,
        upsert: true
      }
    );
    return res.status(200).json({ message: 'Location history updated or created successfully!', status: 1, geofence });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error: error.message, status: -1 });
  }
});

// GET handler for retrieving live location.
app.post('/api/livelocation', Auth.verifyToken, async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const usernameOfLiveLocation = req.body.usernameOfLiveLocation;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: 'Authorization token is missing or invalid.', status: 0 });
    }
    const username = req.username; 
    if (!username || !Array.isArray(usernameOfLiveLocation) || usernameOfLiveLocation.length === 0) {
      return res.status(400).json({ message: 'Username and usernameOfLiveLocation are required and usernameOfLiveLocation should be an array.', status: 0 });
    }
    const liveLocations = {};
    for (const user of usernameOfLiveLocation) {
      const liveLocationData = connections[user];
      if (user === username) {
        continue;
      }
      if (liveLocationData && liveLocationData.location) { 
        const coordinates = {
          latitude: liveLocationData.location.latitude, 
          longitude: liveLocationData.location.longitude  
        };
        liveLocations[user] = coordinates;
      }
    }
    if (Object.keys(liveLocations).length === 0) {
      return res.status(200).json({ message: 'No live locations found for the specified usernames.', status: 1 });
    }
    return res.status(200).json({ message: 'Live locations retrieved successfully!', data: liveLocations, status: 1 });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: error.message, status: -1 });
  }
});

// Start the server.
mongoose.connection.on('error', (error) => {
  console.error('Error connecting to database: ', error);
});

// Check database connection.
mongoose.connection.once('open', () => {
  console.log('Database connected.');
  server.listen(PORT, HOST, () => {
    console.log(`Server${websocketOnAndOff ? " and webSocket" : ""} is running on http://${HOST}:${PORT}`);
  });
});
