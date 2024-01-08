import { Flex, useDisclosure } from "@chakra-ui/react";
import Menu from "./Menu";
import TopNav from "./TopNav";
import { useState } from "react";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [color, setColor] = useState("white");

  return (
    <Flex
      color={color}
      style={{ color: color }}
      background={isOpen ? "gray" : "none"}
      padding="42px 7%"
      position="absolute"
      top="0"
      left="0"
      right="0"
      justifyContent="space-between"
      flexDirection="column"
      zIndex="2"
    >
      <TopNav
        isOpen={isOpen}
        onToggle={onToggle}
        setColor={setColor}
        color={color}
      />
      <Menu onClose={onClose} isOpen={isOpen} setColor={setColor} />
    </Flex>
  );
};

export default Navbar;
