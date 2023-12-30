import { Collapse, Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

export default function Menu({ isOpen, onClose }) {
  const onMenuActive = ({ isActive }) =>
    isActive ? styles.menuActive : styles.menu;

  return (
    <Collapse
      in={isOpen}
      transition={{ exit: { duration: 0.4 }, enter: { duration: 0.5 } }}
    >
      <Flex>
        <Flex
          p={{ base: "20px 0px", sm: "20px 0px", lg: "40px" }}
          color="white"
          mt="4"
          rounded="md"
          flexDir="column"
          flex="1"
        >
          <NavLink to="/" onClick={onClose} className={onMenuActive}>
            Main
          </NavLink>
          <NavLink to="/company" onClick={onClose} className={onMenuActive}>
            Company
          </NavLink>
          <NavLink
            to="/certifications"
            onClick={onClose}
            className={onMenuActive}
          >
            Certifications
          </NavLink>
          <NavLink to="/news" onClick={onClose} className={onMenuActive}>
            News
          </NavLink>
          <NavLink to="/services" onClick={onClose} className={onMenuActive}>
            Services
          </NavLink>
          <NavLink to="/contact-us" onClick={onClose} className={onMenuActive}>
            Contact us
          </NavLink>
        </Flex>
        <Flex
          flexDir={{ base: "row", sm: "row", lg: "column" }}
          gap="30px"
          shadow="none"
          flex="1"
          mt="40px"
          alignItems="flex-end"
        >
          <Image
            w="50px"
            src="src/assets/imgs/navbar/phone.svg"
            cursor="pointer"
          />
          <Image
            w="50px"
            src="src/assets/imgs/navbar/lan.svg"
            cursor="pointer"
          />
        </Flex>
      </Flex>
    </Collapse>
  );
}
