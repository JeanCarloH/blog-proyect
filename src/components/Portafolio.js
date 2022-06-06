import { Grid } from "@mui/material";
import FeaturedPost from "./FeaturedPost";
import MainFeaturedPost from "./MainFeaturedPost";
import Button from '@mui/material/Button';

function Portafolio({ handleOpen }) {
  const mainFeaturedPost = {
    title: "Bienvenidos a mi blog.",
    description:
      "",
    image: "logoPersonal/logoreal.png",
    imageText: "main image description",
    linkText: "Continue reading…",
  };
  
  
  const featuredPosts = [
    {
      title: "Juego en Unityxd",
      date: "2020",
      description:
        "App de escritorio desarrollada por Jean Carlo Herrera  y Juan Camilo Muñoz usando Unity ",
      image: "/imagenesPortafolio/juego1.png",
      imageLabel: "Imagen aplicación de Unity",
      images: ["/imagenesPortafolio/juego1.png", "/imagenesPortafolio/juego2.png", "/imagenesPortafolio/juego3.png",
      "/imagenesPortafolio/juego4.png", "/imagenesPortafolio/juego5.png", "/imagenesPortafolio/juego6.png",
      "/imagenesPortafolio/juego7.png","/imagenesPortafolio/juego8.png", "/imagenesPortafolio/juego9.png", 
      "/imagenesPortafolio/juego10.png", "/imagenesPortafolio/juego11.png",],
      url:null
    },
    {
      title: "Hoja de vida",
      date: "2022",
      description:
        "Esta es mi hoja de vida, revisala! ",
      image: "/CV/hojadevida1.png",
      imageLabel: "Imagen aplicación de Unity",
      images: ["/CV/hojadevida1.png", "/CV/hojadevida2.png"],
      url:"mui.com/material-ui/react-button/#main-content"
    }
  ];

  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={6}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} handleOpen={handleOpen} />
        ))}
        
        
      </Grid>
    
        
    </>
  );
}

export default Portafolio;
