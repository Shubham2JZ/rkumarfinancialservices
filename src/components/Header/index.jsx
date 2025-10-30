import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import rkFullLogo from "../../assets/icons/rk-logo-full.png";
import "./Header.scss";

const navItems = [
  { text: "Home", path: "/" },
  {
    text: "Our Services",
    submenu: [
      { text: "IPO", path: "/services/ipo" },
      { text: "Capital Raising", path: "/services/capital-raising" },
      { text: "Finance Advisory", path: "/services/finance-advisory" },
    ],
  },
 
];

export default function Header({ isMobile }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCollapse, setOpenCollapse] = useState(null);
  const location = useLocation();

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleMenuOpen = (event, itemText) => {
    setAnchorEl(event.currentTarget);
    setOpenCollapse(itemText);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenCollapse(null);
  };

  const handleCollapseToggle = (itemText) => {
    setOpenCollapse((prev) => (prev === itemText ? null : itemText));
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
            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              component="nav"
              className="Header-button-container"
              sx={{ display: "flex", gap: "1rem" }}
            >
              {navItems.map((item) => {
                // Highlight logic
                const isSubActive =
                  item.submenu?.some((sub) =>
                    location.pathname.startsWith(sub.path)
                  ) ?? false;
                const isActive =
                  location.pathname === item.path || isSubActive;
                const isMenuOpen = openCollapse === item.text;

                if (item.submenu) {
                  return (
                    <div key={item.text}>
                      <Button
                        disableRipple
                        color="inherit"
                        onClick={(e) => handleMenuOpen(e, item.text)}
                        sx={{ textTransform: "none" }}
                        className={`button ${
                          isActive || isMenuOpen ? "active" : ""
                        }`}
                      >
                        {item.text}
                      </Button>

                      <Menu
                        anchorEl={anchorEl}
                        open={isMenuOpen && Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        PaperProps={{
                          sx: {
                            borderRadius: "6px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            mt: 1.2,
                          },
                        }}
                      >
                        {item.submenu.map((sub) => {
                          const isSubActive =
                            location.pathname === sub.path;
                          return (
                            <MenuItem
                              key={sub.text}
                              component={Link}
                              to={sub.path}
                              onClick={handleMenuClose}
                              sx={{
                                color: isSubActive
                                  ? "var(--primary)"
                                  : "inherit",
                                fontWeight: isSubActive ? 600 : 500,
                              }}
                            >
                              {sub.text}
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    </div>
                  );
                }

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

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => {
              const isSubActive =
                item.submenu?.some((sub) =>
                  location.pathname.startsWith(sub.path)
                ) ?? false;
              const isActive =
                location.pathname === item.path || isSubActive;
              const isOpen = openCollapse === item.text;

              if (item.submenu) {
                return (
                  <Box key={item.text}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleCollapseToggle(item.text)}
                        sx={{
                          backgroundColor: isActive
                            ? "rgba(0,0,0,0.04)"
                            : "transparent",
                        }}
                      >
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                            fontWeight: isActive ? 600 : 500,
                            color: isActive ? "var(--primary)" : "inherit",
                          }}
                        />
                        {isOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                    </ListItem>

                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.submenu.map((sub) => {
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <ListItemButton
                              key={sub.text}
                              sx={{
                                pl: 4,
                                backgroundColor: isSubActive
                                  ? "rgba(0,0,0,0.04)"
                                  : "transparent",
                              }}
                              component={Link}
                              to={sub.path}
                              onClick={toggleDrawer(false)}
                            >
                              <ListItemText
                                primary={sub.text}
                                primaryTypographyProps={{
                                  fontWeight: isSubActive ? 600 : 500,
                                  color: isSubActive
                                    ? "var(--primary)"
                                    : "inherit",
                                }}
                              />
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  </Box>
                );
              }

              return (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={toggleDrawer(false)}
                    sx={{
                      backgroundColor: isActive
                        ? "rgba(0,0,0,0.04)"
                        : "transparent",
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "var(--primary)" : "inherit",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
