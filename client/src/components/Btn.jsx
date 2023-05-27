import React from "react";
import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Btn() {
  const theme = useTheme();
  
  return (
    <React.Fragment>
      <Box sx={theme.display.flexDisplayRow}>
        <Button variant="contained" sx={theme.button.featuresBtn}>
          Features
        </Button>
        <Button variant="contained" sx={theme.button.signupBtn}>
          Sign Up
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default Btn;
