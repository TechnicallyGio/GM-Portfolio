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
    "Professional solutions engineer by day, freelance developer by night. I deliver enterprise-grade e-commerce platforms, custom integrations (Stripe, Zoho), and business systems for established clients—plus selective startup MVPs and passion projects.",
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
      <body className="relative flex min-h-screen flex-col text-white">
        <Navigation links={headerLinks} />
        <TRPCReactProvider>
          <HydrateClient>
            <main className="relative flex-grow">
              <GalaxyWrapper />
              <div className="relative z-10 px-6 py-25 md:p-10 lg:p-16 xl:p-20 2xl:p-24">
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
