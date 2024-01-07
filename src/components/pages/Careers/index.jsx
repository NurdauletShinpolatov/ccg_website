import CareerCard from "components/CareerCard";
import styles from "./Careers.module.scss";

const data = [
  "src/assets/imgs/careers/career1.png",
  "src/assets/imgs/careers/career2.png",
  "src/assets/imgs/careers/career3.png",
  "src/assets/imgs/careers/career4.png",
];

export default function Careers() {
  return (
    <div className={styles.careers}>
      {data.map((data) => {
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
