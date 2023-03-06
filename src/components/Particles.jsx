import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "#282828", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "slow", // make the particles run away from the cursor
          },
        },
        modes: {
            bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
            grab: { distance: 400, links: { opacity: 1 } },
            push: { quantity: 4 },
            remove: { quantity: 2 },
            repulse: { distance: 200, duration: 0.4 }
          },
      },
      particles: {
        color: { value: "random" },
        links: {
          color: "random",
          distance: 150,
          enable: false,
          opacity: 0.4,
          width: 1
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: "none",
          enable: true,
          out_mode: "out",
          random: false,
          speed: 3,
          straight: false
        },
        rotate: {
          animation: {
            enable: true,
            speed: 10,
            sync: false
          }
        },
        number: { density: { enable: true, area: 800 }, value: 100 },
        opacity: {
          animation: { enable: true, minimumValue: 0.5, speed: 1, sync: false },
          random: false,
          value: 1
        },
        shape: {
          character: [
            {
              fill: true,
              font: "Verdana",
              style: "",
              value: "tsParticles".split(""),
              weight: "400"
            },
            {
              fill: false,
              font: "Verdana",
              style: "",
              value: "tsParticles".split(""),
              weight: "400"
            }
          ],
          image: {
            height: 100,
            replace_color: true,
            src: "images/github.svg",
            width: 100
          },
          polygon: { nb_sides: 5 },
          stroke: { color: "random", width: 1 },
          type: "char"
        },
        size: {
          anim: { enable: true, minimumValue: 8, speed: 20, sync: false },
          random: { minimumValue: 8, enable: true },
          value: 32
        }
      },
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />
};

export default ParticlesComponent;
