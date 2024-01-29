export const generateToken = (): string => {
  return "user-" + crypto.randomUUID();
};
