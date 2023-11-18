import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColormodeSwitch from "../ColorModeSwitch/ColormodeSwitch";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColormodeSwitch />
    </HStack>
  );
};

export default Navbar;
