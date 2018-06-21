"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    email: String
});
exports.User = mongoose_1.model('User', UserSchema);
