import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const LoginButton = () => {
  const theme = useTheme();

  const { loginWithRedirect } = useAuth0();

  return (
    <React.Fragment>
      <Button
        variant="text"
        sx={theme.button.logBtn}
        disableRipple
        disableElevation
        onClick={() =>
          loginWithRedirect({ redirectUri: `${window.location.origin}/mood` })
        }
      >
        Log In
      </Button>
    </React.Fragment>
  );
};

export default LoginButton;
