import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Experience = () => {
  return (
    <Container>
      <Typography variant="h5">Experiences</Typography>
      <Stack>
        <Box>
          <Typography>Software Engineer Intern</Typography>
          <Typography>Aisha Home Serivces</Typography>
          <Typography>Apr 2024 - Present</Typography>
          <br />
        </Box>

        <Box>
          <Typography>Web Developer</Typography>
          <Typography>Tamils in Finance</Typography>
          <Typography>Mar 2024 - Present</Typography>
          <br />
        </Box>

        <Box>
          <Typography>Ambassador</Typography>
          <Typography>BoostHER TMU</Typography>
          <Typography>Mar 2024 - Present</Typography>
          <br />
        </Box>

        <Box>
          <Typography>Groundstation GUI Developer</Typography>
          <Typography>MetRocketry</Typography>
          <Typography>Jan 2024 - Present</Typography>
          <br />
        </Box>

        <Box>
          <Typography>Teaching Assistant</Typography>
          <Typography>Kumon Inc</Typography>
          <Typography>Jul 2022 - Present</Typography>
          <br />
        </Box>
      </Stack>
    </Container>
  );
};

export default Experience;
