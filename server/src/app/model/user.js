import mongoose from "mongoose";
//import bcrypt from "bcrypt";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter a name']
    },
    address: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: [true, 'Enter an email address.'],
      unique: [true, 'That email address is taken.'],
      lowercase: true,
      validate: [validator.isEmail, 'Enter a valid email address.']
    },
    password: {
      type: String,
      required: [true, 'Enter a password'],
      minLength: [6, 'Password should be at least six characters.']
    },
    role: {
      type: String,
      requires: true
    }
  },
  {
    timestamps: true
  }
);

var handleE11000 = function(error, res, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next();
  }
};

UserSchema.post('save', handleE11000);
UserSchema.post('update', handleE11000);
UserSchema.post('insertMany', handleE11000);
UserSchema.post('create', handleE11000);

export default mongoose.model("User", UserSchema);