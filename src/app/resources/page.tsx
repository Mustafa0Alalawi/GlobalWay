"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

const resourceCategories = [
  {
    category: "Slide Template",
    items: [
      {
        title: "GlobalWay Mentorship - May 4th",
        description:
          "Presentation slides for the GlobalWay mentorship session.",
        url: "/res/GlobalWay Mentorship May.04th.pptx",
      },
      {
        title: "Mentorship w Derrick - May 4th",
        description: "Slides from Derrick’s mentorship session.",
        url: "/res/Mentorship w Derrick May 4th.pptx",
      },
      {
        title: "Mentorship w HA - May 5th",
        description: "Slides from HA’s mentorship session.",
        url: "/res/Mentorship w HA May.05th.pptx",
      },
    ],
  },
  {
    category: "Excel Tool",
    items: [
      {
        title: "Exchange Comparison Tool",
        description: "Compare exchange programs across multiple factors.",
        url: "/res/Exchange Comparison Tool.xlsx",
      },
      {
        title: "School Choosing Criteria",
        description: "Excel to help rank & filter your ideal school choices.",
        url: "/res/School Choosing Criteria.xlsx",
      },
    ],
  },
  {
    category: "Resource Link",
    items: [
      {
        title: "Cansbridge Fellowship",
        description: "Entrepreneurial leadership and global immersion program.",
        url: "https://cansbridgefellowship.com/",
      },
      {
        title: "NEXT 36 – NEXT Canada",
        description: "Startup and innovation program for top student founders.",
        url: "https://www.nextcanada.com/next-36/",
      },
      {
        title: "Queen's Innovation Centre – QICSI",
        description: "Queen’s Innovation Centre Summer Initiative (QICSI).",
        url: "https://www.queensu.ca/innovationcentre/programs/queens-innovation-centre-summer-initiative-qicsi",
      },
    ],
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState(
    resourceCategories[0].category
  );

  const selectedCategory = resourceCategories.find(
    (cat) => cat.category === activeCategory
  );

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#f0f8f8] p-6 border-r hidden md:block sticky top-0 h-screen">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="space-y-4">
            {resourceCategories.map((cat) => (
              <li key={cat.category}>
                <button
                  onClick={() => setActiveCategory(cat.category)}
                  className={`text-left font-medium ${
                    activeCategory === cat.category
                      ? "text-[#247e9f] underline"
                      : "text-gray-800 hover:text-[#247e9f]"
                  }`}
                >
                  {cat.category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 py-10">
          <h1 className="text-4xl font-bold text-[#247e9f] mb-10">Resources</h1>

          <div className="grid gap-6 md:grid-cols-2">
            {selectedCategory?.items.map((res, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-6 bg-white shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-[#247e9f] mb-2">
                  {res.title}
                </h2>
                <p className="text-gray-700 mb-4">{res.description}</p>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#247e9f] text-white rounded hover:bg-[#1e6d88] transition"
                >
                  Open Resource
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
