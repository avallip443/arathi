import { Box, Typography } from "@mui/material";

const ExperienceCard = ({ experience }) => {
  return (
    <Box sx={{ color: "white" }}>
      <Typography color={"#dfaea1"} fontWeight={600}>
        {experience.title}
      </Typography>
      <Typography>{experience.company}</Typography>
      <Typography>{experience.length}</Typography>
      <Typography mb={2}>{experience.location}</Typography>
    </Box>
  );
};

export default ExperienceCard;
