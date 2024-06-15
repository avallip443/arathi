import "./App.css";
import About from "./components/About";
import Credits from "./components/Credits";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
    </div>
  );
}

export default App;
