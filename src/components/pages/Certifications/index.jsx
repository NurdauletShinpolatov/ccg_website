import Title from "components/Title";
import styles from "./Certifications.module.scss";

const data = [1, 2, 3, 4, 5, 6];

export default function Certifications() {
  return (
    <div className={styles.certifications}>
      <Title paragraph="Bizning kompani palonchi inson tomonidan asos solingan bolib u 25 yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq xodimlar ish korsatgan.">
        Наши Sertifications
      </Title>

      <div className={styles.info}>
        {data.map((data) => {
          return (
            <div className={styles.card} key={data}>
              <img src="./assets/imgs/certifications/certifications.png" />

              <div>
                <h2>Sifat nazorati boyicha sertificat</h2>
                <p>10.10.2021</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
