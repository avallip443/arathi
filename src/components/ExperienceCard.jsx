import { Box, Typography } from "@mui/material";

const ExperienceCard = ({ experience }) => {
  return (
    <Box>
      <Typography fontWeight="bold">{experience.title}</Typography>
      <Typography>{experience.company}</Typography>
      <Typography>{experience.length}</Typography>
      <Typography>{experience.location}</Typography>
    </Box>
  );
};

export default ExperienceCard;
