const mongoose = require("mongoose");
require('dotenv').config();
const dburl = process.env.DBURL || "mongodb://127.0.0.1:27017/geofencing";
mongoose.connect(dburl);