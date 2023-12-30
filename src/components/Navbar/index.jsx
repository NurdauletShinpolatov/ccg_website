import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import Menu from "./Menu";

export default function Navbar() {
  const onActiveStyle = {
    borderBottom: `2px solid #000`,
    transition: "0.4s",
  };

  const { isOpen, onToggle, onClose } = useDisclosure();

  const onActive = ({ isActive }) => (isActive ? onActiveStyle : null);

  return (
    <Flex
      justifyContent="space-between"
      p="42px 7%"
      bg="red"
      color="#000"
      fontSize="16px"
      fontWeight="600"
      pos="sticky"
      top="0px"
      left="0px"
      right="0px"
      flexDir="column"
      maxH="100vh"
    >
      <Flex justifyContent="space-between">
        <Link to="/">
          <Image
            src="./assets/imgs/navbar/logo-black.svg"
            w={{ sm: "120px", lg: "150px" }}
          />
        </Link>

        {!isOpen && (
          <Flex as="nav" gap="40px" display={{ base: "none", sm: "none", lg: "flex" }}>
            <NavLink style={onActive} className={styles.navlink} to="/company">
              Company
            </NavLink>

            <NavLink style={onActive} className={styles.navlink} to="/services">
              Our Services
            </NavLink>

            <NavLink
              style={onActive}
              className={styles.navlink}
              to="/contact-us"
            >
              Contact us
            </NavLink>
          </Flex>
        )}

        <Flex alignItems="center" gap="7px" cursor="pointer" onClick={onToggle}>
          <Text>{!isOpen ? "Menu" : "Close"}</Text>
          <Image
            src={`./assets/imgs/navbar/${!isOpen ? "menu-black" : "close"}.svg`}
          />
        </Flex>
      </Flex>

      <Menu onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
}
