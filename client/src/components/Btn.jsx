import React from "react";
import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoginButton from "./Auth/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Btn() {
  const theme = useTheme();

  const { isAuthenticated } = useAuth0();

  const scrollToFeatures = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <React.Fragment>
      <Box sx={theme.display.flexDisplayRow}>
        <Button
          variant="contained"
          sx={theme.button.featuresBtn}
          disableRipple
          disableElevation
          onClick={scrollToFeatures} // Add onClick event handler
        >
          Features
        </Button>
        {isAuthenticated ? (
          <Button variant="outlined">
            <Link
              to="/mood"
              style={{ textDecoration: "none", color: "#2b3467" }}
            >
              Mood Tracker
            </Link>
          </Button>
        ) : (
          <LoginButton />
        )}
      </Box>
    </React.Fragment>
  );
}

export default Btn;
