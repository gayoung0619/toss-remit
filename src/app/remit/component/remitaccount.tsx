import styles from "./remitaccount.module.css";
import AccountList from "@/components/accountlist";

const RemitAccount = () => {
  return (
      <div>
        <ul className={styles.tabBtn}>
          <li className={styles.on}>계좌</li>
          <li>연락처</li>
        </ul>
        <div className={styles.inputBox}>
          <input type="text" name="account" id="account" placeholder="계좌번호 입력"/>
        </div>
        <div className={styles.tabContent}>
          <div>
            <AccountList/>
          </div>
          <div>
            <AccountList/>
          </div>
        </div>
      </div>
  )
}
export default RemitAccount