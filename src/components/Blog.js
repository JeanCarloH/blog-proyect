import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import ImageEximo from "../assets/eximo/3.png";
import ImageNinnaytato from "../assets/ninnaytato/1.png";
import ImageSongsearch from "../assets/songsearch/1.png";

const sections = [
  { title: "Portafolio", url: "#" },
  { title: "Estudios", url: "#" },
  { title: "Acerca de mí", url: "#" },
  { title: "Cosas personales", url: "#" },
];

const mainFeaturedPost = {
  title: "Juan Camilo Muñoz López",
  description:
    "A continuación se podrán ver diferentes proyectos en los que he participado.",
  image: "https://placeimg.com/1080/1620/tech",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "App web contabilidad",
    date: "Nov 12",
    description:
      "App web desarrollada por Juan David Marulanda y Juan Camilo Muñoz usando Laravel",
    image: ImageEximo,
    imageLabel: "Imagen aplicación contabilidad",
  },
  {
    title: "App web guardería canina",
    date: "Nov 11",
    description:
      "App web desarrollada por Juan David Marulanda y Juan Camilo Muñoz usando VueJs y Laravel",
    image: ImageNinnaytato,
    imageLabel: "Imagen guardería canina",
  },
  {
    title: "App web buscador de canciones",
    date: "Nov 11",
    description: "App web desarrollada por Juan Camilo Muñoz usando ReactJs",
    image: ImageSongsearch,
    imageLabel: "Imagen buscador de canciones",
  },
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Gracias por visitar mi blog :D"
        social={social}
      />
    </ThemeProvider>
  );
}
