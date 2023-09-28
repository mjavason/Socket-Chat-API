import { Schema, model } from 'mongoose';
import IUser from '../../interfaces/user.interface';
import { DATABASES } from '../../constants';

const UserSchema = new Schema<IUser>(
  {
    firstname: String,
    lastname: String,
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
    },
    password: {
      type: String,
      select: false,
    },
    deleted: {
      type: Schema.Types.Boolean,
      required: true,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = model<IUser>(DATABASES.USER, UserSchema);

export default UserModel;
