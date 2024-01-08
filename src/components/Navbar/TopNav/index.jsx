import styles from "./index.module.scss";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "assets/icons/logoIcon";
import MenuIcon from "assets/icons/menuIcon";

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

const TopNav = ({ isOpen, onToggle, setColor, color }) => {
  const onActive = ({ isActive }) => (isActive ? onActiveStyle : null);

  return (
    <Flex className={styles.topNav}>
      <Link to="/" onClick={() => setColor("white")}>
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
              onClick={() => setColor("black")}
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
