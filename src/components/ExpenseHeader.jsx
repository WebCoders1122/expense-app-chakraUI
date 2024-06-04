import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const ExpenseHeader = ({ onOpen }) => {
  return (
    <>
      <Flex
        p={"3"}
        justifyContent={"space-around"}
        bg={"gray.100"}>
        <Heading
          color={"blue.600"}
          size='xl'>
          React Expense App With ChakraUI
        </Heading>
        <Button
          onMouseDown={onOpen}
          bg={"blue.600"}
          color={"#fff"}
          _hover={{ bg: "gray.200", color: "black" }}>
          Add New Transection
        </Button>
      </Flex>
    </>
  );
};

export default ExpenseHeader;
