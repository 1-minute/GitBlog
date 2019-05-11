import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
  name: {
    type: String,
  },
  repo: {
    type: String,
  },
  follower: {
    type: Array,
  },
});

export default mongoose.model('User', User);
