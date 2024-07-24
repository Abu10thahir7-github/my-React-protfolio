import About from "./About/About";
import "./App.css";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="project"><Project /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
