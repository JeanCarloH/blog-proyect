import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import Error404 from "./Error404";
import Portafolio from "./Portafolio";
import Estudios from "./Estudios";
import AcercaDeMi from "./AcercaDeMi";
import CosasPersonales from "./CosasPersonales";

const sections = [
  { title: "Portafolio", url: "/" },
  { title: "Estudios", url: "/estudios" },
  { title: "Acerca de mí", url: "/acerca-de-mi" },
  { title: "Cosas personales", url: "/cosas-personales" },
];

const social = [
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    url: "https://api.whatsapp.com/send?phone=573153838758",
  },

  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/juan-camilo-muñoz-lópez-ba287b1b4/",
  },
  { name: "GitHub", icon: GitHubIcon, url: "https://github.com/Juancml1913" },
];

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Blog() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Blog 💻" sections={sections} />
          <main>
            <Routes>
              <Route exact path="/" element={<Portafolio />} />
              <Route exact path="/estudios" element={<Estudios />} />
              <Route exact path="/acerca-de-mi" element={<AcercaDeMi />} />
              <Route
                exact
                path="/cosas-personales"
                element={<CosasPersonales />}
              />
              <Route path="*" element={Error404} />
            </Routes>
          </main>
        </Container>
        <Footer
          title="Gracias por visitar mi blog 😎👍"
          description="Este sitio web fue desarrollado con ReactJs"
          social={social}
        />
      </ThemeProvider>
    </HashRouter>
  );
}
