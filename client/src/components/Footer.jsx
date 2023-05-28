import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();
  return (
    <Box>
      <div className="Footer">
        <div>
          <Typography
            variant="h3"
            style={{
              color: "#2b3467",
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
            textAlign="center"
          >
            <hr />
            Contact Us
          </Typography>
        </div>
        <div>
          <Typography
            variant="h5"
            style={{
              justifyContent: "center",
              display: "flex",
              fontSize: "1rem",
            }}
          >
            <a href="https://github.com/Himanshu-370">Himanshu</a> |
            <a href="https://github.com/Gazal026">Gazal</a> |
            <a href="https://github.com/Charuhas10">Charuhas</a> |
            <a href="https://github.com/amaan14999">Amaan</a>
          </Typography>
          <br />
          <Typography
            variant="h5"
            style={{
              justifyContent: "center",
              display: "flex",
              fontSize: "1rem",
            }}
          >
            ©MoodKalender
          </Typography>
        </div>
      </div>
    </Box>
  );
}

export default Footer;