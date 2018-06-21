"use strict";
exports.__esModule = true;
var express = require("express");
var user_1 = require("./models/user");
exports.router = express.Router();
exports.router.route('/users').post(function (req, res) {
    var user = new user_1.User();
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.age = req.body.age;
    user.email = req.body.email;
    user.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});
exports.router.route('/users').get(function (_req, res) {
    user_1.User.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});
exports.router.route('/users/:id').get(function (req, res) {
    user_1.User.findById(req.params.id, function (err, user) {
        if (err) {
            res.send(err);
        }
        if (user === null) {
            res.statusCode = 404;
            res.json({ error: "User not found" });
        }
        else {
            res.json(user);
        }
    });
});
exports.router.route('/users/:id').patch(function (req, res) {
    user_1.User.findById(req.params.id, function (err, user) {
        if (err) {
            res.send(err);
        }
        if (req.body.first_name) {
            user.first_name = req.body.first_name;
        }
        if (req.body.last_name) {
            user.last_name = req.body.last_name;
        }
        if (req.body.age) {
            user.age = req.body.age;
        }
        if (req.body.email) {
            user.email = req.body.email;
        }
        user.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    });
});
exports.router.route('/users/:id')["delete"](function (req, res) {
    user_1.User.remove({
        _id: req.params.id
    }, function (err) {
        if (err) {
            res.send(err);
        }
        res.statusCode = 201;
        res.json();
    });
});
