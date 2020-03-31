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
import './controllers/ApiController';
import './controllers/SearchController';
import './controllers/AuthController';
import './services/passport';

const app = express();

mongoose.connect(
  'mongodb://rojasleon:Lionelmessi10@ds163294.mlab.com:63294/deezer-clone',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', error => {
  console.log('Error connecting to Mongo', error);
});

app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(AppRouter.getInstance());

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) =>
  res.redirect('http://localhost:3000')
);

function requireAuth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.user) {
    next();
    return;
  }

  res.status(403).send('Sorry');
}

app.get('/fetch_user', requireAuth, (req, res) => {
  res.send(req.user);
});

app.listen(4000, () => {
  console.log('Listening on Port 4000...');
});
