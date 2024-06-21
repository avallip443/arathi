import { Container, Stack, Typography } from "@mui/material";
import { ExperienceInfo } from "../utils/info";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h5" color={"#34a181"}>
        Experience
      </Typography>
      <Stack spacing={3}>
        {ExperienceInfo.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </Stack>
    </Container>
  );
};

export default Experience;
