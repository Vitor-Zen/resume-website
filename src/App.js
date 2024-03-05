import React from "react";
import ParticlesComponent from './components/Particles/Particles';
import './App.css'
import Header from "./components/Header"
import About from "./components/About/index"
import Projects from "./components/Projects-component";

const App = () => {
    return (
      <div className="container">
        <Header/>
        <About/>
        <Projects/>
        <ParticlesComponent />
      </div>
    );
};

export default App;
