import styles from "./bankbook.module.css"
import AccountList from "@/components/accountlist";

const BankBook = () => {
  return (
      <ul className={styles.bankList}>
        <AccountList />
        <AccountList />
        <AccountList />
      </ul>
  )
}
export default BankBook