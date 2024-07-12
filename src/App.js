import About from "./components/About";
import Credits from "./components/Credits";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Box } from "@mui/material";
import FadeInSection from "./components/FadeInSection";

const MainPage = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#000000",
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 7,
          width: "100%",
        }}
      >
        <FadeInSection id="home">
          <Hero />
        </FadeInSection>
        <FadeInSection id="about">
          <About />
        </FadeInSection>
        <FadeInSection id="experience">
          <Experience />
        </FadeInSection>
        <FadeInSection id="projects">
          <Projects />
        </FadeInSection>
      </Box>
      <Credits />
    </Box>
  );
};

export default MainPage;
