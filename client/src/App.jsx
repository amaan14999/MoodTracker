import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";
import "./App.css";

import Navbar from "./components/navbar";
import { CssBaseline, Container } from "@mui/material";
import Hero from "./components/Hero";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Navbar />
          <Hero />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
