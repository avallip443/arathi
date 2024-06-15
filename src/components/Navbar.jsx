import { useState } from "react";
import NavLink from "./NavLink";
import MailIcon from "@mui/icons-material/Mail";
import MenuOverlay from "./MenuOverlay";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
  {
    title: "home",
    path: "#home",
  },
  {
    title: "about",
    path: "#about",
  },
  {
    title: "experience",
    path: "#experience",
  },
  {
    title: "projects",
    path: "#projects",
  },
];

const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/avallip443",
    imageSrc: "/github-icon.svg",
    altText: "GitHub Icon",
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/arathi-vallipuranathan/",
    imageSrc: "/linkedin-icon.svg",
    altText: "Linkedin Icon",
  },
  {
    title: "Email",
    url: "mailto:avallipuranathan@gmail.com",
    customIcon: (
      <MailIcon sx={{ color: "white", height: 16, width: 16 }} />
    ),
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#050F1F", px: { xs: 2, md: 4 }, py: { xs: 1, lg: 2 } }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            onClick={() => setNavbarOpen(!navbarOpen)}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            {navbarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
          <List sx={{ display: "flex", gap: 2 }}>
            {navLinks.map((link, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText>
                  <NavLink href={link.path} title={link.title} />
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "inherit" }}
            >
              {link.customIcon ? (
                <Box component="span" sx={{ mr: 1 }}>{link.customIcon}</Box>
              ) : (
                <Box
                  component="img"
                  src={link.imageSrc}
                  alt={link.altText}
                  sx={{
                    width: { xs: 20, md: 34 },
                    height: { xs: 20, md: 34 },
                  }}
                />
              )}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </AppBar>
  );
};

export default Navbar;
