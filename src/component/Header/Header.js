import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import OrderModal from "../OrderModal/OrderModal";
import foodImage from "./1.png";
import motoicon from "./motoicon.png";

const Header = () => {
  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#303030" }}>
          <div className="container">
            <div className="navContainer">
              <div className="h1">
                <h1>OBSD</h1>
                <img src={foodImage} height="48px" />
              </div>

              <div className="img">
                <Box>
                  <div className="header-info">
                    <div className="info">Menu</div>
                    <div className="info">Most Popular</div>
                    <div>
                      <OrderModal />
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
