import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "./Btn";

function Hero() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box sx={(theme.center, theme.display.flexDisplayCol)}>
        <Box>
          <Typography variant="h3" textAlign="center">
            Day by Day, your mood undergoes <br /> transformations.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">But What if you could see it!</Typography>
        </Box>
        <Box>
          <Button />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Hero;
