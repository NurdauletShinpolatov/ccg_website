import { Flex, Heading } from "@chakra-ui/react";
import MainLink from "components/MainLink";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <Flex flexDir="column" justifyContent="center" className={styles.header}>
      <Heading className={styles.subheading}>
        Delivering full construction logistics solutions on large and complex
        projects, with build values of over £1 billion.
      </Heading>

      <Heading className={styles.heading}>
        Transceka & egs Construction Logistics
      </Heading>

      <MainLink linkTo="/company" color="#fff">
        Find Out More{" "}
      </MainLink>
    </Flex>
  );
}
