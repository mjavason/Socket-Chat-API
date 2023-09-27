import { Document, Types } from 'mongoose';

// Define the interface
export default interface IResetToken extends Document {
  _id?: string | Types.ObjectId;
  user: Types.ObjectId;
  token: string;
  expiresAt: Date;
  deleted?: boolean;
}
