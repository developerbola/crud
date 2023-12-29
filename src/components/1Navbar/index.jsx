import * as React from "react";
import logo from "/logo.png";
import { Link } from "react-scroll";
// /m MUI Components
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const drawerWidth = 240;
const navItems = ["home", "about", "work", "contact"];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [activeLink, setActiveLink] = useState("");
  const [activerLink, setActiverLink] = useState("29");

  const linkActiver = () => {
    if (0 < scrollY && scrollY < 612) {
      setActiveLink("home");
      setActiverLink("29");
    } else if (612 < scrollY && scrollY < 1190) {
      setActiveLink("about");
      setActiverLink("127");
    } else if (1190 < scrollY && scrollY < 2016) {
      setActiveLink("work");
      setActiverLink("229");
    } else if (2016 < scrollY) {
      setActiveLink("contact");
      setActiverLink("340");
    }
  };

  React.useEffect(() => {
    linkActiver();
    // const handleScroll = () => linkActiver();  // Update on scroll
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Inter" }}>
        developer_bola
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
    <section id="home">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            bgcolor: "transparent",
            height: "100px",
            boxShadow: "0",
            padding: "0 60px",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #ffffff10",
          }}
        >
          <Toolbar sx={{ m: "auto 0" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="navLogo" height={40} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontFamily: "Inter",
              }}
            >
              developer_bola
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                marginRight: "30px",
                position: "relative",
              }}
            >
              {navItems.map((item) => (
                <Link to={item} smooth={true} duration={500} key={item}>
                  <Button
                    key={item}
                    sx={{
                      color: "#fff",
                      fontSize: "1.2rem",
                      margin: "0 10px",
                      fontFamily: "inter",
                    }}
                    onClick={() => {
                      setActiveLink(item);
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              ))}
              <span
                style={{
                  position: "absolute",
                  top: 40,
                  left: `${activerLink}px`,
                  height: "3px",
                  width: "40px",
                  borderRadius: "5px",
                  background: "#fff",
                  transition: ".2s",
                }}
              ></span>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={undefined}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </section>
  );
}


export default DrawerAppBar;
