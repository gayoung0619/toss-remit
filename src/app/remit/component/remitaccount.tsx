"use client";
import styles from "./remitaccount.module.css";
import AccountList from "@/components/accountlist";
import { useTabStore } from "@/store/useTabStore";

const RemitAccount = () => {
  const { selectedTab, setSelectedTab } = useTabStore();
  return (
      <div>
        <ul className={styles.tabBtn}>
          <li
              className={selectedTab === 0 ? styles.on : ""}
              onClick={() => setSelectedTab(0)}>
            계좌
          </li>
          <li
              className={selectedTab === 1 ? styles.on : ""}
              onClick={() => setSelectedTab(1)}>
            연락처
          </li>
        </ul>
        <div className={styles.inputBox}>
          <input type="text" name="account" id="account" placeholder="계좌번호 입력"/>
        </div>
        <div className={styles.tabContent}>
          {selectedTab === 0 && (
              <div className={styles.tabPanel}>
                1
                <AccountList />
              </div>
          )}
          {selectedTab === 1 && (
              <div className={styles.tabPanel}>
                2
                <AccountList />
              </div>
          )}
        </div>
      </div>
  )
}
export default RemitAccount