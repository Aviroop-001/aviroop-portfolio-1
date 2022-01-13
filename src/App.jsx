import React, {useState} from 'react';
import Navbar from './components/jsx_files/navbar';
import Burgermenu from "./components/jsx_files/burgermenu";
import Intro from "./components/jsx_files/intro";
import Projects from "./components/jsx_files/projects";
import Skills from "./components/jsx_files/skills";
import Recommendation from "./components/jsx_files/recommendation";
import Contact from "./components/jsx_files/contact-me";
import "./App.scss";

function App() {
  const [menuactive, setmenuactive] = useState(false);
  return (
    <div className="App">
      <Navbar menuactive={menuactive} setmenuactive={setmenuactive}/>
      <Burgermenu menuactive={menuactive} setmenuactive={setmenuactive}/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Projects/>
        <Recommendation/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
