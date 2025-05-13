import Image from "next/image";

export default async function Home() {
  return (
    <header className="flex min-h-screen flex-col-reverse items-center justify-center gap-8 px-6 py-12 md:flex-row md:px-20">
      {/* Text Content */}
      <div className="animate-fade-in max-w-2xl space-y-4 text-center md:text-left">
        <h1 className="text-4xl leading-tight font-extrabold text-gray-800 drop-shadow-md md:text-5xl">
          {/*  Hello, I&apos;m */}
          <span className="bg-gradient-to-r from-blue-500 to-red-700 bg-clip-text text-transparent">
            Giovanni Medrano
          </span>
        </h1>
        <p className="text-xl font-medium text-gray-600">
          Full Stack Website Developer
        </p>
        <p className="text-md text-gray-500">
          I am a software engineer with a passion for building engaging,
          performant web applications. I thrive on solving complex problems with
          elegant code and thoughtful design.
        </p>
        <div className="pt-4">
          <a
            href="#projects"
            className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-white shadow-md transition duration-300 hover:bg-indigo-700"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-shrink-0">
        <div className="animate-fade-in-up relative h-40 w-40 overflow-hidden rounded-full border-4 border-indigo-300 shadow-lg md:h-60 md:w-60">
          <Image
            src="https://placehold.co/1000x1000?text=Hello+World"
            alt="Giovanni Medrano"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
