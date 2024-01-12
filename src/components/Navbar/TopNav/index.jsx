import styles from "./index.module.scss";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "assets/icons/logoIcon";
import MenuIcon from "assets/icons/menuIcon";
import { topNavData } from "utils/constants/constants";
import { onActiveStyle } from "utils/constants/constants";

const TopNav = ({ isOpen, onToggle, color }) => {
  const onActive = ({ isActive }) => (isActive ? onActiveStyle : null);

  return (
    <Flex className={styles.topNav}>
      <Link to="/">
        <LogoIcon clr={color} w="150px" h="25px" />
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
        <Text display={{ base: "none", sm: "none", lg: "flex" }}>Menu</Text>

        <MenuIcon clr={color} />
      </Flex>
    </Flex>
  );
};

export default TopNav;
