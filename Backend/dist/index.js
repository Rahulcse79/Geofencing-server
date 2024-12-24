"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require('express');
var cors = require('cors');
var User = require("./DB/Users/UserSchema");
var WebSocket = require('ws');
var mongoose = require('mongoose');
var Auth = require('./Auth');
var Geofence = require('./DB/Data/geofenceSchema');
require('./DB/Configuration');
var turf = require('@turf/turf');
var _require = require('worker_threads'),
  Worker = _require.Worker;
var nodemailer = require('nodemailer');
require('dotenv').config();
var app = express();
app.use(cors());
app.use(express.json());
var server = require('http').createServer(app);
var wss = new WebSocket.Server({
  server: server
});
var websocketOnAndOff = true;
var ThreadOnAndOff = true;
var Timer = 5000; // Thread run timer.

// Server configuration.
var HOST = process.env.HOST || 'localhost';
var PORT = process.env.PORT || 9901;

// Mail configuration.
var MailHost = process.env.MAIL_HOST || "mail.coraltele.com";
var MailPort = parseInt(process.env.MAIL_PORT, 10);
var MailSecure = process.env.MAIL_SECURE === 'true' ? true : false;
var MailUser = process.env.MAIL_USER || "mailgateway@coraltele.com";
var MailPassword = process.env.MAIL_PASSWORD || "%$#Maig#$&7634";
var MailSubject = process.env.MAIL_SUBJECT || "Geofencing emergency alert!.";
var MailText = process.env.MAIL_TEXT || "Hello,\n\nThe following members are outside the geofencing range: ";

// Run time globle data structure.
var connections = {};

// In-memory store for OTPs (for demonstration purposes only)
var otpStore = {};

// Function to delete otps.
var deleteOldOtps = function deleteOldOtps() {
  var currentTime = Date.now();
  var expirationTime = 5 * 60 * 1000;
  for (var email in otpStore) {
    if (otpStore.hasOwnProperty(email)) {
      var timestamp = otpStore[email].timestamp;
      if (currentTime - timestamp > expirationTime) {
        delete otpStore[email];
      }
    }
  }
};

// Websocket code.
wss.on('connection', function (ws, req) {
  if (!websocketOnAndOff) {
    ws.send(JSON.stringify({
      message: 'WebSocket is currently disabled.',
      status: 0
    }));
    ws.close();
    return;
  }
  var token = req.headers['sec-websocket-protocol'];
  if (!token) {
    ws.send(JSON.stringify({
      message: 'Authorization token is missing or invalid.',
      status: 0
    }));
    ws.close();
    return;
  }
  var mockReq = {
    headers: {
      authorization: "Bearer ".concat(token)
    }
  };
  var mockRes = {
    status: function status(code) {
      return {
        json: function json(data) {
          ws.send(JSON.stringify({
            message: data.message,
            status: 0
          }));
          ws.close();
        }
      };
    }
  };
  var mockNext = function mockNext() {
    var username = mockReq.username;
    connections[username] = {
      ws: ws,
      location: null
    };
    var userLength = Object.keys(connections).length;
    var usernames = Object.keys(connections);
    console.log("Total users connected: ".concat(userLength));
    console.log('Usernames:', usernames);
    ws.on('message', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
        var parsedMessage, LiveLocation;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              parsedMessage = JSON.parse(message);
              LiveLocation = parsedMessage.LiveLocation;
              if (!(_typeof(LiveLocation) !== 'object' || LiveLocation === null || typeof LiveLocation.latitude !== 'number' || typeof LiveLocation.longitude !== 'number')) {
                _context.next = 6;
                break;
              }
              ws.send(JSON.stringify({
                message: 'Live location must be an object with latitude and longitude as numbers.',
                status: 0
              }));
              return _context.abrupt("return");
            case 6:
              connections[username].location = LiveLocation;
              console.log('Received LiveLocation:', username, ":", LiveLocation);
              ws.send(JSON.stringify({
                message: 'Live location updated or created successfully!',
                status: 1
              }));
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              ws.send(JSON.stringify({
                message: 'Internal server error',
                error: _context.t0.message,
                status: -1
              }));
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 11]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    ws.on('close', function () {
      console.log("".concat(username, " disconnected from the WebSocket"));
      delete connections[username];
      var userLength = Object.keys(connections).length;
      var usernames = Object.keys(connections);
      console.log("Total users connected: ".concat(userLength));
      console.log('Usernames:', usernames);
    });
  };
  Auth.verifyToken(mockReq, mockRes, mockNext);
});

// Check device outside the polygon range.
var checkDeviceOutsidePolygon = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(polygonCoordinates, members) {
    var outsideDevices, polygon, _iterator, _step, member, user, _user$location, latitude, longitude, point;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          outsideDevices = [];
          if (!(polygonCoordinates.length === 0)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", outsideDevices);
        case 3:
          if (polygonCoordinates.length > 0 && (polygonCoordinates[0][0] !== polygonCoordinates[polygonCoordinates.length - 1][0] || polygonCoordinates[0][1] !== polygonCoordinates[polygonCoordinates.length - 1][1])) {
            polygonCoordinates.push(polygonCoordinates[0]);
          }
          polygon = turf.polygon([polygonCoordinates.map(function (coord) {
            return [coord[1], coord[0]];
          })]);
          _iterator = _createForOfIteratorHelper(members);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              member = _step.value;
              user = connections[member];
              if (user && user.location) {
                _user$location = user.location, latitude = _user$location.latitude, longitude = _user$location.longitude;
                point = turf.point([longitude, latitude]);
                if (!turf.booleanPointInPolygon(point, polygon)) {
                  outsideDevices.push(member);
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return _context2.abrupt("return", outsideDevices);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function checkDeviceOutsidePolygon(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

// Function of sending mail to multiple user.
var Sendmail = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(username, memberList) {
    var transporter, mailotpions;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          transporter = nodemailer.createTransport({
            host: MailHost,
            port: MailPort,
            secure: MailSecure,
            auth: {
              user: MailUser,
              pass: MailPassword
            }
          });
          mailotpions = {
            from: MailUser,
            to: username,
            subject: MailSubject,
            text: "".concat(MailText, " ").concat(memberList.join(", "), ".\n\nBest regards,\nRahul singh")
          };
          _context3.prev = 2;
          _context3.next = 5;
          return transporter.sendMail(mailotpions);
        case 5:
          console.log("Email sent successfully to: ".concat(username));
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](2);
          console.error("Error sending email: ".concat(_context3.t0));
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 8]]);
  }));
  return function Sendmail(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

// Function of check mail to send every 4 hourse logic.
var CheckMailTime = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(lastMailTime) {
    var lastTime, currentTime, timeDifferenceInHours;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          console.log(lastMailTime);
          lastTime = new Date(lastMailTime);
          currentTime = new Date();
          timeDifferenceInHours = (currentTime - lastTime) / (1000 * 60 * 60);
          if (!(timeDifferenceInHours > 4)) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", true);
        case 6:
          return _context4.abrupt("return", false);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function CheckMailTime(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

// Function to check all devices.
var CheckAllDevices = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var devices;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Geofence.find();
        case 3:
          devices = _context6.sent;
          devices.forEach(/*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(device) {
              var outsideDevices, OneMailOnly;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!device.alert) {
                      _context5.next = 14;
                      break;
                    }
                    _context5.next = 3;
                    return checkDeviceOutsidePolygon(device.polygonCoordinates, device.members);
                  case 3:
                    outsideDevices = _context5.sent;
                    _context5.next = 6;
                    return CheckMailTime(device.lastMailTime);
                  case 6:
                    OneMailOnly = _context5.sent;
                    console.log(OneMailOnly);
                    if (!(OneMailOnly && outsideDevices.length > 0)) {
                      _context5.next = 14;
                      break;
                    }
                    _context5.next = 11;
                    return Sendmail(device.username, outsideDevices);
                  case 11:
                    device.lastMailTime = new Date();
                    _context5.next = 14;
                    return device.save();
                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x7) {
              return _ref6.apply(this, arguments);
            };
          }());
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.error("Database fetch error.");
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function CheckAllDevices() {
    return _ref5.apply(this, arguments);
  };
}();

// Thread.
function AllFunctionOfThread() {
  return _AllFunctionOfThread.apply(this, arguments);
} // Thread worker.
function _AllFunctionOfThread() {
  _AllFunctionOfThread = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          if (!websocketOnAndOff) {
            _context21.next = 3;
            break;
          }
          _context21.next = 3;
          return CheckAllDevices();
        case 3:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return _AllFunctionOfThread.apply(this, arguments);
}
function runWorker() {
  return new Promise(function (resolve, reject) {
    var worker = new Worker("\n          const { parentPort } = require('worker_threads');\n          const fetchData = async () => {\n            parentPort.postMessage('Processed');\n          };\n          fetchData();\n      ", {
      eval: true
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', function (code) {
      if (code !== 0) {
        reject(new Error("Worker stopped with exit code ".concat(code)));
      }
    });
  });
}

// Function of thread.
function main() {
  return _main.apply(this, arguments);
} // Call main thread function.
function _main() {
  _main = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
    var _executeWorker;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _executeWorker = /*#__PURE__*/function () {
            var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              var result;
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    if (ThreadOnAndOff) {
                      _context22.next = 2;
                      break;
                    }
                    return _context22.abrupt("return");
                  case 2:
                    _context22.prev = 2;
                    _context22.next = 5;
                    return AllFunctionOfThread();
                  case 5:
                    deleteOldOtps();
                    _context22.next = 8;
                    return runWorker();
                  case 8:
                    result = _context22.sent;
                    console.log("Worker result:", result);
                    console.log("Thread success.");
                    _context22.next = 16;
                    break;
                  case 13:
                    _context22.prev = 13;
                    _context22.t0 = _context22["catch"](2);
                    console.error('Error in executing worker:', _context22.t0);
                  case 16:
                    _context22.prev = 16;
                    setTimeout(_executeWorker, Timer);
                    return _context22.finish(16);
                  case 19:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22, null, [[2, 13, 16, 19]]);
            }));
            return function executeWorker() {
              return _ref21.apply(this, arguments);
            };
          }();
          _executeWorker();
        case 2:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return _main.apply(this, arguments);
}
main();

// Function to send mail.
var SendmailTootp = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(username, MailSubject, MailText) {
    var transporter, mailotpions;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          transporter = nodemailer.createTransport({
            host: MailHost,
            port: MailPort,
            secure: MailSecure,
            auth: {
              user: MailUser,
              pass: MailPassword
            }
          });
          mailotpions = {
            from: MailUser,
            to: username,
            subject: MailSubject,
            text: MailText
          };
          _context7.prev = 2;
          _context7.next = 5;
          return transporter.sendMail(mailotpions);
        case 5:
          return _context7.abrupt("return", true);
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](2);
          return _context7.abrupt("return", false);
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 8]]);
  }));
  return function SendmailTootp(_x8, _x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}();

// Generates a random number between 100000 and 999999
var generateRandomOTP = function generateRandomOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Api of user login.
app.post('/api/login', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body, username, password, existingUser, isPasswordValid, token;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context8.next = 4;
          return User.findOne({
            username: username
          });
        case 4:
          existingUser = _context8.sent;
          if (existingUser) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "User not found",
            status: 0
          }));
        case 7:
          _context8.next = 9;
          return Auth.checkPassword(existingUser.HashPassword, password);
        case 9:
          isPasswordValid = _context8.sent;
          if (isPasswordValid) {
            _context8.next = 12;
            break;
          }
          return _context8.abrupt("return", res.status(401).json({
            message: "Incorrect password",
            status: 0
          }));
        case 12:
          token = Auth.GenerateToken(username);
          return _context8.abrupt("return", res.status(200).json({
            message: "Login successful",
            status: 1,
            token: token
          }));
        case 16:
          _context8.prev = 16;
          _context8.t0 = _context8["catch"](0);
          res.status(500).json({
            message: 'Internal server error',
            error: _context8.t0.message,
            status: -1
          });
        case 19:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 16]]);
  }));
  return function (_x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}());

// Api of create user.
app.post('/api/signup', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body2, name, username, password, otp, otpData, existingUser, HashPassword, newUser, newGeofence;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$body2 = req.body, name = _req$body2.name, username = _req$body2.username, password = _req$body2.password, otp = _req$body2.otp;
          if (!(!name || name.trim() === '')) {
            _context9.next = 4;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid name'
          }));
        case 4:
          if (!(!username || username.trim() === '')) {
            _context9.next = 6;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid username'
          }));
        case 6:
          if (!(!password || password.trim() === '')) {
            _context9.next = 8;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid password'
          }));
        case 8:
          if (!(!otp || otp.trim() === '')) {
            _context9.next = 10;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid OTP'
          }));
        case 10:
          otpData = otpStore[username];
          if (!(!otpData || otpData.otp !== otp || Date.now() - otpData.timestamp > 5 * 60 * 1000)) {
            _context9.next = 13;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid or expired OTP'
          }));
        case 13:
          delete otpStore[username];
          _context9.next = 16;
          return User.findOne({
            username: username
          });
        case 16:
          existingUser = _context9.sent;
          if (!existingUser) {
            _context9.next = 19;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            message: "User already exists.",
            status: 0
          }));
        case 19:
          _context9.next = 21;
          return Auth.CreateHashPassword(password);
        case 21:
          HashPassword = _context9.sent;
          newUser = new User({
            name: name,
            username: username,
            HashPassword: HashPassword
          });
          newGeofence = new Geofence({
            username: username,
            polygonCoordinates: [],
            LocationHistory: [],
            members: [],
            alert: false,
            updatedtime: Date.now()
          });
          _context9.next = 26;
          return Promise.all([newUser.save(), newGeofence.save()]);
        case 26:
          return _context9.abrupt("return", res.status(201).json({
            message: "Signup successful",
            status: 1
          }));
        case 29:
          _context9.prev = 29;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", res.status(500).json({
            message: 'Internal server error',
            error: _context9.t0.message,
            status: -1
          }));
        case 32:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 29]]);
  }));
  return function (_x13, _x14) {
    return _ref9.apply(this, arguments);
  };
}());

// POST handler for receiving set alert.
app.post('/api/setAlert', Auth.verifyToken, /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var alert, authHeader, username, existingUser, newGeofence;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          alert = req.body.alert;
          authHeader = req.headers.authorization;
          if (!(!authHeader || !authHeader.startsWith("Bearer "))) {
            _context10.next = 5;
            break;
          }
          return _context10.abrupt("return", res.status(401).json({
            message: 'Authorization token is missing or invalid.',
            status: 0
          }));
        case 5:
          username = req.username;
          if (!(!username || typeof username !== 'string')) {
            _context10.next = 8;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            message: 'Username is required and should be a string.',
            status: 0
          }));
        case 8:
          if (!(typeof alert !== 'boolean')) {
            _context10.next = 10;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            message: 'Alert must be a boolean value.',
            status: 0
          }));
        case 10:
          _context10.next = 12;
          return Geofence.findOne({
            username: username
          });
        case 12:
          existingUser = _context10.sent;
          if (!existingUser) {
            _context10.next = 19;
            break;
          }
          _context10.next = 16;
          return Geofence.findOneAndUpdate({
            username: username
          }, {
            alert: alert,
            updatedtime: Date.now()
          });
        case 16:
          return _context10.abrupt("return", res.status(200).json({
            message: 'Alert updated successfully!',
            status: 1
          }));
        case 19:
          newGeofence = new Geofence({
            username: username,
            polygonCoordinates: [],
            LocationHistory: [],
            alert: alert,
            updatedtime: Date.now()
          });
          _context10.next = 22;
          return newGeofence.save();
        case 22:
          return _context10.abrupt("return", res.status(201).json({
            message: 'Geofence created and alert set successfully!',
            status: 1
          }));
        case 23:
          _context10.next = 28;
          break;
        case 25:
          _context10.prev = 25;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", res.status(500).json({
            message: 'Internal server error',
            error: _context10.t0.message,
            status: -1
          }));
        case 28:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 25]]);
  }));
  return function (_x15, _x16) {
    return _ref10.apply(this, arguments);
  };
}());

// POST handler for receiving set member.
app.post('/api/setMember', Auth.verifyToken, /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var members, authHeader, username, existingUser, newGeofence;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          members = req.body.members;
          authHeader = req.headers.authorization;
          if (!(!authHeader || !authHeader.startsWith("Bearer "))) {
            _context11.next = 5;
            break;
          }
          return _context11.abrupt("return", res.status(401).json({
            message: 'Authorization token is missing or invalid.',
            status: 0
          }));
        case 5:
          username = req.username;
          if (!(!username || typeof username !== 'string')) {
            _context11.next = 8;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: 'Username is required and should be a string.',
            status: 0
          }));
        case 8:
          if (Array.isArray(members)) {
            _context11.next = 10;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: 'Members must be an array.',
            status: 0
          }));
        case 10:
          _context11.next = 12;
          return Geofence.findOne({
            username: username
          });
        case 12:
          existingUser = _context11.sent;
          if (!existingUser) {
            _context11.next = 19;
            break;
          }
          _context11.next = 16;
          return Geofence.findOneAndUpdate({
            username: username
          }, {
            members: members,
            updatedtime: Date.now()
          });
        case 16:
          return _context11.abrupt("return", res.status(200).json({
            message: 'Members updated successfully!',
            status: 1
          }));
        case 19:
          newGeofence = new Geofence({
            username: username,
            polygonCoordinates: [],
            LocationHistory: [],
            members: members,
            alert: false,
            updatedtime: Date.now()
          });
          _context11.next = 22;
          return newGeofence.save();
        case 22:
          return _context11.abrupt("return", res.status(201).json({
            message: 'Geofence created and members set successfully!',
            status: 1
          }));
        case 23:
          _context11.next = 28;
          break;
        case 25:
          _context11.prev = 25;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", res.status(500).json({
            message: 'Internal server error',
            error: _context11.t0.message,
            status: -1
          }));
        case 28:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 25]]);
  }));
  return function (_x17, _x18) {
    return _ref11.apply(this, arguments);
  };
}());

// POST handler for receiving polygon coordinates.
app.post('/api/setgeofencing', Auth.verifyToken, /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var polygonCoordinates, authHeader, username, geofence;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          polygonCoordinates = req.body.polygonCoordinates;
          authHeader = req.headers.authorization;
          if (!(!authHeader || !authHeader.startsWith("Bearer "))) {
            _context12.next = 5;
            break;
          }
          return _context12.abrupt("return", res.status(401).json({
            message: 'Authorization token is missing or invalid.',
            status: 0
          }));
        case 5:
          if (Array.isArray(polygonCoordinates)) {
            _context12.next = 7;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: 'Polygon coordinates must be an array.',
            status: 0
          }));
        case 7:
          username = req.username;
          if (!(!username || typeof username !== 'string')) {
            _context12.next = 10;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: 'Username is required and should be a string.',
            status: 0
          }));
        case 10:
          _context12.next = 12;
          return Geofence.findOneAndUpdate({
            username: username
          }, {
            polygonCoordinates: polygonCoordinates,
            updatedtime: Date.now()
          }, {
            "new": true,
            upsert: true
          });
        case 12:
          geofence = _context12.sent;
          res.status(200).json({
            message: 'Geofence updated or created successfully!',
            status: 1,
            geofence: geofence
          });
          _context12.next = 20;
          break;
        case 16:
          _context12.prev = 16;
          _context12.t0 = _context12["catch"](0);
          console.error(_context12.t0);
          res.status(500).json({
            message: 'Internal server error',
            error: _context12.t0.message,
            status: -1
          });
        case 20:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 16]]);
  }));
  return function (_x19, _x20) {
    return _ref12.apply(this, arguments);
  };
}());

// GET handler for retrieving userData.
app.get('/api/getUserData', Auth.verifyToken, /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var authHeader, username, userData;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          authHeader = req.headers.authorization;
          if (!(!authHeader || !authHeader.startsWith("Bearer "))) {
            _context13.next = 4;
            break;
          }
          return _context13.abrupt("return", res.status(401).json({
            message: 'Authorization token is missing or invalid.',
            status: 0
          }));
        case 4:
          username = req.username;
          if (!(!username || typeof username !== 'string')) {
            _context13.next = 7;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: 'Username is required and should be a string.',
            status: 0
          }));
        case 7:
          _context13.next = 9;
          return Geofence.findOne({
            username: username
          });
        case 9:
          userData = _context13.sent;
          if (!(userData && Array.isArray(userData.polygonCoordinates))) {
            _context13.next = 14;
            break;
          }
          return _context13.abrupt("return", res.status(200).json({
            message: 'User data retrieved successfully!',
            status: 1,
            polygonCoordinates: userData.polygonCoordinates,
            LocationHistory: userData.LocationHistory,
            alert: userData.alert,
            members: userData.members,
            lastUpdateTime: userData.updatedtime
          }));
        case 14:
          return _context13.abrupt("return", res.status(404).json({
            message: 'User data not found for the specified username.',
            status: 0
          }));
        case 15:
          _context13.next = 20;
          break;
        case 17:
          _context13.prev = 17;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", res.status(500).json({
            message: 'Internal server error',
            error: _context13.t0.message,
            status: -1
          }));
        case 20:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 17]]);
  }));
  return function (_x21, _x22) {
    return _ref13.apply(this, arguments);
  };
}());

// GET handler for retrieving member location history.
app.get('/api/member/location-history', Auth.verifyToken, /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var authHeader, MemberUserName, username, userData, MemberUserData;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          authHeader = req.headers.authorization;
          MemberUserName = req.headers.memberusername;
          if (!(!authHeader || !authHeader.startsWith("Bearer "))) {
            _context14.next = 5;
            break;
          }
          return _context14.abrupt("return", res.status(401).json({
            message: 'Authorization token is missing or invalid.',
            status: 0
          }));
        case 5:
          if (!(!MemberUserName || typeof MemberUserName !== 'string' || MemberUserName === null)) {
            _context14.next = 7;
            break;
          }
          return _context14.abrupt("return", res.status(400).json({
            message: 'MemberUserName is required and should be a string.',
            status: 0
          }));
        case 7:
          username = req.username;
          if (!(!username || typeof username !== 'string')) {
            _context14.next = 10;
            break;
          }
          return _context14.abrupt("return", res.status(400).json({
            message: 'Username is required and should be a string.',
            status: 0
          }));
        case 10:
          _context14.next = 12;
          return Geofence.findOne({
            username: username
          });
        case 12:
          userData = _context14.sent;
          _context14.next = 15;
          return Geofence.findOne({
            username: MemberUserName
          });
        case 15:
          MemberUserData = _context14.sent;
          if (!(userData && MemberUserData && Array.isArray(userData.members) && userData.members.includes(MemberUserName))) {
            _context14.next = 20;
            break;
          }
          return _context14.abrupt("return", res.status(200).json({
            message: 'User data retrieved successfully!',
            status: 1,
            LocationHistory: MemberUserData.LocationHistory
          }));
        case 20:
          return _context14.abrupt("return", res.status(404).json({
            message: 'Member location history data not found for the specified username.',
            status: 0
          }));
        case 21:
          _context14.next = 26;
          break;
        case 23:
          _context14.prev = 23;
          _context14.t0 = _context14["catch"](0);
          return _context14.abrupt("return", res.status(500).json({
            message: 'Internal server error',
            error: _context14.t0.message,
            status: -1
          }));
        case 26:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 23]]);
  }));
  return function (_x23, _x24) {
    return _ref14.apply(this, arguments);
  };
}());

// POST handler for receiving location history.
app.post('/api/setLocationHistory', Auth.verifyToken, /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var locationHistory, authHeader, username, geofence;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          locationHistory = req.body.locationHistory;
          authHeader = req.headers.authorization;
          if (!(!authHeader || !authHeader.startsWith("Bearer "))) {
            _context15.next = 5;
            break;
          }
          return _context15.abrupt("return", res.status(401).json({
            message: 'Authorization token is missing or invalid.',
            status: 0
          }));
        case 5:
          if (Array.isArray(locationHistory)) {
            _context15.next = 7;
            break;
          }
          return _context15.abrupt("return", res.status(400).json({
            message: 'Location history coordinates must be an array.',
            status: 0
          }));
        case 7:
          username = req.username;
          if (!(!username || typeof username !== 'string')) {
            _context15.next = 10;
            break;
          }
          return _context15.abrupt("return", res.status(400).json({
            message: 'Username is required and should be a string.',
            status: 0
          }));
        case 10:
          _context15.next = 12;
          return Geofence.findOneAndUpdate({
            username: username
          }, {
            LocationHistory: locationHistory,
            updatedTime: Date.now()
          }, {
            "new": true,
            upsert: true
          });
        case 12:
          geofence = _context15.sent;
          return _context15.abrupt("return", res.status(200).json({
            message: 'Location history updated or created successfully!',
            status: 1,
            geofence: geofence
          }));
        case 16:
          _context15.prev = 16;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          return _context15.abrupt("return", res.status(500).json({
            message: 'Internal server error',
            error: _context15.t0.message,
            status: -1
          }));
        case 20:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 16]]);
  }));
  return function (_x25, _x26) {
    return _ref15.apply(this, arguments);
  };
}());

// POST handler for retrieving live location.
app.post('/api/livelocation', Auth.verifyToken, /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var authHeader, usernameOfLiveLocation, username, liveLocations, _iterator2, _step2, user, liveLocationData, coordinates;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          authHeader = req.headers.authorization;
          usernameOfLiveLocation = req.body.usernameOfLiveLocation;
          if (!(!authHeader || !authHeader.startsWith("Bearer "))) {
            _context16.next = 5;
            break;
          }
          return _context16.abrupt("return", res.status(401).json({
            message: 'Authorization token is missing or invalid.',
            status: 0
          }));
        case 5:
          username = req.username;
          if (!(!username || !Array.isArray(usernameOfLiveLocation) || usernameOfLiveLocation.length === 0)) {
            _context16.next = 8;
            break;
          }
          return _context16.abrupt("return", res.status(400).json({
            message: 'Username and usernameOfLiveLocation are required and usernameOfLiveLocation should be an array.',
            status: 0
          }));
        case 8:
          liveLocations = {};
          _iterator2 = _createForOfIteratorHelper(usernameOfLiveLocation);
          _context16.prev = 10;
          _iterator2.s();
        case 12:
          if ((_step2 = _iterator2.n()).done) {
            _context16.next = 20;
            break;
          }
          user = _step2.value;
          liveLocationData = connections[user];
          if (!(user === username)) {
            _context16.next = 17;
            break;
          }
          return _context16.abrupt("continue", 18);
        case 17:
          if (liveLocationData && liveLocationData.location) {
            coordinates = {
              latitude: liveLocationData.location.latitude,
              longitude: liveLocationData.location.longitude
            };
            liveLocations[user] = coordinates;
          }
        case 18:
          _context16.next = 12;
          break;
        case 20:
          _context16.next = 25;
          break;
        case 22:
          _context16.prev = 22;
          _context16.t0 = _context16["catch"](10);
          _iterator2.e(_context16.t0);
        case 25:
          _context16.prev = 25;
          _iterator2.f();
          return _context16.finish(25);
        case 28:
          if (!(Object.keys(liveLocations).length === 0)) {
            _context16.next = 30;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            message: 'No live locations found for the specified usernames.',
            status: 1
          }));
        case 30:
          return _context16.abrupt("return", res.status(200).json({
            message: 'Live locations retrieved successfully!',
            data: liveLocations,
            status: 1
          }));
        case 33:
          _context16.prev = 33;
          _context16.t1 = _context16["catch"](0);
          return _context16.abrupt("return", res.status(500).json({
            message: 'Internal server error',
            error: _context16.t1.message,
            status: -1
          }));
        case 36:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 33], [10, 22, 25, 28]]);
  }));
  return function (_x27, _x28) {
    return _ref16.apply(this, arguments);
  };
}());

// POST handler for sending OTP to username.
app.post('/api/send-otp', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var _req$body3, username, callName, existingUser, otp, _MailSubject, _MailText, result;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _req$body3 = req.body, username = _req$body3.username, callName = _req$body3.callName;
          if (!(!username || username.trim() === '')) {
            _context17.next = 4;
            break;
          }
          return _context17.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid username'
          }));
        case 4:
          if (!(!callName || callName.trim() === '')) {
            _context17.next = 6;
            break;
          }
          return _context17.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid callName'
          }));
        case 6:
          if (!(callName === "1")) {
            _context17.next = 12;
            break;
          }
          _context17.next = 9;
          return User.findOne({
            username: username
          });
        case 9:
          existingUser = _context17.sent;
          if (existingUser) {
            _context17.next = 12;
            break;
          }
          return _context17.abrupt("return", res.status(404).json({
            message: "User not found",
            status: 0
          }));
        case 12:
          otp = generateRandomOTP();
          _MailSubject = "Your Geofencing OTP Code";
          _MailText = "\n    Dear User,\n    \n    Thank you for using our geofencing services. To secure your account and verify your identity,\n    we have generated a One-Time Password (OTP) for you.\n\n    Your OTP code is: ".concat(otp, "\n\n    Please enter this code in the application to complete your verification process.\n    This OTP is valid for only 5 minutes and should not be shared with anyone.\n    If you did not request this OTP, please disregard this message.\n\n    Thank you for your attention.\n\n    Best regards,\n    The Geofencing Team\n    ");
          _context17.next = 17;
          return SendmailTootp(username, _MailSubject, _MailText);
        case 17:
          result = _context17.sent;
          if (!result) {
            _context17.next = 23;
            break;
          }
          otpStore[username] = {
            otp: otp,
            timestamp: Date.now()
          };
          return _context17.abrupt("return", res.status(200).json({
            message: 'OTP sent successfully!',
            status: 1
          }));
        case 23:
          return _context17.abrupt("return", res.status(500).json({
            message: 'Failed to send OTP',
            status: 0
          }));
        case 24:
          _context17.next = 29;
          break;
        case 26:
          _context17.prev = 26;
          _context17.t0 = _context17["catch"](0);
          return _context17.abrupt("return", res.status(500).json({
            message: 'Internal server error',
            error: _context17.t0.message,
            status: -1
          }));
        case 29:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 26]]);
  }));
  return function (_x29, _x30) {
    return _ref17.apply(this, arguments);
  };
}());

// POST handler for resetting password.
app.post('/api/reset-password', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var _req$body4, username, password, otp, existingUser, otpData;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _req$body4 = req.body, username = _req$body4.username, password = _req$body4.password, otp = _req$body4.otp;
          if (!(!username || username.trim() === '')) {
            _context18.next = 4;
            break;
          }
          return _context18.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid username'
          }));
        case 4:
          if (!(!password || password.trim() === '')) {
            _context18.next = 6;
            break;
          }
          return _context18.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid password'
          }));
        case 6:
          if (!(!otp || otp.trim() === '')) {
            _context18.next = 8;
            break;
          }
          return _context18.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid OTP'
          }));
        case 8:
          _context18.next = 10;
          return User.findOne({
            username: username
          });
        case 10:
          existingUser = _context18.sent;
          if (existingUser) {
            _context18.next = 13;
            break;
          }
          return _context18.abrupt("return", res.status(404).json({
            status: 0,
            message: 'User not found'
          }));
        case 13:
          otpData = otpStore[username];
          if (!(!otpData || otpData.otp !== otp || Date.now() - otpData.timestamp > 5 * 60 * 1000)) {
            _context18.next = 16;
            break;
          }
          return _context18.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid or expired OTP'
          }));
        case 16:
          _context18.next = 18;
          return Auth.CreateHashPassword(password);
        case 18:
          existingUser.HashPassword = _context18.sent;
          _context18.next = 21;
          return existingUser.save();
        case 21:
          delete otpStore[username];
          return _context18.abrupt("return", res.status(200).json({
            status: 1,
            message: 'Password reset successfully!'
          }));
        case 25:
          _context18.prev = 25;
          _context18.t0 = _context18["catch"](0);
          console.error(_context18.t0);
          return _context18.abrupt("return", res.status(500).json({
            status: -1,
            message: 'Internal server error',
            error: _context18.t0.message
          }));
        case 29:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 25]]);
  }));
  return function (_x31, _x32) {
    return _ref18.apply(this, arguments);
  };
}());

// POST handler for changing password.
app.post('/api/change-password', /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var _req$body5, username, newPassword, oldPassword, existingUser, isPasswordValid;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _req$body5 = req.body, username = _req$body5.username, newPassword = _req$body5.newPassword, oldPassword = _req$body5.oldPassword;
          if (!(!username || username.trim() === '')) {
            _context19.next = 4;
            break;
          }
          return _context19.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid username'
          }));
        case 4:
          if (!(!newPassword || newPassword.trim() === '')) {
            _context19.next = 6;
            break;
          }
          return _context19.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid new password'
          }));
        case 6:
          if (!(!oldPassword || oldPassword.trim() === '')) {
            _context19.next = 8;
            break;
          }
          return _context19.abrupt("return", res.status(400).json({
            status: 0,
            message: 'Invalid old password'
          }));
        case 8:
          _context19.next = 10;
          return User.findOne({
            username: username
          });
        case 10:
          existingUser = _context19.sent;
          if (existingUser) {
            _context19.next = 13;
            break;
          }
          return _context19.abrupt("return", res.status(404).json({
            status: 0,
            message: 'User not found'
          }));
        case 13:
          _context19.next = 15;
          return Auth.checkPassword(existingUser.HashPassword, oldPassword);
        case 15:
          isPasswordValid = _context19.sent;
          if (isPasswordValid) {
            _context19.next = 18;
            break;
          }
          return _context19.abrupt("return", res.status(401).json({
            message: "Incorrect old password",
            status: 0
          }));
        case 18:
          _context19.next = 20;
          return Auth.CreateHashPassword(newPassword);
        case 20:
          existingUser.HashPassword = _context19.sent;
          _context19.next = 23;
          return existingUser.save();
        case 23:
          return _context19.abrupt("return", res.status(200).json({
            status: 1,
            message: 'Password change successfully!'
          }));
        case 26:
          _context19.prev = 26;
          _context19.t0 = _context19["catch"](0);
          console.error(_context19.t0);
          return _context19.abrupt("return", res.status(500).json({
            status: -1,
            message: 'Internal server error',
            error: _context19.t0.message
          }));
        case 30:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 26]]);
  }));
  return function (_x33, _x34) {
    return _ref19.apply(this, arguments);
  };
}());

// POST handler for set app coordinates.
app.post('/api/setAppCoordinates', Auth.verifyToken, /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var _existingUser$Locatio, authHeader, location, username, locationData, existingUser;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          authHeader = req.headers.authorization;
          location = req.body.location;
          if (!(!authHeader || !location)) {
            _context20.next = 5;
            break;
          }
          return _context20.abrupt("return", res.status(400).json({
            error: 'Missing required fields'
          }));
        case 5:
          if (authHeader.startsWith("Bearer ")) {
            _context20.next = 7;
            break;
          }
          return _context20.abrupt("return", res.status(401).json({
            message: 'Authorization token is missing or invalid.',
            status: 0
          }));
        case 7:
          username = req.username;
          if (username) {
            _context20.next = 10;
            break;
          }
          return _context20.abrupt("return", res.status(400).json({
            message: 'Username is required.',
            status: 0
          }));
        case 10:
          locationData = location.map(function (data) {
            return {
              coordinates: [data.latitude, data.longitude],
              time: new Date(data.epochDate * 1000)
            };
          });
          _context20.next = 13;
          return Geofence.findOne({
            username: username
          });
        case 13:
          existingUser = _context20.sent;
          if (existingUser) {
            _context20.next = 16;
            break;
          }
          return _context20.abrupt("return", res.status(404).json({
            message: 'User not found',
            status: 0
          }));
        case 16:
          console.log("calling", username);
          (_existingUser$Locatio = existingUser.LocationHistory).push.apply(_existingUser$Locatio, _toConsumableArray(locationData));
          _context20.next = 20;
          return existingUser.save();
        case 20:
          res.status(200).json({
            message: 'Location data received and updated successfully',
            status: 1
          });
          _context20.next = 26;
          break;
        case 23:
          _context20.prev = 23;
          _context20.t0 = _context20["catch"](0);
          res.status(500).json({
            message: 'Server error',
            status: -1
          });
        case 26:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 23]]);
  }));
  return function (_x35, _x36) {
    return _ref20.apply(this, arguments);
  };
}());

// Start the server.
mongoose.connection.on('error', function (error) {
  console.error('Error connecting to database: ', error);
});

// Check database connection.
mongoose.connection.once('open', function () {
  console.log('Database connected.');
  server.listen(PORT, HOST, function () {
    console.log("Server".concat(websocketOnAndOff ? " and webSocket" : "", " is running on http://").concat(HOST, ":").concat(PORT));
  });
});