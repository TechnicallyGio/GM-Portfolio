import Link from "next/link";
import { Icon } from "@iconify/react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-8">
        <Icon
          icon="mdi:alert-circle-outline"
          className="mx-auto h-24 w-24 text-blue-400"
        />
      </div>
      <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-lg text-gray-300">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
      >
        <Icon icon="mdi:home" className="h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}
