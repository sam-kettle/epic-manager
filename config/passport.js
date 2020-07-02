const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Load user model
const User = require('../models/user');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
            User.findOne({ email: email })
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'This e-mail is not registered' })
                    }
                    // Validate password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err
                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message: 'Password incorrect'})
                        }
                    })
                })
                .catch(err => console.log(err))
        })
    )
    // Enable passport sessions for authentication
    passport.serializeUser((user, done) => {
        done(null, user.id);
    })
          
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        })
    })
}
