import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColormodeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColormodeSwitch;
