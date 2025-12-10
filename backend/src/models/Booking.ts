import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  bookingId: string; // Unique booking identifier
  userId: string; // Firebase UID of the customer
  userEmail: string;
  userName?: string;
  providerId: string; // Provider's userId
  providerEmail: string;
  providerName: string;
  
  // Service Details
  serviceCategory: string;
  serviceDescription?: string;
  
  // Booking Details
  bookingDate: Date;
  timeSlot: string; // e.g., "10:00 AM - 12:00 PM"
  notes?: string;
  
  // Pricing
  estimatedPrice?: number;
  
  // Status
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled';
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  acceptedAt?: Date;
  rejectedAt?: Date;
  rejectionReason?: string;
}

const BookingSchema = new Schema<IBooking>(
  {
    bookingId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    providerId: {
      type: String,
      required: true,
      index: true,
    },
    providerEmail: {
      type: String,
      required: true,
    },
    providerName: {
      type: String,
      required: true,
    },
    serviceCategory: {
      type: String,
      required: true,
    },
    serviceDescription: {
      type: String,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    timeSlot: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    estimatedPrice: {
      type: Number,
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'rejected', 'completed', 'cancelled'],
      default: 'pending',
      index: true,
    },
    acceptedAt: {
      type: Date,
    },
    rejectedAt: {
      type: Date,
    },
    rejectionReason: {
      type: String,
    },
  },
  { timestamps: true }
);

BookingSchema.index({ userId: 1, status: 1 });
BookingSchema.index({ providerId: 1, status: 1 });

// Generate unique booking ID before saving (fallback if not provided)
BookingSchema.pre('save', function (next) {
  if (!this.bookingId) {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    this.bookingId = `BK${timestamp}${random}`.toUpperCase();
  }
  if (typeof next === 'function') {
    next();
  }
});

export default mongoose.model<IBooking>('Booking', BookingSchema);

