import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src="src/assets/imgs/navbar/logo-white.svg" />
      </div>

      <div className={styles.links}>
        <div className={styles.linkelement}>
          <h1>Services</h1>

          <div className={styles.linkbox}>
            <Link>Asosiy</Link>
            <Link>Biz haqimizda</Link>
            <Link>Contact us</Link>
          </div>
        </div>

        <div className={styles.linkelement}>
          <h1>Kompaniya</h1>

          <div className={styles.linkbox}>
            <Link>Sertifikat</Link>
            <Link>Yangiliklar</Link>
          </div>
        </div>

        <div className={styles.linkelement}>
          <h1>Legal</h1>

          <div className={styles.linkbox}>
            <Link>Cookies</Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>

        <div className={styles.linkelement}>
          <h1>Social</h1>

          <div className={styles.social}>
            <a>
              <img src="src/assets/imgs/footer/u_linkedin.svg" />
            </a>
            <a>
              <img src="src/assets/imgs/footer/u_facebook.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
