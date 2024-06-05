import { Box, Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ExpenseHeader from "../../components/ExpenseHeader";
import IncomeExpense from "../../components/IncomeExpense";
import Summary from "../../components/Summary";
import Transection from "../../components/Transection";
import TransectionModal from "../../components/TransectionModal";
import { useSelector } from "react-redux";

const ExpenseApp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const expenseData = useSelector((state) => state.expenseApp.expenseData);
  const incomeData = useSelector((state) => state.expenseApp.incomeData);

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
          {incomeData && incomeData.length
            ? incomeData.map((incItem, index) => {
                return incItem.type === "income" ? (
                  <Transection
                    key={`income-${index}`}
                    color='success'
                    title={incItem.detail}
                    desc={incItem.amount}
                  />
                ) : null;
              })
            : null}
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
          {expenseData && expenseData.length
            ? expenseData.map((expItem, index) => {
                return expItem.type === "expense" ? (
                  <Transection
                    key={`expense-${index}`}
                    color='error'
                    title={expItem.detail}
                    desc={expItem.amount}
                  />
                ) : null;
              })
            : null}
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
