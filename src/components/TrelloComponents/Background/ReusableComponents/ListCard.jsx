import React, { useEffect, useState } from "react";
import { Box, Text, Input, Button, VStack, Flex } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import {
  createCard,
  getCardsOnEachList,
} from "../../Utils/fetchingDataFunctions";
import Cards from "./Card";
const ListCard = ({ listName, cardName, cardDesc, id, handleDeleteList }) => {
  const [takeInput, setTakeInput] = useState("");
  const [getCards, setgetCards] = useState([]);
  const [openInput, setopenInput] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        let response = await getCardsOnEachList(id);
        setgetCards(response.data);
      } catch (error) {
        console.log(error, "getting in cards details for each list");
      }
    })();
  }, []);

  async function handleInputValue(id) {
    if (!takeInput) {
      setopenInput(!openInput);
      return;
    }
    let res = await createCard(id, takeInput);
    if (res) {
      setgetCards((prev) => [...prev, { name: takeInput }]);
    }
    setopenInput(!openInput);
    setTakeInput("");
  }

  return (
    <>
      <Box
        bg="blue.200"
        p="2"
        m="3"
        borderRadius="md"
        w="380px"
        height="100%"
        boxShadow="md"
      >
        <Flex>
          <Text fontSize="lg" fontWeight="bold" mb="4">
            {listName}
          </Text>
          <Text
            fontSize="lg"
            fontWeight="bold"
            mb="4"
            ml="205px"
            cursor="pointer"
            onClick={() => handleDeleteList(id)}
          >
            Delete List
          </Text>
        </Flex>
        <VStack spacing="2" align="stretch">
          <Box bg="orange.50" p="2" borderRadius="md" boxShadow="sm">
            <Text>{cardDesc}</Text>
          </Box>
        </VStack>
        <Flex
          flexDirection="column"
          height="fit"
          maxHeight="750px"
          overflowY="auto"
          p="2"
          w="360px"
        >
          {getCards.map((ele) => {
            return <Cards cardName={ele.name} key={ele.id} />;
          })}
        </Flex>
        {openInput && (
          <Input
            placeholder="Add Card"
            border="2px solid black"
            p="2"
            mt="3"
            onChange={(e) => setTakeInput(e.target.value)}
          />
        )}
        <Flex>
          <Button
            mt="2"
            mb="3"
            size="sm"
            w={`${takeInput ? "80%" : "100%"}`}
            colorScheme="blue"
            variant="outline"
            onClick={() => handleInputValue(id)}
          >
            + ADD A CARD
          </Button>
          {openInput && (
            <Box
              as={MdDelete}
              w="26px"
              h="20px"
              mt="3"
              ml="2"
              cursor="pointer"
              onClick={() => setopenInput(!openInput)}
            />
          )}
        </Flex>
      </Box>
    </>
  );
};

export default ListCard;
