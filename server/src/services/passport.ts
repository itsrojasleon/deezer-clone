import passport from 'passport';
import mongoose from 'mongoose';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { config } from '../config/keys';

const User = mongoose.model('users');

passport.serializeUser<any, any>((user, done) => {
  done(undefined, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientID || '',
      clientSecret: config.googleClientSecret,
      callbackURL: 'auth/google/callback'
    },
    async function(accessToken, refreshToken, profile, done) {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = await new User({
          googleId: profile.id,
          displayName: profile.displayName
        }).save();

        done(null, newUser);
      } catch (err) {
        done(err, null);
      }
    }
  )
);
