import { Container, Typography } from "@mui/material";
import React from "react";

const Credits = () => {
  return (
    <Container sx={{ mt: 3, bgcolor: "#050F1F"}}>
      <Typography>Built by Arathi Vallipuranathan</Typography>
      <Typography>All rights reserved. ©</Typography>
      <Typography>Made with React, MUI, and ❤️</Typography>
    </Container>
  );
};

export default Credits;
