import { Box, Stack, Typography } from "@mui/material";

const ExperienceCard = ({experience}) => {
  return (
    <Box>
      <Stack>
        <Typography fontWeight={"bold"} fontSize={{ xs: 18 }}>
          {experience.title}
        </Typography>
        <Typography>{experience.company}</Typography>
        <Typography>{experience.length}</Typography>
        <Typography>{experience.location}</Typography>
      </Stack>
    </Box>
  );
};

export default ExperienceCard;
