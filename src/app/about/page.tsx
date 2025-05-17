"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";

function FloatingBlob() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls enableZoom={false} autoRotate />
          <FloatingBlob />
        </Canvas>
      </div>

      {/* Content */}
      <motion.section
        className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-6 py-24 shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-6 text-center text-4xl font-bold text-white">
          About Me
        </h1>

        <div className="space-y-6 text-base leading-relaxed text-gray-200 md:text-lg">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hi, I'm{" "}
            <strong className="text-indigo-400">Giovanni Medrano</strong> — a
            self-taught website developer and graphic designer based in{" "}
            <strong>New York, USA</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            My passion for building clean, user-focused websites started with
            curiosity and grew into a freelance career. I create digital
            experiences that combine functionality and aesthetics.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            I've worn many hats professionally — from aquatics and retail to
            aviation and technology — giving me a well-rounded, adaptable
            approach to every project.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm especially passionate about{" "}
            <strong className="text-indigo-300">aviation</strong>. The mix of
            structure and exploration inspires my work and mindset — always
            aiming high, but grounded in detail.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            In my free time, I build websites on a freelance basis, helping
            individuals and small businesses bring their ideas to life.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
