export type IUser = {
  id: string;
  email: string;
  isActive?: boolean;
  role: "SUPER_ADMIN" | "USER" | "ADMIN" | "SERVICE_PROVIDER";
  iat?: number;
  exp?: number;
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
