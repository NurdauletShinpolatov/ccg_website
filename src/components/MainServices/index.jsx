import styles from "./MainServices.module.scss";

export default function MainServices() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.service}>
        <h1>Грузоперевозки Transceka</h1>

        <p>
          Комплексные логистические решения, включащие несколько видов
          грузоперевозок.
        </p>

        <div className={styles.icons}>
          <img src="src/assets/imgs/main/Services/truck.svg" />
          <img src="src/assets/imgs/main/Services/ship.svg" />
          <img src="src/assets/imgs/main/Services/train.svg" />
          <img src="src/assets/imgs/main/Services/plane.png" />
        </div>
      </div>

      <div className={styles.service}>
        <h1>Авто-перевозки</h1>

        <div className={styles.icons}>
          <img src="src/assets/imgs/main/Services/truck.svg" />
        </div>
      </div>

      <div className={styles.service}>
        <h1>Морские перевозки</h1>

        <div className={styles.icons}>
          <img src="src/assets/imgs/main/Services/ship.svg" />
        </div>
      </div>

      <div className={styles.service}>
        <h1>Ж/Д перевозки</h1>

        <div className={styles.icons}>
          <img src="src/assets/imgs/main/Services/train.svg" />
        </div>
      </div>

      <div className={styles.service}>
        <h1>Авиа перевозки</h1>

        <div className={styles.icons}>
          <img src="src/assets/imgs/main/Services/plane.png" />
        </div>
      </div>

      <div className={styles.links}>
        <h1>Сопутствующие услуги</h1>

        <div className={styles.linkwrapper}>
          <p>МУЛЬТИМОДАЛЬНЫЕ ПЕРЕВОЗКИ</p>
          <p>УСЛУГИ ТАМОЖЕННОГО ДЕКЛАРИРОВАНИЯ</p>
          <p>КВАРТИРНЫЙ ПЕРЕЕЗД</p>
          <p>КУРЬЕРСКАЯ СЛУЖБА</p>
        </div>
      </div>
    </div>
  );
}
