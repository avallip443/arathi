import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { SocialsInfo } from "../utils/info";

const Navbar = () => {
  const navbar = [
    { label: "home", route: "home" },
    { label: "about", route: "about" },
    { label: "experience", route: "experience" },
    { label: "projects", route: "projects" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#fffcf5", px: { xs: 2, sm: 4 } }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-end", sm: "space-between" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexGrow: 1,
          }}
        >
          <List sx={{ display: "flex", gap: 2 }}>
            {navbar.map((link, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText>
                  <Typography
                    key={index}
                    sx={{
                      display: "block",
                      mx: 1,
                      color: "black",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      textDecoration: "none",
                      "&:hover": {
                        color: "#babde2",
                      },
                      "&:focus": {
                        color: "#babde2",
                      },
                    }}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleScroll(link.route)}
                  >
                    {link.label}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {SocialsInfo.map((link, index) => (
            <IconButton
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                px: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              {link.customIcon ? (
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    "&:hover": {
                      color: "#babde2",
                    },
                    "&:focus": {
                      color: "#babde2",
                    },
                  }}
                >
                  {link.customIcon}
                </Box>
              ) : (
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: { xs: 30, md: 34 },
                    height: { xs: 30, md: 34 },
                    "&:hover img": {
                      filter:
                        "invert(84%) sepia(98%) saturate(6063%) hue-rotate(179deg) brightness(85%) contrast(109%)",
                    },
                    "&:focus img": {
                      filter:
                        "invert(84%) sepia(98%) saturate(6063%) hue-rotate(179deg) brightness(85%) contrast(109%)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={link.imageSrc}
                    alt={link.altText}
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              )}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
