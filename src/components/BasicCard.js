import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ImageListItem } from "@mui/material";

export default function BasicCard({ skill }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent align="center">
        <ImageListItem
          sx={{
            width: { xs: 100, sm: 150, md: 200 },
            height: { xs: 100, sm: 150, md: 200 },
          }}
        >
          <img alt={skill.title} src={skill.url} />
        </ImageListItem>
        <Typography
          sx={{ fontSize: 14, textAlign: "center" }}
          color="text.secondary"
          gutterBottom
        >
          {skill.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
