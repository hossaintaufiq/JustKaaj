export type IUser = {
  id: string;
  email: string;
  isActive?: boolean;
  role: "SUPER_ADMIN" | "USER" | "ADMIN" | "SERVICE_PROVIDER";
  iat?: number;
  exp?: number;
};

export type RegisterUser = {
  fullName: string;
  email: string;
  password: string;
  company?: string;
  phone: string;
  address: {
    street_address: string;
    city: string;
    state: string;
    postal_code: number;
    latitude: number;
    longitude: number;
  };
};

export type TLoginUser = {
  email: string;
  password: string;
};
