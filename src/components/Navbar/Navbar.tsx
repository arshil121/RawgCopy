import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColormodeSwitch from "../ColorModeSwitch/ColormodeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <ColormodeSwitch />
    </HStack>
  );
};

export default Navbar;
