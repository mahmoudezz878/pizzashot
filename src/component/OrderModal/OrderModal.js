import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import motoicon from "../Header/motoicon.png";
import CardInfo from "./ModalCard";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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

  const products = useSelector((state) => state.Counter);

  const newProducts = products.filter((card) => {
    return card.qty > 0;
  });

  const total = newProducts.reduce((acc, curr) => {
    return acc + curr.qty * curr.price;
  }, 0);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Badge badgeContent={newProducts.length} color="primary">
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
          {newProducts.length ? (
            <div>
              {newProducts?.map((card, index) => {
                return <CardInfo key={index} card={card} />;
              })}
              <div className="order">
                <span className="subtotal">Subtotal: LE {total}</span>
                <Link to="/ordernow">
                  <Button
                    onClick={handleClose}
                    sx={{ backgroundColor: "#FF9200", width: "100%" }}
                    variant="contained"
                  >
                    CHECKOUT
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            "no food"
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default OrderModal;
