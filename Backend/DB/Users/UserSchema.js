const mongoose = require("mongoose");

// Mongoose schema
const SchemaSET = new mongoose.Schema({
  
  name: {
  type: String,
  required: false
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  HashPassword: {
    type: String,
    required: true
  }
});

const Database = mongoose.model("users",SchemaSET);

module.exports = Database;