import styles from "./MainStatus.module.scss";
import { mainStatus } from "utils/constants/constants";

export default function MainStatus() {
  return (
    <div className={styles.status}>
      {mainStatus.map((data) => {
        return (
          <div key={data.title} className={styles.statusElement}>
            <p className={styles.amount}>{data.amount}</p>
            <p className={styles.title}>{data.title}</p>
          </div>
        );
      })}
    </div>
  );
}
