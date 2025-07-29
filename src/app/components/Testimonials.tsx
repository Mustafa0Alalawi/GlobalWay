"use client";
import React from "react";
import Link from "next/link";

const universityLogos = [
  {
    href: "/university/queens",
    src: "/logos/queens.png",
    alt: "Queen's University",
  },
  {
    href: "/university/toronto",
    src: "/logos/toronto.png",
    alt: "University of Toronto",
  },
  {
    href: "/university/ubc",
    src: "/logos/ubc.png",
    alt: "University of British Columbia",
  },
  {
    href: "/university/mcgill",
    src: "/logos/mcgill.png",
    alt: "McGill University",
  },
  {
    href: "/university/western",
    src: "/logos/western.png",
    alt: "Western University",
  },
  {
    href: "/university/mcmaster",
    src: "/logos/mcmaster.png",
    alt: "McMaster University",
  },
  {
    href: "/university/waterloo",
    src: "/logos/waterloo.png",
    alt: "University of Waterloo",
  },
  { href: "/university/york", src: "/logos/york.png", alt: "York University" },
  {
    href: "/university/alberta",
    src: "/logos/alberta.png",
    alt: "University of Alberta",
  },
  {
    href: "/university/montreal",
    src: "/logos/montreal.png",
    alt: "Université de Montréal",
  },
  {
    href: "/university/dalhousie",
    src: "/logos/dalhousie.png",
    alt: "Dalhousie University",
  },
  {
    href: "/university/winnipeg",
    src: "/logos/winnipeg.png",
    alt: "University of Winnipeg",
  },
  {
    href: "/university/sfu",
    src: "/logos/sfu.png",
    alt: "Simon Fraser University",
  },
  {
    href: "/university/california",
    src: "/logos/california.png",
    alt: "California College of the Arts",
  },
  {
    href: "/university/chicago",
    src: "/logos/chicago.svg",
    alt: "School of the Art Institute of Chicago",
  },
  {
    href: "/university/calgary",
    src: "/logos/calgary.png",
    alt: "University of Calgary",
  },
  {
    href: "/university/ottawa",
    src: "/logos/ottawa.png",
    alt: "University of Ottawa",
  },
  {
    href: "/university/wilfred",
    src: "/logos/wilfred.png",
    alt: "Wilfrid Laurier University",
  },
  {
    href: "/university/binghamton",
    src: "/logos/binghamton.png",
    alt: "Binghamton University",
  },
];

const Testimonials = () => {
  return (
    <>
      {/* Custom CSS for the scrolling animation */}
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Hear what other <span className="text-blue-400">mentees</span> have
            to say
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Accompany you on your university journey
          </p>

          {/* Testimonial Video */}
          <div className="w-full flex justify-center">
            <video
              controls
              className="rounded-lg w-full md:w-2/3 lg:w-1/2 shadow-md"
            >
              <source src="/Mentors.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* GlobalWay's Mission Section */}
      <section
        className="py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/everyone.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content on top */}
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">GlobalWay's Mission</h3>
          <p className="text-lg mb-8">
            Help Chinese international students (Gr10,11,12, freshman,
            sophomore) to better:
          </p>

          <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-md">
            <li>Search and understand universities</li>
            <li>Prepare for university applications</li>
            <li>
              Adapt to local university life (academics, socializing, career
              development, clubs, university resources)
            </li>
          </ul>

          {/* University Logos - Rolling Marquee */}
          <div className="mt-16 w-full overflow-hidden">
            <div className="relative rounded-xl bg-white/10 backdrop-blur-sm py-4">
              <div className="absolute inset-0 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"></div>
              <div className="w-full inline-flex flex-nowrap">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll">
                  {universityLogos.map((logo, index) => (
                    <li key={index}>
                      <Link href={logo.href}>
                        <div className="w-40 h-20 px-4 flex items-center justify-center">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-h-16 max-w-full object-contain"
                          />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul
                  className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll"
                  aria-hidden="true"
                >
                  {universityLogos.map((logo, index) => (
                    <li key={index + universityLogos.length}>
                      <Link href={logo.href}>
                        <div className="w-40 h-20 px-4 flex items-center justify-center">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-h-16 max-w-full object-contain"
                          />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
