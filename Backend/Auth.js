const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secretKey = "geofencing";

// Function to compare plain-text password with hashed password
const checkPassword = async (HashPassword, password) => {
    try {
        const isMatch = await bcrypt.compare(password, HashPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Password check failed');
    }
};

// Function to generate a token using JWT
const GenerateToken = (username) => {
    try {
      const token = jwt.sign({ username: username }, secretKey, { expiresIn: '12h' });
      return token;
    } catch (error) {
      throw new Error('Error generating the token');
    }
};

// Function to create a hash of the password
const CreateHashPassword = async (password) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (error) {
      throw new Error('Error hashing the password');
    }
};

// Function to verify token.
const verifyToken = (req, res, next) => {
  let token = req.headers['authorization'];
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7);
  } else if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.', status: 0 });
  }
  try {
    const decoded = jwt.verify(token, secretKey); 
    req.username = decoded.username;
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.', status: 0 });
  }
};

// Export functions to be used in other modules
module.exports = {
    checkPassword,
    GenerateToken,
    CreateHashPassword,
    verifyToken
};



