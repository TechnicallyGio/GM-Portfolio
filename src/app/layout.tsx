import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { TRPCReactProvider } from "~/trpc/react";
import { Navigation } from "./_components/Navigation";
import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
  title: "Giovanni Medrano | Portfolio",
  authors: [{ name: "Giovanni Medrano", url: "https://giovannimedrano.com" }],
  description:
    "Giovanni Medrano is a software engineer and web developer from New York, United States. He specializes in building engaging websites that are fast, responsive, and user-friendly. He is passionate about creating beautiful and functional web applications that provide a great user experience.",
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
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-[#14181C] to-black text-white">
        <Navigation />

        <main className="flex-grow">{children}</main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
