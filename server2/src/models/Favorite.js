import { Schema, model } from 'mongoose';

const favoriteSchema = new Schema({
  user_email: {
    type: String,
    required: true
  },
  track_id: {
    type: String,
    required: true,
    unique: true
  }
});

export const Favorite = model('favorites', favoriteSchema);
