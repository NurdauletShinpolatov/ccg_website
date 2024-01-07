import styles from "./MainServices.module.scss";
import TruckIcon from "assets/icons/truckIcon";
import TrainIcon from "assets/icons/trainIcon";
import ShipIcon from "assets/icons/shipIcon";

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
          <TruckIcon clr="black" />
          <TrainIcon />
          <ShipIcon />
          <img src="./assets/imgs/main/Services/plane.png" />
        </div>
      </div>

      <div className={styles.service}>
        <h1>Авто-перевозки</h1>

        <div className={styles.icons}>
          <TruckIcon clr="black" />
        </div>
      </div>

      <div className={styles.service}>
        <h1>Морские перевозки</h1>

        <div className={styles.icons}>
          <ShipIcon />
        </div>
      </div>

      <div className={styles.service}>
        <h1>Ж/Д перевозки</h1>

        <div className={styles.icons}>
          <TrainIcon />
        </div>
      </div>

      <div className={styles.service}>
        <h1>Авиа перевозки</h1>

        <div className={styles.icons}>
          <img src="./assets/imgs/main/Services/plane.png" />
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
