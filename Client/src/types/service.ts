import { TUser } from "./user";

export type TParentcategory = {
  id: string;
  name: string;
  is_Active: boolean;
};
export type TServiceCategory = {
  id: string;
  name: string;
  is_Active: boolean;
  parent_categoryId: string;
};
export type TServiceOnCategory = {
  category: {
    id: string;
    name: string;
    is_Active: boolean;
    parent_categoryId: string;
  };
};
export type TProviderService = {
  providerId: string;
  serviceId: string;
  service_provider: TServiceProvider;
};
export type TServiceProvider = {
  id: string;
  email: string;
  fullName: string;
  business_name: string;
  business_license: string;
  nid_number: string;
  govt_id_or_tin: string;
  facebook_profile?: string;
  website_link?: string;
  category: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  is_apporved: boolean;
  submitted_at: string;
  user: TUser;
};

type TAvailability = {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
};

export type TService = {
  id?: string;
  title: string;
  description: string;
  area: string;
  price: number;
  parentCategory: string;
  availabilities: TAvailability[];
  providerServices: TProviderService[];
  category: TServiceCategory[];
  serviceOnCategory?: TServiceOnCategory[];
  is_featured?: boolean;
  avg_rating?: number;
  is_active?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
