import { Grid } from "@mui/material";
import FeaturedPost from "./FeaturedPost";
import MainFeaturedPost from "./MainFeaturedPost";

function Portafolio({ handleOpen }) {
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
      date: "2020",
      description:
        "App web desarrollada por Juan David Marulanda y Juan Camilo Muñoz usando Laravel 💰.",
      image: "/eximo/3.png",
      imageLabel: "Imagen aplicación contabilidad",
      images: ["/eximo/1.png", "/eximo/2.png", "/eximo/3.png"],
    },
    {
      title: "App web guardería canina",
      date: "2022",
      description:
        "App web desarrollada por Juan David Marulanda y Juan Camilo Muñoz usando VueJs y Laravel 🐶.",
      image: "/ninnaytato/1.png",
      imageLabel: "Imagen guardería canina",
      images: [
        "/ninnaytato/1.png",
        "/ninnaytato/2.png",
        "/ninnaytato/3.png",
        "/ninnaytato/4.png",
      ],
    },
    {
      title: "App web buscador de canciones",
      date: "2022",
      description:
        "App web desarrollada por Juan Camilo Muñoz usando ReactJs 🎵.",
      image: "/songsearch/1.png",
      imageLabel: "Imagen buscador de canciones",
      images: ["/songsearch/1.png", "/songsearch/2.png", "/songsearch/3.png"],
    },
  ];

  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} handleOpen={handleOpen} />
        ))}
      </Grid>
    </>
  );
}

export default Portafolio;
