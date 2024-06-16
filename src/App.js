import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Credits from "./components/Credits";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Box, Container } from "@mui/material";

const MainPage = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        bgcolor: "white",
      }}
    >
      <Navbar />
      <Container maxWidth={"md"} sx={{mt: 12}} >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Credits />
      </Container>
    </Box>
  );
};

export default MainPage;
