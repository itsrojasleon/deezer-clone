const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  userName: String
});

mongoose.model('users', userSchema);
