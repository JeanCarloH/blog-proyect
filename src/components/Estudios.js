import { Grid } from "@mui/material";
import FeaturedPost from "./FeaturedPost";
import MainFeaturedPost from "./MainFeaturedPost";

function Estudios({ handleOpen }) {
  const mainFeaturedPost = {
    title: "Jean Carlo Herrera Delgado",
    description:
      "A continuación se podrán ver diferentes documentos que certifican mi educación.",
    image: "logoPersonal/logonuevo.png",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  const featuredPosts = [
    {
      title: "Introduction to Data Science in Python",
      date: "2021",
      description:
        "Course given by Michigan University through Coursera",
      image: "/certificados/certificado1.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/certificado1.png"],
    },
    {
      title: "Sistemas difusos",
      date: "2022",
      description:
        "Course given by Nacional University of Colombia through Coursera",
      image: "/certificados/certificado2.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/certificado2.png"],
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      date: "2020",
      description:
        "Course given by Duke University through Coursera",
      image: "/certificados/certificado3.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/certificado3.png"],
    },
    {
      title: "Neural Networks and Deep Learning",
      date: "2021",
      description:
        "Course given by DeepLearning.AI through Coursera",
      image: "/certificados/certificado4.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/certificado4.png"],
    },
    {
      title: "Java Programming: Solving Problems with Software",
      date: "2020",
      description:
        "Course given by Duke University through Coursera",
      image: "/certificados/certificado5.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/certificado5.png"],
    },
    {
      title: "Deep Learning in Computer Vision",
      date: "2021",
      description:
        "Course given by Higher School of Economics through Coursera",
      image: "/certificados/certificado6.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/certificado6.png"],
    },
    {
      title: "Java Programming: Principles of Software Design",
      date: "2020",
      description:
        "Course given by Duke University through Coursera",
      image: "/certificados/certificado7.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/certificado7.png"],
    },
    {
      title: "Java Programming: Arrays, Lists, and Structured Data",
      date: "2020",
      description:
        "Course given by Duke University through Coursera",
      image: "/certificados/certificado8.png",
      imageLabel: "Imagen diploma coursera",
      images: ["/certificados/certificado8.png"],
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
