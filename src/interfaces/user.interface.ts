import { Types } from 'mongoose';

export default interface IUser extends Document {
  _id?: string | Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  deleted?: boolean;
}
