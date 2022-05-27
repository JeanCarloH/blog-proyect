import { Grid } from "@mui/material";
import FeaturedPost from "./FeaturedPost";
import MainFeaturedPost from "./MainFeaturedPost";
import ImageEximo from "../assets/eximo/3.png";
import ImageNinnaytato from "../assets/ninnaytato/1.png";
import ImageSongsearch from "../assets/songsearch/1.png";

function Portafolio() {
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

  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </>
  );
}

export default Portafolio;
