import { Grid, ImageListItem, Typography } from "@mui/material";
import MainFeaturedPost from "./MainFeaturedPost";
import ProgramacionImage from "../assets/cosaspersonales/programacion.jpg";
import lolImage from "../assets/cosaspersonales/lol.jpg";
import cbumImage from "../assets/cosaspersonales/cbum.jpg";

function CosasPersonales() {
  const mainFeaturedPost = {
    title: "Jean Carlo Herrera Delgado",
    description: "A continuación se podrán ver diferentes cosas personales 🤠.",
    image: "logoPersonal/logonuevo.png",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        
        <Grid item md={10}>
          <Typography variant="body1" gutterBottom>
          La programación es algo que me apasiona desde hace 5 años que comencé mis estudios en la
          Universidad Nacional de Colombia, empecé conociendo lenguajes como java, python y progresivamente
          fui conociendo mas lenguajes como c#, javascript y entre otros lenguajes. Actualmente apasionado
          por React con el fin de ser uno de los mejores usando esta libreria de Javascript algun dia!
          </Typography>
        </Grid>

        <Grid item md={2}>
          <ImageListItem
            sx={{
              width: { xs: 60, sm: 100, md: 180 },
              height: { xs: 60, sm: 100, md: 180 },
            }}
          >
            <img alt="Programaciónnn" src={ProgramacionImage} />
          </ImageListItem>
        </Grid>
        
        <Grid item md={8}>
          <Typography variant="body1" gutterBottom>
            Ademas de la programación también tengo otros hobbies, uno de ellos ir al GYM, es un Hobbie que 
            practico desde hace un año, desde ahí comprendí lo importante que puede ser la disciplina 
            y en lo que podría convertirme si era un hombre disciplinado.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <ImageListItem  // segunda imagen
            sx={{
              width: { xs: 90, sm: 90, md: 180 },
              height: { xs: 90, sm: 90, md: 180 },
            }}
          >
            <img alt="Futból" src={cbumImage} />
          </ImageListItem>

        </Grid>

        <Grid item md={10}>
          <Typography variant="body1" gutterBottom>
            Algo que también me apasionan son los videos juegos, disfruté muchísimo una matería de mi 
            carrera en la cual programamos un juego llamado "smellware" este juego fue diseñado en 
            Unity usando C# como lenguaje de programación, pero no solo me gusta programarlos. el hecho
            de jugarlos también me apasiona, en mis tiempos libres juego League of Legends
          </Typography>
        </Grid>

        <Grid item md={2}>
          <ImageListItem
            sx={{         //tercera imagen
              width: { xs: 90, sm: 100, md: 180 },
              height: { xs: 90, sm: 100, md: 180 },
            }}
          >
            <img alt="lolImage" src={lolImage} />
          </ImageListItem>
        </Grid>

      </Grid>
    </>
  );
}
export default CosasPersonales;
