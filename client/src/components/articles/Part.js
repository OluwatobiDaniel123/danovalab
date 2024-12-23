import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Import slim version

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    console.log("Slim Particles Loaded:", engine);
    await loadSlim(engine); // Initialize slim version
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000", // Background color
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff", // Particle color
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 150, // Adjust the number of particles
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Connect particles when hovered
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.7,
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
