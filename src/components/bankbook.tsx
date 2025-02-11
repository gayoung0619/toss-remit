"use client";
import styles from "./bankbook.module.css";
import AccountList from "@/components/accountlist";
import { useQuery } from "@tanstack/react-query";
import { fetchAccountData } from "@/api/account";

const BankBook = () => {
  const { data: accountlist } = useQuery({
    queryKey: ["accountlist"],
    queryFn: () => fetchAccountData(),
  });

  return (
    <ul className={styles.bankList}>
      {accountlist?.data.map((item, idx) => (
        <AccountList item={item} key={idx} />
      ))}
    </ul>
  );
};
export default BankBook;
