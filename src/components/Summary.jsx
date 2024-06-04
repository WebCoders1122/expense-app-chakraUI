import { Box } from "@chakra-ui/react";
import React from "react";
import Chart from "react-apexcharts";

const Summary = () => {
  const options = {
    series: [2500, 1500],
    labels: ["Income", "Expenses"],
    colors: ["#213ebf", "#FD5E53"],
    chart: {
      width: 250,
      type: "pie",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <Box
      w={"full"}
      ml={"400"}>
      <Chart
        options={options}
        series={options.series}
        type='pie'
        width={380}
        height={380}
      />
    </Box>
  );
};

export default Summary;
