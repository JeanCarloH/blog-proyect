import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import PhotoAvatar from "../assets/avatar.jpg";
import BasicCard from "./BasicCard";
import BootstrapLogo from "../assets/skills/bootstrap.png";
import CssLogo from "../assets/skills/css.png";
import HtmlLogo from "../assets/skills/html.png";
import JavaLogo from "../assets/skills/java.png";
import JqueryLogo from "../assets/skills/jquery.png";
import JsLogo from "../assets/skills/js.png";
import PhpLogo from "../assets/skills/php.png";
import GithubLogo from "../assets/skills/github.png";
import ReactLogo from "../assets/skills/react.png";

function AcercaDeMi() {
  const skills = [
    { url: HtmlLogo, title: "HTML 5" },
    { url: CssLogo, title: "CSS 3" },
    { url: JsLogo, title: "JAVASCRIPT" },
    { url: BootstrapLogo, title: "BOOTSTRAP" },
    { url: JqueryLogo, title: "JQUERY" },
    { url: PhpLogo, title: "PHP" },
    { url: JavaLogo, title: "JAVA" },
    { url: GithubLogo, title: "GITHUB" },
    { url: ReactLogo, title: "REACT JS" },
  ];

  const post = {
    title: "Juan Camilo Muñoz López",
    description:
      "A continuación se podrán ver una pequeña descripción acerca de mí.",
    image: "https://placeimg.com/1080/1620/tech",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  return (
    <>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${post.image})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={post.image}
            alt={post.imageText}
          />
        }
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid
          alignItems="center"
          justifyContent="center"
          columnSpacing={10}
          container
        >
          <Grid item md={8}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                style={{ backgroundColor: "#00000085" }}
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography
                variant="h5"
                color="inherit"
                style={{ backgroundColor: "#00000085" }}
                paragraph
              >
                {post.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Avatar
              alt="Juan Camilo Muñoz"
              src={PhotoAvatar}
              sx={{
                width: { xs: 100, sm: 100, md: 200 },
                height: { xs: 100, sm: 100, md: 200 },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="body1" gutterBottom>
        Soy responsable, creativo y con muy buena disposición para cualquier
        tarea. Tengo dos años de experiencia en mi campo trabajando de forma
        freelancer y me encuentro cursando el septimo semestre de ingeniería de
        sistemas en la Universidad Nacional de Colombia. El trabajo y la
        disciplina es lo que me mueven para ser cada día un mejor profesional.
      </Typography>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid key={index} item xs={12} md={3}>
            <BasicCard skill={skill} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AcercaDeMi;
