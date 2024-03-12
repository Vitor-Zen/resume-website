import React from "react";
import ParticlesComponent from './components/Particles/Particles';
import './App.css'

// Think about how to improve these imports
import Header from "./components/Header-component/index"
import About from "./components/About-component/index"
import Experience from "./components/Experience-component";
import Projects from "./components/Projects-component";
import Footer from "./components/Footer-component/index";

const App = () => {
    return (
      <div className="container">
        <Header/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
        <ParticlesComponent />
      </div>
    );
};

export default App;
