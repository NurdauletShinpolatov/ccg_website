import { Flex, useDisclosure } from "@chakra-ui/react";
import Menu from "./Menu";
import TopNav from "./TopNav";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Flex
      color="white"
      background={isOpen ? "gray" : "gray"}
      transition="0.5s"
      padding="42px 7%"
      position="fixed"
      top="0"
      left="0"
      right="0"
      // maxH="100vh"
      // h="100vh"
      justifyContent="space-between"
      flexDirection="column"
      zIndex="2"
    >
      <TopNav isOpen={isOpen} onToggle={onToggle} />
      <Menu onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default Navbar;
