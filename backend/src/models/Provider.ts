import mongoose, { Schema, Document } from 'mongoose';

export interface IProvider extends Document {
  userId: string; // Firebase UID
  userEmail: string;
  userName?: string;
  
  // Business Information
  businessName: string;
  serviceCategory: string;
  yearsOfExperience: number;
  phoneNumber: string;
  
  // Address
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // License & Insurance
  businessLicense: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  
  // Portfolio
  portfolioWebsite?: string;
  
  // Application ID reference
  applicationId: mongoose.Types.ObjectId;
  
  // Status
  isActive: boolean;
  
  // Timestamps
  approvedAt: Date;
  approvedBy?: string; // Admin email
}

const ProviderSchema = new Schema<IProvider>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    userEmail: {
      type: String,
      required: true,
      index: true,
    },
    userName: {
      type: String,
    },
    
    // Business Information
    businessName: {
      type: String,
      required: true,
    },
    serviceCategory: {
      type: String,
      required: true,
      enum: [
        'plumbing',
        'electrical',
        'painting',
        'carpentry',
        'cleaning',
        'landscaping',
        'hvac',
        'appliance-repair',
        'other',
      ],
      index: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    
    // Address
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    
    // License & Insurance
    businessLicense: {
      type: String,
      required: true,
    },
    insuranceProvider: {
      type: String,
      required: true,
    },
    insurancePolicyNumber: {
      type: String,
      required: true,
    },
    
    // Portfolio
    portfolioWebsite: {
      type: String,
    },
    
    // Application reference
    applicationId: {
      type: Schema.Types.ObjectId,
      ref: 'ProviderApplication',
      required: true,
    },
    
    // Status
    isActive: {
      type: Boolean,
      default: true,
    },
    
    // Approval info
    approvedAt: {
      type: Date,
      default: Date.now,
    },
    approvedBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for faster queries
ProviderSchema.index({ serviceCategory: 1, isActive: 1 });
ProviderSchema.index({ userId: 1 });

export default mongoose.model<IProvider>('Provider', ProviderSchema);

