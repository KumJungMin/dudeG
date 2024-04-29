import mongoose, { Schema, models } from 'mongoose';

interface Guest {
  name: string;
  id: string;
  image: string;
  receiverId: string;
}

export const userSchema = new Schema({
  userId: String,
  roomId: String,
  guest: [],
  expireAt: { type: Date, expires: 3600 } /** set expire time to 1hours */,
});

const User = models.User || mongoose.model('User', userSchema, 'dudeG_users');

export default User;
