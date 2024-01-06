import Title from "components/Title";
import styles from "./Services.module.scss";
import ContactForm from "components/ContactForm";

export default function Services() {
  return (
    <div className={styles.services}>
      <Title paragraph="Bizning kompani palonchi inson tomonidan asos solingan bolib u 25 yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq xodimlar ish korsatgan.">
        Наши услуги
      </Title>

      <div className={styles.servicebox}>
        <div className={styles.service}>
          <h2>Авто-перевозки</h2>
          <p>
            Bizning kompani palonchi inson tomonidan asos solingan bolib u 25
            yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq xodimlar
            ish korsatgan.
          </p>
          <img src="./assets/imgs/main/Services/truck.svg" />
        </div>

        <div className={styles.service}>
          <h2>Морские перевозки</h2>

          <p>
            Bizning kompani palonchi inson tomonidan asos solingan bolib u 25
            yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq xodimlar
            ish korsatgan.
          </p>

          <img src="./assets/imgs/main/Services/ship.svg" />
        </div>

        <div className={styles.service}>
          <h2>Ж/Д перевозки</h2>

          <p>
            Bizning kompani palonchi inson tomonidan asos solingan bolib u 25
            yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq xodimlar
            ish korsatgan.
          </p>

          <img src="./assets/imgs/main/Services/train.svg" />
        </div>

        <div className={styles.service}>
          <h2>Авиа перевозки</h2>

          <p>
            Bizning kompani palonchi inson tomonidan asos solingan bolib u 25
            yil faoliyat korsatgan biz shun kunchaga 2000 mingdan ortiq xodimlar
            ish korsatgan.
          </p>

          <img src="./assets/imgs/main/Services/plane.png" />
        </div>
      </div>

      <div className={styles.links}>
        <h1>Shu sohaga bog’liq xizmatlar</h1>

        <div className={styles.linkbox}>
          <p>
            МУЛЬТИМОДАЛЬНЫЕ ПЕРЕВОЗКИ{" "}
            <img src="./assets/imgs/services/arrow_forward.svg" />
          </p>

          <p>
            УСЛУГИ ТАМОЖЕННОГО ДЕКЛАРИРОВАНИЯ{" "}
            <img src="./assets/imgs/services/arrow_forward.svg" />
          </p>

          <p>
            КВАРТИРНЫЙ ПЕРЕЕЗД{" "}
            <img src="./assets/imgs/services/arrow_forward.svg" />
          </p>

          <p>
            КУРЬЕРСКАЯ СЛУЖБА{" "}
            <img src="./assets/imgs/services/arrow_forward.svg" />
          </p>
        </div>

        <p className={styles.txt}>
          Our safety led approach can ensure that your site is kept free of
          accidents, injuries or the need to take urgent remedial action. Your
          management team is then free to concentrate on building the project,
          safe in the knowledge that facilities, systems and procedures are in
          place to ensure the safe and effective progression of the construction
          project through to completion, within a fixed budget.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
