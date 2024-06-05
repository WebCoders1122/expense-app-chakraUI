import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const IncomeExpense = () => {
  const totalIncome = useSelector((state) => state.expenseApp.totalIncome);
  const totalExpense = useSelector((state) => state.expenseApp.totalExpense);

  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5"}
        m={"10"}
        w={"full"}>
        <Heading size={"lg"}>Balance ${totalIncome - totalExpense}</Heading>
        <Text
          color={"blue.600"}
          fontSize={"2xl"}
          as={"b"}>
          Income : ${totalIncome}
        </Text>
        <Text
          color={"red.600"}
          fontSize={"2xl"}
          as={"b"}>
          Expense : ${totalExpense}
        </Text>
      </Flex>
    </>
  );
};

export default IncomeExpense;
