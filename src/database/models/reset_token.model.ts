import IResetToken from '../../interfaces/reset_token.interface';
import { Schema, model } from 'mongoose';
import autopopulate from 'mongoose-autopopulate'; // Import the mongoose-autopopulate plugin
import { DATABASES } from '../../constants';

// Define the schema
const resetTokenSchema = new Schema<IResetToken>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.USER, // Reference to the User model
      required: true,
      autopopulate: true, // Enable autopopulation
    },
    token: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
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

// Apply the autopopulate plugin to the schema
resetTokenSchema.plugin(autopopulate);

// Define the model
const ResetTokenModel = model<IResetToken>(DATABASES.RESET_TOKEN, resetTokenSchema);

export default ResetTokenModel;
