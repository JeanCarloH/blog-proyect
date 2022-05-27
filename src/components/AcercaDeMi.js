import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import PhotoAvatar from "../assets/avatar.jpg";

function AcercaDeMi() {
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
    </>
  );
}

export default AcercaDeMi;
