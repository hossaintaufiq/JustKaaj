import mongoose, { Schema, Document } from 'mongoose';

export interface IProviderApplication extends Document {
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
  
  // References
  reference1Name?: string;
  reference1Contact?: string;
  reference2Name?: string;
  reference2Contact?: string;
  
  // Additional Information
  additionalInfo?: string;
  
  // Application Status
  status: 'pending' | 'approved' | 'rejected' | 'on_hold';
  
  // Timestamps
  submittedAt: Date;
  reviewedAt?: Date;
}

const ProviderApplicationSchema = new Schema<IProviderApplication>(
  {
    userId: {
      type: String,
      required: true,
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
    },
    yearsOfExperience: {
      type: Number,
      required: true,
      min: 0,
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
    
    // References
    reference1Name: {
      type: String,
    },
    reference1Contact: {
      type: String,
    },
    reference2Name: {
      type: String,
    },
    reference2Contact: {
      type: String,
    },
    
    // Additional Information
    additionalInfo: {
      type: String,
    },
    
    // Application Status
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'on_hold'],
      default: 'pending',
    },
    
    // Timestamps
    submittedAt: {
      type: Date,
      default: Date.now,
    },
    reviewedAt: {
      type: Date,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// Index for faster queries
ProviderApplicationSchema.index({ userId: 1, status: 1 });

export default mongoose.model<IProviderApplication>(
  'ProviderApplication',
  ProviderApplicationSchema
);

