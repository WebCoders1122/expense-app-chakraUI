import { Alert, AlertDescription, AlertTitle, Box } from "@chakra-ui/react";
import React from "react";

const Transection = ({ color = "success", title = "Income", desc = "200" }) => {
  return (
    <Box
      borderRadius={"5"}
      m={"2"}
      shadow={"sm"}
      w={"full"}>
      <Alert status={color}>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>${desc}</AlertDescription>
      </Alert>
    </Box>
  );
};

export default Transection;
