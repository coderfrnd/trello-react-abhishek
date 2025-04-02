import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import trelloLogo from "./trello.png";

const Navbar = () => {
  return (
    <Box bg="#1976D2" w="100vw" p="2" color="white">
      <Flex>
        <Center>
          <Image src={trelloLogo} h="40px" p="2" />
          <Text textStyle="2xl" fontWeight="600">
            Trello
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};

export default Navbar;
