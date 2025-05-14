import Image from "next/image";
import { Icon } from "@iconify/react";
export default async function Home() {
  return (
    <>
      <header className="relative top-0 flex min-h-screen flex-col-reverse items-center justify-center gap-12 overflow-hidden px-6 py-16 md:flex-row md:px-20 lg:px-32 xl:px-48">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute animate-pulse rounded-full bg-blue-400 opacity-20 blur-xl"
            style={{ top: "10%", left: "10%", width: "150px", height: "150px" }}
          ></div>
          <div
            className="absolute animate-pulse rounded-full bg-blue-700 opacity-30 blur-2xl delay-1000"
            style={{
              top: "70%",
              right: "20%",
              width: "200px",
              height: "200px",
            }}
          ></div>
          <div
            className="absolute animate-pulse rounded-full bg-blue-600 opacity-25 blur-xl delay-500"
            style={{
              bottom: "5%",
              left: "40%",
              width: "100px",
              height: "100px",
            }}
          ></div>
        </div>

        {/* Text Content */}
        <div className="animate-fade-in relative z-10 max-w-2xl space-y-6 text-center text-white md:text-left">
          <h1 className="text-5xl leading-tight font-extrabold drop-shadow-md md:text-6xl">
            {/* Hello, I&apos;m */}
            <span className="bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
              Giovanni Medrano
            </span>
            <span
              className="ml-2 animate-bounce text-xl font-semibold text-gray-400"
              aria-label="waving hand"
            >
              ✈️
            </span>
          </h1>
          <p className="text-xl font-semibold tracking-wide text-gray-300">
            <span className="text-blue-700">Full Stack</span> Website Developer
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            Crafting engaging and performant web experiences is my passion. I
            enjoy tackling complex challenges with clean code and intuitive
            design. Let&apos;s build something amazing together.
          </p>
          <div className="mt-6">
            <a
              href="#work"
              className="inline-flex transform items-center gap-2 rounded-2xl bg-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-indigo-700"
            >
              <Icon icon="mdi:work" />
              View My Work
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="group relative z-10 flex-shrink-0">
          <div
            className="animate-gradient absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-yellow-500 to-red-800 opacity-75 blur-lg"
            style={{
              zIndex: -1,
              backgroundSize: "200% 200%",
              animation: "gradient 5s ease-in-out infinite",
            }}
          ></div>
          <div className="animate-fade-in-up relative h-48 w-48 overflow-hidden rounded-full border-4 border-gray-800 shadow-xl transition duration-300 ease-in-out group-hover:scale-105 md:h-72 md:w-72">
            <Image
              src="/images/profile_pic.png"
              alt="Giovanni Medrano"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:brightness-110"
            />
          </div>
        </div>
      </header>
    </>
  );
}
