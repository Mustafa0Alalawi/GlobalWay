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
          url: "https://uwaterloo.ca/future-students/university-of-waterloo-ranking",
        },
        {
          title: "Campus Map",
          url: "https://uwaterloo.ca/about/maps-and-directions",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://uwaterloo.ca/future-students/university-of-waterloo-ranking",
        },
        {
          title: "校区地图",
          url: "https://uwaterloo.ca/about/maps-and-directions",
        },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Request Viewbook",
          url: "https://uwaterloo.ca/future-students/request-viewbook",
        },
        {
          title: "Programs by Faculty",
          url: "https://uwaterloo.ca/future-students/programs/by-faculty",
        },
        {
          title: "Faculties & Academics",
          url: "https://uwaterloo.ca/faculties-academics",
        },
      ],
      cn: [
        {
          title: "索取宣传册",
          url: "https://uwaterloo.ca/future-students/request-viewbook",
        },
        {
          title: "按学院分列的专业",
          url: "https://uwaterloo.ca/future-students/programs/by-faculty",
        },
        {
          title: "学院与学术",
          url: "https://uwaterloo.ca/faculties-academics",
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
          url: "https://uwaterloo.ca/admissions/",
        },
        {
          title: "Entry Requirements",
          url: "https://uwaterloo.ca/future-students/start-here/understanding-admission-requirements",
        },
        {
          title: "Important Dates",
          url: "https://uwaterloo.ca/future-students/admissions/timelines",
        },
      ],
      cn: [
        { title: "本科申请主页", url: "https://uwaterloo.ca/admissions/" },
        {
          title: "入学要求",
          url: "https://uwaterloo.ca/future-students/start-here/understanding-admission-requirements",
        },
        {
          title: "重要日期",
          url: "https://uwaterloo.ca/future-students/admissions/timelines",
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
          url: "https://www.ouac.on.ca/guide/undergrad-waterloo/",
        },
        {
          title: "How to Apply Guide",
          url: "https://uwaterloo.ca/future-students/admissions/how-to-apply",
        },
      ],
      cn: [
        {
          title: "安省申请流程（OUAC）",
          url: "https://www.ouac.on.ca/guide/undergrad-waterloo/",
        },
        {
          title: "如何申请指南",
          url: "https://uwaterloo.ca/future-students/admissions/how-to-apply",
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
          url: "https://uwaterloo.ca/future-students/financing/tuition",
        },
        {
          title: "Scholarship Search",
          url: "https://uwaterloo.ca/future-students/financing/scholarships",
        },
        {
          title: "Work Programs",
          url: "https://uwaterloo.ca/the-centre/awards-and-financial-aid/work-programs",
        },
        {
          title: "Finding a Part-time Job",
          url: "https://uwaterloo.ca/future-students/missing-manual/money/finding-part-time-job-campus",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://uwaterloo.ca/future-students/financing/tuition",
        },
        {
          title: "奖学金查询",
          url: "https://uwaterloo.ca/future-students/financing/scholarships",
        },
        {
          title: "工作项目",
          url: "https://uwaterloo.ca/the-centre/awards-and-financial-aid/work-programs",
        },
        {
          title: "寻找兼职工作",
          url: "https://uwaterloo.ca/future-students/missing-manual/money/finding-part-time-job-campus",
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
          url: "https://uwaterloo.ca/future-students/student-life/clubs",
        },
        {
          title: "Athletics & Recreation",
          url: "https://athletics.uwaterloo.ca/sports/warrior-recreation",
        },
        {
          title: "WatCard (Meal Plan)",
          url: "https://uwaterloo.ca/the-centre/watcard",
        },
      ],
      cn: [
        {
          title: "社团目录",
          url: "https://uwaterloo.ca/future-students/student-life/clubs",
        },
        {
          title: "体育与运动",
          url: "https://athletics.uwaterloo.ca/sports/warrior-recreation",
        },
        {
          title: "WatCard (餐饮计划)",
          url: "https://uwaterloo.ca/the-centre/watcard",
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
          url: "https://uwaterloo.ca/future-students/residence",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://uwaterloo.ca/off-campus-housing/",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://uwaterloo.ca/future-students/residence",
        },
        {
          title: "校外住宿办公室",
          url: "https://uwaterloo.ca/off-campus-housing/",
        },
      ],
    },
  },
  {
    id: "intl-support",
    links: {
      en: [
        {
          title: "International Students Info",
          url: "https://uwaterloo.ca/future-students/international-students",
        },
        {
          title: "International Experience",
          url: "https://uwaterloo.ca/international-experience/",
        },
        {
          title: "Visas & Permits",
          url: "https://uwaterloo.ca/future-students/international-students/visas",
        },
        {
          title: "Post-Graduation Work Permit (PGWP)",
          url: "https://uwaterloo.ca/international-experience/immigration-consulting/immigration-applications/post-graduation-work-permit-pgwp",
        },
        {
          title: "Health & Wellness",
          url: "https://uwaterloo.ca/future-students/missing-manual/wellness",
        },
      ],
      cn: [
        {
          title: "国际学生信息",
          url: "https://uwaterloo.ca/future-students/international-students",
        },
        {
          title: "国际体验",
          url: "https://uwaterloo.ca/international-experience/",
        },
        {
          title: "签证与许可",
          url: "https://uwaterloo.ca/future-students/international-students/visas",
        },
        {
          title: "毕业后工作许可 (PGWP)",
          url: "https://uwaterloo.ca/international-experience/immigration-consulting/immigration-applications/post-graduation-work-permit-pgwp",
        },
        {
          title: "健康与心理支持",
          url: "https://uwaterloo.ca/future-students/missing-manual/wellness",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Development Centre",
          url: "https://uwaterloo.ca/career-development/",
        },
        {
          title: "Co-op Program Info",
          url: "https://uwaterloo.ca/future-students/co-op",
        },
      ],
      cn: [
        {
          title: "职业发展中心",
          url: "https://uwaterloo.ca/career-development/",
        },
        {
          title: "Co-op 项目信息",
          url: "https://uwaterloo.ca/future-students/co-op",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Off-Campus Housing",
          url: "https://uwaterloo.ca/off-campus-housing/",
        },
        {
          title: "Guide to Living Off Campus",
          url: "https://uwaterloo.ca/future-students/missing-manual/applying/guide-living-campus",
        },
        {
          title: "Campus Safety",
          url: "https://uwaterloo.ca/special-constable-service/campus-safety",
        },
        { title: "Safety Office", url: "https://uwaterloo.ca/safety-office/" },
      ],
      cn: [
        { title: "校外住宿", url: "https://uwaterloo.ca/off-campus-housing/" },
        {
          title: "校外生活指南",
          url: "https://uwaterloo.ca/future-students/missing-manual/applying/guide-living-campus",
        },
        {
          title: "校园安全",
          url: "https://uwaterloo.ca/special-constable-service/campus-safety",
        },
        { title: "安全办公室", url: "https://uwaterloo.ca/safety-office/" },
      ],
    },
  },
  {
    id: "tours-media",
    links: {
      en: [
        {
          title: "Book Campus Tour",
          url: "https://uwaterloo.ca/future-students/tours-events/campus-tours",
        },
        {
          title: "Tour Checklist",
          url: "https://uwaterloo.ca/future-students/tours-events/tour-checklist",
        },
        {
          title: "Virtual Campus VR",
          url: "https://uwaterloo.ca/future-students/tours-events/virtual-campus-tour",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/c/UniversityofWaterlooFutureStudents",
        },
        {
          title: "Official Instagram",
          url: "https://www.instagram.com/uofwaterloo/",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://uwaterloo.ca/future-students/tours-events/campus-tours",
        },
        {
          title: "参观清单",
          url: "https://uwaterloo.ca/future-students/tours-events/tour-checklist",
        },
        {
          title: "虚拟校园 VR",
          url: "https://uwaterloo.ca/future-students/tours-events/virtual-campus-tour",
        },
        {
          title: "官方 YouTube",
          url: "https://www.youtube.com/c/UniversityofWaterlooFutureStudents",
        },
        {
          title: "官方 Instagram",
          url: "https://www.instagram.com/uofwaterloo/",
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
          title: "2025 Canadian Undergraduate Viewbook",
          description: "64 pp; Program directory, CO-OP, tuition estimation",
          url: "https://uwaterloo.ca/future-students/sites/default/files/uploads/documents/2025-waterloo-canadian-viewbook.pdf",
        },
        {
          title: "2025 International Undergraduate Viewbook",
          description:
            "Specifically for overseas high school students: visas, UHIP, housing",
          url: "https://uwaterloo.ca/future-students/sites/default/files/uploads/documents/2025-waterloo-international-viewbook.pdf",
        },
        {
          title: "International Applicant Guide (HTML + PDF sections)",
          description:
            "Pre-arrival checklist, immigration documents, cost of living",
          url: "https://uwaterloo.ca/international-student-guide/resources/prepare/prepare-exchange-waterloo",
        },
      ],
      cn: [
        {
          title: "2025 加拿大本科招生手册",
          description: "64页；专业目录、CO-OP、学费估算",
          url: "https://uwaterloo.ca/future-students/sites/default/files/uploads/documents/2025-waterloo-canadian-viewbook.pdf",
        },
        {
          title: "2025 国际本科招生手册",
          description: "专为海外高中生：签证、UHIP、住宿",
          url: "https://uwaterloo.ca/future-students/sites/default/files/uploads/documents/2025-waterloo-international-viewbook.pdf",
        },
        {
          title: "国际申请人指南 (HTML + 各章节 PDF)",
          description: "行前 checklist、移民文件、生活成本",
          url: "https://uwaterloo.ca/international-student-guide/resources/prepare/prepare-exchange-waterloo",
        },
      ],
    },
  },
  {
    id: "transition_and_housing",
    links: {
      en: [
        {
          title: "First-Year Registration Guide 2025-26 – Faculty of Science",
          description:
            "Course selection process, 5.0-credit rule, important dates",
          url: "https://uwo.ca/sci/advising/pdf/First%20Year%20Registration%20Guide%202025.pdf",
        },
        {
          title: "Campus Housing Residence Contract 2025-26",
          description: "Latest terms; applicable for Fall 2025 - Spring 2026",
          url: "https://uwaterloo.ca/campus-housing/sites/default/files/uploads/documents/perimeter-2025-2026-remediated.pdf",
        },
        {
          title: "Student Family Housing Contract 2025-26",
          description: "For students with dependents/spouses",
          url: "https://uwaterloo.ca/campus-housing/sites/default/files/uploads/documents/2025-2026-family-housing-remediated.pdf",
        },
        {
          title: "Renison Residence Guidebook 2024-25*",
          description:
            "*2025-26 version expected in July – script monitoring recommended",
          url: "https://uwaterloo.ca/renison-student-experience/sites/default/files/uploads/documents/residence-contract-and-community-standards-2024-2025.pdf",
        },
      ],
      cn: [
        {
          title: "2025-26 新生选课指南 – 理学院",
          description: "选课流程、5.0-credit 规则、重要日期",
          url: "https://uwo.ca/sci/advising/pdf/First%20Year%20Registration%20Guide%202025.pdf",
        },
        {
          title: "2025-26 校园住宿合同",
          description: "最新条款；适用于2025秋季至2026春季",
          url: "https://uwaterloo.ca/campus-housing/sites/default/files/uploads/documents/perimeter-2025-2026-remediated.pdf",
        },
        {
          title: "2025-26 学生家庭住房合同",
          description: "带家属/配偶学生专用",
          url: "https://uwaterloo.ca/campus-housing/sites/default/files/uploads/documents/2025-2026-family-housing-remediated.pdf",
        },
        {
          title: "Renison 住宿指南 2024-25*",
          description: "*2025-26 版预计 7 月发布 – 建议脚本监控",
          url: "https://uwaterloo.ca/renison-student-experience/sites/default/files/uploads/documents/residence-contract-and-community-standards-2024-2025.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Tuition Fee Report 2024-25 (for 2025 budget)",
          description:
            "International/domestic rates, appendix includes estimated living costs",
          url: "https://planningandbudget.uwo.ca/wp-content/uploads/2024/04/2024-25-Tuition-Fee-Report.pdf",
        },
        {
          title:
            "Co-operative & Experiential Education (CEE) Annual Report 2024",
          description:
            "Latest employment rates, employer statistics, salary ranges",
          url: "https://uwaterloo.ca/associate-provost-co-operative-and-experiential-education/sites/default/files/uploads/documents/ceeannualreport-2024.pdf",
        },
        {
          title: "“Help, I don’t have a co-op job… yet!” webinar slides (2025)",
          description:
            "Winter 2025 job search tips; includes WaterlooWorks screenshots",
          url: "https://uwaterloo.ca/career-development/sites/default/files/uploads/documents/arts-help-i-dont-have-a-co-op-job-yet-winter-2025.pdf",
        },
        {
          title: "Engineering Viewbook 2025-26",
          description:
            "16 engineering programs, co-op schedules, employment data",
          url: "https://uwaterloo.ca/future-students/programs/engineering",
        },
      ],
      cn: [
        {
          title: "2024-25 学费报告 (适用 2025 入学预算)",
          description: "国际 / 本地费率、附录含生活费估算",
          url: "https://planningandbudget.uwo.ca/wp-content/uploads/2024/04/2024-25-Tuition-Fee-Report.pdf",
        },
        {
          title: "合作与体验式教育 (CEE) 2024 年度报告",
          description: "最新就业率、雇主统计、薪资区间",
          url: "https://uwaterloo.ca/associate-provost-co-operative-and-experiential-education/sites/default/files/uploads/documents/ceeannualreport-2024.pdf",
        },
        {
          title: "“救命，我还没有 co-op 工作！” 网络研讨会幻灯片 (2025)",
          description: "2025 冬季求职技巧；含 WaterlooWorks 截图",
          url: "https://uwaterloo.ca/career-development/sites/default/files/uploads/documents/arts-help-i-dont-have-a-co-op-job-yet-winter-2025.pdf",
        },
        {
          title: "2025-26 工程学院宣传册",
          description: "16 个工程专业、Co-op 排期、就业数据",
          url: "https://uwaterloo.ca/future-students/programs/engineering",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "Engineering Viewbook 2025-26",
          description:
            "16 engineering programs, co-op schedules, employment data",
          url: "https://uwaterloo.ca/future-students/programs/engineering",
        },
      ],
      cn: [
        {
          title: "2025-26 工程学院宣传册",
          description: "16 个工程专业、Co-op 排期、就业数据",
          url: "https://uwaterloo.ca/future-students/programs/engineering",
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
      title: "University of Waterloo",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🏰 About University of Waterloo",
      aboutParagraph1:
        "The University of Waterloo is a public research university with a main campus in Waterloo, Ontario, Canada. It is renowned for its cooperative education (co-op) programs, which are the largest in the world.",
      aboutParagraph2:
        "Founded in 1957, Waterloo has grown into a leading institution for innovation and entrepreneurship, particularly in the fields of engineering, computer science, and mathematics. It is a member of the U15 Group of Canadian Research Universities.",
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
      title: "滑铁卢大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🏰 关于滑铁卢大学",
      aboutParagraph1:
        "滑铁卢大学是一所公立研究型大学，主校区位于加拿大安大略省滑铁卢市。它以其合作教育（co-op）项目而闻名，该项目是全球规模最大的。",
      aboutParagraph2:
        "滑铁卢大学成立于1957年，现已发展成为创新和创业领域的领先机构，尤其是在工程、计算机科学和数学领域。它是加拿大U15研究型大学联盟的成员。",
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

const WaterlooUniversityPage = () => {
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
                  src="/logos/waterloo.png"
                  alt="University of Waterloo Logo"
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
                              📍 200 University Ave W, Waterloo, ON N2L 3G1,
                              Canada
                              <br />
                              📞 (519) 888-4567
                              <br />
                              🌐{" "}
                              <a
                                href="https://uwaterloo.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.uwaterloo.ca
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

export default WaterlooUniversityPage;
