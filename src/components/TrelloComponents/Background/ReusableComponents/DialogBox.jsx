import React, { useState } from "react";
import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Textarea,
  VStack,
} from "@chakra-ui/react";
const DialogBox = ({ name, handleClick }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <VStack alignItems="start" p="2">
      <Dialog.Root>
        <Dialog.Trigger asChild p="40px">
          <Button variant="outline">{name}</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Body pb="8">
                <Textarea
                  placeholder="Add a note"
                  mt="8"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button mt="4" onClick={() => handleClick(inputValue)}>
                  ADD BOARD
                </Button>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </VStack>
  );
};

export default DialogBox;
