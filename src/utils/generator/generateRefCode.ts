export const generateRefCode = () => {
  return Math.random().toString(36).toUpperCase().substring(2, 8);
};
