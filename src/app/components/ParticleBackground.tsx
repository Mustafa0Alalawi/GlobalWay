"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#f8fbfc" },
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#247e9f" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
        },
      }}
    />
  );
}
