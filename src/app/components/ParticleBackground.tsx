"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: { value: "#FFFFFF" },
        },
        particles: {
          number: { value: 120 },
          size: { value: 1 },
          color: { value: "#247e9f" },
          links: {
            enable: true,
            color: "#410d8f",
            distance: 150,
            opacity: 0.2,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}
