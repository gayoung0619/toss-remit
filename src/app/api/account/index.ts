import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAccountData = async () => {
  const { data } = await axios.get(`${baseUrl}/api/my/account`);
  return data;
};
