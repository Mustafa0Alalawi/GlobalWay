"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

const pdfCategories = [
  {
    category: "Orientation Handbook (for new comer)",
    items: [
      {
        title: "UBC Orientation 2025",
        description: "Orientation details for UBC incoming students.",
        url: "/pdf/UBC Orientation 2025.pdf",
      },
    ],
  },
  {
    category: "International Student Handbook",
    items: [
      {
        title: "McGill International 2025",
        description: "Guide for international students at McGill.",
        url: "/pdf/McGill International 2025.pdf",
      },
      {
        title: "Queen's International 2024",
        description: "Resources for Queen’s international students.",
        url: "/pdf/Queen's International 2024.pdf",
      },
    ],
  },
  {
    category: "University Handbook",
    items: [
      {
        title: "McMaster Uni 2025",
        description: "Student handbook for McMaster University.",
        url: "/pdf/McMaster Uni 2025.pdf",
      },
      {
        title: "UofT Uni 2024",
        description: "University of Toronto general handbook.",
        url: "/pdf/UofT Uni 2024.pdf",
      },
      {
        title: "Waterloo Uni 2024",
        description: "Handbook for Waterloo students.",
        url: "/pdf/Waterloo Uni 2024.pdf",
      },
      {
        title: "Western Undergraduate ViewBook 2025",
        description: "Western’s undergraduate program guide.",
        url: "/pdf/Western Undergraduate ViewBook 2025.pdf",
      },
      {
        title: "York Uni 2025",
        description: "York University 2025 student guide.",
        url: "/pdf/York Uni 2025.pdf",
      },
    ],
  },
  {
    category: "Other Handbooks",
    items: [
      {
        title: "Other handbook",
        description:
          "Additional university-related information and support resources.",
        url: "https://drive.google.com/file/d/11J8nba6r3g_2XOdvbFubrNKVD-XFin9x/view",
      },
    ],
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState(
    pdfCategories[0].category
  );
  const selected = pdfCategories.find((cat) => cat.category === activeCategory);

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#f0f8f8] p-6 border-r hidden md:block sticky top-0 h-screen">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="space-y-4">
            {pdfCategories.map((cat) => (
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

        {/* Main */}
        <main className="flex-1 px-6 py-10">
          <h1 className="text-4xl font-bold text-[#247e9f] mb-10">
            Universities Blog
          </h1>

          <div className="grid gap-6 md:grid-cols-2">
            {selected?.items.map((pdf, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-6 bg-white shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-[#247e9f] mb-2">
                  {pdf.title}
                </h2>
                <p className="text-gray-700 mb-4">{pdf.description}</p>
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#247e9f] text-white rounded hover:bg-[#1e6d88] transition"
                >
                  View PDF
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
