import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from '@mui/material/Link';

function FeaturedPost({ post, handleOpen }) {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea
        component="button"
        onClick={() => handleOpen(post.images)}
      >
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            {post.url &&(
              <Link target="_blank" href="/CV/Jean_Herrera_CV.docx" download="JeanHerrera_CV" >Descargar</Link>
            )}
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 200,
              display: { xs: "none", sm: "block" },
              margin: "1em 1em",
            }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
