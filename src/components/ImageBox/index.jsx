import styles from "./ImageBox.module.scss";

export default function ImageBox({ img }) {
  return (
    <div className={styles.imagebox}>
      <div className={styles.box}>
        <img src={img} />
      </div>
    </div>
  );
}
