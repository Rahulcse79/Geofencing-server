"use strict";

var mongoose = require("mongoose");

// Mongoose schema
var SchemaSET = new mongoose.Schema({
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
var Database = mongoose.model("users", SchemaSET);
module.exports = Database;