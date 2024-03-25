import mongoose, { Schema, models } from 'mongoose';

export const userSchema = new Schema({
  userId: String,
  roomId: String,
  expireAt: { type: Date, expires: 3600 } /** set expire time to 1hours */,
});

const User = models.User || mongoose.model('User', userSchema, 'dudeG_users');

export default User;
