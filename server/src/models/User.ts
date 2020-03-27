import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  displayName: String
});

mongoose.model('users', userSchema);
