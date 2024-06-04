import { Box, Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ExpenseHeader from "../../components/ExpenseHeader";
import IncomeExpense from "../../components/IncomeExpense";
import Summary from "../../components/Summary";
import Transection from "../../components/Transection";
import TransectionModal from "../../components/TransectionModal";

const ExpenseApp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <ExpenseHeader onOpen={onOpen} />
      <Flex
        justifyContent={"space-evenly"}
        width={"full"}
        mt={"8"}>
        <IncomeExpense />
        <Summary />
      </Flex>
      <Flex
        justifyContent={"space-evenly"}
        m={"5"}
        gap={"5"}>
        <Flex
          w={"full"}
          flexDirection={"column"}
          justifyContent={"centerIncome"}
          alignItems={"center"}>
          <Heading
            p={"2"}
            borderRadius={"5"}
            shadow={"md"}
            textAlign={"center"}
            bg={"blue.100"}
            w={"full"}>
            Income
          </Heading>
          <Transection />
        </Flex>
        <Flex
          w={"full"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Heading
            p={"2"}
            borderRadius={"5"}
            shadow={"md"}
            textAlign={"center"}
            bg={"blue.100"}
            w={"full"}>
            Expenses
          </Heading>
          <Transection />
        </Flex>
      </Flex>
      <TransectionModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default ExpenseApp;
