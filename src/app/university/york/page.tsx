"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

// Data structure holding both English and Chinese links for York University
const universityViewData = [
  {
    id: "overview",
    links: {
      en: [
        {
          title: "QS Ranking",
          url: "https://www.yorku.ca/yfile/2025/06/20/york-u-continues-positive-trajectory-in-qs-world-university-rankings/?utm_source=chatgpt.com",
        },
        { title: "Campus Map", url: "https://students.yorku.ca/campus-maps" },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.yorku.ca/yfile/2025/06/20/york-u-continues-positive-trajectory-in-qs-world-university-rankings/?utm_source=chatgpt.com",
        },
        { title: "校区地图", url: "https://students.yorku.ca/campus-maps" },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Programs List / Viewbook",
          url: "https://futurestudents.yorku.ca/sites/futurestudents/files/viewbooks/viewbook.ap.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.yorku.ca/about/our-faculties/?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://futurestudents.yorku.ca/sites/futurestudents/files/viewbooks/viewbook.ap.pdf?utm_source=chatgpt.com",
        },
        {
          title: "学院介绍",
          url: "https://www.yorku.ca/about/our-faculties/?utm_source=chatgpt.com",
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
          url: "https://futurestudents.yorku.ca/program-search",
        },
        {
          title: "Entry Requirements",
          url: "https://futurestudents.yorku.ca/requirements",
        },
        {
          title: "Important Dates (Fall/Winter)",
          url: "https://registrar.yorku.ca/enrol/dates/2025-2026/fall-winter",
        },
        {
          title: "Application Deadlines",
          url: "https://futurestudents.yorku.ca/requirements/deadlines",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://futurestudents.yorku.ca/program-search",
        },
        {
          title: "入学要求",
          url: "https://futurestudents.yorku.ca/requirements",
        },
        {
          title: "重要日期 (秋冬季)",
          url: "https://registrar.yorku.ca/enrol/dates/2025-2026/fall-winter",
        },
        {
          title: "申请截止日期",
          url: "https://futurestudents.yorku.ca/requirements/deadlines",
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
          url: "https://futurestudents.yorku.ca/how-do-i-apply?utm_source=chatgpt.com",
        },
        {
          title: "Direct Application",
          url: "https://futurestudents.yorku.ca/requirements/apply",
        },
      ],
      cn: [
        {
          title: "安省申请流程（OUAC）",
          url: "https://futurestudents.yorku.ca/how-do-i-apply?utm_source=chatgpt.com",
        },
        {
          title: "直接申请",
          url: "https://futurestudents.yorku.ca/requirements/apply",
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
          url: "https://future.studentsv2.uit.yorku.ca/tuition",
        },
        {
          title: "Budgeting for your Education",
          url: "https://yorkinternational.yorku.ca/budgeting-for-your-education/?utm_source=chatgpt.com",
        },
        {
          title: "Scholarships & Bursaries",
          url: "https://futurestudents.yorku.ca/financing-your-degree/scholarships-bursaries?utm_source=chatgpt.com",
        },
        {
          title: "Scholarships for Incoming Students",
          url: "https://futurestudents.yorku.ca/scholarships-incoming-students?utm_source=chatgpt.com",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://careers.yorku.ca/workstudy-programs-campus-employment?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://future.studentsv2.uit.yorku.ca/tuition",
        },
        {
          title: "教育预算",
          url: "https://yorkinternational.yorku.ca/budgeting-for-your-education/?utm_source=chatgpt.com",
        },
        {
          title: "奖学金与助学金",
          url: "https://futurestudents.yorku.ca/financing-your-degree/scholarships-bursaries?utm_source=chatgpt.com",
        },
        {
          title: "新生奖学金",
          url: "https://futurestudents.yorku.ca/scholarships-incoming-students?utm_source=chatgpt.com",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://careers.yorku.ca/workstudy-programs-campus-employment?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        {
          title: "Clubs Directory",
          url: "https://www.yorku.ca/colleges/clubs/",
        },
        {
          title: "Athletics & Recreation",
          url: "https://www.yorku.ca/about/campus-life/",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.yorku.ca/foodservices/meal-plans/",
        },
      ],
      cn: [
        { title: "社团目录", url: "https://www.yorku.ca/colleges/clubs/" },
        { title: "体育与运动", url: "https://www.yorku.ca/about/campus-life/" },
        {
          title: "校园餐饮计划",
          url: "https://www.yorku.ca/foodservices/meal-plans/",
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
          url: "https://futurestudents.yorku.ca/admitted/4-residence?utm_source=chatgpt.com",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.yorku.ca/housing/keele-campus/p-york-apartments/monthly-rental-rates/?utm_source=chatgpt.com",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.yorku.ca/housing/off-campus/resource-hub/?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://futurestudents.yorku.ca/admitted/4-residence?utm_source=chatgpt.com",
        },
        {
          title: "房型与费用",
          url: "https://www.yorku.ca/housing/keele-campus/p-york-apartments/monthly-rental-rates/?utm_source=chatgpt.com",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.yorku.ca/housing/off-campus/resource-hub/?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "intl-support",
    links: {
      en: [
        {
          title: "International Student Support",
          url: "https://yorkinternational.yorku.ca/international-student-support/",
        },
        {
          title: "Study Permits Guide",
          url: "https://yorkinternational.yorku.ca/immigration-overview/study-permits/",
        },
        {
          title: "PGWP Updates",
          url: "https://yorkinternational.yorku.ca/pgwp-updates-2/",
        },
        {
          title: "Health & Wellness",
          url: "https://students.yorku.ca/counselling",
        },
      ],
      cn: [
        {
          title: "国际学生支持",
          url: "https://yorkinternational.yorku.ca/international-student-support/",
        },
        {
          title: "学签指南",
          url: "https://yorkinternational.yorku.ca/immigration-overview/study-permits/",
        },
        {
          title: "PGWP 更新",
          url: "https://yorkinternational.yorku.ca/pgwp-updates-2/",
        },
        {
          title: "健康与心理支持",
          url: "https://students.yorku.ca/counselling",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        { title: "Career Centre Home", url: "https://careers.yorku.ca/" },
        { title: "LAPS Co-op", url: "https://www.yorku.ca/laps/co-op/" },
        { title: "Lassonde Co-op", url: "https://lassonde.yorku.ca/co-op/" },
        {
          title: "Participate in Co-op or Internship",
          url: "https://careers.yorku.ca/resource-library/want-build-your-experience/participate-co-op-or-internship",
        },
        {
          title: "Alumni Network",
          url: "https://www.yorku.ca/alumniandfriends/connect/alumni-networks/",
        },
      ],
      cn: [
        { title: "职业中心主页", url: "https://careers.yorku.ca/" },
        {
          title: "文科与专业研究学院 Co-op",
          url: "https://www.yorku.ca/laps/co-op/",
        },
        {
          title: "拉松德工程学院 Co-op",
          url: "https://lassonde.yorku.ca/co-op/",
        },
        {
          title: "参与 Co-op 或实习",
          url: "https://careers.yorku.ca/resource-library/want-build-your-experience/participate-co-op-or-internship",
        },
        {
          title: "校友网络",
          url: "https://www.yorku.ca/alumniandfriends/connect/alumni-networks/",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Resident Handbook",
          url: "https://www.yorku.ca/housing/keele-campus/c-york-apartments/resident-handbook/",
        },
        {
          title: "Shuttle Service",
          url: "https://www.yorku.ca/transportation/markham-keele-shuttle-service/",
        },
        {
          title: "Weather Emergency Procedures",
          url: "https://www.yorku.ca/yfile/2023/11/16/stay-up-to-date-with-yorks-weather-emergency-procedures/",
        },
      ],
      cn: [
        {
          title: "住户手册",
          url: "https://www.yorku.ca/housing/keele-campus/c-york-apartments/resident-handbook/",
        },
        {
          title: "班车服务",
          url: "https://www.yorku.ca/transportation/markham-keele-shuttle-service/",
        },
        {
          title: "恶劣天气应急程序",
          url: "https://www.yorku.ca/yfile/2023/11/16/stay-up-to-date-with-yorks-weather-emergency-procedures/",
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
          url: "https://futurestudents.yorku.ca/tours",
        },
        {
          title: "Virtual Campus VR",
          url: "https://futurestudents.yorku.ca/tours",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/user/YorkUniversity",
        },
        {
          title: "Official Instagram",
          url: "https://www.instagram.com/yorkuniversity/",
        },
      ],
      cn: [
        { title: "预约校园参观", url: "https://futurestudents.yorku.ca/tours" },
        { title: "虚拟校园 VR", url: "https://futurestudents.yorku.ca/tours" },
        {
          title: "官方 YouTube",
          url: "https://www.youtube.com/user/YorkUniversity",
        },
        {
          title: "官方 Instagram",
          url: "https://www.instagram.com/yorkuniversity/",
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
          title: "2025-2026 Undergraduate Student Handbook",
          description:
            "56 pp viewbook: Program directory, campus life, support services.",
          url: "https://futurestudents.yorku.ca/sites/futurestudents/files/2024-09/YorkU-2025-2026-Undergrad-Handbook.pdf",
        },
        {
          title: "2025-2026 International Student Handbook",
          description: "Pre-arrival visa, UHIP, housing, finances, community.",
          url: "https://futurestudents.yorku.ca/sites/futurestudents/files/viewbooks/YorkU-2025-26-INTL-handbook.pdf",
        },
        {
          title: "Exchange-Partner Factsheet 2025-26",
          description:
            "Academic calendar, course load, language requirements (for study abroad & exchange students).",
          url: "https://yorkinternational.yorku.ca/files/2024/10/YorkU-2025-26-Exchange-Partner-Factsheet-Final.pdf",
        },
      ],
      cn: [
        {
          title: "2025-2026 本科生手册",
          description: "56页 viewbook：专业目录、校园生活、支持服务。",
          url: "https://futurestudents.yorku.ca/sites/futurestudents/files/2024-09/YorkU-2025-2026-Undergrad-Handbook.pdf",
        },
        {
          title: "2025-2026 国际学生手册",
          description: "行前签证、UHIP、住宿、资金、社群。",
          url: "https://futurestudents.yorku.ca/sites/futurestudents/files/viewbooks/YorkU-2025-26-INTL-handbook.pdf",
        },
        {
          title: "2025-26年交换合作伙伴情况说明书",
          description: "校历、课程负荷、语言要求（供出国 & 交换生参考）。",
          url: "https://yorkinternational.yorku.ca/files/2024/10/YorkU-2025-26-Exchange-Partner-Factsheet-Final.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "Transfer-Student Orientation Plan 2025",
          description:
            "Framework for the orientation process, useful as a reference for the Welcome Week schedule.",
          url: "https://students.yorku.ca/sites/default/files/2025-04/Plan%20for%20Transfer%20Student%20Orientation_0.pdf",
        },
        {
          title: "“Looking Ahead at Your First Year” (Slides PDF)",
          description: "Important timelines, YU Start, YU Prep.",
          url: "https://yorkinternational.yorku.ca/files/2024/05/Look-Ahead-at-Your-First-Year-at-York-Slides.pdf",
        },
        {
          title: "Residence Application Handbook 2025-26",
          description: "33 pp: Room types, application steps, fee examples.",
          url: "https://www.yorku.ca/housing/wp-content/uploads/sites/57/2025/02/25-26-Keele-Application-Handbook.pdf",
        },
      ],
      cn: [
        {
          title: "2025年转学生迎新计划",
          description: "项目框架，可借鉴新生周流程。",
          url: "https://students.yorku.ca/sites/default/files/2025-04/Plan%20for%20Transfer%20Student%20Orientation_0.pdf",
        },
        {
          title: "“展望你的第一年” (幻灯片 PDF)",
          description: "重要时间线、YU Start、YU Prep。",
          url: "https://yorkinternational.yorku.ca/files/2024/05/Look-Ahead-at-Your-First-Year-at-York-Slides.pdf",
        },
        {
          title: "2025-26年宿舍申请手册",
          description: "33页：房型、申请步骤、费用示例。",
          url: "https://www.yorku.ca/housing/wp-content/uploads/sites/57/2025/02/25-26-Keele-Application-Handbook.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Schulich Int’l Tuition Letter 2025-26",
          description:
            "Includes 2025-26 fee rates & living cost estimates (example faculty).",
          url: "https://schulich.yorku.ca/wp-content/uploads/2025/03/FA25-Tuition-Letter_MHIA_Intl.pdf",
        },
        {
          title: "Schulich iBBA Employment Report 2025",
          description:
            "91% employment rate, starting salaries, industry distribution.",
          url: "https://schulich.yorku.ca/wp-content/uploads/2025-CCD_iBBA_SalarySurvey_OUT.pdf",
        },
      ],
      cn: [
        {
          title: "舒立克学院2025-26年度国际学费信",
          description: "含 2025-26 费率 & 生活费预估（示例学院）。",
          url: "https://schulich.yorku.ca/wp-content/uploads/2025/03/FA25-Tuition-Letter_MHIA_Intl.pdf",
        },
        {
          title: "舒立克学院 iBBA 2025年就业报告",
          description: "91 % 就业率、起薪、行业分布。",
          url: "https://schulich.yorku.ca/wp-content/uploads/2025-CCD_iBBA_SalarySurvey_OUT.pdf",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "LA&PS Faculty Viewbook 2025-26",
          description:
            "Courses from the Faculty of Liberal Arts & Professional Studies, new programs at Markham Campus.",
          url: "https://futurestudents.yorku.ca/sites/futurestudents/files/2024-08/viewbook.ap_.pdf",
        },
      ],
      cn: [
        {
          title: "文科与专业研究学院2025-26宣传册",
          description: "文理及专业学院课程、Markham Campus 新专业。",
          url: "https://futurestudents.yorku.ca/sites/futurestudents/files/2024-08/viewbook.ap_.pdf",
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
      title: "York University",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🦁 About York University",
      aboutParagraph1:
        "York University is a public research university in Toronto, Ontario, Canada. It is Canada's third-largest university, with a community of 55,700 students, 7,000 faculty and staff, and over 325,000 alumni worldwide.",
      aboutParagraph2:
        "Founded in 1959, York is known for its diverse student body and a wide range of programs, particularly in liberal arts, law, business, and fine arts. It has two main campuses, the Keele campus and the bilingual Glendon campus.",
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
      title: "约克大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🦁 关于约克大学",
      aboutParagraph1:
        "约克大学是位于加拿大多伦多市的一所公立研究型大学。它是加拿大第三大规模的大学，拥有55,700名学生、7,000名教职员工和全球超过325,000名校友。",
      aboutParagraph2:
        "约克大学成立于1959年，以其多元化的学生群体和广泛的课程而闻名，尤其是在文科、法律、商科和美术领域。它拥有两个主要校区：基尔校区和双语的格兰登校区。",
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
      className="text-[#247e.9f] text-base hover:underline flex items-center"
    >
      ➡ Show Info
    </button>
  </div>
);

const YorkUniversityPage = () => {
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
                  src="/logos/york.png"
                  alt="York University Logo"
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
                              📍 4700 Keele St, Toronto, ON M3J 1P3, Canada
                              <br />
                              📞 (416) 736-2100
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.yorku.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.yorku.ca
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

export default YorkUniversityPage;
