import Image from "next/image";

export default async function Home() {
  return (
    <>
      <header className="relative flex min-h-screen flex-col-reverse items-center justify-center gap-12 overflow-hidden bg-black px-6 py-16 md:flex-row md:px-20 lg:px-32 xl:px-48">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute animate-pulse rounded-full bg-blue-400 opacity-20 blur-xl"
            style={{ top: "10%", left: "10%", width: "150px", height: "150px" }}
          ></div>
          <div
            className="absolute animate-pulse rounded-full bg-purple-500 opacity-30 blur-2xl delay-1000"
            style={{
              top: "70%",
              right: "20%",
              width: "200px",
              height: "200px",
            }}
          ></div>
          <div
            className="absolute animate-pulse rounded-full bg-indigo-600 opacity-25 blur-xl delay-500"
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Giovanni Medrano
            </span>
            <span
              className="ml-2 animate-bounce text-xl font-semibold text-gray-400"
              aria-label="waving hand"
            >
              👋
            </span>
          </h1>
          <p className="text-xl font-semibold tracking-wide text-gray-300">
            <span className="text-indigo-400">Full Stack</span> Website
            Developer
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            Crafting engaging and performant web experiences is my passion. I
            enjoy tackling complex challenges with clean code and intuitive
            design. Let's build something amazing together.
          </p>
          <div className="mt-6">
            <a
              href="#work"
              className="inline-block transform rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-indigo-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 -ml-1 inline-block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.05-.052.2-.052.25-.001l8.955 8.955m-17.488 0h17.49m-17.488 0a5.25 5.25 0 00-5.25-5.25H4.5a5.25 5.25 0 00-5.25 5.25m17.488 0a5.25 5.25 0 015.25-5.25H19.5a5.25 5.25 0 015.25 5.25m-17.488 0v8.955a5.25 5.25 0 005.25 5.25H19.5a5.25 0 005.25-5.25V12"
                />
              </svg>
              View My Work
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="group relative z-10 flex-shrink-0">
          <div
            className="animate-gradient absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-lg"
            style={{
              zIndex: -1,
              backgroundSize: "200% 200%",
              animation: "gradient 5s ease-in-out infinite",
            }}
          ></div>
          <div className="animate-fade-in-up relative h-48 w-48 overflow-hidden rounded-full border-4 border-gray-800 shadow-xl transition duration-300 ease-in-out group-hover:scale-105 md:h-72 md:w-72">
            <Image
              src="https://placehold.co/1000x1000?text=Hello+World"
              alt="Giovanni Medrano"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:brightness-110"
            />
          </div>
        </div>
      </header>
      <section
        id="technologies"
        className="snap-start snap-always bg-black py-16"
      >
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Technologies I Work With
          </h2>
          <p className="mb-12 text-center text-lg text-gray-400">
            A selection of the technologies that power my projects.
          </p>

          {/* Technologies Carousel */}
          <div className="snap-x overflow-x-auto scroll-smooth">
            <div className="flex w-max gap-8 px-4 md:px-0">
              {/* Technology Item - React */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-3xl font-bold text-indigo-400">
                  React
                </span>
              </div>

              {/* Technology Item - Laravel */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-3xl font-bold text-red-500">Laravel</span>
              </div>

              {/* Technology Item - Next.js */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-3xl font-bold text-blue-500">
                  Next.js
                </span>
              </div>

              {/* Technology Item - PHP */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-3xl font-bold text-purple-500">PHP</span>
              </div>

              {/* Technology Item - JavaScript */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-3xl font-bold text-yellow-400">
                  JavaScript
                </span>
              </div>

              {/* Technology Item - HTML */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-3xl font-bold text-orange-500">HTML</span>
              </div>

              {/* Technology Item - Python */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-3xl font-bold text-green-500">
                  Python
                </span>
              </div>

              {/* Technology Item - TypeScript */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-3xl font-bold text-blue-300">
                  TypeScript
                </span>
              </div>

              {/* Technology Item - MongoDB */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-xl font-bold text-green-600">
                  MongoDB
                </span>
              </div>

              {/* Technology Item - MySQL */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-xl font-bold text-blue-600">MySQL</span>
              </div>

              {/* Technology Item - Digital Ocean */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-center text-sm font-bold text-blue-400">
                  Digital Ocean
                </span>
              </div>

              {/* Technology Item - AWS */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-xl font-bold text-orange-400">AWS</span>
              </div>

              {/* Technology Item - Google Cloud */}
              <div className="flex h-48 w-64 snap-center items-center justify-center rounded-lg bg-gray-800 p-6 shadow-md">
                <span className="text-center text-sm font-bold text-blue-600">
                  Google Cloud
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
