import styles from "@/components/accountlist.module.css";
import Image from "next/image";
import Logo from "@/assets/logo-toss.png";
import Link from "next/link";
import { useAccountStore } from "@/store/useAccountInfoStore";
import { AccountData } from "@/api/account";


interface AccountListProps {
  item: AccountData;
}

const AccountList = ({ item }: AccountListProps) => {
  const setSelectedAccountId = useAccountStore(
    (state) => state.setSelectedAccountId
  );
  const setSelectedAccountName = useAccountStore(
    (state) => state.setSelectedAccountName
  );
  const setSelectedMoney = useAccountStore((state) => state.setSelectedMoney);
  const handleRemitClick = () => {
    setSelectedAccountId(item.id);
    setSelectedAccountName(item.name);
    setSelectedMoney(item.balance);
  };
  return (
    <li className={styles.accountList}>
      <div className={styles.bankInfo}>
        <Image src={Logo} alt={"토스로고"} width={40} height={40} />
        <div>
          <strong>{item.balance.toLocaleString()}원</strong>
          <p>{item.name}</p>
        </div>
      </div>
      <Link
        className={styles.bankButton}
        href={`/remit`}
        onClick={handleRemitClick}
      >
        송금
      </Link>
    </li>
  );
};
export default AccountList;
