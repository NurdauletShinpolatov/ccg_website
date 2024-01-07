import LinkedinIcon from "assets/icons/linkedinIcon";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "assets/icons/facebookIcon";
import LogoIcon from "assets/icons/logoIcon";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <LogoIcon clr="white" w="150px" h="25px" />
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
              <LinkedinIcon clr="white" />
            </a>
            <a>
              <FacebookIcon clr="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
