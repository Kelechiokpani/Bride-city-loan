export interface User {
  _id: string;
  email: string;
  phone: string;
  profile: Profile;
}

export interface Profile {
  isBlocked: boolean;
  firstName: string;
  lastName: string;
  address: Address;
  avatar: string;
  utilityBill: string[];
}

export interface Address {
  buildingNumber: string;
  street: string;
  landmark: string;
  city: string;
  state: string;
  country: string;
}

export interface Verification {
  bvnVerified: boolean;
  emailVerified: boolean;
  phoneVerified: boolean;
  bvn: JSON;
}
export interface NewUserInput {
  password: string;
  email: string;
  phone: string;
}
