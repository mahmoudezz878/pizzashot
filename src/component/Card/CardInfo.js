import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import piza from "./piza.png";

const CardInfo = () => {
  const theme = useTheme();
  return (
    <div className="card">
      <Card sx={{ display: "flex", margin: "10px" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={piza}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Seafood
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Shrimp, squid
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Pineapple, squid
            </Typography>
            <Typography component="div" variant="p">
              Price: LE 120.00
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              <RemoveIcon />
            </IconButton>
            <div className="square">1</div>
            <IconButton aria-label="next">
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default CardInfo;
