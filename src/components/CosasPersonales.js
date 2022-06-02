import { Grid, ImageListItem, Typography } from "@mui/material";
import MainFeaturedPost from "./MainFeaturedPost";
import ProgramacionImage from "../assets/cosaspersonales/programacion.jpg";
import FutbolImage from "../assets/cosaspersonales/futbol.jpg";
import Futbol2Image from "../assets/cosaspersonales/futbol2.jpg";
import BoxeoImage from "../assets/cosaspersonales/boxeo.jpg";
import HistoriaImage from "../assets/cosaspersonales/historia.jpg";

function CosasPersonales() {
  const mainFeaturedPost = {
    title: "Juan Camilo Muñoz López",
    description: "A continuación se podrán ver diferentes cosas personales 🤠.",
    image: "https://placeimg.com/1080/1620/people",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        <Grid item md={2}>
          <ImageListItem
            sx={{
              width: { xs: 90, sm: 100, md: 180 },
              height: { xs: 90, sm: 100, md: 180 },
            }}
          >
            <img alt="Programación" src={ProgramacionImage} />
          </ImageListItem>
        </Grid>
        <Grid item md={10}>
          <Typography variant="body1" gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <Grid item md={8}>
          <Typography variant="body1" gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <ImageListItem
            sx={{
              width: { xs: 90, sm: 90, md: 180 },
              height: { xs: 90, sm: 90, md: 180 },
            }}
          >
            <img alt="Futból" src={FutbolImage} />
          </ImageListItem>
          <ImageListItem
            sx={{
              width: { xs: 90, sm: 90, md: 180 },
              height: { xs: 90, sm: 90, md: 180 },
            }}
          >
            <img alt="Futból 2" src={Futbol2Image} />
          </ImageListItem>
        </Grid>
        <Grid item md={2}>
          <ImageListItem
            sx={{
              width: { xs: 90, sm: 100, md: 180 },
              height: { xs: 90, sm: 100, md: 180 },
            }}
          >
            <img alt="Historia" src={HistoriaImage} />
          </ImageListItem>
        </Grid>
        <Grid item md={10}>
          <Typography variant="body1" gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <Grid item md={10}>
          <Typography variant="body1" gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <Grid item md={2}>
          <ImageListItem
            sx={{
              width: { xs: 90, sm: 90, md: 150 },
              height: { xs: 90, sm: 90, md: 150 },
            }}
          >
            <img alt="Boxeo" src={BoxeoImage} />
          </ImageListItem>
        </Grid>
      </Grid>
    </>
  );
}
export default CosasPersonales;
