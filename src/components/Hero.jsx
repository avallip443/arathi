import { Container, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Container maxWidth={"md"}>
      <Typography variant='h4'>
        Hi, I'm
        <Typography variant='h1' color={'#34a181'}>Arathi!</Typography>
      </Typography>
      <Typography variant="h5">Software Developer | CS @ TMU</Typography>
    </Container>
  );
};

export default Hero;
