"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

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

const SectionHeaderWithArrow = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => (
  <div className="flex items-center gap-3 mb-2">
    <h2 className="text-2xl font-bold">{title}</h2>
    <button
      onClick={onClick}
      className="text-[#247e9f] text-base hover:underline flex items-center"
    >
      ➡ Show Info
    </button>
  </div>
);

const QueensUniversityPage = () => {
  const [showInfoPanel, setShowInfoPanel] = useState(true);
  const [activeView, setActiveView] = useState<
    null | "university" | "highschool" | "instructions"
  >(null);

  return (
    <>
      <Navbar />
      <div className="flex">
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

        {/* Main Content */}
        <main className="flex-1 flex min-h-screen px-4 md:px-12 py-8">
          <div className="flex-1 flex flex-col">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 md:px-12 py-4 border-b">
              <div className="flex items-center">
                <img
                  src="/logo7.png"
                  alt=""
                  width={120}
                  height={120}
                  className="mr-4"
                />
                <h1 className="text-3xl md:text-4xl font-bold text-[#247e9f]">
                  WaterLoo University
                </h1>
              </div>
              <div className="flex flex-col items-end gap-2 text-right">
                <span className="text-sm md:text-base text-gray-700 hidden sm:inline">
                  Need help? Book a meeting
                </span>
                <a
                  href="https://calendly.com/stevenxionghy/buddyup-mentorship-program-initial-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#247e9f] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1e6d88] transition"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* View Selector */}
            <div className="mb-10">
              <p className="text-lg">How to Use the Link Hub:</p>

              <button
                className={`px-6 py-2 rounded-md font-semibold ${
                  activeView === "instructions"
                    ? "bg-[#247e9f] text-white"
                    : "bg-gray-200 text-[#247e9f]"
                }`}
                onClick={() => setActiveView("instructions")}
              >
                Page Instructions
              </button>

              <p className="text-lg mt-10">For current students:</p>

              <button
                className={`px-6 py-2 rounded-md font-semibold ${
                  activeView === "university"
                    ? "bg-[#247e9f] text-white"
                    : "bg-gray-200 text-[#247e9f]"
                }`}
                onClick={() => setActiveView("university")}
              >
                University / Access Campus Service
              </button>

              <p className="text-lg mt-2">
                For high-school students & parents:
              </p>

              <button
                className={`px-6 py-2 rounded-md font-semibold ${
                  activeView === "highschool"
                    ? "bg-[#247e9f] text-white"
                    : "bg-gray-200 text-[#247e9f]"
                }`}
                onClick={() => setActiveView("highschool")}
              >
                High School / Research About Uni
              </button>
            </div>
            {/* Instructions View */}
            {activeView === "instructions" && (
              <div className="prose max-w-4xl text-gray-800">
                <h2 className="text-2xl font-bold mb-4">
                  How to Use the Link Hub
                </h2>
                <p>
                  Our Queen’s “Important Links” hub is split into{" "}
                  <strong>seven high-value sections</strong>. Use it like a
                  quick dashboard:
                </p>

                <table className="table-auto border mt-6 w-full text-left text-sm">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 font-semibold">
                        Section
                      </th>
                      <th className="border px-4 py-2 font-semibold">
                        When to click
                      </th>
                      <th className="border px-4 py-2 font-semibold">
                        What you’ll find
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 font-bold">
                        国际中心 (QUIC)
                      </td>
                      <td className="border px-4 py-2">
                        - 国际学生办签证、健康保险、迎新攻略时
                      </td>
                      <td className="border px-4 py-2">
                        Study-permit & visa guides, UHIP details, arrival
                        checklists, peer programs
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-bold">入学过渡</td>
                      <td className="border px-4 py-2">
                        - 已拿录取、准备开学
                        <br />- 想知道 Orientation / 下一步
                      </td>
                      <td className="border px-4 py-2">
                        First-year “Next Steps”, summer events, peer-mentor
                        (QSuccess), English prep
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-bold">
                        学校系统 SOLUS
                      </td>
                      <td className="border px-4 py-2">
                        - 选课、查成绩、交学费
                      </td>
                      <td className="border px-4 py-2">
                        Secure login + help pages for Queen’s main student
                        information system
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-bold">学费</td>
                      <td className="border px-4 py-2">
                        - 想看费用明细或付款截止
                      </td>
                      <td className="border px-4 py-2">
                        Fee schedules, payment options, tax forms, add-on fee
                        explanations
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-bold">住宿</td>
                      <td className="border px-4 py-2">- 申请或管理校内宿舍</td>
                      <td className="border px-4 py-2">
                        Residence application portal, meal plans, move-in dates
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-bold">心理健康</td>
                      <td className="border px-4 py-2">- 需要医疗或心理支持</td>
                      <td className="border px-4 py-2">
                        Student Wellness booking, counselling groups, peer
                        health education
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-bold">社团 (AMS)</td>
                      <td className="border px-4 py-2">
                        - 想加入社团、拓展人脉
                      </td>
                      <td className="border px-4 py-2">
                        200+ club directory, event listings, student government
                        resources
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="text-xl font-semibold mt-8">小贴士</h3>
                <ol className="list-decimal list-inside space-y-2 mt-2">
                  <li>
                    <strong>筛选：</strong>
                    在页面顶部可用「Prospective」⇄「Current
                    Student」切换，只呈现与你最相关的链接。
                  </li>
                  <li>
                    <strong>快速搜索：</strong>输入关键词（例 “visa”,
                    “residence”, “career”）即可即时过滤张表。
                  </li>
                  <li>
                    <strong>手机访问：</strong>
                    长按任一链接可收藏至微信/浏览器阅读列表，方便离线查看。
                  </li>
                  <li>
                    <strong>实时更新：</strong>
                    我们每学期核对官方网址；如遇失效链接，点击右上角 “Report
                    Link” 告诉我们。
                  </li>
                </ol>

                <p className="mt-4">
                  借助这张集中导航，你无需在多个官网页面来回跳转 ——{" "}
                  <strong>一步直达最实用的 Queen’s 资源。</strong>{" "}
                  祝你研究顺利，校园生活愉快！
                </p>
              </div>
            )}

            {/* UNIVERSITY VIEW */}
            {activeView === "university" && (
              <div className="flex gap-8">
                <div className="flex-1 space-y-10 text-gray-700">
                  <section id="overview">
                    <SectionHeaderWithArrow
                      title="Overview"
                      onClick={() => setShowInfoPanel(!showInfoPanel)}
                    />
                    <p>
                      📍 74 Union St., Gordon Hall, Kingston, ON K7L 2N8, Canada
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
                        www.queensu.ca
                      </a>
                    </p>
                  </section>

                  <section id="admissions">
                    <h2 className="text-2xl font-bold mb-2">Admissions</h2>
                    <ul className="list-disc pl-5">
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
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-2">Campus Life</h2>
                    <ul className="list-disc pl-5">
                      <li>
                        <a
                          href="https://www.queensu.ca/studentexperience/"
                          className="text-[#247e9f] underline"
                        >
                          Student Experience Office
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.queensu.ca/admission/visit/campus-tours"
                          className="text-[#247e9f] underline"
                        >
                          Campus Tours
                        </a>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-2">Residence</h2>
                    <a
                      href="https://www.queensu.ca/residences/"
                      className="text-[#247e9f] underline"
                    >
                      Residence Information
                    </a>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-2">Clubs</h2>
                    <a
                      href="https://www.myams.org/clubs/club-directory/"
                      className="text-[#247e9f] underline"
                    >
                      AMS Club Directory
                    </a>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-2">Careers</h2>
                    <a
                      href="https://careers.queensu.ca/"
                      className="text-[#247e9f] underline"
                    >
                      Career Services
                    </a>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-2">Financial Aid</h2>
                    <a
                      href="https://www.queensu.ca/registrar/financial-aid"
                      className="text-[#247e9f] underline"
                    >
                      Financial Aid Office
                    </a>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-2">
                      Wellness & Support
                    </h2>
                    <a
                      href="https://www.queensu.ca/studentwellness/"
                      className="text-[#247e9f] underline"
                    >
                      Student Wellness Services
                    </a>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-2">IT & Library</h2>
                    <ul className="list-disc pl-5">
                      <li>
                        <a
                          href="https://library.queensu.ca/"
                          className="text-[#247e9f] underline"
                        >
                          Queen's Library
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.queensu.ca/its/"
                          className="text-[#247e9f] underline"
                        >
                          ITS – Tech Help
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>

                {/* Right Info Panel */}
                {showInfoPanel && (
                  <aside className="w-1/2 max-w-md bg-[#f9f9f9] border-l px-6 py-8 text-md text-gray-800">
                    <h3 className="text-xl font-semibold mb-4">Overview:</h3>
                    <p className="mb-4 font-medium">
                      🏰 About Queen’s University (Kingston, Ontario)
                    </p>
                    <p>
                      Founded in 1841 by Royal Charter, Queen’s University is
                      one of Canada’s oldest public research institutions.
                      Located on the shores of Lake Ontario in the historic city
                      of Kingston, Queen’s offers an intimate, walk-able campus,
                      more than 200 undergraduate and graduate programs across
                      eight faculties and schools, and a community of 33,000
                      students from 100+ countries.
                    </p>
                    <p className="mt-4">
                      The university is a member of the U15 Group of Canadian
                      Research Universities, home to Nobel- and
                      Turing-affiliated scholars, and is consistently ranked for
                      student satisfaction, research intensity, and global
                      impact. From its storied limestone buildings to its modern
                      innovation hubs, Queen’s blends tradition with
                      forward-looking teaching, discovery, and community
                      engagement. Wikipedia女王大学
                    </p>
                  </aside>
                )}
              </div>
            )}
            {activeView === "highschool" && (
              <div className="space-y-10 text-gray-700">
                <section>
                  <h2 className="text-2xl font-bold mb-2">Why Queen’s?</h2>
                  <ul className="list-disc pl-5">
                    <li>
                      <a
                        href="https://www.queensu.ca/"
                        className="text-[#247e9f] underline"
                      >
                        Official Website
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bit.ly/Queens_Viewbook"
                        className="text-[#247e9f] underline"
                      >
                        Viewbook (Domestic)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bit.ly/Queens_Int_Viewbook"
                        className="text-[#247e9f] underline"
                      >
                        Viewbook (International)
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-2">
                    Programs & Faculties
                  </h2>
                  <a
                    href="https://www.queensu.ca/academics/programs"
                    className="text-[#247e9f] underline"
                  >
                    Explore Programs
                  </a>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-2">
                    Admissions & Deadlines
                  </h2>
                  <ul className="list-disc pl-5">
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
                        href="https://www.queensu.ca/admission/applying/dates-deadlines"
                        className="text-[#247e9f] underline"
                      >
                        Important Dates
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.ouac.on.ca/guide/undergrad-guide"
                        className="text-[#247e9f] underline"
                      >
                        OUAC
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-2">
                    Costs & Scholarships
                  </h2>
                  <ul className="list-disc pl-5">
                    <li>
                      <a
                        href="https://www.queensu.ca/registrar/financial-aid"
                        className="text-[#247e9f] underline"
                      >
                        Financial Aid
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.queensu.ca/admission/scholarships"
                        className="text-[#247e9f] underline"
                      >
                        Entrance Scholarships
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-2">
                    Campus Life Snapshot
                  </h2>
                  <ul className="list-disc pl-5">
                    <li>
                      <a
                        href="https://www.queensu.ca/residences/"
                        className="text-[#247e9f] underline"
                      >
                        Residence
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.myams.org/clubs/club-directory/"
                        className="text-[#247e9f] underline"
                      >
                        Clubs & Activities
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-2">Contact Info</h2>
                  <p>
                    📧{" "}
                    <a
                      href="mailto:admission@queensu.ca"
                      className="text-[#247e9f] underline"
                    >
                      admission@queensu.ca
                    </a>
                    <br />
                    📞 (613) 533-2218
                  </p>
                </section>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default QueensUniversityPage;
