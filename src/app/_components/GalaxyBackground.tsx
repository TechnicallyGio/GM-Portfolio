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

      {/* Animated colorful floating blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-35">
        {Array.from({ length: 60 }).map((_, index) => {
          const startTop = `${Math.random() * 100}%`;
          const startLeftRight = `${Math.random() * 50}%`;
          const endTop = `${Math.random() * 100}%`;
          const endLeftRight = `${Math.random() * 50}%`;
          const size = Math.floor(Math.random() * 80) + 40;
          const colors = [
            "bg-green-400",
            "bg-lime-400",
            "bg-teal-400",
            "bg-cyan-400",
            "bg-blue-400",
            "bg-purple-400",
            "bg-pink-400",
          ];
          const opacity = [20, 30, 25, 35];
          const blur = ["blur-xl", "blur-2xl", "blur-lg", "blur-3xl"];
          const duration = Math.random() * 4 + 4;
          const delay = Math.random() * 3;

          const initialPosition = {
            top: startTop,
            [index % 2 === 0 ? "left" : "right"]: startLeftRight,
          };

          const animatePosition = {
            top: endTop,
            [index % 2 === 0 ? "left" : "right"]: endLeftRight,
          };

          const randomColorIndex = Math.floor(Math.random() * colors.length);

          return (
            <motion.div
              key={index}
              className={`absolute rounded-full ${blur[index % blur.length]} ${colors[randomColorIndex]}`}
              style={{
                ...initialPosition,
                width: size,
                height: size,
                opacity: 0,
              }}
              animate={{
                ...animatePosition,
                scale: [1, 1.1 + Math.random() * 0.15, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
