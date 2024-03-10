import React from "react";
import ParticlesComponent from './components/Particles/Particles';
import './App.css'

import Header from "./components/Header-component/index"
import About from "./components/About-component/index"
import Projects from "./components/Projects-component";
import Footer from "./components/Footer/index"

const App = () => {
    return (
      <div className="container">
        <Header/>
        <About/>
        <Projects/>
        <Footer/>
        <ParticlesComponent />
      </div>
    );
};

export default App;
