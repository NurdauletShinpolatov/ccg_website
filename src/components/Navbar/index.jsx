import { Flex, useDisclosure } from "@chakra-ui/react";
import Menu from "./Menu";
import TopNav from "./TopNav";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const { isOpen, onToggle, onClose } = useDisclosure();
  const [color, setColor] = useState("white");

  useEffect(() => {
    if (pathname === "/") {
      setColor("white");
    } else {
      setColor("black");
    }
  }, [pathname]);

  return (
    <Flex
      color={color}
      style={{ color: color }}
      background={isOpen ? "gray" : "none"}
      padding={{ base: "50px 4%", md: "50px 7%" }}
      position="absolute"
      top="0"
      left="0"
      right="0"
      justifyContent="space-between"
      flexDirection="column"
      zIndex="2"
    >
      <TopNav isOpen={isOpen} onToggle={onToggle} color={color} />

      <Menu onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default Navbar;
