import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import Profile from "./Profile";

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
          loginWithRedirect({
            screen_hint: "signup",
            appState: { targetUrl: "/mood" },
          })
        }
      >
        Log In
      </Button>
    </React.Fragment>
  );
};

export default LoginButton;
