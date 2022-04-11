import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import piza from "./piza.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { increment, decrement,  deleteProduct} from "../../redux/actions/actions";


const CardInfo = ({ card }) => {
  const dispatch = useDispatch();

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
              {card?.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <span>Qty : </span>
              <div className="square"> {card?.qty}</div>
              <IconButton
                aria-label="previous"
                onClick={() => {
                  dispatch(decrement(card))
                }}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton
                aria-label="next"
                onClick={() => {
                  dispatch(increment(card))
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>

            <Typography component="div" variant="p">
              <div className="delete-btn">
                Total: LE {card?.price * card?.qty} <DeleteIcon onClick={() => {
                  dispatch(deleteProduct(card))
                }} />
              </div>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CardInfo;
