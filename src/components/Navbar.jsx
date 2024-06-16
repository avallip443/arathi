import { useState } from "react";
import NavLink from "./NavLink";
import MailIcon from "@mui/icons-material/Mail";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

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
    url: "https://www.linkedin.com/in/avallip/",
    imageSrc: "/linkedin-icon.svg",
    altText: "Linkedin Icon",
  },
  {
    title: "Email",
    url: "mailto:avallipuranathan@gmail.com",
    customIcon: (
      <MailIcon
        sx={{
          color: "white",
          height: { xs: 25, md: 34 },
          width: { xs: 25, md: 34 },
        }}
      />
    ),
  },
];

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#050F1F", px: { xs: 2, sm: 4 } }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-end", sm: "space-between" },
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
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
              sx={{
                display: "flex",
                alignItems: "center",
                color: "inherit",
                px: 0,
              }}
            >
              {link.customIcon ? (
                <Box
                  component="span"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {link.customIcon}
                </Box>
              ) : (
                <Box
                  component="img"
                  src={link.imageSrc}
                  alt={link.altText}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: { xs: 25, md: 34 },
                    height: { xs: 25, md: 34 },
                  }}
                />
              )}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
