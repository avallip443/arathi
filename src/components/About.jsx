import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container>
      <Box
        component="img"
        src="/profile-picture.png"
        alt="Description of image"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "auto",
          mx: "auto",
          display: "block",
        }}
      />
      <Typography variant="h5">About Me</Typography>
      <Typography>
        👋 Hey! I'm Arathi, a third-year Computer Science Co-Op student at
        Toronto Metropolitan University. I'm seeking internship opportunities
        for 2024 and 2025.
      </Typography>
      <Typography>
        I have a passion for front-end development, but I'm also actively
        expanding my skills and finding new challenges through my professional
        experiences and personal projects.
      </Typography>
      <Typography>
        Outside of coding, you'll probably find me reading, binge watching, or
        spending time with friends and family.
      </Typography>
    </Container>
  );
};

export default About;
