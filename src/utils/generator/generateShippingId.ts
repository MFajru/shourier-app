export const generateShippingId = (category: string) => {
  const strNumber = Math.random().toString().substring(2, 11);
  return category + strNumber;
};
