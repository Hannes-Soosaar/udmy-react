const passport = require(`passport`);
const GoogleStrategy = require(`passport-google-oauth20`).Strategy;
const mongoose = require('mongoose');
const keys = require(`../config/keys.js`);
const User = mongoose.model(`users`);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => { done(null, user) });
});

passport.use(new GoogleStrategy(
    { clientID: keys.googleClientID, clientSecret: keys.googleClientSecret, callbackURL: `/auth/google`, proxy: true },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    console.log(`User Exists`, profile.id);
                    done(null, existingUser);
                } else {
                    new User({ googleIdL: profile.id }).save().then(user => done(null, user));
                }
            });
    })
);
