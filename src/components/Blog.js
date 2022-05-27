import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import Error404 from "./Error404";
import Portafolio from "./Portafolio";
import Estudios from "./Estudios";

const sections = [
  { title: "Portafolio", url: "/" },
  { title: "Estudios", url: "/estudios" },
  { title: "Acerca de mí", url: "#" },
  { title: "Cosas personales", url: "#" },
];

const social = [
  { name: "GitHub", icon: GitHubIcon, url: "https://github.com/Juancml1913" },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/juan-camilo-muñoz-lópez-ba287b1b4/",
  },
];

const theme = createTheme();

export default function Blog() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Blog" sections={sections} />
          <main>
            <Routes>
              <Route exact path="/" element={<Portafolio />} />
              <Route exact path="/estudios" element={<Estudios />} />
              <Route path="*" element={Error404} />
            </Routes>
          </main>
        </Container>
        <Footer
          title="Footer"
          description="Gracias por visitar mi blog :D"
          social={social}
        />
      </ThemeProvider>
    </HashRouter>
  );
}
