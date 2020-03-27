import './models/User';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import session from 'cookie-session';
import { config } from './config/keys';
import { AppRouter } from './AppRouter';
import './controllers/RootController';
import './controllers/SearchController';
import './controllers/AuthController';
import './controllers/ApiController';
import './services/passport';

mongoose.connect(
  'mongodb://rojasleon:Lionelmessi10@ds163294.mlab.com:63294/deezer-clone',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const app = express();

app.use(
  session({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());

//

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) =>
  res.redirect('http://localhost:3000')
);

app.listen(4000, () => {
  console.log('Listening on Port 4000...');
});
