"use client"
import styles from "./send.module.css"
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {RemitData, updateRemit} from "@/api/account";
import {useAccountStore} from "@/store/useAccountInfoStore";
import {useRouter} from "next/navigation";
import {AxiosError} from "axios";
import React from "react";
const SendPage = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { selectAccountId, selectAccountName, selectTargetAccount, selectMoney, selectTargetId, money, setMoney } = useAccountStore();
  const { mutate: updatemoney } = useMutation({
    mutationKey: ["updatemoney"],
    mutationFn: (form: RemitData) => updateRemit(form),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["accountlist"]);  // 여기서 리렌더링 트리거
      router.push("/result")
    },
    onError: (err:AxiosError<{ error: string }>) => {
      if (err.response) {
        alert(err.response.data.error);
      } else {
        alert("An unexpected error occurred");
      }
    }
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/,/g, ""); // Remove existing commas
    value = value.replace(/[^0-9]/g, ""); // Remove any non-numeric characters (except for digits)

    const numericValue = isNaN(Number(value)) || value === "" ? 0 : parseFloat(value);
    setMoney(numericValue);  // Set numeric value for backend transmission
  };

  const onCreate = () => {
    updatemoney({
      accountId: selectAccountId,
      targetId: selectTargetId,
      money:  money,
      type: "a"
    })
  }

  return (
      <div className={styles.sendWrap}>
        <div className={styles.txtWrap}>
          <h2><strong>{selectAccountName}</strong>에서</h2>
          <p>잔액 <span>{selectMoney.toLocaleString()}</span> 원</p>
        </div>
        <div className={styles.txtWrap}>
          <h2><strong>{selectTargetAccount}</strong> 으로</h2>
        </div>
        <div className={styles.inputWrap}>
          <div>
            <input
                name="money"
                id="money"
                placeholder="얼마나 옮길까요?"
                value={money.toLocaleString() + "원"}
                onChange={handleInputChange}
            />
            <button onClick={onCreate}>송금</button>
          </div>
          <p>잔액 {selectMoney.toLocaleString()}원 입력</p>
        </div>

      </div>
  )
}
export default SendPage