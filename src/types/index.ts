export interface UserInfo {
  id?: number;
  token: string;
  role: string;
  email: string;
  password: string;
  fname: string;
  phoneNumber: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

export interface Admin extends UserInfo {}

export interface User extends UserInfo {
  confirmPass: string;
  balance: number;
  refCode: string;
  completedShipments: number;
  refCodeFriend: string;
  refCodeUsedCount: number;
  totalSpent: number;
}

export interface Address {
  id?: number;
  addressName: string;
  receiver?: string;
  receiverPhone?: string;
  city: string;
  cityId: string;
  province: string;
  provinceId: string;
  street: string;
  createdAt: string;
  updatedAt: string;
}

// export interface OriginAddress extends Address {
//   id?: number;
// }

// export interface DestinationAddressDetail {
//   addressName: string;
//   city: string;
//   cityId: string;
//   province: string;
//   provinceId: string;
//   street: string;
//   receiver: string;
//   receiverPhone: string;
//   createdAt: string;
//   updatedAt: string;
// }

export interface DestinationAddress {
  id?: number;
  userId: number;
  address: Address[];
}

export interface Promo {
  id?: number;
  promoCode: string;
  discount: string;
  quota: string;
  used: number;
  expiryDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface ShippingDetail {
  id: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  receiver: string;
  receiverPhone: string;
  origin: string;
  originFull: string;
  destination: string;
  destinationFull: string;
  costBefore: number;
  costAfter: number;
  status: string;
  promoUsed: string;
  discountAmount: number;
  category: string;
  categoryCost: number;
  addOn: string;
  addOnCost: number;
  review: number;
  createdAt: string;
  updatedAt: string;
}

export interface Shipping {
  id: number;
  userId: number;
  shippingDetails: ShippingDetail[];
}

export interface DeconShippingDetail extends ShippingDetail {
  shippingId: number;
  userId: number;
}

export type TDelete = {
  name: string;
  id: number;
};
