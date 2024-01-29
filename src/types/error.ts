export type TNewAddressError = {
  addressName: boolean;
  receiver?: boolean;
  receiverPhone?: boolean;
  street: boolean;
  province: boolean;
  city: boolean;
};

export type TNewPromoError = {
  promoCode: boolean;
  discount: boolean;
  quota: boolean;
  expiryDate: boolean;
};

export type TEditPromoError = {
  fname: boolean;
  email: boolean;
  password: boolean;
  phoneNumber: boolean;
  photo: boolean;
}
