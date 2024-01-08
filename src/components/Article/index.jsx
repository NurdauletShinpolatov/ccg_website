import MainLink from "components/MainLink";
import styles from "./Article.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Article({ txt, children, subtitle, linkTo, aos }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.article} data-aos={aos}>
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
