import {
  useMediaQuery,
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { ExperienceInfo } from "../utils/info";
import ExperienceCard from "./ExperienceCard";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";

const Experience = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h5" color={"#34a181"} textAlign={"center"}>
        Experience
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Timeline
          position={isSmScreen ? "alternate-reverse" : "right"}
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              [theme.breakpoints.down("sm")]: {
                flex: 0,
                padding: 0,
              },
            },
          }}
        >
          {ExperienceInfo.map((experience, index) => (
            <TimelineItem
              key={index}
              position={isSmScreen ? undefined : "right"}
            >
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
};

export default Experience;
