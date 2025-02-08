"use client"
import styles from "./send.module.css"
import {useMutation} from "@tanstack/react-query";
import {updateRemit} from "@/api/account";
import {useAccountStore} from "@/store/useAccountInfoStore";
import {useRouter} from "next/navigation";
const SendPage = () => {
  const router = useRouter()
  const { selectAccountId, selectAccountName, selectTargetAccount, selectMoney, selectTargetId, money, setMoney } = useAccountStore();
  const { mutate: updatemoney } = useMutation({
    mutationKey: ["updatemoney"],
    mutationFn: (form) => updateRemit(form),
    onSuccess: (res) => {
      alert(res.data.message);
      router.push("/result")
    },
    onError: (err) => {
      alert(err.response.data.error)
    }
  })

  const handleInputChange = (e) => {
    const value = e.target.value;
    const numericValue = isNaN(value) || value === '' ? 0 : parseFloat(value);
    setMoney(numericValue);
  };

  const onCreate = () => {
    updatemoney({
      accountId: selectAccountId,
      targetId: selectTargetId,
      money: 200,
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
                value={money}
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