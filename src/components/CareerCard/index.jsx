import UAngleIcon from "assets/icons/uAngleIcon";
import styles from "./CareerCard.module.scss";

export default function CareerCard({ bgUrl, children, txt }) {
  return (
    <div
      className={styles.careercard}
      style={{
        backgroundImage: `linear-gradient(rgba(54, 54, 54, 0.527), rgba(49, 49, 49, 0.5)), URL(${bgUrl})`,
      }}
    >
      <div className={styles.empty}></div>

      <div className={styles.content}>
        <p>{txt}</p>

        <h1>{children}</h1>

        <div className={styles.iconWrapper}>
          <div className={styles.uangle}>
            <UAngleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
