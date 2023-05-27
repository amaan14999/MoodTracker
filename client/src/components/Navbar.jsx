import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

function Navbar() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box sx={theme.navbar}>
        <Box>
          <Box>Logo</Box>
        </Box>

        <Box sx={theme.display.flexDisplayRow}>
          <Button variant="text" sx={theme.button.navBtn}>
            Item 1
          </Button>
          <Button variant="text" sx={theme.button.navBtn}>Item 2</Button>
          <Button variant="text">Item 3</Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Navbar;
