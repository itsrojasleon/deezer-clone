import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: String,
  userName: String
});

mongoose.model('users', userSchema);
