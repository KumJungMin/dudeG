import mongoose, { Schema, models } from 'mongoose';

export const userSchema = new Schema({
  userId: String,
  roomId: String,
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || mongoose.model('User', userSchema, 'dudeG_users');

/** set expire time to 1hours */
User.createIndexes({ createAt: 1, expireAfterSeconds: 60 * 60 * 24 * 7 });

export default User;
