const LocalStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//user model
const User = require("../models/user");

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
            //user cocok
            User.findOne({email: email})
                .then((user) => {
                    if (!user) {
                        return done(null, false, { message: "email tidak terdaftar"});
                    }

                    //cek password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, {message: "Password salah" });
                        }
                    });
                })
                .catch((err) => console.log(err));
        })
    );
}