import { Box, Stack, Typography } from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <Box>
      <Stack>
        <Typography fontWeight={"bold"} fontSize={{ xs: 18 }}>
          {project.title}
        </Typography>
        <Typography>{project.githubURL}</Typography>
        <Typography>{project.previewURL}</Typography>
        <Typography>{project.tools}</Typography>
        <Typography>{project.description}</Typography>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
