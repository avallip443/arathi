import "./App.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div>
      <div className="flex flex-col max-w-screen-md mx-auto px-6">
        <NavBar />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
