import styles from "./MainTitle.module.scss";
import { Image } from "@chakra-ui/react";

export default function MainTitle({ children }) {
  return (
    <div className={styles.title}>
      <span>{children}</span>
      <Image src="./assets/imgs/main/dot.svg" />
    </div>
  );
}
