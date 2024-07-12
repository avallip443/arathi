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
    <Box sx={{ width: "100%", backgroundColor: "#374375" }}>
      <Container
        maxWidth={"md"}
        sx={{ py: { xs: 7, md: 10 }, width: { xs: "90%", sm: "100%" } }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          color={"#dfaea1"}
          textAlign={"center"}
        >
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
              padding: 0,
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
                className="timeline-item"
              >
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      width: { xs: 40, md: 50 },
                      height: { xs: 40, md: 50 },
                      padding: 0,
                      my: 1,
                      borderColor: "#babde2",
                      transition:
                        "transform 0.3s ease-in-out, margin 0.3s ease-in-out",
                      "&:hover, .timeline-item:hover &": {
                        transform: "scale(1.4)",
                        mx: 3,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={experience.image}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#babde2" }} />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    transition:
                      "transform 0.3s ease-in-out, margin 0.3s ease-in-out",
                    "&:hover, .timeline-item:hover &": {
                      transform: "scale(1.08)",
                    },
                  }}
                >
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
