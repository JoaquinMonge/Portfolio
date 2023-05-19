import { AboutMe } from "./Components/AboutMe";
import Contact from "./Components/Contact";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Projects";
import { Technologies } from "./Components/Technologies";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
