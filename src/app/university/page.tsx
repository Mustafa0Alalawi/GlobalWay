import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

const universities = [
  {
    name: "Qeen's University",
    slug: "Queen's",
    logo: "/queens1.png",
  },
];

const UniversityPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Universities</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {universities.map((university) => (
              <Link key={university.slug} href={`/university/queens`}>
                <div className="border rounded-lg p-6 hover:shadow-lg transition flex items-center space-x-4">
                  <Image
                    src={university.logo}
                    alt={`${university.name} Logo`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <span className="text-xl font-semibold">
                    {university.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UniversityPage;
