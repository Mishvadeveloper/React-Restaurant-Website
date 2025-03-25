import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../images/logo.svg";
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: "#1A1A19" }}>
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1 }} className="logo">
            <img src={Logo} alt="logo" height={"70"} width={"250"} />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <Button color="inherit" component="a" href="/">
                  Home
                </Button>
              </li>
              <li>
                <Button color="inherit" component="a" href="/menu">
                  Menu
                </Button>
              </li>
              <li>
                <Button color="inherit" component="a" href="/about">
                  About
                </Button>
              </li>
              <li>
                <Button color="inherit" component="a" href="/contact">
                  Contact
                </Button>
              </li>
            </ul>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleMenuItemClick} component="a" href="/">
                Home
              </MenuItem>
              <MenuItem
                onClick={handleMenuItemClick}
                component="a"
                href="/menu"
              >
                Menu
              </MenuItem>
              <MenuItem
                onClick={handleMenuItemClick}
                component="a"
                href="/about"
              >
                About
              </MenuItem>
              <MenuItem
                onClick={handleMenuItemClick}
                component="a"
                href="/contact"
              >
                Contact
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
