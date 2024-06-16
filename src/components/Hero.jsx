import { Container, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container maxWidth={"md"}>
      <Typography>
        Hi, I'm
        <Typography>Arathi!</Typography>
      </Typography>
      <Typography>Software Developer</Typography>
      <Typography>CS @ TMU</Typography>
      <Typography>Toronto, Canada</Typography>
    </Container>
  );
};

export default Hero;
