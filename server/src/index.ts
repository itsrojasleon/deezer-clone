import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AppRouter } from './AppRouter';
import './models/User';
import './controllers/RootController';
import './controllers/SearchController';
import './controllers/AuthController';

mongoose.connect(
  'mongodb://rojasleon:Lionelmessi10@ds163294.mlab.com:63294/deezer-clone',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(AppRouter.getInstance());

app.listen(4000, () => {
  console.log('Listening on Port 4000...');
});
