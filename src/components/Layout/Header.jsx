import React, {useState} from "react";
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from "@mui/material";
import {  NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../../images/logo.svg';
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  //Handle Menu Click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  } 
  

  //Menu Drawer ==> Mobile view
  const drawer= (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}> 
        <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, my:2 }}
            >
            <img src={Logo} alt="logo" height={'70'} width={'200'} />  
            </Typography>
            <Divider/>
              <ul className="mobile-navigation">
                <li>
                  <NavLink activeClassName='active' to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
    </Box>
  )


  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {/* <FastFoodIcon />
              My Restaurant */}
            <img src={Logo} alt="logo" height={'70'} width={'250'} />  
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName='active' to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav' >
          <Drawer variant="temporary" open={mobileOpen} 
          onClose={handleDrawerToggle}
          sx={{display:{xs:'block', sm:'none'}, '& .MuiDrawer-paper':{
            boxSizing: 'border-box',
            width:'240px',
          } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;
