import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
// import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const theme = useTheme();

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  // const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect();
  };

  // React.useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/mood");
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <React.Fragment>
      <Button
        variant="text"
        sx={theme.button.logBtn}
        disableRipple
        disableElevation
        onClick={handleLogin}
      >
        Log In
      </Button>
    </React.Fragment>
  );
};

export default LoginButton;
