import CareerCard from "components/CareerCard";
import styles from "./Careers.module.scss";
import { careers } from "utils/constants/constants";

export default function Careers() {
  return (
    <div className={styles.careers}>
      {careers.map((data) => {
        return (
          <div className={styles.cardwrapper} key={data}>
            <CareerCard
              bgUrl={data}
              txt="Some of the brand applications were planned to"
            >
              We tried to represent his
            </CareerCard>
          </div>
        );
      })}
    </div>
  );
}
