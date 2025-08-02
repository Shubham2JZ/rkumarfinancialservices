import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import rkFullLogo from "../../assets/icons/rk-logo-full.png";
import "./Header.scss";
import { useLocation } from "react-router-dom";

const navItems = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/about-us" },
  { text: "Our Services", path: "/our-services" },
  { text: "Success Stories", path: "/success-stories" },
  { text: "Resources", path: "/resources" },
  { text: "Contact", path: "/contact" },
];

export default function Header({ isMobile }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        className="Header"
        position="sticky"
        elevation={4}
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid black",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src={rkFullLogo} className="Header-logo" alt="RK Logo" />

          {isMobile ? (
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              Hi
            </IconButton>
          ) : (
            <Box
              component="nav"
              className="Header-button-container"
              sx={{ display: "flex", gap: "1rem" }}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    disableRipple
                    key={item.text}
                    color="inherit"
                    component={Link}
                    to={item.path}
                    sx={{ textTransform: "none" }}
                    className={`button ${isActive ? "active" : ""}`}
                  >
                    {item.text}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
