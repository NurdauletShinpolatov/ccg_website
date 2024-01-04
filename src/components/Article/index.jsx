import MainLink from "components/MainLink";
import styles from "./Article.module.scss";

export default function Article({ txt, children, subtitle, linkTo }) {
  return (
    <div className={styles.article}>
      <p className={styles.txt}>{txt}</p>

      <div className={styles.headerBox}>
        <h1 className={styles.title}>{children}</h1>

        <div className={styles.subtitleBox}>
          <div className={styles.stick}></div>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <MainLink linkTo={linkTo} color="black">
          Find Out More
        </MainLink>
      </div>
    </div>
  );
}
