import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export type AccountData = {
  id: number,
  name: string;
  bookmark: string,
  type: string,
  balance: number
}


export type RemitData = {
  accountId: number,
  money: number;
  targetId: number,
  type: string
}

export type RecentData = {
  id: number,
  contact_id: number,
  bookmark: string,
  name: string,
  account: string,
  type: string
}

export type ContactData = {
  id: number,
  name: string,
  phone: string,
  account: string,
  type: string
}

// 계좌리스트
export const fetchAccountData = () : Promise<{data: AccountData[]}> => {
  return axios.get(`${baseUrl}/api/my/account?type=a`);
};

// 연락처
export const fetchContactData = () : Promise<{data: ContactData[]}>=> {
  return axios.get(`${baseUrl}/api/account/contact?type=a`);
};

// 최근 연락처
export const fetchRecentData = () : Promise<{data: RecentData[]}>=> {
  return axios.get(`${baseUrl}/api/account/recent?type=a`);
};

// 은행 데이터
export const fetchBankData = () => {
  return axios.get(`${baseUrl}/api/account/bank?type=a`);
};

export const updateRemit = (data: RemitData) => {
  return axios.post(`${baseUrl}/api/my/account`, data)
}


