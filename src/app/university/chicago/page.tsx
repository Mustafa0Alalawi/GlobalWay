"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

// Data structure holding both English and Chinese links for SAIC
const universityViewData = [
  {
    id: "overview",
    links: {
      en: [
        {
          title: "QS Ranking",
          url: "https://www.saic.edu/news/saic-ranked-10-qs-world-university-rankings-top-art-and-design-schools",
        },
        {
          title: "Campus Map",
          url: "https://www.saic.edu/sites/default/files/legacy/SAIC-CampusMap.pdf",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.saic.edu/news/saic-ranked-10-qs-world-university-rankings-top-art-and-design-schools",
        },
        {
          title: "校区地图",
          url: "https://www.saic.edu/sites/default/files/legacy/SAIC-CampusMap.pdf",
        },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Programs List / Viewbook",
          url: "https://www.saic.edu/academics/undergraduate-studies",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://www.saic.edu/academics/undergraduate-studies",
        },
      ],
    },
  },
  {
    id: "admissions",
    links: {
      en: [
        { title: "Undergraduate Admission Home", url: "https://www.saic.edu/" },
        {
          title: "Entry Requirements",
          url: "https://www.saic.edu/writing/undergraduate/admissions-requirements",
        },
        {
          title: "Important Dates",
          url: "https://www.saic.edu/high-school-programs/early-college-program-summer-institute/important-dates-deadlines",
        },
      ],
      cn: [
        { title: "本科申请主页", url: "https://www.saic.edu/" },
        {
          title: "入学要求",
          url: "https://www.saic.edu/writing/undergraduate/admissions-requirements",
        },
        {
          title: "重要日期",
          url: "https://www.saic.edu/high-school-programs/early-college-program-summer-institute/important-dates-deadlines",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "Common App & Direct Application",
          url: "https://www.saic.edu/admissions/undergraduate/how-apply-freshman",
        },
      ],
      cn: [
        {
          title: "Common App 与直申通道",
          url: "https://www.saic.edu/admissions/undergraduate/how-apply-freshman",
        },
      ],
    },
  },
  {
    id: "cost-funding",
    links: {
      en: [
        {
          title: "Tuition Fees",
          url: "https://www.saic.edu/cost-financial-aid/cost-fees",
        },
        {
          title: "Scholarship Search",
          url: "https://www.saic.edu/cost-financial-aid/scholarships-grants/saic-scholarships-grants",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://www.saic.edu/cost-financial-aid/student-employment",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://www.saic.edu/cost-financial-aid/cost-fees",
        },
        {
          title: "奖学金查询",
          url: "https://www.saic.edu/cost-financial-aid/scholarships-grants/saic-scholarships-grants",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://www.saic.edu/cost-financial-aid/student-employment",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        {
          title: "Campus Life & Clubs",
          url: "https://www.saic.edu/campus-life",
        },
        {
          title: "Student Support",
          url: "https://www.saic.edu/supporting-students",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.saic.edu/where-eat/meal-plans",
        },
      ],
      cn: [
        { title: "校园生活与社团", url: "https://www.saic.edu/campus-life" },
        { title: "学生支持", url: "https://www.saic.edu/supporting-students" },
        {
          title: "校园餐饮计划",
          url: "https://www.saic.edu/where-eat/meal-plans",
        },
      ],
    },
  },
  {
    id: "residence-housing",
    links: {
      en: [
        {
          title: "Residence Home",
          url: "https://www.saic.edu/life-saic/housing-residential-life",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.saic.edu/cost-financial-aid/cost-fees#chapter=chapter-12185-Housing-Costs",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.saic.edu/where-live/campus-housing",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.saic.edu/life-saic/housing-residential-life",
        },
        {
          title: "房型与费用",
          url: "https://www.saic.edu/cost-financial-aid/cost-fees#chapter=chapter-12185-Housing-Costs",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.saic.edu/where-live/campus-housing",
        },
      ],
    },
  },
  {
    id: "intl-support",
    links: {
      en: [
        {
          title: "International Affairs",
          url: "https://www.saic.edu/international-affairs",
        },
        {
          title: "Visa Application Process",
          url: "https://www.saic.edu/admissions/undergraduate/info-international-students#chapter=chapter-13047-Visa-Application-Process",
        },
        { title: "Health & Wellness", url: "https://www.saic.edu/wellness" },
      ],
      cn: [
        {
          title: "国际事务办公室",
          url: "https://www.saic.edu/international-affairs",
        },
        {
          title: "签证申请流程",
          url: "https://www.saic.edu/admissions/undergraduate/info-international-students#chapter=chapter-13047-Visa-Application-Process",
        },
        { title: "健康与心理支持", url: "https://www.saic.edu/wellness" },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Resources (CAPX)",
          url: "https://www.saic.edu/capx/career-resources",
        },
        { title: "Alumni Network", url: "https://www.saic.edu/alumni" },
      ],
      cn: [
        {
          title: "职业资源 (CAPX)",
          url: "https://www.saic.edu/capx/career-resources",
        },
        { title: "校友网络", url: "https://www.saic.edu/alumni" },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Campus Housing Guide",
          url: "https://www.saic.edu/where-live/campus-housing",
        },
        {
          title: "Campus Safety Resources",
          url: "https://www.saic.edu/campus-safety/resources",
        },
      ],
      cn: [
        {
          title: "校园住宿指南",
          url: "https://www.saic.edu/where-live/campus-housing",
        },
        {
          title: "校园安全资源",
          url: "https://www.saic.edu/campus-safety/resources",
        },
      ],
    },
  },
  {
    id: "tours-media",
    links: {
      en: [
        { title: "Visit SAIC", url: "https://www.saic.edu/visit" },
        {
          title: "Virtual Campus VR",
          url: "https://www.saic.edu/admissions#virtualtour",
        },
      ],
      cn: [
        { title: "参观 SAIC", url: "https://www.saic.edu/visit" },
        {
          title: "虚拟校园 VR",
          url: "https://www.saic.edu/admissions#virtualtour",
        },
      ],
    },
  },
];

const pdfViewData = [
  {
    id: "admission_guides",
    links: {
      en: [
        {
          title: "Admissions Application Guide PDF",
          description:
            "This document details the application process for SAIC undergraduate and graduate programs, including artistic direction and more.",
          url: "https://insidemcc.mchenry.edu/pubwebapp/uploadfile/transferguide/SAIC1920.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Physical Exam Form",
          description:
            "Used for submitting student health information before enrollment.",
          url: "https://www.saic.edu/sites/default/files/legacy/Physical_Exam.pdf?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "招生申请指南 PDF",
          description:
            "该文档详述 SAIC 本科与研究生的申请流程、专业设置、艺术方向等内容，助力申请准备。",
          url: "https://insidemcc.mchenry.edu/pubwebapp/uploadfile/transferguide/SAIC1920.pdf?utm_source=chatgpt.com",
        },
        {
          title: "入学体检表",
          description:
            "用于学生入学前健康资料提交，适合作为手册中的体检流程参考。",
          url: "https://www.saic.edu/sites/default/files/legacy/Physical_Exam.pdf?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "SAIC Undergraduate Welcome Week Schedule 2024",
          description:
            "Schedule for new undergraduate and transfer students, including check-in, housing assignments, welcome ceremonies, and international student programs.",
          url: "https://www.saic.edu/sites/default/files/2024-07/SAIC%20Undergraduate%20Welcome%20Week%20Schedule%202024.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Student Orientation Handbook (2025 Edition)",
          description:
            "Includes student code of conduct, campus resources, orientation process, and support for international students.",
          url: "https://www.saic.edu/sites/default/files/2025-03/osa-02262025_orientation_handbook_student_v3.pdf?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "SAIC 本科生迎新周日程 2024",
          description:
            "这是SAIC本科新生与转学新生的迎新周活动安排 PDF，涵盖报到、分宿舍、欢迎仪式、国际学生专属项目等重要日程信息。",
          url: "https://www.saic.edu/sites/default/files/2024-07/SAIC%20Undergraduate%20Welcome%20Week%20Schedule%202024.pdf?utm_source=chatgpt.com",
        },
        {
          title: "学生迎新手册 (2025版)",
          description:
            "包括学生行为守则、校园资源介绍、迎新流程说明，以及国际学生相关支持内容，是新生衔接期的重要指导手册。",
          url: "https://www.saic.edu/sites/default/files/2025-03/osa-02262025_orientation_handbook_student_v3.pdf?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Financial Aid Award Guide",
          description:
            "Details scholarships, grants, loans, and work-study opportunities, and provides strategies for financing tuition.",
          url: "https://www.saic.edu/sites/default/files/2025-01/2025-26-ug_award_guide-final-12.17.24.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Figure Your Cost",
          description:
            "A fillable form to self-calculate annual costs for tuition, housing, insurance, etc.",
          url: "https://www.saic.edu/sites/default/files/2025-04/2025-26-fyc-ugrd-v2025-01-16-fillable.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Career and Professional Experience (CAPX)",
          description:
            "CAPX brochure summarizing career services for students and alumni, including resume advising, internships, and job fairs. 93% graduate employment rate.",
          url: "https://www.saic.edu/sites/default/files/2023-06/CAPX_Brochure.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Supervisor's Guide to Student Payroll",
          description:
            "A guide for supervisors on payroll and HR processes for student employees.",
          url: "https://www.saic.edu/sites/default/files/2024-08/24-25-supervisor-s-guide-to-student-payroll-v.8.20.24.pdf?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "财务援助奖项指南",
          description:
            "详细介绍奖学金、助学金、贷款及工作助学机会，提供家庭如何筹措学费的策略指南。",
          url: "https://www.saic.edu/sites/default/files/2025-01/2025-26-ug_award_guide-final-12.17.24.pdf?utm_source=chatgpt.com",
        },
        {
          title: "计算您的费用",
          description:
            "可填写并自计算年学费、住宿、保险等项目成本，适用于新生预算规划与财务预估。",
          url: "https://www.saic.edu/sites/default/files/2025-04/2025-26-fyc-ugrd-v2025-01-16-fillable.pdf?utm_source=chatgpt.com",
        },
        {
          title: "职业与专业经验 (CAPX)",
          description:
            "CAPX 宣传手册汇总了 SAIC 为学生与校友提供的职业发展服务，包括简历指导、项目实习机会、招聘活动等。毕业班就业率高达 93%。",
          url: "https://www.saic.edu/sites/default/files/2023-06/CAPX_Brochure.pdf?utm_source=chatgpt.com",
        },
        {
          title: "学生薪资主管指南",
          description: "为招聘学生员工的主管准备的薪资与人事流程参考手册。",
          url: "https://www.saic.edu/sites/default/files/2024-08/24-25-supervisor-s-guide-to-student-payroll-v.8.20.24.pdf?utm_source=chatgpt.com",
        },
      ],
    },
  },
];

// Centralized object for all translated UI text
const translations = {
  en: {
    sidebar: {
      instructionsTitle: "Page Instructions:",
      instructionsButton: "How to Use This Hub",
      currentStudentTitle: "For current students:",
      universityButton: "University View",
      highSchoolTitle: "For high-school students:",
      highSchoolButton: "High School View",
      pdfViewTitle: "PDF Resources:",
      pdfViewButton: "View PDF Guides",
      categoriesTitle: "Categories",
    },
    header: {
      title: "School of the Art Institute of Chicago",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🎨 About SAIC",
      aboutParagraph1:
        "The School of the Art Institute of Chicago (SAIC) is one of America's largest accredited independent schools of art and design. It is located in the Loop in Chicago, Illinois.",
      aboutParagraph2:
        "SAIC is renowned for its interdisciplinary curriculum, which allows students to explore a wide range of media and approaches. It has been consistently ranked among the top art and design schools in the United States.",
    },
    sectionTitles: {
      overview: "Overview",
      academics: "Academics",
      admissions: "Admissions",
      "how-to-apply": "How to Apply",
      "cost-funding": "Cost & Funding",
      "campus-life": "Campus Life",
      "residence-housing": "Residence / Housing",
      "intl-support": "Intl Support",
      "co-op-careers": "Co-op Careers",
      "city-snapshot": "City Snapshot",
      "tours-media": "Tours & Media",
      admission_guides: "Admission & General Guides",
      orientation_and_housing: "Orientation & Housing",
      finance_and_career: "Finance & Career",
    },
  },
  cn: {
    sidebar: {
      instructionsTitle: "页面说明:",
      instructionsButton: "如何使用此中心",
      currentStudentTitle: "在校学生:",
      universityButton: "大学视图",
      highSchoolTitle: "高中生:",
      highSchoolButton: "高中视图",
      pdfViewTitle: "PDF 资源:",
      pdfViewButton: "查看PDF指南",
      categoriesTitle: "分类",
    },
    header: {
      title: "芝加哥艺术学院",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🎨 关于 SAIC",
      aboutParagraph1:
        "芝加哥艺术学院（SAIC）是美国规模最大、获得认证的独立艺术与设计学院之一。它位于伊利诺伊州芝加哥市的卢普区。",
      aboutParagraph2:
        "SAIC以其跨学科的课程而闻名，允许学生探索广泛的媒介和方法。它一直被评为美国顶尖的艺术与设计学院之一。",
    },
    sectionTitles: {
      overview: "学校概览",
      academics: "学术设置",
      admissions: "申请信息",
      "how-to-apply": "申请流程",
      "cost-funding": "学费与奖学金",
      "campus-life": "校园生活",
      "residence-housing": "校内住宿",
      "intl-support": "国际学生支持",
      "co-op-careers": "实习与就业",
      "city-snapshot": "城市生活概况",
      "tours-media": "校园参观与媒体",
      admission_guides: "招生与通用指南",
      orientation_and_housing: "迎新与住宿",
      finance_and_career: "财务与职业",
    },
  },
};

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

const SAICUniversityPage = () => {
  const [showInfoPanel, setShowInfoPanel] = useState(true);
  const [activeView, setActiveView] = useState<
    "university" | "highschool" | "instructions" | "pdfView"
  >("university");
  const [language, setLanguage] = useState<"en" | "cn">("en");

  const t = translations[language]; // Shortcut for current language translations

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#f0f8f8] p-6 border-r sticky top-0 h-screen hidden md:block overflow-y-auto">
          {/* --- Language Toggle --- */}
          <div className="mb-4">
            <div className="flex bg-gray-200 rounded-full p-1 text-sm">
              <button
                onClick={() => setLanguage("en")}
                className={`w-1/2 py-1 rounded-full transition ${
                  language === "en" ? "bg-white shadow" : ""
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("cn")}
                className={`w-1/2 py-1 rounded-full transition ${
                  language === "cn" ? "bg-white shadow" : ""
                }`}
              >
                简体中文
              </button>
            </div>
          </div>

          {/* --- View Selector --- */}
          <div className="mb-8 pb-8 border-b">
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                {t.sidebar.instructionsTitle}
              </p>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition ${
                  activeView === "instructions"
                    ? "bg-[#247e9f] text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setActiveView("instructions")}
              >
                {t.sidebar.instructionsButton}
              </button>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                {t.sidebar.currentStudentTitle}
              </p>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition ${
                  activeView === "university"
                    ? "bg-[#247e9f] text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setActiveView("university")}
              >
                {t.sidebar.universityButton}
              </button>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                {t.sidebar.highSchoolTitle}
              </p>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition ${
                  activeView === "highschool"
                    ? "bg-[#247e9f] text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setActiveView("highschool")}
              >
                {t.sidebar.highSchoolButton}
              </button>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">
                {t.sidebar.pdfViewTitle}
              </p>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg font-semibold text-sm transition ${
                  activeView === "pdfView"
                    ? "bg-[#247e9f] text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setActiveView("pdfView")}
              >
                {t.sidebar.pdfViewButton}
              </button>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">
            {t.sidebar.categoriesTitle}
          </h2>
          <ul className="space-y-3">
            {universityViewData.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-[#247e9f] hover:underline font-medium"
                >
                  {t.sectionTitles[section.id]}
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
                  src="/logos/chicago.svg"
                  alt="SAIC Logo"
                  width={120}
                  height={120}
                  className="mr-4"
                />
                <h1 className="text-3xl md:text-4xl font-bold text-[#247e9f]">
                  {t.header.title}
                </h1>
              </div>
              <div className="flex flex-col items-end gap-2 text-right">
                <span className="text-sm md:text-base text-gray-700 hidden sm:inline">
                  {t.header.helpText}
                </span>
                <a
                  href="https://calendly.com/stevenxionghy/buddyup-mentorship-program-initial-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#247e9f] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1e6d88] transition"
                >
                  {t.header.bookButton}
                </a>
              </div>
            </div>

            {/* Content Area */}
            <div className="mt-8">
              {/* UNIVERSITY VIEW */}
              {activeView === "university" && (
                <div className="flex gap-8">
                  <div className="flex-1 space-y-10 text-gray-700">
                    {universityViewData.map((section) => (
                      <section key={section.id} id={section.id}>
                        {section.id === "overview" ? (
                          <>
                            <SectionHeaderWithArrow
                              title={t.sectionTitles[section.id]}
                              onClick={() => setShowInfoPanel(!showInfoPanel)}
                            />
                            <p className="mb-4">
                              📍 36 S. Wabash Ave, Chicago, IL 60603, USA
                              <br />
                              📞 (312) 629-6100
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.saic.edu/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.saic.edu
                              </a>
                            </p>
                          </>
                        ) : (
                          <h2 className="text-2xl font-bold mb-2">
                            {t.sectionTitles[section.id]}
                          </h2>
                        )}
                        <ul className="list-disc pl-5 space-y-1">
                          {section.links[language].map((link) => (
                            <li key={link.title}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#247e9f] underline"
                              >
                                {link.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>

                  {/* Right Info Panel */}
                  {showInfoPanel && (
                    <aside className="w-1/2 max-w-md bg-[#f9f9f9] border-l px-6 py-8 text-md text-gray-800">
                      <h3 className="text-xl font-semibold mb-4">
                        {t.universityView.infoPanelTitle}
                      </h3>
                      <p className="mb-4 font-medium">
                        {t.universityView.aboutTitle}
                      </p>
                      <p>{t.universityView.aboutParagraph1}</p>
                      <p className="mt-4">{t.universityView.aboutParagraph2}</p>
                    </aside>
                  )}
                </div>
              )}
              {/* PDF VIEW */}
              {activeView === "pdfView" && (
                <div className="space-y-10 text-gray-700">
                  {pdfViewData.map((section) => (
                    <section key={section.id} id={section.id}>
                      <h2 className="text-2xl font-bold mb-4">
                        {t.sectionTitles[section.id]}
                      </h2>
                      <div className="space-y-4">
                        {section.links[language].map((link) => (
                          <a
                            key={link.title}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 border rounded-lg hover:bg-gray-50 hover:shadow-md transition"
                          >
                            <p className="font-semibold text-[#247e9f]">
                              {link.title}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              {link.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
              {/* Other views can be added here */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SAICUniversityPage;
