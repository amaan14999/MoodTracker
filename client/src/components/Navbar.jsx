import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const theme = useTheme();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <React.Fragment>
      <Box sx={theme.navbar}>
        <Box>
          <Box sx={theme.button.navBtn}>F.</Box>
        </Box>

        <Box sx={theme.display.flexDisplayRow}>
          <Button
            variant="text"
            sx={theme.button.navBtn}
            disableRipple
            disableElevation
          >
            Home
          </Button>
          <Button
            variant="text"
            sx={theme.button.navBtn}
            disableRipple
            disableElevation
          >
            Features
          </Button>
          {isAuthenticated ? (
            <>
              <LogoutButton />
            </>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Navbar;
