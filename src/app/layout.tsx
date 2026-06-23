import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Footer } from "./_components/Footer";
import { TRPCReactProvider } from "~/trpc/react";
import { HydrateClient } from "~/trpc/server";
import Navigation from "./_components/Navigation";

import GalaxyWrapper from "./_components/GalaxyWrapper";

export const metadata: Metadata = {
  title:
    "Giovanni Medrano | Professional Solutions Engineer & Freelance Developer",
  authors: [{ name: "Giovanni Medrano", url: "https://giovannimedrano.com" }],
  description:
    "Giovanni Medrano is a professional Solutions Engineer and Freelance Developer specializing in enterprise development, e-commerce platforms, and custom CRM integrations. With expertise in UI/UX design, business consulting, and multi-channel sales implementation, Giovanni delivers innovative solutions for startups and established businesses alike.",
  keywords: [
    "Giovanni Medrano",
    "Solutions Engineer",
    "Full-Stack Developer",
    "Freelance Developer",
    "Enterprise Development",
    "E-commerce Platform",
    "Stripe Integration",
    "Zoho Integration",
    "Custom CRM Integration",
    "Dual Portfolio",
    "Professional Developer",
    "UI/UX Design",
    "Business Consulting",
    "Multi-Channel Sales Implementation",
    "Inventory Management Systems",
    "Startup MVP",
    "Technical Consulting",
    "Software Engineer",
    "Web Developer",
    "Graphics Design",
    "Branding",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Houston Texas",
    "New York",
    "Solutions Architecture",
    "Business Strategy",
    "Digital Transformation",
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headerLinks = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Work", url: "/work" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-[#09090b] text-white antialiased">
        <GalaxyWrapper />
        <Navigation links={headerLinks} />
        <TRPCReactProvider>
          <HydrateClient>
            <main className="relative z-10 flex-grow">
              <div className="px-6 pt-28 pb-16 sm:px-8 md:px-10 md:pt-32 lg:px-16">
                {children}
              </div>
            </main>
            <Footer />
          </HydrateClient>
        </TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
}
