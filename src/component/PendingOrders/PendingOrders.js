import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CheckInput from "../../pages/DashBoard/CheckInput/CheckInput";
import { Link } from "react-router-dom";
import { getOrders } from "../../api";

const drawerWidth = 240;

const PendingOrders = () => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const res = await getOrders();

    const ordersFromDb = res.data.map((item) => {
      const x = item.orderItems.map((_data) => {
        return { ..._data, complete: false };
      });

      return { ...item, orderItems: x };
    });

    setOrders(ordersFromDb);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const toggleStatus = (orderId, itemId) => {
    const newState = orders.map((order) => {
      if (order.id === orderId) {
        const x = order.orderItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, complete: !item.complete };
          } else {
            return item;
          }
        });
        return { ...order, orderItems: x };
      } else {
        return order;
      }
    });
    setOrders(newState);
    console.log(newState);
  };

  return (
    <div className="dashboard">
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            <Link to="/pendingorders">
              <ListItem button>
                <ListItemText primary={"Pending Orders"} />
              </ListItem>
            </Link>
            <Link to="/compleatedorders">
              <ListItem button>
                <ListItemText primary={"Compleated Orders"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <div className="dashOrderContainer">
            {orders?.map((order) => {
              return (
                <div key={order.id} className="dashOrder">
                  {order.orderItems.map((item) => {
                    return (
                      <div key={item.id} className="check">
                        <CheckInput
                          item={item}
                          qty={item.qty}
                          onChange={() => toggleStatus(order.id, item.id)}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default PendingOrders;
