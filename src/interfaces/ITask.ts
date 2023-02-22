import mongoose from 'mongoose';

export interface ITask extends Document {
  description: string;
  completed: boolean;
  owner: mongoose.Schema.Types.ObjectId;
}
