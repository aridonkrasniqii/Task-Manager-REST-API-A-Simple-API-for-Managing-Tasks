import { IGroup } from '../interfaces/IGroup';
import mongoose from '../db/mongoose';

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  valid: {
    type: Boolean,
    required: false,
    default: false
  }
});

export const Group = mongoose.model<IGroup>('Group', groupSchema);
