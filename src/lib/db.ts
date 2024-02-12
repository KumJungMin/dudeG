import mongoose from 'mongoose';

// TODO: NextJS의 Route API를 사용하여 연결하기

const connectDB = () => {
  if (mongoose.connection.readyState >= 1) return;
  
  return mongoose.connect(process.env.MONGO_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connectDB;