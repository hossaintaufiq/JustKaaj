import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  userId: string; // Firebase UID
  type: 'application_approved' | 'application_rejected' | 'application_on_hold';
  title: string;
  message: string;
  applicationId?: mongoose.Types.ObjectId;
  isRead: boolean;
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: ['application_approved', 'application_rejected', 'application_on_hold'],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    applicationId: {
      type: Schema.Types.ObjectId,
      ref: 'ProviderApplication',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
NotificationSchema.index({ userId: 1, isRead: 1 });
NotificationSchema.index({ userId: 1, createdAt: -1 });

export default mongoose.model<INotification>('Notification', NotificationSchema);

