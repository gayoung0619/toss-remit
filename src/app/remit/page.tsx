import styles from "./page.module.css"
import RemitAccount from "@/app/remit/component/remitaccount";

const RemitPage = () => {
  return (
      <div>
        <h2 className={styles.title}>어디로 돈을 보낼까요?</h2>
        <RemitAccount />
      </div>
  )
}
export default RemitPage