import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography, Button } from "@mui/material";
import Stats from "./Stats";
import WeeklyChart from "./WeeklyChart";
import Modal from "./Modal";

function Welcome() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box sx={theme.display}>
        <Box sx={theme.moodPage.welcome}>
          <Typography variant="h3">Hey, Himanshu!👋</Typography>
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
