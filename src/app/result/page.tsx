"use client"
import styles from "./result.module.css"
import {useAccountStore} from "@/store/useAccountInfoStore";
import Link from "next/link";
const ResultPage = () => {
  const { selectTargetAccount, money, setMoney} = useAccountStore();


  return (
      <div className={styles.resultWrap}>
        <h2>
          <strong>{selectTargetAccount}</strong>으로 {money.toLocaleString()}원을<br /> 옮겼어요.
        </h2>
        <Link href={`/`} onClick={() =>
            setMoney(0)}>
          확인
        </Link>
      </div>
  )
}
export default ResultPage