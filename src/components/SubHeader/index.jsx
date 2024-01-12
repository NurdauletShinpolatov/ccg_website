import styles from "./SubHeader.module.scss";
import MainLink from "components/MainLink";

export default function SubHeader() {
  return (
    <div
      className={styles.wrapper}
      style={{
        background: `linear-gradient(rgba(54, 54, 54, 0.327), rgba(49, 49, 49, 0.3)), URL(./assets/imgs/main/article2.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p>
        Delivering full construction logistics solutions on large and complex
        projects, with build values of over £1 billion.
      </p>

      <h1>Transceka and Frame logistic hamkorlikda ish boshladi</h1>

      <MainLink linkTo="/company" color="#fff">
        Find Out More
      </MainLink>
    </div>
  );
}
