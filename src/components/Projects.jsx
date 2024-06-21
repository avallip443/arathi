import { Container, Stack, Typography } from "@mui/material";
import { ProjectInfo } from "../utils/info";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h5" color={"#34a181"}>
        Projects
      </Typography>
      <Stack spacing={3}>
        {ProjectInfo.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Stack>
    </Container>
  );
};

export default Projects;
