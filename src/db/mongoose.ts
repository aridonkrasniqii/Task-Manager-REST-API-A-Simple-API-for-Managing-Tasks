import mongoose, { ConnectOptions, mongo } from 'mongoose';

mongoose.connect('mongodb://localhost:27017/geeksforgeeks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions);

export default mongoose;
