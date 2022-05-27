import { Grid } from "@mui/material";
import FeaturedPost from "./FeaturedPost";
import MainFeaturedPost from "./MainFeaturedPost";
import ImageTecnica from "../assets/certificados/tecnica.png";
import ImageTecnologia from "../assets/certificados/tecnologia.png";
import ImageCoursera1 from "../assets/certificados/coursera1.png";
import ImageCoursera2 from "../assets/certificados/coursera2.png";

function Estudios() {
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
      image: ImageTecnologia,
      imageLabel: "Imagen diploma tecnico",
    },
    {
      title: "Tecnólogo en análisis y desarrollo de sistemas de información",
      date: "2016 - 2018",
      description:
        "Carrera realizada en el Servicio Nacional de Aprendizaje (Sena) 🎓.",
      image: ImageTecnica,
      imageLabel: "Imagen diploma tecnólogo",
    },
    {
      title: "Curso fundamentos de programación con JavaScript, HTML y CSS",
      date: "2020",
      description:
        "Curso de la universidad de Duke realizado a través de Coursera 🎓.",
      image: ImageCoursera1,
      imageLabel: "Imagen diploma coursera",
    },
    {
      title: "Curso principios de diseño de software con Java",
      date: "2020",
      description:
        "Curso de la universidad de Duke realizado a través de Coursera 🎓.",
      image: ImageCoursera2,
      imageLabel: "Imagen diploma coursera",
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

export default Estudios;
