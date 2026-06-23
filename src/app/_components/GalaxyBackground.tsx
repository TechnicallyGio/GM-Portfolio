// app/_components/GalaxyBackground.tsx
// Minimal, static background: near-black base, faint dot grid, single soft glow.

export default function GalaxyBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#09090b]">
      {/* Faint dot grid */}
      <div className="bg-dot-grid absolute inset-0 opacity-70" />

      {/* Single soft accent glow, top-right */}
      <div className="absolute top-[-10%] right-[-5%] h-[40rem] w-[40rem] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Gentle fade so the grid recedes toward the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]" />
    </div>
  );
}
