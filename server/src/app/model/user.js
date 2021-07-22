import mongoose from "mongoose";
//import bcrypt from "bcrypt";
import beautifyUnique from "mongoose-beautiful-unique-validation";
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
    admin: {
      type: Boolean,
      required: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema.plugin(beautifyUnique);

export default mongoose.model("User", UserSchema);