import React from "react";

// ? Fonts

import "./Styles/App.css";
import "@fontsource/roboto/700.css";
import "@fontsource/alatsi/400.css";
import "@fontsource/alata/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/aclonica/400.css";
import "@fontsource/abeezee/400.css";
import "@fontsource/noto-sans/900.css";

import bgImg from "./assets/background.jpg";

import HireMe from "./components/UI/HireMeButton";

// /m MUI Components

import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//  *  Components

import {
  Navbar,
  Hero,
  About,
  Work,
  Contact,
  Footer,
} from "./components/components";

const App = () => {
  const theme = createTheme({
    overrides: {
      MuiButton: {
        root: {
          "&:hover": {
            backgroundColor: "red",
          },
        },
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: "100vh",
            width: "100%",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            color: "#fff",
            transition: ".2s",
          }}
        >
          <HireMe />

          <Navbar />
          <Box sx={{ marginTop: "90px" }}>
            <Hero />
            <Box sx={{ p: "0 80px" }}>
              <About />
              <Work />
              <Contact />
            </Box>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
