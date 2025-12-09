export type IUser = {
  id: string;
  email: string;
  isActive?: boolean;
  role: "SUPER_ADMIN" | "USER" | "ADMIN" | "SERVICE_PROVIDER";
  iat?: number;
  exp?: number;
};
export type TAddress = {
  address_id: string;
  street_address: string;
  area_name: string;
  city: string;
  state: string;
  postal_code: number;
  user_id: string;
};

export type TUser = {
  user_id: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: "SUPER_ADMIN" | "USER" | "ADMIN" | "SERVICE_PROVIDER";
  status: "ACTIVE" | "BLOCKED" | "DELETED";
  profileImage: string;
  is_verified: boolean;
  agree: boolean;

  createdAt: string;
  updatedAt: string;

  address: TAddress;

  service_provider?: {
    id: string;
    fullName: string;
    email: string;
    business_name: string;
    business_license: string;
    nid_number: string;
    govt_id_or_tin: string;
    category: string;
    facebook_profile?: string;
    website_link?: string;
    submitted_at: string;
    status: "PENDING" | "ACTIVE";
    is_apporved: boolean;
  };
};

export type TRegisterUser = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  agree: boolean;

  address: {
    area_name: string;
    street_address: string;
    city: string;
    state: string;
    postal_code: number;
  };

  provider?: {
    business_name: string;
    business_license: string;
    nid_number: string;
    govt_id_or_tin: string;
    facebook_profile?: string;
    website_link?: string;
    category: string;
  };
};

export type TLoginUser = {
  email: string;
  password: string;
};
