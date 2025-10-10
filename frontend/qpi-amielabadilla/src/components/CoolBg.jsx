import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // lightweight version

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // load the slim bundle
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#061c53", 
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: { quantity: 1 },
          grab: { distance: 150, links: { opacity: 0.8  } },
        },
      },
      particles: {
        number: {
          value: 200,
          density: { enable: true, area: 800 },
        },
        color: { value: [ "#83D7E1","#F390B1",] }, // snow is white
        shape: { type: "circle" },   // round snowflakes
        opacity: {
          value: 0.8,
          random: true,
        },
        size: {
          value: { min: 1, max:7 }, // random snow sizes
        },
        move: {
          enable: true,
          direction: "bottom", // snow falls down
          speed: 0.2,            // slow like snow
          straight: false,
          outModes: { default: "out" }, // respawn when leaving screen
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    </div>
  );
}