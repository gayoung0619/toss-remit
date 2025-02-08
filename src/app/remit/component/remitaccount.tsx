"use client";
import styles from "./remitaccount.module.css";
import { useTabStore } from "@/store/useTabStore";
import {useQuery} from "@tanstack/react-query";
import {fetchContactData, fetchRecentData} from "@/api/account";
import Image from "next/image";
import Logo from "@/assets/logo-toss.png";
import Link from "next/link";
import {useAccountStore} from "@/store/useAccountInfoStore";

const RemitAccount = () => {
  const setSelectedTargetId = useAccountStore((set) => set.setSelectedTargetId);
  const setSelectedTargetAccount = useAccountStore((set) => set.setSelectedTargetAccount);

  const { data: recentlist } = useQuery({
    queryKey: ["recentlist"],
    queryFn: () => fetchRecentData()
  });

  const { data: contactlist } = useQuery({
    queryKey: ["contactlist"],
    queryFn: () => fetchContactData()
  });

  const handleContactClick = (item) => {
    setSelectedTargetId(item.id);
    setSelectedTargetAccount(item.account)
  }
  const { selectedTab, setSelectedTab } = useTabStore();
  return (
      <div>
        <ul className={styles.tabBtn}>
          <li
              className={selectedTab === 0 ? styles.on : ""}
              onClick={() => setSelectedTab(0)}>
            최근 계좌
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
              <Link href={`/send`}>
                <div className={styles.tabPanel}>
                  {recentlist?.data.map((item, idx) => (
                      <div
                          key={`recent-${idx}`}
                          className={styles.contactInfo}
                          onClick={() => handleContactClick(item)}
                      >
                        <Image src={Logo} alt={"토스로고"} width={40} height={40}/>
                        <div>
                          <strong>{item.name}</strong>
                          <p>{item.account}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </Link>
          )}
          {selectedTab === 1 && (
              <Link href={`/send`}>
                <div className={styles.tabPanel}>
                  {contactlist?.data.map((item, idx) => (
                      <div
                          className={styles.contactInfo}
                          key={`contact-${idx}`}
                          onClick={() => handleContactClick(item)}
                      >
                        <Image src={Logo} alt={"토스로고"} width={40} height={40}/>
                        <div>
                          <strong>{item.name}</strong>
                          <p>{item.phone}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </Link>
          )}
        </div>
      </div>
  )
}
export default RemitAccount