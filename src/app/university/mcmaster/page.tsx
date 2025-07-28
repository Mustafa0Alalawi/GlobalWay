"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

// Data structure holding both English and Chinese links for McMaster University
const universityViewData = [
  {
    id: "overview",
    links: {
      en: [
        {
          title: "QS Ranking",
          url: "https://www.topuniversities.com/universities/mcmaster-university?utm_source=chatgpt.com",
        },
        { title: "Campus Map", url: "https://maps.mcmaster.ca/" },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/mcmaster-university?utm_source=chatgpt.com",
        },
        { title: "校区地图", url: "https://maps.mcmaster.ca/" },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Programs List / Viewbook",
          url: "https://future.mcmaster.ca/programs/",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.mcmaster.ca/academics/",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://future.mcmaster.ca/programs/",
        },
        { title: "学院介绍", url: "https://www.mcmaster.ca/academics/" },
      ],
    },
  },
  {
    id: "admissions",
    links: {
      en: [
        {
          title: "Undergraduate Admission Home",
          url: "https://future.mcmaster.ca/",
        },
        {
          title: "Entry Requirements",
          url: "https://future.mcmaster.ca/apply/requirements/",
        },
        {
          title: "Important Dates",
          url: "https://future.mcmaster.ca/apply/deadlines/",
        },
      ],
      cn: [
        { title: "本科申请主页", url: "https://future.mcmaster.ca/" },
        {
          title: "入学要求",
          url: "https://future.mcmaster.ca/apply/requirements/",
        },
        {
          title: "重要日期",
          url: "https://future.mcmaster.ca/apply/deadlines/",
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
          url: "https://www.mcmaster.ca/uts/ouac/",
        },
        {
          title: "Direct Application",
          url: "https://future.mcmaster.ca/apply/",
        },
      ],
      cn: [
        {
          title: "安省申请流程（OUAC）",
          url: "https://www.mcmaster.ca/uts/ouac/",
        },
        { title: "直接申请", url: "https://future.mcmaster.ca/apply/" },
      ],
    },
  },
  {
    id: "cost-funding",
    links: {
      en: [
        { title: "Tuition Fees", url: "https://registrar.mcmaster.ca/fees/" },
        {
          title: "Scholarship Search",
          url: "https://registrar.mcmaster.ca/aid-awards/scholarships-and-bursaries/",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://studentaffairs.mcmaster.ca/students/employment/",
        },
      ],
      cn: [
        { title: "学费表", url: "https://registrar.mcmaster.ca/fees/" },
        {
          title: "奖学金查询",
          url: "https://registrar.mcmaster.ca/aid-awards/scholarships-and-bursaries/",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://studentaffairs.mcmaster.ca/students/employment/",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        { title: "Clubs Directory", url: "https://studentgroups.mcmaster.ca/" },
        { title: "Athletics & Recreation", url: "https://active.mcmaster.ca/" },
        {
          title: "Dining & Meal Plan",
          url: "https://hospitality.mcmaster.ca/meal-plans-and-cards/meal-plans/residence-meal-plans/",
        },
      ],
      cn: [
        { title: "社团目录", url: "https://studentgroups.mcmaster.ca/" },
        { title: "体育与运动", url: "https://active.mcmaster.ca/" },
        {
          title: "校园餐饮计划",
          url: "https://hospitality.mcmaster.ca/meal-plans-and-cards/meal-plans/residence-meal-plans/",
        },
      ],
    },
  },
  {
    id: "residence-housing",
    links: {
      en: [
        { title: "Residence Home", url: "https://housing.mcmaster.ca/" },
        {
          title: "Room Types & Fees",
          url: "https://housing.mcmaster.ca/future-residents/rooms/",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://offcampus.mcmaster.ca/living-off-campus/",
        },
      ],
      cn: [
        { title: "宿舍主页", url: "https://housing.mcmaster.ca/" },
        {
          title: "房型与费用",
          url: "https://housing.mcmaster.ca/future-residents/rooms/",
        },
        {
          title: "校外住宿办公室",
          url: "https://offcampus.mcmaster.ca/living-off-campus/",
        },
      ],
    },
  },
  {
    id: "intl-support",
    links: {
      en: [
        {
          title: "International Office",
          url: "https://global.mcmaster.ca/about-us/",
        },
        {
          title: "Immigration Consulting",
          url: "https://global.mcmaster.ca/activity/immigration-consulting-in-sending-and-receiving-countries/",
        },
        { title: "Health & Wellness", url: "https://wellness.mcmaster.ca/" },
      ],
      cn: [
        {
          title: "国际事务办公室",
          url: "https://global.mcmaster.ca/about-us/",
        },
        {
          title: "移民咨询",
          url: "https://global.mcmaster.ca/activity/immigration-consulting-in-sending-and-receiving-countries/",
        },
        { title: "健康与心理支持", url: "https://wellness.mcmaster.ca/" },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Centre Home",
          url: "https://studentsuccess.mcmaster.ca/careers/",
        },
        {
          title: "Science Co-op Programs",
          url: "https://careers.science.mcmaster.ca/employers/co-op-programs/",
        },
        {
          title: "Engineering Co-op & Career Experience",
          url: "https://www.eng.mcmaster.ca/co-op-career-experience/",
        },
        {
          title: "Alumni Network",
          url: "https://alumni.mcmaster.ca/s/1439/22/alumni/home.aspx",
        },
      ],
      cn: [
        {
          title: "职业中心主页",
          url: "https://studentsuccess.mcmaster.ca/careers/",
        },
        {
          title: "理科 Co-op 项目",
          url: "https://careers.science.mcmaster.ca/employers/co-op-programs/",
        },
        {
          title: "工程 Co-op 与职业体验",
          url: "https://www.eng.mcmaster.ca/co-op-career-experience/",
        },
        {
          title: "校友网络",
          url: "https://alumni.mcmaster.ca/s/1439/22/alumni/home.aspx",
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
          url: "https://parking.mcmaster.ca/",
        },
        {
          title: "Campus Emergency Guide",
          url: "https://css.mcmaster.ca/services/campus-emergency-guide/",
        },
        {
          title: "Chinese Graduate Students' Community",
          url: "https://gsa.mcmaster.ca/cgsc/",
        },
      ],
      cn: [
        { title: "交通与停车", url: "https://parking.mcmaster.ca/" },
        {
          title: "校园应急指南",
          url: "https://css.mcmaster.ca/services/campus-emergency-guide/",
        },
        { title: "华人研究生社群", url: "https://gsa.mcmaster.ca/cgsc/" },
      ],
    },
  },
  {
    id: "tours-media",
    links: {
      en: [
        {
          title: "Book Campus Tour",
          url: "https://admissions.mcmaster.ca/portal/campustours",
        },
        {
          title: "Virtual Campus VR",
          url: "https://admissions.mcmaster.ca/portal/mac101tour",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/channel/UCwLtwuJRFpk-CWRnWfnHKGg",
        },
        {
          title: "Housing Social Media",
          url: "https://housing.mcmaster.ca/social/",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://admissions.mcmaster.ca/portal/campustours",
        },
        {
          title: "虚拟校园 VR",
          url: "https://admissions.mcmaster.ca/portal/mac101tour",
        },
        {
          title: "官方 YouTube",
          url: "https://www.youtube.com/channel/UCwLtwuJRFpk-CWRnWfnHKGg",
        },
        { title: "住宿社交媒体", url: "https://housing.mcmaster.ca/social/" },
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
          title: "2025 McMaster Viewbook",
          description:
            "Official undergraduate recruitment brochure, outlining faculty and program features, admission requirements, campus life, and financial information.",
          url: "https://future.mcmaster.ca/wp-content/uploads/2024/08/MCM_2025Viewbook_08012024.pdf?utm_source",
        },
        {
          title: "Circular–International Student Brochure (2024)",
          description:
            "Designed for international students, including admission process, requirements, visa instructions, and advice for new students.",
          url: "https://future.mcmaster.ca/wp-content/uploads/2023/03/International-Student-Brochure.pdf",
        },
        {
          title: "Level‑1 Enrolment Guide 2024",
          description:
            "A registration guide for first-year students, detailing the Mosaic course selection process, credit limits, and scheduling recommendations.",
          url: "https://futuresocsci.mcmaster.ca/app/uploads/2024/07/Level-1-Enrolment-Guide-2024-1.pdf",
        },
      ],
      cn: [
        {
          title: "2025年麦克马斯特大学宣传册",
          description:
            "官方本科申请宣传册，概览各学院和专业特色、入学要求、校园生活与财务信息，适合作为整体入学信息盘点素材。",
          url: "https://future.mcmaster.ca/wp-content/uploads/2024/08/MCM_2025Viewbook_08012024.pdf?utm_source",
        },
        {
          title: "国际学生手册 (2024)",
          description:
            "面向国际留学生设计，包含入学流程、录取要求、签证说明与新生活建议。",
          url: "https://future.mcmaster.ca/wp-content/uploads/2023/03/International-Student-Brochure.pdf",
        },
        {
          title: "大一注册指南 2024",
          description:
            "为大一新生提供的注册指南，详细说明 Mosaic 选课流程、学分限制与学时安排建议。",
          url: "https://futuresocsci.mcmaster.ca/app/uploads/2024/07/Level-1-Enrolment-Guide-2024-1.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "Policy on First Year Experience",
          description:
            "Official university policy covering the first-year experience, including Welcome Week safety, inclusion, and support services.",
          url: "https://secretariat.mcmaster.ca/app/uploads/First-Year-Experience-Orientation-and-Transition-for-Undergraduate-Students-Policy-on-the.pdf",
        },
        {
          title: "Residence Handbook 2024–2025",
          description:
            "Essential guide for students in residence, covering code of conduct, services, facilities, safety, and health support.",
          url: "https://housing.mcmaster.ca/app/uploads/2024/06/Residence-Handbook-2024-2025.pdf",
        },
      ],
      cn: [
        {
          title: "新生体验政策 (迎新与过渡)",
          description:
            "McMaster 大学官方政策文档，覆盖从录取确认至开学初六周内首年体验，包括 Welcome Week 安全、融合与支持服务的规划原则与责任分工。",
          url: "https://secretariat.mcmaster.ca/app/uploads/First-Year-Experience-Orientation-and-Transition-for-Undergraduate-Students-Policy-on-the.pdf",
        },
        {
          title: "宿舍手册 2024–2025",
          description:
            "提供关于 McMaster 校内宿舍社区生活的重要信息，包括行为守则、服务中心、设施使用、安全与健康支持，是新生入住宿舍的必备指南。",
          url: "https://housing.mcmaster.ca/app/uploads/2024/06/Residence-Handbook-2024-2025.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Undergraduate Tuition Fee Schedule 2023–24 & 2024–25",
          description:
            "Details tuition standards and annual growth rates for domestic and international students by year level.",
          url: "https://financial-affairs.mcmaster.ca/app/uploads/2024/01/Final-2023-24-2024-25-Tuition-Fee-Schedule-May-30-2023.pdf",
        },
        {
          title: "Career Planning Notebook – Student Success Centre (2023)",
          description:
            "A structured handbook for career goal setting, self-assessment, and connecting with mentors, including a guide to the 'OSCARplus' system.",
          url: "https://studentsuccess.mcmaster.ca/wp-content/uploads/2023/11/SSC-Career-planning-notebook-2023_Fillable.pdf",
        },
      ],
      cn: [
        {
          title: "本科学费表 2023–24 & 2024–25",
          description: "详细列出本地学生与国际学生按年级的学费标准和年增长率。",
          url: "https://financial-affairs.mcmaster.ca/app/uploads/2024/01/Final-2023-24-2024-25-Tuition-Fee-Schedule-May-30-2023.pdf",
        },
        {
          title: "职业规划手册 – 学生成功中心 (2023)",
          description:
            "一本结构化的手册，指导学生进行职业目标设定、自我评估、连接导师与机会，并提供“OSCARplus”系统使用指南。",
          url: "https://studentsuccess.mcmaster.ca/wp-content/uploads/2023/11/SSC-Career-planning-notebook-2023_Fillable.pdf",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "McMaster Undergraduate Academic Calendar 2024–2025",
          description:
            "Official annual compilation of undergraduate courses and policies, including program structures, prerequisites, and academic regulations.",
          url: "https://registrar.mcmaster.ca/wp-content/uploads/2024/09/UGRD-Calendar-2024-2025-pdf-version-1.pdf",
        },
        {
          title: "Occupational Therapy Program Handbook 2024–2025",
          description:
            "Handbook for the OT program, covering curriculum, assessment, lab protocols, and clinical practices.",
          url: "https://srs-ot.healthsci.mcmaster.ca/wp-content/uploads/2024/05/Occupational-Therapy-Program-Handbook-2024-2025_vFINAL_08-14-24.pdf",
        },
        {
          title: "Globalization Studies Student Handbook 2023–2024",
          description:
            "Undergraduate handbook for the Institute on Globalization, including course paths, research opportunities, and professional development advice.",
          url: "https://globalization.mcmaster.ca/app/uploads/2024/06/Institute-on-Globalization-and-the-Human-Condition.pdf",
        },
      ],
      cn: [
        {
          title: "麦克马斯特大学本科校历 2024–2025",
          description:
            "官方年度本科课程与政策汇编，包括各专业核心课程结构、先修要求、Co‑op 项目细则和学术规章。",
          url: "https://registrar.mcmaster.ca/wp-content/uploads/2024/09/UGRD-Calendar-2024-2025-pdf-version-1.pdf",
        },
        {
          title: "职业治疗项目手册 2024–2025",
          description:
            "康复科学学院 OT 专业书籍，涵括入学课程、评估流程、实验室规定、临床实践和学术期望。",
          url: "https://srs-ot.healthsci.mcmaster.ca/wp-content/uploads/2024/05/Occupational-Therapy-Program-Handbook-2024-2025_vFINAL_08-14-24.pdf",
        },
        {
          title: "全球化研究学生手册 2023–2024",
          description:
            "国际研究学院本科手册，包含课程选修路径、学术技能、研究机会与专业发展建议。",
          url: "https://globalization.mcmaster.ca/app/uploads/2024/06/Institute-on-Globalization-and-the-Human-Condition.pdf",
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
      title: "McMaster University",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🎓 About McMaster University",
      aboutParagraph1:
        "McMaster University, located in Hamilton, Ontario, is a public research university renowned for its medical school and its problem-based, student-centered approach to learning. It was founded in 1887.",
      aboutParagraph2:
        "As a member of the U15 Group of Canadian Research Universities, McMaster is consistently ranked among the top universities in Canada and the world. It is known for its strong programs in health sciences, engineering, and business.",
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
      title: "麦克马斯特大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🎓 关于麦克马斯特大学",
      aboutParagraph1:
        "麦克马斯特大学位于安大略省汉密尔顿市，是一所公立研究型大学，以其医学院和以问题为基础、以学生为中心的学习方法而闻名。它成立于1887年。",
      aboutParagraph2:
        "作为加拿大U15研究型大学联盟的成员，麦克马斯特大学一直位居加拿大乃至世界顶尖大学之列。它以其在健康科学、工程和商业领域的强大课程而闻名。",
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
      className="text-[#247e9f] text-base hover:underline flex items-center"
    >
      ➡ Show Info
    </button>
  </div>
);

const McMasterUniversityPage = () => {
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
                  src="/logos/mcmaster.png"
                  alt="McMaster University Logo"
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
                              📍 1280 Main St W, Hamilton, ON L8S 4L8, Canada
                              <br />
                              📞 (905) 525-9140
                              <br />�{" "}
                              <a
                                href="https://www.mcmaster.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.mcmaster.ca
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

export default McMasterUniversityPage;
