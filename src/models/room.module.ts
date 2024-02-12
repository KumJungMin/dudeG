import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomId: String,
  hostId: String,
  guests: [
    {
      id: String,
      name: String,
      image: String,
      receiverId: String,
    },
  ],
});

const Room = mongoose.model('Room', roomSchema, 'dudeG_rooms');

export default Room;
