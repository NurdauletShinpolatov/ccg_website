import styles from "./Title.module.scss";

export default function Title({ paragraph, children }) {
  return (
    <div className={styles.title}>
      <p>{paragraph}</p>

      <h1>{children}</h1>
    </div>
  );
}
