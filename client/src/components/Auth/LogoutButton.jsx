import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import Profile from "./Profile";

const LogoutButton = () => {
  const theme = useTheme();
  const { logout } = useAuth0();

  return (
    <React.Fragment>
      <Box sx={theme.display.flexDisplayRow}>
        <Button
          variant="text"
          sx={theme.button.logBtn}
          disableRipple
          disableElevation
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </Button>
        <Profile />
      </Box>
    </React.Fragment>
  );
};

export default LogoutButton;
