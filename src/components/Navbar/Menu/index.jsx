import { Collapse, Fade, Flex, Image, Slide, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import LogoIcon from "assets/icons/logoIcon";
import MenuCloseIcon from "assets/icons/menuCloseIcon";
import { desktopLink } from "utils/constants/constants";
import { mobileLink } from "utils/constants/constants";

export default function Menu({ isOpen, onClose }) {
  const onMenuActive = ({ isActive }) =>
    isActive ? styles.menuActive : styles.menu;

  const onClick = (clr) => {
    onClose();
  };
  return (
    <Slide
      in={isOpen}
      className={styles.menubar}
      transition={{ exit: { duration: 0.4 }, enter: { duration: 0.5 } }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        className={styles.top}
      >
        <LogoIcon clr="black" w="120px" h="25px" />

        <Flex gap="7px" onClick={onClose} cursor="pointer" alignItems="center">
          <Text
            color="black"
            fontSize="16px"
            fontWeight="600"
            display={{ base: "none", sm: "none", lg: "flex" }}
          >
            Close
          </Text>

          <MenuCloseIcon clr="black" />
        </Flex>
      </Flex>

      <Flex
        className={styles.bottom}
        flexDir={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "row",
          xl: "row",
        }}
      >
        <Flex
          className={styles.desktop}
          p={{ base: "20px 0px", sm: "20px 0px", lg: "40px" }}
          color="white"
          rounded="md"
          flexDir="column"
          flex="1"
        >
          {desktopLink.map((link) => {
            return (
              <NavLink
                to={link.to}
                onClick={onClose}
                className={onMenuActive}
                key={link.to}
              >
                {link.title}
              </NavLink>
            );
          })}
        </Flex>

        <Flex
          p={{ base: "20px 0px", sm: "20px 0px", lg: "40px" }}
          color="white"
          rounded="md"
          flexDir="column"
          flex="1"
          className={styles.mobile}
        >
          {mobileLink.map((link) => {
            return (
              <NavLink
                to={link.to}
                onClick={onClose}
                className={onMenuActive}
                key={link.to}
              >
                {link.title}
              </NavLink>
            );
          })}
        </Flex>

        <Flex
          flexDir={{ base: "row", sm: "row", md: "column", xl: "column" }}
          gap="30px"
          shadow="none"
          flex="1"
          mt="40px"
          alignItems="flex-end"
        >
          <Image
            w="50px"
            src="./assets/imgs/navbar/phone.svg"
            cursor="pointer"
          />
          <Image w="50px" src="./assets/imgs/navbar/lan.svg" cursor="pointer" />
        </Flex>
      </Flex>
    </Slide>
  );
}
