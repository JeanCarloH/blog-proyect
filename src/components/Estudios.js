import { Grid } from "@mui/material";
import FeaturedPost from "./FeaturedPost";
import MainFeaturedPost from "./MainFeaturedPost";

function Estudios({ handleOpen }) {
  const mainFeaturedPost = {
    title: "Juan Camilo Muñoz López",
    description:
      "A continuación se podrán ver diferentes documentos que certifican mi educación.",
    image: "https://placeimg.com/1080/1620/arch",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  const featuredPosts = [
    {
      title: "Técnico en programación de software",
      date: "2014 - 2016",
      description:
        "Carrera realizada en la Institución Educativa San Cristóbal 🎓.",
      image: "/certificados/tecnica.png",
      imageLabel: "Imagen diploma tecnico",
      images: ["/certificados/tecnica.png"],
    },
    {
      title: "Tecnólogo en análisis y desarrollo de sistemas de información",
      date: "2016 - 2018",
      description:
        "Carrera realizada en el Servicio Nacional de Aprendizaje (Sena) 🎓.",
      image: "/certificados/tecnologia.png",
      imageLabel: "Imagen diploma tecnólogo",
      images: ["/certificados/tecnologia.png"],
    },
    {
      title: "Curso fundamentos de programación con JavaScript, HTML y CSS",
      date: "2020",
      description:
        "Curso de la universidad de Duke realizado a través de Coursera 🎓.",
      image: "/certificados/coursera1.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/coursera1.png"],
    },
    {
      title: "Curso principios de diseño de software con Java",
      date: "2020",
      description:
        "Curso de la universidad de Duke realizado a través de Coursera 🎓.",
      image: "/certificados/coursera2.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/coursera2.png"],
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

export default Estudios;
