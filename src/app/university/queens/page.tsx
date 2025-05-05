import React from "react";
import Navbar from "../../components/Navbar.tsx";

const categories = [
  "Overview",
  "Programs",
  "Admissions",
  "Campus Life",
  "Residence",
  "Clubs",
  "Careers",
  "Financial Aid",
];

const QueensUniversityPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-[#f0f8f8] p-6 border-r sticky top-0 h-screen hidden md:block">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#247e9f] hover:underline font-medium"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <section className="flex-1 p-8 max-w-4xl">
          {/* Header with Logo */}
          <div className="flex items-center mb-10">
            <img
              src="/queens1.png"
              alt="Queen's University Logo"
              width={250}
              height={250}
              className="mr-4"
            />
            <h1 className="text-4xl font-bold text-[#247e9f]">
              Queen’s University
            </h1>
          </div>

          {/* Overview */}
          <div id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">
              📍 74 Union St., Gordon Hall, Kingston K7L 2N8, Canada
              <br />
              📧{" "}
              <a
                href="mailto:admission@queensu.ca"
                className="text-[#247e9f] underline"
              >
                admission@queensu.ca
              </a>
              <br />
              📞 (613) 533-2218
              <br />
              🌐{" "}
              <a
                href="https://www.queensu.ca/"
                target="_blank"
                className="text-[#247e9f] underline"
              >
                queensu.ca
              </a>
            </p>
          </div>

          {/* Programs */}
          <div id="programs" className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Programs</h2>
            <a
              href="https://www.queensu.ca/academics/programs"
              target="_blank"
              className="text-[#247e9f] underline"
            >
              View All Programs
            </a>
          </div>

          {/* Admissions */}
          <div id="admissions" className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Admissions</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a
                  href="https://www.queensu.ca/admission/"
                  className="text-[#247e9f] underline"
                >
                  Admissions Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.queensu.ca/admission/applying/admission-requirements"
                  className="text-[#247e9f] underline"
                >
                  Requirements
                </a>
              </li>
              <li>
                <a
                  href="https://www.queensu.ca/admission/applying/dates-deadlines"
                  className="text-[#247e9f] underline"
                >
                  Important Dates
                </a>
              </li>
              <li>
                <a
                  href="https://www.queensu.ca/admission/applying/how-to-apply"
                  className="text-[#247e9f] underline"
                >
                  How to Apply
                </a>
              </li>
              <li>
                <a
                  href="https://www.ouac.on.ca/guide/undergrad-guide"
                  className="text-[#247e9f] underline"
                >
                  OUAC Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.commonapp.org/explore/queens-university-canada"
                  className="text-[#247e9f] underline"
                >
                  Common App
                </a>
              </li>
            </ul>
          </div>

          {/* Campus Life */}
          <div id="campus-life" className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Campus Life</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a
                  href="https://www.queensu.ca/admission/campus-life"
                  className="text-[#247e9f] underline"
                >
                  Campus Life
                </a>
              </li>
              <li>
                <a
                  href="https://www.queensu.ca/admission/visit/campus-tours"
                  className="text-[#247e9f] underline"
                >
                  Book a Campus Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Residence */}
          <div id="residence" className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Residence</h2>
            <a
              href="https://www.queensu.ca/residences/"
              className="text-[#247e9f] underline"
            >
              Residence Information
            </a>
          </div>

          {/* Clubs */}
          <div id="clubs" className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Clubs</h2>
            <a
              href="https://www.myams.org/clubs/club-directory/"
              className="text-[#247e9f] underline"
            >
              AMS Club Directory
            </a>
          </div>

          {/* Careers */}
          <div id="careers" className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Careers</h2>
            <a
              href="https://careers.queensu.ca/"
              className="text-[#247e9f] underline"
            >
              Career Services
            </a>
          </div>

          {/* Financial Aid */}
          <div id="financial-aid" className="mb-12">
            <h2 className="text-2xl font-semibold mb-2">Financial Aid</h2>
            <a
              href="https://www.queensu.ca/registrar/registration/future-students"
              className="text-[#247e9f] underline"
            >
              Future Students – Financial Aid
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default QueensUniversityPage;
