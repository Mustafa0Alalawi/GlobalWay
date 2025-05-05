import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-1 w-full z-20">
        <Navbar />
      </div>
      {/* Background Image */}
      <img
        src="/banner.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for better contrast */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold sm:text-6xl">
          Welcome to <span className="text-[#60a5fa]">GW</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Your Global Path Begins Here.
        </p>
        <div className="mt-2">
          <div className="inline-block px-6 py-2 text-black bg-[#60a5fa] rounded-full font-medium shadow-md hover:bg-gray-100 transition">
            <Link href="/contact">Start your journey</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
