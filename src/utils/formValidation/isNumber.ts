export const regexToNumber = (strNum: string) => {
  return strNum.replace(/([^\d])/g, "");
};
