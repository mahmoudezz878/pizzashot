import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const OrderForm = () => {
  return (
    <div className="orderForm">
      <form>
        <TextField
          margin="normal"
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          margin="normal"
          fullWidth
          id="outlined-basic"
          label="Mobile"
          variant="outlined"
        />
        <TextField
          margin="normal"
          fullWidth
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <TextField
          margin="normal"
          fullWidth
          id="outlined-basic"
          label="City"
          variant="outlined"
        />
        <Link to='/orderplaced'>
        <Button
          sx={{
            backgroundColor: "#cd2f17",
            marginRight: "1rem",
            marginTop: "2rem",
          }}
          variant="contained"
        >
          Order Now
        </Button>
        </Link>
        <Button
          sx={{ backgroundColor: "white", color: "black", marginTop: "2rem" }}
          variant="contained"
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;
