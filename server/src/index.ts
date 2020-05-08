import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import searchRoutes from './routes/searchRoutes';
import userRoutes from './routes/userRoutes';
import favoriteRoutes from './routes/favoriteRoutes';
import requireAuth from './middlewares/requireAuth';

const app = express();

mongoose.connect(
  'mongodb://rojasleon:Lionelmessi10@ds163294.mlab.com:63294/deezer-clone',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (error) => {
  console.log('Error connecting to Mongo', error);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authRoutes);
app.use(searchRoutes);
app.use(userRoutes);
app.use(favoriteRoutes);

app.get('/', requireAuth, (req, res) => {
  res.send(req.user);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Listening on port 4000');
});
