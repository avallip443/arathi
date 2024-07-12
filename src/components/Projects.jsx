import { Box, Container, Grid, Typography } from "@mui/material";
import { ProjectInfo } from "../utils/info";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff" }}>
      <Container
        maxWidth={"md"}
        sx={{
          width: { xs: "90%", md: "100%" },
          pt: { xs: 7, md: 10 },
          pb: 5,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          color={"#374375"}
          textAlign={"center"}
          mb={3}
        >
          Projects
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          {ProjectInfo.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
