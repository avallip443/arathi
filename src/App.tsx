import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
