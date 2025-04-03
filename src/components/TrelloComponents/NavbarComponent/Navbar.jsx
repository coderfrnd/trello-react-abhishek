import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import trelloLogo from "./trello.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <Box
      bg="#1976D2"
      w="100%"
      minW="100vw"
      h="56px"
      color="white"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
      display="flex"
      alignItems="center"
      px="16px"
      boxShadow="md"
    >
      <Link to="/">
        {" "}
        <Image src={trelloLogo} h="36px" />
      </Link>
      <Link to="/">
        <Text fontSize="xl" fontWeight="bold" ml="8px">
          Trello
        </Text>
      </Link>
    </Box>
  );
};

export default Navbar;
