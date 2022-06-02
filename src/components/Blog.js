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
import { useState } from "react";
import { Box, Grid, ImageListItem, Modal } from "@mui/material";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  maxHeight: "70%",
};

export default function Blog() {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = (images) => {
    setImages(images);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Blog 💻" sections={sections} />
          <main>
            <Routes>
              <Route
                exact
                path="/"
                element={<Portafolio handleOpen={handleOpen} />}
              />
              <Route
                exact
                path="/estudios"
                element={<Estudios handleOpen={handleOpen} />}
              />
              <Route exact path="/acerca-de-mi" element={<AcercaDeMi />} />
              <Route
                exact
                path="/cosas-personales"
                element={<CosasPersonales />}
              />
              <Route path="*" element={Error404} />
            </Routes>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Grid container spacing={2} justifyContent="center">
                  {images.map((image) => (
                    <Grid item>
                      <ImageListItem
                        sx={{
                          width: { sm: 400, md: 600 },
                          height: { sm: 400, md: 600 },
                        }}
                      >
                        <img src={image} alt={image} />
                      </ImageListItem>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Modal>
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
