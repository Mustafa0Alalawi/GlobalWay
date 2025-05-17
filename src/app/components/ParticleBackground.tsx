import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "#ffffff00",
          },
        },
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          color: {
            value: "#247e9f",
          },
          links: {
            enable: true,
            color: "#247e9f",
            distance: 150,
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
}
