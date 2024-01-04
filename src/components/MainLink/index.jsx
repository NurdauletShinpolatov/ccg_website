import { Link } from "react-router-dom";
import styles from "./MainLink.module.scss";
import { Image } from "@chakra-ui/react";

export default function MainLink({ children, linkTo, color }) {
  return (
    <Link className={styles.link} to={linkTo} style={{ color: color }}>
      {children}{" "}
      <Image
        src={`src/assets/imgs/all/link${color === "black" ? "black" : ""}.png`}
      />
    </Link>
  );
}
