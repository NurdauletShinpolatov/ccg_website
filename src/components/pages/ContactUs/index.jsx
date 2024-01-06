import ContactForm from "components/ContactForm";
import styles from "./ContactUs.module.scss";

export default function ContactUs() {
  return (
    <div className={styles.contactus}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.59853954564!2d69.11455821309073!3d41.282479930389876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1704559167262!5m2!1sen!2s"
          loading="lazy"
        ></iframe>
      </div>

      <ContactForm />
    </div>
  );
}
