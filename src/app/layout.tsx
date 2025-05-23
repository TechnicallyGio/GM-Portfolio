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
  title: "Giovanni Medrano | Portfolio",
  authors: [{ name: "Giovanni Medrano", url: "https://giovannimedrano.com" }],
  description:
    "Giovanni Medrano is a software engineer and web developer from Houston, Texas, United States. He specializes in building engaging websites that are fast, responsive, and user-friendly. He is passionate about creating beautiful and functional web applications that provide a great user experience.",
  keywords: [
    "Giovanni Medrano",
    "portfolio",
    "developer",
    "software engineer",
    "web developer",
    "full stack developer",
    "Houston Texas, Website Developer",
    "Houston Texas, Software Engineer",
    "Houston Texas, Web Developer",
    "Houston Texas, Full Stack Developer",
    "Houston Texas, SEO Specialist",
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
