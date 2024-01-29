import axios from "axios";

export const fetcher = async <T>(url: string) => {
  const response = await axios.get(url);
  return response.data as T;
};
