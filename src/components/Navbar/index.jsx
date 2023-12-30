import { Flex, useDisclosure } from "@chakra-ui/react";
import Menu from "./Menu";
import TopNav from "./TopNav";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Flex
      color="#000"
      background="red"
      padding="42px 7%"
      position="sticky"
      top="0"
      left="0"
      right="0"
      maxH="100vh"
      justifyContent="space-between"
      flexDirection="column"
    >
      <TopNav isOpen={isOpen} onToggle={onToggle} />
      <Menu onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default Navbar;
