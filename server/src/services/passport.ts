import passport from 'passport';
import mongoose from 'mongoose';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
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
      clientID:
        '449889541936-ktq8q8fcoc93qcbju9ogp62826udqd43.apps.googleusercontent.com',
      clientSecret: 'yxFR_hMFeWg51AOfjxgtxgwf',
      callbackURL: '/auth/google/callback'
    },
    async function(accessToken, refreshToken, profile, done): Promise<any> {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(undefined, existingUser);
      }

      const newUser = await new User({
        googleId: profile.id,
        displayName: profile.displayName
      }).save();

      done(undefined, newUser);
    }
  )
);
