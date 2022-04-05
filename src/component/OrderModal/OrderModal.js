import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import motoicon from "../Header/motoicon.png";
import CardInfo from "./ModalCard";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";

const style = {
  transform: "translate(0%, 20%)",
  overflowY: "scroll",
  borderRadius: "8px",
  position: "absolute",
  top: "0",
  right: "0",
  height: "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  button: {
    "&:hover": {
      background: "#ff9200",
    },
  },
};

const OrderModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>
        <Badge badgeContent={4} color="primary">
          <img src={motoicon} height="30px" />
        </Badge>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <CardInfo />
          <div className="order">
            <span className="subtotal">Subtotal: LE 1700.00</span>
            <Button sx={{ backgroundColor: "#FF9200" }} variant="contained">
              CHECKOUT
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default OrderModal;
