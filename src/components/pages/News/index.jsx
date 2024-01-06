import Title from "components/Title";
import styles from "./News.module.scss";

const data = [1, 2, 3, 4, 5, 6];

export default function News() {
  return (
    <div className={styles.news}>
      <Title paragraph="Bizning kompani palonchi inson tomonidan asos solingan bolib u 25 yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq xodimlar ish korsatgan.">
        Наши Yangiliklar
      </Title>

      <div className={styles.newsmain}>
        {data.map((data) => {
          return (
            <div className={styles.newsbox}>
              <img src="./assets/imgs/news/news.png" />

              <div className={styles.newsdata}>
                <h2>Bizning sifat juda katta etibor beramiz</h2>

                <p>
                  Bizning kompani palonchi inson tomonidan asos solingan bolib u
                  25 yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq
                  xodimlar ish korsatgan.
                </p>

                <div className={styles.date}>10.10.2021</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
