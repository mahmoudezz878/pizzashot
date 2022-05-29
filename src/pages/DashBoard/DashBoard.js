import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
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
          <div className="check"></div>
        </Box>
      </Box>
    </div>
  );
}
