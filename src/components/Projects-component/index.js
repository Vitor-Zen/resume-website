import React, { useState, useEffect } from "react";
import "./style.css";

const Projects = () => {
    const [imageState, setImageState] = useState({
        react: null,
        lifemaker: null,
        aggregator: null
    });

    useEffect(() => {
        const importImages = async () => {
            const reactImage = await import("../../assets/react-img.jpg");
            const lifemakerImage = await import("../../assets/lifemaker-img.jpg");
            const aggregatorImage = await import("../../assets/link-aggregator.jpg");
            setImageState({
                react: reactImage.default,
                lifemaker: lifemakerImage.default,
                aggregator: aggregatorImage.default
            });
        };

        importImages();
    }, []);

    return (
       <div className="personal-projects-container">
           <div className="personal-projects-title"><h2>Personal Projects</h2></div> 
           <div className="grid-container">
                <div className="grid-item">
                    <h3>Crud React Project</h3>
                    <h4>A heroes crud developed using React</h4>
                    <div className="grid-image-container">
                        <a href="https://github.com/Vitor-Zen/Reactjs-crud" target="_blank">
                            {imageState.react && <img src={imageState.react} className="img-personal-project" alt="An image with the react technology symbol and a computer with lines of code written" />}
                        </a>
                    </div>
                </div>
                <div className="grid-item">
                    <h3>Lifemaker Project</h3>
                    <h4>A web RPG developed using Python and React</h4>
                    <div className="grid-image-container">
                        <a href="https://github.com/Vitor-Zen/lifemaker" target="_blank">
                            {imageState.lifemaker && <img src={imageState.lifemaker} className="img-personal-project" alt="An image of dice used to play rpg on a table" />}
                        </a>
                    </div>
                </div>
                <div className="grid-item">
                    <h3>Link Aggregator Project</h3>
                    <h4>A link aggregator project using HTML, CSS and JavaScript</h4>
                    <div className="grid-image-container">
                        <a href="https://github.com/Vitor-Zen/agregador-de-links" target="_blank">
                            {imageState.aggregator && <img src={imageState.aggregator} className="img-personal-project" alt="An image of a half-open notebook on a table" />}
                        </a>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Projects;
