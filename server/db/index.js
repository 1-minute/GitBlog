import mongoose from 'mongoose';

const connectDB = () => {
  const { MONGO_URI } = process.env;
  mongoose.Promise = global.Promise;

  return mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('connected to db!'))
    .catch((e) => console.log(e));
};

export default connectDB;
