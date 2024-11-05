"use strict";

var mongoose = require('mongoose');
var geofenceSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  polygonCoordinates: {
    type: [[Number]],
    required: true
  },
  members: {
    type: [],
    required: true
  },
  LocationHistory: [{
    coordinates: {
      type: [Number],
      required: true
    },
    time: {
      type: Date,
      required: true
    }
  }],
  updatedtime: {
    type: Date,
    "default": Date.now
  },
  lastMailTime: {
    type: Date,
    "default": function _default() {
      var date = new Date();
      date.setDate(date.getDate() - 1);
      return date;
    }
  },
  alert: {
    type: Boolean,
    "default": true
  }
});
geofenceSchema.pre('save', function (next) {
  this.updatedtime = Date.now();
  next();
});
geofenceSchema.pre('findOneAndUpdate', function (next) {
  this._update.updatedtime = Date.now();
  next();
});
var Geofence = mongoose.model('Data', geofenceSchema);
module.exports = Geofence;