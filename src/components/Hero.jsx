import { Box, Container, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#babde2",
      }}
    >
      <Container
        maxWidth={"md"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: "90%", md: "100%" },
          height: "100%",
          py: { xs: 7, md: 12 },
          color: "#00000",
        }}
      >
        <Typography variant="h6">Hi, I'm</Typography>
        <Typography
          variant="h1"
          fontSize={{ xs: "60px", md: "80px" }}
          fontWeight={600}
          color={"#374375"}
          sx={{ margin: 0 }}
        >
          Arathi!
        </Typography>
        <Typography
          fontSize={{ xs: "25px", md: "40px" }}
          fontWeight={600}
          mt={1}
        >
          <Typewriter
            options={{
              strings: ["Student", "Software Developer", "Learner"],
              autoStart: true,
              loop: true,
              delay: 100,
              cursor: "|",
            }}
          />
        </Typography>

        <Typography fontSize={{ xs: "18px", md: "24px" }} mt={2}>
          CS @ Toronto Metropolitan University
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
