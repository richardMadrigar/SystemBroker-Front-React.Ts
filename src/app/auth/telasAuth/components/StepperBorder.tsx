import React from "react";

import { Box } from "@mui/material";

import theme from "../../../../stylesTheme/Theme";

interface IPropsStepper {
  isBorder?: boolean;
}
function StepperBorder({ isBorder }: IPropsStepper) {
  return (
    <Box display="flex" mb="2rem">
      <Box
        mr="1rem"
        color={theme.home.color}
        sx={{ borderBottom: "3px solid", width: "20%" }}
      />
      <Box
        color={isBorder ? theme.home.color : "#D0E1Fd"}
        sx={{ borderBottom: "3px solid", width: "20%" }}
      />
    </Box>
  );
}

export default StepperBorder;
