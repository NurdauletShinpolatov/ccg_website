import { Collapse, Fade, Flex, Image, Slide, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import LogoIcon from "assets/icons/logoIcon";
import MenuCloseIcon from "assets/icons/menuCloseIcon";

const linkData = [
  { to: "/", color: "white", title: "Main" },
  { to: "/company", color: "black", title: "Company" },
  { to: "/certifications", color: "black", title: "Certifications" },
  { to: "/news", color: "black", title: "News" },
  { to: "/services", color: "black", title: "Services" },
  { to: "/contact-us", color: "black", title: "Contact us" },
  { to: "/careers", color: "black", title: "Careers" },
];

export default function Menu({ isOpen, onClose, setColor }) {
  const onMenuActive = ({ isActive }) =>
    isActive ? styles.menuActive : styles.menu;

  const onClick = (clr) => {
    onClose();
    setColor(clr);
  };
  return (
    <Slide
      in={isOpen}
      // dir="top"
      style={{ background: "white", zIndex: 10, padding: "50px" }}
      transition={{ exit: { duration: 0.4 }, enter: { duration: 0.5 } }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <LogoIcon clr="black" w="120px" h="25px" />

        <Flex gap="7px" onClick={onClose} cursor="pointer">
          <Text color="black" fontSize="16px" fontWeight="600">
            Close
          </Text>

          <MenuCloseIcon clr="black" />
        </Flex>
      </Flex>

      <Flex
        flexDir={{ base: "column-reverse", sm: "column-reverse", lg: "row" }}
      >
        <Flex
          p={{ base: "20px 0px", sm: "20px 0px", lg: "40px" }}
          color="white"
          rounded="md"
          flexDir="column"
          flex="1"
        >
          {linkData.map((link) => {
            return (
              <NavLink
                to={link.to}
                onClick={() => onClick(link.color)}
                className={onMenuActive}
              >
                {link.title}
              </NavLink>
            );
          })}
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
            src="./assets/imgs/navbar/phone.svg"
            cursor="pointer"
          />
          <Image w="50px" src="./assets/imgs/navbar/lan.svg" cursor="pointer" />
        </Flex>
      </Flex>
    </Slide>
  );
}
