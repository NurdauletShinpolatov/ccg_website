import styles from "./index.module.scss";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "assets/icons/logoIcon";
import MenuIcon from "assets/icons/menuIcon";
import MenuCloseIcon from "assets/icons/menuCloseIcon";

// data for topNav
const topNavData = [
  { title: "Company", to: "/company" },
  { title: "Our services", to: "/services" },
  { title: "Contact us", to: "/contact-us" },
];

// styles for avtive state of NavLink
const onActiveStyle = {
  borderBottom: `2px solid #000`,
  transition: "0.4s",
};

const TopNav = ({ isOpen, onToggle }) => {
  const onActive = ({ isActive }) => (isActive ? onActiveStyle : null);

  return (
    <Flex className={styles.topNav}>
      <Link to="/">
        {/* <Image
          src="./assets/imgs/navbar/logo-black.svg"
          w={{ sm: "120px", lg: "150px" }}
        /> */}
        <LogoIcon clr="#fff" w="150px" h="25px" />
      </Link>

      {!isOpen && (
        <Flex
          as="nav"
          gap="40px"
          display={{ base: "none", sm: "none", lg: "flex" }}
        >
          {topNavData.map((nav) => (
            <NavLink
              key={nav.title}
              style={onActive}
              className={styles.navlink}
              to={nav.to}
            >
              {nav.title}
            </NavLink>
          ))}
        </Flex>
      )}

      <Flex className={styles.menu} onClick={onToggle}>
        <Text display={{ base: "none", sm: "none", lg: "flex" }}>
          {!isOpen ? "Menu" : "Close"}
        </Text>

        {!isOpen && <MenuIcon clr="#fff" />}
        {isOpen && <MenuCloseIcon clr="#fff" />}
      </Flex>
    </Flex>
  );
};

export default TopNav;
