export const generateAddressDetailId = (userId: string, dataLength: number) => {
  const strNumber = parseInt(userId) * 100 + (dataLength + 1);
  return strNumber;
};
