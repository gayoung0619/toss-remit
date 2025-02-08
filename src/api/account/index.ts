import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// 계좌리스트
export const fetchAccountData = () => {
  return axios.get(`${baseUrl}/api/my/account?type=a`);
};

// 연락처
export const fetchContactData = () => {
  return axios.get(`${baseUrl}/api/account/contact?type=a`);
};

// 최근 연락처
export const fetchRecentData = () => {
  return axios.get(`${baseUrl}/api/account/recent?type=a`);
};

// 은행 데이터
export const fetchBankData = () => {
  return axios.get(`${baseUrl}/api/account/bank?type=a`);
};

export const updateRemit = (data) => {
  return axios.post(`${baseUrl}/api/my/account`, data)
}


