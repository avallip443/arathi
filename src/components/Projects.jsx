import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Projects = () => {
  return (
    <Container>
      <Typography variant="h5">Projects</Typography>

      <Box>
        <Stack>
          <br />
          <Typography>Instagram Clone</Typography>
          <Typography>Links:</Typography>
          <Typography>React, Firebase, ChakraUI</Typography>
          <Typography>
            Replica of social media app Instagram, featuring user
            authentication, post-creation, real-time user interactions, profile
            customization, and responsive design
          </Typography>
        </Stack>
      </Box>

      <Box>
        <Stack>
          <br />
          <Typography>SoocerSphere</Typography>
          <Typography>Links:</Typography>
          <Typography>React, Firebase, ChakraUI</Typography>
          <Typography>
            Replica of social media app Instagram, featuring user
            authentication, post-creation, real-time user interactions, profile
            customization, and responsive design
          </Typography>
        </Stack>
      </Box>

      <Box>
        <Stack>
          <br />
          <Typography>Pokemon Twitter Bot</Typography>
          <Typography>Links:</Typography>
          <Typography>React, Firebase, ChakraUI</Typography>
          <Typography>
            Replica of social media app Instagram, featuring user
            authentication, post-creation, real-time user interactions, profile
            customization, and responsive design
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default Projects;
