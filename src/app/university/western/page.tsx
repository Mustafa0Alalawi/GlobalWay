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
  | "transition_and_housing"
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
          title: "QS Ranking",
          url: "https://www.topuniversities.com/universities/western-university?utm_source=chatgpt.com",
        },
        {
          title: "Campus Map",
          url: "https://accessibility.uwo.ca/resources/maps/index.html",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/western-university?utm_source=chatgpt.com",
        },
        {
          title: "校区地图",
          url: "https://accessibility.uwo.ca/resources/maps/index.html",
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
          url: "https://welcome.uwo.ca/what-can-i-study/undergraduate-programs/index.html",
        },
        {
          title: "Degree Structure",
          url: "https://welcome.uwo.ca/what-can-i-study/degree-structure.html",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.uwo.ca/academics/index.html",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://welcome.uwo.ca/what-can-i-study/undergraduate-programs/index.html",
        },
        {
          title: "学位结构说明",
          url: "https://welcome.uwo.ca/what-can-i-study/degree-structure.html",
        },
        { title: "学院介绍", url: "https://www.uwo.ca/academics/index.html" },
      ],
    },
  },
  {
    id: "admissions",
    links: {
      en: [
        {
          title: "Undergraduate Admission Home",
          url: "https://registrar.uwo.ca/admissions/index.html",
        },
        {
          title: "Entry Requirements",
          url: "https://welcome.uwo.ca/next-steps/requirements/index.html",
        },
        {
          title: "Important Dates",
          url: "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://registrar.uwo.ca/admissions/index.html",
        },
        {
          title: "入学要求",
          url: "https://welcome.uwo.ca/next-steps/requirements/index.html",
        },
        {
          title: "重要日期",
          url: "https://welcome.uwo.ca/next-steps/apply/admission-deadlines.html",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "Ontario (OUAC) Process",
          url: "https://welcome.uwo.ca/next-steps/apply/apply-on-the-ouac.html",
        },
      ],
      cn: [
        {
          title: "安省申请流程（OUAC）",
          url: "https://welcome.uwo.ca/next-steps/apply/apply-on-the-ouac.html",
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
          url: "https://registrar.uwo.ca/student_finances/fees_refunds/fee_refund_schedules.html",
        },
        {
          title: "Scholarship Search",
          url: "https://registrar.uwo.ca/student_finances/scholarships_awards/index.html",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://registrar.uwo.ca/student_finances/bursaries_workstudy.html",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://registrar.uwo.ca/student_finances/fees_refunds/fee_refund_schedules.html",
        },
        {
          title: "奖学金查询",
          url: "https://registrar.uwo.ca/student_finances/scholarships_awards/index.html",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://registrar.uwo.ca/student_finances/bursaries_workstudy.html",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        {
          title: "AMS Club Directory (Clubs)",
          url: "https://www.uwo.ca/campus_life/clubs_associations.html",
        },
        {
          title: "Athletics & Recreation",
          url: "https://www.uwo.ca/campus_life/athletics.html",
        },
        { title: "Dining & Meal Plan", url: "https://food.uwo.ca/meal-plan" },
      ],
      cn: [
        {
          title: "社团目录（AMS）",
          url: "https://www.uwo.ca/campus_life/clubs_associations.html",
        },
        {
          title: "体育与运动",
          url: "https://www.uwo.ca/campus_life/athletics.html",
        },
        { title: "校园餐饮计划", url: "https://food.uwo.ca/meal-plan" },
      ],
    },
  },
  {
    id: "residence-housing",
    links: {
      en: [
        { title: "Residence Home", url: "https://residence.uwo.ca/" },
        {
          title: "Room Types & Fees",
          url: "https://housing.uwo.ca/living/housing-options",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://offcampus.uwo.ca/",
        },
      ],
      cn: [
        { title: "宿舍主页", url: "https://residence.uwo.ca/" },
        {
          title: "房型与费用",
          url: "https://housing.uwo.ca/living/housing-options",
        },
        { title: "校外住宿办公室", url: "https://offcampus.uwo.ca/" },
      ],
    },
  },
  {
    id: "intl-support",
    links: {
      en: [
        {
          title: "International Office",
          url: "https://international.uwo.ca/studentservices/visas/",
        },
        {
          title: "Study Permit / PGWP Guide",
          url: "https://international.uwo.ca/studentservices/pdf/resources/study-permit-presentation.pdf",
        },
        { title: "Health & Wellness", url: "https://www.uwo.ca/health/" },
      ],
      cn: [
        {
          title: "国际事务办公室",
          url: "https://international.uwo.ca/studentservices/visas/",
        },
        {
          title: "学签 / PGWP 指南",
          url: "https://international.uwo.ca/studentservices/pdf/resources/study-permit-presentation.pdf",
        },
        { title: "健康与心理支持", url: "https://www.uwo.ca/health/" },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Centre Home",
          url: "https://career.uwo.ca/index.html?utm_source=chatgpt.com",
        },
        {
          title: "Co-op / Internship Info",
          url: "https://international.uwo.ca/studentservices/visas/working_and_volunteering/coops_and_internships.html?utm_source=chatgpt.com",
        },
        {
          title: "Alumni Network",
          url: "https://career.uwo.ca/take_action/job_search.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "职业中心主页",
          url: "https://career.uwo.ca/index.html?utm_source=chatgpt.com",
        },
        {
          title: "Co-op / 实习信息",
          url: "https://international.uwo.ca/studentservices/visas/working_and_volunteering/coops_and_internships.html?utm_source=chatgpt.com",
        },
        {
          title: "校友网络",
          url: "https://career.uwo.ca/take_action/job_search.html?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Transportation & Parking",
          url: "https://www.uwo.ca/campus_life/transport_parking.html",
        },
        { title: "Off-Campus Housing", url: "https://offcampus.uwo.ca/" },
        { title: "Weather", url: "https://www.uwo.ca/weather.html" },
        { title: "Campus Safety", url: "https://alert.westernu.ca/index.html" },
      ],
      cn: [
        {
          title: "交通与停车",
          url: "https://www.uwo.ca/campus_life/transport_parking.html",
        },
        { title: "校外租房", url: "https://offcampus.uwo.ca/" },
        { title: "天气", url: "https://www.uwo.ca/weather.html" },
        { title: "校园安全", url: "https://alert.westernu.ca/index.html" },
      ],
    },
  },
  {
    id: "tours-media",
    links: {
      en: [
        {
          title: "Book Campus Tour",
          url: "https://studentservices.uwo.ca/secure/liaison/CT_web/index.cfm",
        },
        {
          title: "Virtual Campus VR",
          url: "https://virtualtour.uwo.ca/uwo/home/featured-tours/",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/watch?v=-IBvFMulUSA",
        },
        {
          title: "Official Instagram",
          url: "https://www.instagram.com/p/Cz1MfnvOYKT/?hl=en&utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://studentservices.uwo.ca/secure/liaison/CT_web/index.cfm",
        },
        {
          title: "虚拟校园 VR",
          url: "https://virtualtour.uwo.ca/uwo/home/featured-tours/",
        },
        {
          title: "官方 YouTube",
          url: "https://www.youtube.com/watch?v=-IBvFMulUSA",
        },
        {
          title: "官方 Instagram",
          url: "https://www.instagram.com/p/Cz1MfnvOYKT/?hl=en&utm_source=chatgpt.com",
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
          title: "Undergraduate Viewbook ’25–26",
          description:
            "56 pp; Program directory, campus life, admission requirements",
          url: "https://welcome.uwo.ca/pdf/western-viewbook-2025.pdf",
        },
        {
          title: "International Undergraduate Viewbook 25–26",
          description: "Pre-arrival visas, UHIP, housing, fees",
          url: "https://welcome.uwo.ca/what-is-western-like/viewbooks.html",
        },
        {
          title: "Exchange Fact Sheet 2025-26",
          description: "Academic calendar, course load, visa requirements",
          url: "https://international.uwo.ca/learning/pdf/fact-sheet-2025-26.pdf",
        },
      ],
      cn: [
        {
          title: "2025-26 本科招生手册",
          description: "56页；专业目录、校园生活、入学要求",
          url: "https://welcome.uwo.ca/pdf/western-viewbook-2025.pdf",
        },
        {
          title: "2025-26 国际本科招生手册",
          description: "行前签证、UHIP、住宿、费用",
          url: "https://welcome.uwo.ca/what-is-western-like/viewbooks.html",
        },
        {
          title: "2025-26 交换生情况说明",
          description: "校历、课程负荷、签证须知",
          url: "https://international.uwo.ca/learning/pdf/fact-sheet-2025-26.pdf",
        },
      ],
    },
  },
  {
    id: "transition_and_housing",
    links: {
      en: [
        {
          title: "First-Year Course Registration Guide 2025-26 (Science)",
          description: "Course start timeline, 5.0 credit rule",
          url: "https://uwo.ca/sci/advising/pdf/First%20Year%20Registration%20Guide%202025.pdf",
        },
        {
          title: "Residence Offer Book 2025",
          description: "32 pp: Room types, fees, dining, important dates",
          url: "https://residence.uwo.ca/offer_book",
        },
        {
          title: "Residence Contract 2025-26",
          description: "Latest terms (updated Apr 2025)",
          url: "https://residence.uwo.ca/residence_contract.pdf",
        },
        {
          title: "Western Apartments Handbook 2025-26",
          description: "On-campus apartment living guide",
          url: "https://apartments.uwo.ca/handbook.cfm",
        },
      ],
      cn: [
        {
          title: "2025-26 新生选课指南 (理科)",
          description: "开课时间线、5.0 credit 规则",
          url: "https://uwo.ca/sci/advising/pdf/First%20Year%20Registration%20Guide%202025.pdf",
        },
        {
          title: "2025 住宿录取手册",
          description: "32页：房型、费用、餐饮、重要日期",
          url: "https://residence.uwo.ca/offer_book",
        },
        {
          title: "2025-26 住宿合同",
          description: "最新条款（更新于2025年4月）",
          url: "https://residence.uwo.ca/residence_contract.pdf",
        },
        {
          title: "2025-26 西安大略大学公寓手册",
          description: "校内公寓生活指南",
          url: "https://apartments.uwo.ca/handbook.cfm",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Tuition Fee Report 2025 (for 2025-26)",
          description:
            "Local/international rates, appendix includes living expenses",
          url: "https://planningandbudget.uwo.ca/wp-content/uploads/2024/04/2024-25-Tuition-Fee-Report.pdf",
        },
        {
          title: "Ivey HBA Employment Report 2024-25",
          description: "91% employment rate, starting salary CAD 74k",
          url: "https://www.ivey.uwo.ca/media/e5vljecy/ivey-hba-permanent-summer-employment-report.pdf",
        },
        {
          title: "AEO Student Handbook 2025",
          description:
            "Ivey pre-admission (AEO) undergraduate development path",
          url: "https://www.ivey.uwo.ca/media/t4tjpyfe/aeo-handbook-2025.pdf",
        },
      ],
      cn: [
        {
          title: "2025 学费报告 (适用于 2025-26)",
          description: "本地/国际费率、附录含生活费",
          url: "https://planningandbudget.uwo.ca/wp-content/uploads/2024/04/2024-25-Tuition-Fee-Report.pdf",
        },
        {
          title: "Ivey HBA 就业报告 2024-25",
          description: "91% 就业率、起薪 CAD 7.4 万",
          url: "https://www.ivey.uwo.ca/media/e5vljecy/ivey-hba-permanent-summer-employment-report.pdf",
        },
        {
          title: "AEO 学生手册 2025",
          description: "Ivey 预录取 (AEO) 本科生培养路线",
          url: "https://www.ivey.uwo.ca/media/t4tjpyfe/aeo-handbook-2025.pdf",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "Engineering Undergraduate Viewbook 2025-26",
          description: "Featured courses, Co-op, employment statistics",
          url: "https://www.eng.uwo.ca/future-students/files/2025-26-Undergraduate-Viewbook.pdf",
        },
      ],
      cn: [
        {
          title: "2025-26 工程本科招生手册",
          description: "特色课程、Co-op、就业统计",
          url: "https://www.eng.uwo.ca/future-students/files/2025-26-Undergraduate-Viewbook.pdf",
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
      title: "Western University",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🏰 About Western University",
      aboutParagraph1:
        "Founded in 1878, Western University is one of Canada's leading research-intensive universities, located in London, Ontario. With a picturesque campus, it is known for its exceptional academic programs and vibrant student life.",
      aboutParagraph2:
        "Western is a member of the U15 Group of Canadian Research Universities and is recognized for its contributions to various fields. The university offers a comprehensive range of undergraduate and graduate programs across 11 faculties and schools.",
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
      transition_and_housing: "Transition & Housing",
      finance_and_career: "Finance & Career",
      department_handbooks: "Department Handbooks",
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
      title: "西安大略大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🏰 关于西安大略大学",
      aboutParagraph1:
        "西安大略大学成立于1878年，是加拿大领先的研究密集型大学之一，位于安大略省伦敦市。凭借风景如画的校园，它以其卓越的学术课程和充满活力的学生生活而闻名。",
      aboutParagraph2:
        "西安大略大学是加拿大U15研究型大学联盟的成员，因其在各个领域的贡献而受到认可。该大学通过11个学院和学院提供全面的本科和研究生课程。",
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
      transition_and_housing: "过渡与住宿",
      finance_and_career: "财务与职业",
      department_handbooks: "院系手册",
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

const WesternUniversityPage = () => {
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
                  src="/logos/western.png"
                  alt="Western University Logo"
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
                              📍 1151 Richmond St, London, ON N6A 3K7, Canada
                              <br />
                              📞 (519) 661-2111
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.uwo.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.uwo.ca
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

export default WesternUniversityPage;
