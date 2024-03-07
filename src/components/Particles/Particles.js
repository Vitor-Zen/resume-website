import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#000"
                            }
                        },
                        particles: {
                            color: {
                                value: "#FFFFFF"
                            },
                            number: {
                                value: 200
                            },
                            shape: {
                                type: "star"
                            },
                            size: {
                                value: 1
                            },
                            opacity: {
                                value: 1,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.1, 
                                    sync: false
                                }
                            },
                            move: {
                                enable: true,
                                speed: 1
                            }
                        },
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            }
                        },
                        detectRetina: true
                    }}
                />
            )}
        </div>
    );
};

export default ParticlesComponent;
