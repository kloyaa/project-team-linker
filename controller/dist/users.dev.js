"use strict";

var express = require('express');

var router = express.Router();

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var config = require('config');

var _require = require('express-validator'),
    validationResult = _require.validationResult;

var _require2 = require('../helpers/errors/index'),
    checkRegistration = _require2.checkRegistration;

var getAvatar = require('../helpers/methods/avatar');

var User = require('../models/User'); //@ROUTE        * api/users
//@DESCRIPTION  * Register a user
//@ACCESS       * Public


router.post('/', checkRegistration, function _callee(req, res) {
  var errors, _req$body, name, email, password, user, avatar, salt, payload;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));

        case 4:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password; // check if user exists

          _context.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 7:
          user = _context.sent;

          if (!user) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(406).send("Email already exist, Try signing in."));

        case 10:
          avatar = getAvatar(email);
          user = new User({
            name: name,
            email: email,
            avatar: avatar,
            password: password
          }); // Encrypt password

          _context.next = 14;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 14:
          salt = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(bcrypt.hash(password, salt));

        case 17:
          user.password = _context.sent;
          _context.next = 20;
          return regeneratorRuntime.awrap(user.save());

        case 20:
          payload = {
            user: {
              id: user.id
            }
          };
          jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 360000
          }, function (err, token) {
            if (err) {
              return res.status(400).json({
                msg: "Something went wrong"
              });
            }

            return res.status(200).json({
              token: token
            });
          });
          _context.next = 28;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);
          res.status(500).send("Something went wrong.");

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 24]]);
});
module.exports = router;