import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: String, // kakao id 
  roomId: String, // url query role -> expire time 설정하기
});

const User = mongoose.model('User', userSchema, 'dudeG_users');

export default User;
