import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Credits from "./components/Credits";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import { Box, Container } from "@mui/material";

const MainPage = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        bgcolor: "#191c2d",
        color: "#fae4e7",
      }}
    >
      <Navbar />
      <Container maxWidth={"md"} sx={{ mt: 12 }}>
        <Hero />
        <About />
        <Experience />
        <Project />
        <Contact />
      </Container>
      <Credits />
    </Box>
  );
};

export default MainPage;
