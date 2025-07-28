"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import { List, Map as MapIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const universities = [
  {
    name: "Queen's University",
    slug: "/university/queens",
    logo: "/logo1.png",
  },
  {
    name: "University of Toronto",
    slug: "/university/toronto",
    logo: "/logo6.png",
  },
  {
    name: "University of British Columbia (UBC)",
    slug: "/university/ubc",
    logo: "/logo5.png",
  },
  {
    name: "McGill University",
    slug: "/university/mcgill",
    logo: "/logo3.png",
  },
  {
    name: "Western University",
    slug: "/university/western",
    logo: "/logo4.png",
  },
  {
    name: "McMaster University",
    slug: "/university/mcmaster",
    logo: "/logo2.png",
  },
  {
    name: "University of Waterloo",
    slug: "/university/waterloo",
    logo: "/logo7.png",
  },
  {
    name: "York University",
    slug: "/university/york",
    logo: "/logo10.png",
  },
  {
    name: "University of Alberta",
    slug: "/university/albert",
    logo: "/logo9.png",
  },
  {
    name: "University of Montreal",
    slug: "/university/montreal",
    logo: "/logo8.png",
  },
  {
    name: "California college of the Arts",
    slug: "/university/california",
    logo: "/logos/california.png",
  },
  {
    name: "dalhousie university",
    slug: "/university/dalhousie",
    logo: "/logos/dalhousie.png",
  },
  {
    name: "chicago university",
    slug: "/university/chicago",
    logo: "/logos/chicago.svg",
  },
  {
    name: "ottawa university",
    slug: "/university/ottawa",
    logo: "/logos/ottawa.png",
  },
  {
    name: "simon fraser university",
    slug: "/university/simon",
    logo: "/logos/sfu.png",
  },
  {
    name: "wilfred laurier university",
    slug: "/university/wilfred",
    logo: "/logos/wilfred.png",
  },
  {
    name: "winnipeg university",
    slug: "/university/winnipeg",
    logo: "/logos/winnipeg.png",
  },
  {
    name: "calgary university",
    slug: "/university/calgary",
    logo: "/logos/calgary.png",
  },
  {
    name: "binghamton university",
    slug: "/university/binghamton",
    logo: "/logos/binghamton.png",
  },
];

const mapImages = ["/CanadaMap.png", "/UniMap.png"];

const UniversityPage = () => {
  const [view, setView] = useState("list");

  const [currentMapIndex, setCurrentMapIndex] = useState(0);

  const handleNextMap = () => {
    setCurrentMapIndex((prevIndex) => (prevIndex + 1) % mapImages.length);
  };

  const handlePrevMap = () => {
    setCurrentMapIndex(
      (prevIndex) => (prevIndex - 1 + mapImages.length) % mapImages.length
    );
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative">
        <Navbar />
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-center text-[#247e9f]">
              University
            </h1>

            <div className="flex justify-center my-8">
              <div className="flex items-center bg-gray-200/50 backdrop-blur-sm rounded-full p-1 shadow-inner">
                <button
                  onClick={() => setView("list")}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all
                    ${
                      view === "list"
                        ? "bg-white text-[#1e6d88] shadow"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                >
                  <List size={16} />
                  List
                </button>
                <button
                  onClick={() => setView("map")}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all
                    ${
                      view === "map"
                        ? "bg-white text-[#1e6d88] shadow"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                >
                  <MapIcon size={16} />
                  Map
                </button>
              </div>
            </div>

            {view === "list" ? (
              // --- List View ---
              <div className="flex flex-wrap justify-center gap-10">
                {universities.map((university) => (
                  <Link key={university.slug} href={university.slug}>
                    <div className="border bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center space-x-6 w-80 cursor-pointer">
                      <div className="flex-shrink-0">
                        <Image
                          src={university.logo}
                          alt={`${university.name} Logo`}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xl font-semibold text-gray-800">
                        {university.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              // --- Map View ---
              <div className="relative">
                {/* Main Image Display */}
                <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white/80">
                  <Image
                    key={currentMapIndex}
                    src={mapImages[currentMapIndex]}
                    alt={`Map ${currentMapIndex + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={handlePrevMap}
                    className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                    aria-label="Previous Map"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextMap}
                    className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                    aria-label="Next Map"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default UniversityPage;
