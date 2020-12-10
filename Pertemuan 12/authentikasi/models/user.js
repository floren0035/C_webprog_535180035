const mongoose = require('mongoose');
const passport = require('../config/passport');
const router = require('../routes');
const pass = require("passport");

const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

//login handle
router.post("/login", (req,res, next) => {
    pass.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/users/login",
        failureFlash: true,
    })(req, res, next);
});

module.exports = mongoose.model('User', User);