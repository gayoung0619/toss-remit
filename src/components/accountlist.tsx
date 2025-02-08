import styles from "@/components/accountlist.module.css";
import Image from "next/image";
import Logo from "@/assets/logo-toss.png";
import Link from "next/link";

const AccountList = ({item}) => {
  return (
      <li className={styles.accountList}>
        <div className={styles.bankInfo}>
          <Image src={Logo} alt={"토스로고"} width={40} height={40}/>
          <div>
            <strong>{item.balance}</strong>
            <p>{item.name}</p>
          </div>
        </div>
        <Link
            className={styles.bankButton}
            href={`/remit`}
        >
          송금
        </Link>
      </li>
  )
}
export default AccountList