import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const IncomeExpense = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5"}
        m={"10"}
        w={"full"}>
        <Heading size={"lg"}>Balance $1000</Heading>
        <Text
          color={"blue.600"}
          fontSize={"2xl"}
          as={"b"}>
          Income : $2500
        </Text>
        <Text
          color={"red.600"}
          fontSize={"2xl"}
          as={"b"}>
          Expense : $1500
        </Text>
      </Flex>
    </>
  );
};

export default IncomeExpense;
