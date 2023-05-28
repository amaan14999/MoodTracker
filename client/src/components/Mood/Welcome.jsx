import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography, Button } from "@mui/material";
import Stats from "./Stats";
import WeeklyChart from "./WeeklyChart";
import Modal from "./Modal";
import { useAuth0 } from "@auth0/auth0-react";

function Welcome() {
  const theme = useTheme();
  const { user } = useAuth0();

  console.log(user);

  const { user } = useAuth0();

  return (
    <React.Fragment>
      <Box sx={theme.display}>
        <Box sx={theme.moodPage.welcome}>
          <Typography variant="h3">Hey, {user.name}!👋</Typography>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography variant="subtitle">How was your day today?</Typography>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Modal />
          </Box>
        </Box>
        <Stats />
        <WeeklyChart />
      </Box>
    </React.Fragment>
  );
}

export default Welcome;
