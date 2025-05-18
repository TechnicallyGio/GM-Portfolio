// app/_components/GalaxyBackground.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";

export default function GalaxyBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Starfield background using Three.js */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#000010"]} />
          <ambientLight intensity={0.5} />
          <Stars
            radius={100}
            depth={80}
            count={8000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
