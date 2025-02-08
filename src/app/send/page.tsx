"use client"
import styles from "./send.module.css"
import {useMutation} from "@tanstack/react-query";
import {updateRemit} from "@/api/account";
import {useAccountStore} from "@/store/useAccountInfoStore";
import {useRouter} from "next/navigation";
const SendPage = () => {
  const router = useRouter()
  const { selectAccount, selectTarget, money, setMoney } = useAccountStore();
  const { mutate: updatemoney } = useMutation({
    mutationKey: ["updatemoney"],
    mutationFn: (form) => updateRemit(form),
    onSuccess: (res) => {
      console.log(res)
      alert(res.data.message);
      router.push("/remit")
    },
    onError: (err) => {
      console.log(err)
      alert(err.response.data.error)
    }
  })

  const handleInputChange = (e) => {
    const value = e.target.value;
    const numericValue = isNaN(value) || value === '' ? 0 : parseFloat(value);
    setMoney(numericValue);
  };

  console.log(selectAccount, selectTarget, money)

  const onCreate = () => {
    updatemoney({
      accountId: selectAccount,
      targetId: selectTarget,
      money: money,
      type: "a"
    })
  }

  return (
      <div className={styles.sendWrap}>
        <div className={styles.txtWrap}>
          <h2><strong>내 토스뱅크 통장</strong>에서</h2>
          <p>잔액 <span>151,190</span> 원</p>
        </div>
        <div className={styles.txtWrap}>
          <h2><strong>내 우리 SUPER주거래 통장</strong>으로</h2>
          <p>우리은행 111122223333</p>
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
          <p>잔액 111원 입력</p>
        </div>

      </div>
  )
}
export default SendPage