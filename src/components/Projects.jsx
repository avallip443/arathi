import { Container, Grid, Typography } from "@mui/material";
import { ProjectInfo } from "../utils/info";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h5" color={"#34a181"} textAlign={"center"}>
        Projects
      </Typography>
      <Grid
        container
        spacing={4}
        mt={2}
      >
        {ProjectInfo.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
