"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

// --- TYPE DEFINITIONS FOR STRONGER TYPING (LOCAL TO THIS FILE) ---
type LinkEntry = {
  title: string;
  description?: string;
  url: string;
};

type SectionId =
  | "overview"
  | "academics"
  | "admissions"
  | "how-to-apply"
  | "cost-funding"
  | "campus-life"
  | "residence-housing"
  | "intl-support"
  | "co-op-careers"
  | "city-snapshot"
  | "tours-media"
  | "admission_guides"
  | "orientation_and_housing"
  | "finance_and_career"
  | "department_handbooks";

type SectionData = {
  id: SectionId;
  links: {
    en: LinkEntry[];
    cn: LinkEntry[];
  };
};

type SidebarTranslations = {
  instructionsTitle: string;
  instructionsButton: string;
  currentStudentTitle: string;
  universityButton: string;
  highSchoolTitle: string;
  highSchoolButton: string;
  pdfViewTitle: string;
  pdfViewButton: string;
  categoriesTitle: string;
};

type HeaderTranslations = {
  title: string;
  helpText: string;
  bookButton: string;
};

type UniversityViewTranslations = {
  infoPanelTitle: string;
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
};

type Translations = {
  [lang: string]: {
    sidebar: SidebarTranslations;
    header: HeaderTranslations;
    universityView: UniversityViewTranslations;
    sectionTitles: { [key in SectionId]?: string };
    instructions?: any;
  };
};

// --- DATA FOR UNIVERSITY VIEW ---
const universityViewData: SectionData[] = [
  {
    id: "overview",
    links: {
      en: [
        {
          title: "QS Ranking (U of Manitoba for reference)",
          url: "https://www.topuniversities.com/universities/university-manitoba?utm_source",
        },
        {
          title: "Campus Map",
          url: "https://www.uwinnipeg.ca/maps/?utm_source",
        },
      ],
      cn: [
        {
          title: "QS 排名 (曼尼托巴大学作参考)",
          url: "https://www.topuniversities.com/universities/university-manitoba?utm_source",
        },
        { title: "校区地图", url: "https://www.uwinnipeg.ca/maps/?utm_source" },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Programs List / Viewbook",
          url: "https://www.uwinnipeg.ca/future-student/academic-progs/undergrad.html?utm_source",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.uwinnipeg.ca/future-student/academic-progs/undergrad.html?utm_source",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://www.uwinnipeg.ca/future-student/academic-progs/undergrad.html?utm_source",
        },
        {
          title: "学院介绍",
          url: "https://www.uwinnipeg.ca/future-student/academic-progs/undergrad.html?utm_source",
        },
      ],
    },
  },
  {
    id: "admissions",
    links: {
      en: [
        {
          title: "Undergraduate Admission Home",
          url: "https://www.uwinnipeg.ca/future-student/international/how-to-apply.html",
        },
        {
          title: "Entry Requirements",
          url: "https://www.uwinnipeg.ca/future-student/international/countries-a-to-z/",
        },
        {
          title: "Important Dates",
          url: "https://www.uwinnipeg.ca/future-student/international/countries-a-to-z/",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://www.uwinnipeg.ca/future-student/international/how-to-apply.html",
        },
        {
          title: "入学要求",
          url: "https://www.uwinnipeg.ca/future-student/international/countries-a-to-z/",
        },
        {
          title: "重要日期",
          url: "https://www.uwinnipeg.ca/future-student/international/countries-a-to-z/",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "Application Guide Video",
          url: "https://www.youtube.com/watch?v=Yf2vmaZYKHs",
        },
        {
          title: "Direct Application",
          url: "https://www.uwinnipeg.ca/future-student/international/how-to-apply.html?utm_source",
        },
      ],
      cn: [
        {
          title: "申请指南视频",
          url: "https://www.youtube.com/watch?v=Yf2vmaZYKHs",
        },
        {
          title: "直申通道",
          url: "https://www.uwinnipeg.ca/future-student/international/how-to-apply.html?utm_source",
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
          url: "https://www.uwinnipeg.ca/fees/tuition.html?utm_source",
        },
        {
          title: "Scholarship Search",
          url: "https://uwinnipeg.academicworks.ca/?utm_source=chatgpt.com",
        },
        {
          title: "Work-Study Program",
          url: "https://www.uwinnipeg.ca/awards/work-study-program.html",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://www.uwinnipeg.ca/fees/tuition.html?utm_source",
        },
        {
          title: "奖学金查询",
          url: "https://uwinnipeg.academicworks.ca/?utm_source=chatgpt.com",
        },
        {
          title: "勤工助学项目",
          url: "https://www.uwinnipeg.ca/awards/work-study-program.html",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        { title: "Athletics & Recreation", url: "https://wesmen.ca/" },
        {
          title: "Dining & Meal Plan",
          url: "https://www.uwinnipeg.ca/campus-restaurants/",
        },
      ],
      cn: [
        { title: "体育与运动", url: "https://wesmen.ca/" },
        {
          title: "校园餐饮计划",
          url: "https://www.uwinnipeg.ca/campus-restaurants/",
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
          url: "https://www.uwinnipeg.ca/campus-living/",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.uwinnipeg.ca/campus-living/fees-payments.html",
        },
      ],
      cn: [
        { title: "宿舍主页", url: "https://www.uwinnipeg.ca/campus-living/" },
        {
          title: "房型与费用",
          url: "https://www.uwinnipeg.ca/campus-living/fees-payments.html",
        },
      ],
    },
  },
  {
    id: "intl-support",
    links: {
      en: [
        {
          title: "International Student Services",
          url: "https://www.uwinnipeg.ca/iss/",
        },
        {
          title: "PGWP Guide (PDF)",
          url: "https://www.uwinnipeg.ca/iss/docs/immigration/pgwp-nov-2024.pdf",
        },
        {
          title: "Health & Wellness",
          url: "https://www.uwinnipeg.ca/student-wellness/",
        },
      ],
      cn: [
        { title: "国际学生服务", url: "https://www.uwinnipeg.ca/iss/" },
        {
          title: "PGWP 指南 (PDF)",
          url: "https://www.uwinnipeg.ca/iss/docs/immigration/pgwp-nov-2024.pdf",
        },
        {
          title: "健康与心理支持",
          url: "https://www.uwinnipeg.ca/student-wellness/",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Services",
          url: "https://www.uwinnipeg.ca/career-services/?utm_source",
        },
        {
          title: "Co-op Program",
          url: "https://www.uwinnipeg.ca/coop-program/?utm_source",
        },
        {
          title: "Alumni Network",
          url: "https://www.uwinnipeg.ca/alumni/?utm_source",
        },
      ],
      cn: [
        {
          title: "职业服务",
          url: "https://www.uwinnipeg.ca/career-services/?utm_source",
        },
        {
          title: "Co-op 项目",
          url: "https://www.uwinnipeg.ca/coop-program/?utm_source",
        },
        {
          title: "校友网络",
          url: "https://www.uwinnipeg.ca/alumni/?utm_source",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Transportation",
          url: "https://www.uwinnipeg.ca/visitor/transportation.html?utm_source",
        },
      ],
      cn: [
        {
          title: "交通",
          url: "https://www.uwinnipeg.ca/visitor/transportation.html?utm_source",
        },
      ],
    },
  },
  {
    id: "tours-media",
    links: {
      en: [
        {
          title: "Book Campus Tour",
          url: "https://www.uwinnipeg.ca/future-student/campus-tours.html?utm_source",
        },
        {
          title: "Virtual Campus (Photos)",
          url: "https://www.uwinnipeg.ca/future-student/student-exp/campus-photos.html",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://www.uwinnipeg.ca/future-student/campus-tours.html?utm_source",
        },
        {
          title: "虚拟校园（照片）",
          url: "https://www.uwinnipeg.ca/future-student/student-exp/campus-photos.html",
        },
      ],
    },
  },
];

const pdfViewData: SectionData[] = [
  {
    id: "admission_guides",
    links: {
      en: [
        {
          title: "Admission Procedures and Policies",
          description:
            "Details the undergraduate application process, including fees, required documents, deadlines, admission categories (Regular, Conditional, Mature, etc.), language requirements, and credit transfer policies.",
          url: "https://www.uwinnipeg.ca/academics/calendar/docs/admission.pdf",
        },
        {
          title: "Undergraduate International Viewbook",
          description:
            "For international students, covering university features, undergraduate program directory, admission steps, language programs, tuition fees, and application deadlines.",
          url: "https://www.uwinnipeg.ca/future-student/docs/uwinnipeg-undergrad-intl-brochure-english.pdf",
        },
        {
          title: "Undergrad Viewbook 2025–2026",
          description:
            "The university's undergraduate program guide, introducing 50+ majors, research opportunities, small class sizes, and campus experiences.",
          url: "https://www.uwinnipeg.ca/future-student/docs/viewbook.pdf",
        },
      ],
      cn: [
        {
          title: "招生程序与政策",
          description:
            "详细说明本科申请流程，包括申请费用、所需材料、截止日期、录取分类（Regular、Conditional、Mature 等），语言要求及学分转移政策。",
          url: "https://www.uwinnipeg.ca/academics/calendar/docs/admission.pdf",
        },
        {
          title: "国际本科招生手册",
          description:
            "面向国际学生，涵盖学校特色、本科专业目录、入学步骤、语言项目、学费和申请期限。",
          url: "https://www.uwinnipeg.ca/future-student/docs/uwinnipeg-undergrad-intl-brochure-english.pdf",
        },
        {
          title: "2025–2026年本科招生手册",
          description:
            "大学本科专业指南，介绍50+专业、研究机会、小班教学和校园体验，适合全面了解各学院设置。",
          url: "https://www.uwinnipeg.ca/future-student/docs/viewbook.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "Resource Guide for International Students 2024/25",
          description:
            "For new international students, covering campus integration, cultural adaptation, use of main campus resources (health, safety, clubs), and orientation event schedules.",
          url: "https://www.uwinnipeg.ca/orientation/docs/resource-guide-international.pdf",
        },
        {
          title: "2025 First Year Guide – Faculty of Education",
          description:
            "A guide for new students in the Faculty of Education, including course selection instructions, timetable creation guidance, important dates, and on-site orientation schedules.",
          url: "https://www.uwinnipeg.ca/education/docs/registration-guides/first-year-guide.pdf",
        },
        {
          title: "Campus Living Contract 2024–25",
          description:
            "The latest version of the housing contract, detailing residence terms, fees, rights and obligations, and safety and visitor policies.",
          url: "https://www.uwinnipeg.ca/campus-living/docs/campus-living-contract.pdf",
        },
      ],
      cn: [
        {
          title: "2024/25国际学生资源指南",
          description:
            "面向国际新生，涵盖融入校园方法、文化适应建议、主要校园资源使用指南（如健康、安全、社团）、迎新活动时间表等内容。",
          url: "https://www.uwinnipeg.ca/orientation/docs/resource-guide-international.pdf",
        },
        {
          title: "2025年新生指南 – 教育学院",
          description:
            "为教育学院新生准备的入学指南，包含课程选择说明、课表制作指导、重要日期、迎新现场会安排及校园资源导航。",
          url: "https://www.uwinnipeg.ca/education/docs/registration-guides/first-year-guide.pdf",
        },
        {
          title: "2024–25年校园住宿合同",
          description:
            "官网最新版住宿合同，详述宿舍条款、费用、权利义务、安全与访客政策等，是所有入住学生的协议依据。",
          url: "https://www.uwinnipeg.ca/campus-living/docs/campus-living-contract.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Tuition Fees 2018–2019",
          description:
            "Lists the tuition structure for domestic and international students based on credit courses, as well as additional fees like UWSA and facility fees.",
          url: "https://www.uwinnipeg.ca/theology/docs/forms/fee-schedule.pdf",
        },
        {
          title: "Academic and Career Services Overview",
          description:
            "Introduces the on-campus academic & career services process, including scheduling advising, resume review, interview preparation, and job search strategies.",
          url: "https://www.uwinnipeg.ca/career-services/docs/2023-exhibitor-profiles/academic-and-career-services.pdf",
        },
        {
          title: "Career Pathfinders (Various Depts)",
          description:
            "Career guides for various majors like Sociology, Conflict Resolution, Education, and Philosophy, listing potential career types, skills, and employer fields.",
          url: "https://www.uwinnipeg.ca/career-services/docs/pathfinders/",
        },
      ],
      cn: [
        {
          title: "2018–2019年学费表",
          description:
            "列出了国内与国际学生按“学分课计算”的学费结构，以及附加费用如 UWSA 和设施费。",
          url: "https://www.uwinnipeg.ca/theology/docs/forms/fee-schedule.pdf",
        },
        {
          title: "学术与职业服务概览",
          description:
            "介绍校园内学术&职业服务流程，包括预约辅导、简历修改、面试准备和求职策略等。",
          url: "https://www.uwinnipeg.ca/career-services/docs/2023-exhibitor-profiles/academic-and-career-services.pdf",
        },
        {
          title: "各专业职业路径指南",
          description:
            "适用于社会学、冲突解决研究、教育、哲学等专业，列出可从事的职业类型、技能与雇主领域。",
          url: "https://www.uwinnipeg.ca/career-services/docs/pathfinders/",
        },
      ],
    },
  },
];

// Centralized object for all translated UI text
const translations: Translations = {
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
      title: "University of Winnipeg",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🍁 About University of Winnipeg",
      aboutParagraph1:
        "The University of Winnipeg is a public research university in Winnipeg, Manitoba, Canada. It offers undergraduate faculties of art, business and economics, education, science and kinesiology and applied health as well as graduate programs.",
      aboutParagraph2:
        "Known for its small class sizes, academic excellence, and commitment to accessibility, UWinnipeg provides a supportive and diverse learning environment in the heart of downtown Winnipeg.",
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
      title: "温尼伯大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🍁 关于温尼伯大学",
      aboutParagraph1:
        "温尼伯大学是位于加拿大马尼托巴省温尼伯市的一所公立研究型大学。它提供文科、商业与经济、教育、科学以及运动机能学与应用健康等本科学院，并设有研究生课程。",
      aboutParagraph2:
        "温尼伯大学以其小班教学、卓越的学术水平和对无障碍教育的承诺而闻名，在温尼伯市中心提供了一个支持性强且多元化的学习环境。",
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

const WinnipegUniversityPage = () => {
  const [showInfoPanel, setShowInfoPanel] = useState(true);
  const [activeView, setActiveView] = useState<
    "university" | "highschool" | "instructions" | "pdfView"
  >("university");
  const [language, setLanguage] = useState<"en" | "cn">("en");

  const t = translations[language]; // Shortcut for current language translations

  const getSectionTitle = (id: SectionId) => {
    return t.sectionTitles[id] ?? id.replace(/_/g, " ");
  };

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
            {(activeView === "pdfView" ? pdfViewData : universityViewData).map(
              (section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[#247e9f] hover:underline font-medium"
                  >
                    {getSectionTitle(section.id)}
                  </a>
                </li>
              )
            )}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex min-h-screen px-4 md:px-12 py-8 overflow-y-auto">
          <div className="flex-1 flex flex-col">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 md:px-12 py-4 border-b">
              <div className="flex items-center">
                <img
                  src="/logos/winnipeg.png"
                  alt="University of Winnipeg Logo"
                  width={120}
                  height={120}
                  className="mr-4 object-contain"
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
                              title={getSectionTitle(section.id)}
                              onClick={() => setShowInfoPanel(!showInfoPanel)}
                            />
                            <p className="mb-4">
                              📍 515 Portage Ave, Winnipeg, MB R3B 2E9, Canada
                              <br />
                              📞 (204) 786-7811
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.uwinnipeg.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.uwinnipeg.ca
                              </a>
                            </p>
                          </>
                        ) : (
                          <h2 className="text-2xl font-bold mb-2">
                            {getSectionTitle(section.id)}
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
                        {getSectionTitle(section.id)}
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

export default WinnipegUniversityPage;
