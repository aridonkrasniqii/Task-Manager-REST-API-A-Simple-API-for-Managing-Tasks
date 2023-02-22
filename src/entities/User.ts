import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { IUser } from '../interfaces/IUser';
import mongoose from '../db/mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value: string) {
        if (!validator.isEmail(value)) {
          throw new Error('Emails is invalid');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate(value: string) {
        if (!validator.isStrongPassword(value)) {
          throw new Error('Weak password');
        }
        if (value.toLowerCase().includes('password')) {
          throw new Error("Password cannot contain 'password'");
        }
      }
    },

    age: {
      type: Number,
      default: 0,
      validate(value: number) {
        if (value < 0) {
          throw new Error('Age must be a positive number');
        }
      }
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    avatar: {
      type: Buffer
    }
  },
  {
    timestamps: true
  }
);

// TODO: methods
export const User = mongoose.model<IUser>('User', userSchema);
