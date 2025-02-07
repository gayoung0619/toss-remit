import styles from "@/components/accountlist.module.css";
import Image from "next/image";
import Logo from "@/assets/logo-toss.png";
import Link from "next/link";

const AccountList = () => {
  return (
      <li className={styles.accountList}>
        <div className={styles.bankInfo}>
          <Image src={Logo} alt={"토스로고"} width={40} height={40}/>
          <div>
            <strong>500,000원</strong>
            <p>토스뱅크 통장</p>
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