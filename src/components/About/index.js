import React from "react";
import "./style.css";
import perfil from "../../assets/perfil.jpg"

const About = () => {
    return (
        <div className="about-container">
            <div>
                <img  className="photo-container-about" src= { perfil } alt="selfie of white boy with goatee wearing black t-shirt"></img>
            </div>
            <div className="text-container-about">
                <div><h1 className="name-about">Vitor Zen</h1></div>
                <div className="phrase-about">Building the digital future, one line of code at a time. 🖥️</div>
                <div>
                    <p>I am a Systems Information student at UNISANTA. Currently in my seventh semester, 
                        my main interests are in front-end and fullstack development. Additionally, I am 
                        immersing myself in the professional world through an internship at Bertioga City Hall, 
                        where I am involved in constant learning.
                    </p>
                </div>
            <div>
            <div className="curiosity-about">
                <ul>
                    <li>I enjoy what I do, and I am always trying to improve it. </li>
                    <li>Playing video games makes me a happier person.</li>
                    <li>I love cooking and spending time with my family and friends</li>
                </ul>
            </div>
                </div>
            </div>
        </div>
    )
}

export default About;