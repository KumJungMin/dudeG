import mongoose, { Schema, models } from 'mongoose';

export const userSchema = new Schema({
  userId: String, // kakao id
  roomId: String, // url query role -> expire time 설정하기
});

const User = models.User || mongoose.model('User', userSchema, 'dudeG_users');

export default User;
