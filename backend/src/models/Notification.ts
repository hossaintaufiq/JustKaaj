import mongoose, { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  userId: string; // Firebase UID
  type: 'application_approved' | 'application_rejected' | 'application_on_hold' | 'booking_request' | 'booking_accepted' | 'booking_rejected' | 'booking_confirmation';
  title: string;
  message: string;
  applicationId?: mongoose.Types.ObjectId;
  bookingId?: string;
  metadata?: Record<string, any>;
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
      enum: ['application_approved', 'application_rejected', 'application_on_hold', 'booking_request', 'booking_accepted', 'booking_rejected', 'booking_confirmation'],
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
    bookingId: {
      type: String,
    },
    metadata: {
      type: Schema.Types.Mixed,
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

