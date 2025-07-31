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
          title: "QS Ranking",
          url: "https://www.topuniversities.com/universities/dalhousie-university?utm_source=chatgpt.com",
        },
        {
          title: "Campus Map",
          url: "https://www.dal.ca/campus-maps/maps.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/dalhousie-university?utm_source=chatgpt.com",
        },
        {
          title: "校区地图",
          url: "https://www.dal.ca/campus-maps/maps.html?utm_source=chatgpt.com",
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
          url: "https://www.dal.ca/study/programs.html#level=Undergraduate",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.dal.ca/study/faculties.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://www.dal.ca/study/programs.html#level=Undergraduate",
        },
        {
          title: "学院介绍",
          url: "https://www.dal.ca/study/faculties.html?utm_source=chatgpt.com",
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
          url: "https://www.dal.ca/dal/future-students.html",
        },
        {
          title: "Entry Requirements",
          url: "https://www.dal.ca/admissions/how-to-apply/undergraduate-admissions/admission-requirements.html",
        },
        {
          title: "Important Dates",
          url: "https://www.dal.ca/study/plan-your-degree/important-dates.html",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://www.dal.ca/dal/future-students.html",
        },
        {
          title: "入学要求",
          url: "https://www.dal.ca/admissions/how-to-apply/undergraduate-admissions/admission-requirements.html",
        },
        {
          title: "重要日期",
          url: "https://www.dal.ca/study/plan-your-degree/important-dates.html",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "Direct Application (How to Get In)",
          url: "https://www.grantme.ca/blog/how-to-get-into-dalhousie?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "直申通道",
          url: "https://www.grantme.ca/blog/how-to-get-into-dalhousie?utm_source=chatgpt.com",
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
          url: "https://www.dal.ca/admissions/money_matters/tuition_payments/Tuition_Fees.html",
        },
        {
          title: "Scholarship Search",
          url: "https://www.dal.ca/admissions/money_matters.html",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://www.dal.ca/admissions/money_matters/awards-financial-aid/working-while-studying.html",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://www.dal.ca/admissions/money_matters/tuition_payments/Tuition_Fees.html",
        },
        {
          title: "奖学金查询",
          url: "https://www.dal.ca/admissions/money_matters.html",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://www.dal.ca/admissions/money_matters/awards-financial-aid/working-while-studying.html",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        { title: "Clubs Directory", url: "https://www.dsu.ca/join-a-society" },
        {
          title: "Athletics & Recreation",
          url: "https://athletics.dal.ca/facilities/langille-athletic-centre/camps_dalAC/LACCampParentGuide.html?utm_source=chatgpt.com",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.dal.ca/campus_life/residence_housing/residence/friends-family/meal-plan-info.html",
        },
      ],
      cn: [
        { title: "社团目录", url: "https://www.dsu.ca/join-a-society" },
        {
          title: "体育与运动",
          url: "https://athletics.dal.ca/facilities/langille-athletic-centre/camps_dalAC/LACCampParentGuide.html?utm_source=chatgpt.com",
        },
        {
          title: "校园餐饮计划",
          url: "https://www.dal.ca/campus_life/residence_housing/residence/friends-family/meal-plan-info.html",
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
          url: "https://www.dal.ca/campus_life/residence_housing/residence.html",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.dal.ca/campus_life/residence_housing/residence/agricultural-campus/costs---fees.html?utm_source=chatgpt.com",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.dal.ca/campus_life/residence_housing/off-campus-living.html",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.dal.ca/campus_life/residence_housing/residence.html",
        },
        {
          title: "房型与费用",
          url: "https://www.dal.ca/campus_life/residence_housing/residence/agricultural-campus/costs---fees.html?utm_source=chatgpt.com",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.dal.ca/campus_life/residence_housing/off-campus-living.html",
        },
      ],
    },
  },
  {
    id: "intl-support",
    links: {
      en: [
        {
          title: "International Centre",
          url: "https://www.dal.ca/campus_life/international-centre.html",
        },
        {
          title: "PGWP Guide",
          url: "https://www.dal.ca/campus_life/international-centre/immigration-info/working-in-canada/pgwp.html",
        },
        {
          title: "On-Campus Work",
          url: "https://www.dal.ca/campus_life/international-centre/immigration-info/working-in-canada/on-campus-work.html",
        },
        {
          title: "Health & Wellness",
          url: "https://www.dal.ca/campus_life/health-and-wellness/health-centre-locations.html",
        },
      ],
      cn: [
        {
          title: "国际中心",
          url: "https://www.dal.ca/campus_life/international-centre.html",
        },
        {
          title: "PGWP 指南",
          url: "https://www.dal.ca/campus_life/international-centre/immigration-info/working-in-canada/pgwp.html",
        },
        {
          title: "校内工作",
          url: "https://www.dal.ca/campus_life/international-centre/immigration-info/working-in-canada/on-campus-work.html",
        },
        {
          title: "健康与心理支持",
          url: "https://www.dal.ca/campus_life/health-and-wellness/health-centre-locations.html",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career & Leadership Centre",
          url: "https://www.dal.ca/campus_life/career-and-leadership/job-resources-services.html",
        },
        {
          title: "Co-op / Internship Info",
          url: "https://www.dal.ca/study/ways-to-learn/work-integrated-learning-and-cooperative-education.html",
        },
        { title: "Alumni Network", url: "https://www.dal.ca/alumni.html" },
      ],
      cn: [
        {
          title: "职业与领导力中心",
          url: "https://www.dal.ca/campus_life/career-and-leadership/job-resources-services.html",
        },
        {
          title: "Co-op / 实习信息",
          url: "https://www.dal.ca/study/ways-to-learn/work-integrated-learning-and-cooperative-education.html",
        },
        { title: "校友网络", url: "https://www.dal.ca/alumni.html" },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Transit and Transportation",
          url: "https://www.dal.ca/campus_life/residence_housing/off-campus-living/living-in-halifax/transit-and-transportation.html?utm_source=chatgpt.com",
        },
        {
          title: "Campus Safety",
          url: "https://www.dal.ca/dept/dalsafe.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "交通与运输",
          url: "https://www.dal.ca/campus_life/residence_housing/off-campus-living/living-in-halifax/transit-and-transportation.html?utm_source=chatgpt.com",
        },
        {
          title: "校园安全",
          url: "https://www.dal.ca/dept/dalsafe.html?utm_source=chatgpt.com",
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
          url: "https://www.dal.ca/admissions/open-house-and-tours.html?utm_source=chatgpt.com",
        },
        {
          title: "Virtual Campus VR",
          url: "https://virtualtour.dal.ca/dal/home/featured-tours/?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://www.dal.ca/admissions/open-house-and-tours.html?utm_source=chatgpt.com",
        },
        {
          title: "虚拟校园 VR",
          url: "https://virtualtour.dal.ca/dal/home/featured-tours/?utm_source=chatgpt.com",
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
          title: "Student Guide 2024–2025",
          description:
            "This guide covers the admission process, application requirements, important dates, tuition, scholarships, campus services, and contact information, providing a comprehensive reference for undergraduate admission.",
          url: "https://www.dal.ca/content/dam/www/study/registrars-office/student-guide.pdf",
        },
        {
          title: "Domestic Viewbook (2024)",
          description:
            "A recruitment brochure for Canadian domestic students, introducing programs, academic requirements (e.g., math, English), experiential learning opportunities, and application guidelines.",
          url: "https://www.dal.ca/content/dam/www/study/viewbooks/domestic-viewbook.pdf",
        },
        {
          title: "International Viewbook",
          description:
            "Covers undergraduate and agricultural campus programs, Co-op opportunities, and language and cultural support, serving as an important reference for overseas applicants.",
          url: "https://www.dal.ca/content/dam/www/study/viewbooks/international-viewbook.pdf",
        },
      ],
      cn: [
        {
          title: "学生指南 2024–2025",
          description:
            "该指南涵盖录取流程、申请要求、重要日期、学费、奖学金、校园服务，以及联系方式，是一份全方位的本科入学参考资料。",
          url: "https://www.dal.ca/content/dam/www/study/registrars-office/student-guide.pdf",
        },
        {
          title: "本地生招生宣传册 (2024)",
          description:
            "面向加拿大本地学生的招生宣传册，介绍课程设置、学科要求（如数学、英语）、体验式学习机会以及申请指南。",
          url: "https://www.dal.ca/content/dam/www/study/viewbooks/domestic-viewbook.pdf",
        },
        {
          title: "国际生招生宣传册",
          description:
            "涵盖本科及农业校区课程、Co-op 机会、语言与文化支持，是海外申请者的重要参考资料。",
          url: "https://www.dal.ca/content/dam/www/study/viewbooks/international-viewbook.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "Undergraduate Orientation Guide 2023–Fall (Engineering)",
          description:
            "Includes guidance for undergraduate engineering freshmen, covering degree structure, curriculum, academic advising, important dates, and information for international students.",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/engineering/UndergraduateStudies/UG/Program%20Orientation%20Fall%202023.pdf",
        },
        {
          title: "Student Handbook 2024‑2025 (Health Sciences)",
          description:
            "A comprehensive handbook for the Faculty of Health, including transition content like course registration, campus services, code of conduct, and wellness resources.",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/healthsciences/Fenwick222024-2025%20Student%20Handbook%20Doc.pdf.pdf",
        },
        {
          title: "Residence Community Living Guide (2024)",
          description:
            "This 2024 guide for residence community living covers residence rules, safety protocols, student support services, visitor policies, and housing fees.",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/residence/RCLG%202024_Halifax_Aug%201.pdf",
        },
      ],
      cn: [
        {
          title: "本科迎新指南 2023秋季 (工程学院)",
          description:
            "涵盖工程学院本科新生的过渡指导，包括学位结构、课程设置、学术建议、重要日期与国际学生须知。",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/engineering/UndergraduateStudies/UG/Program%20Orientation%20Fall%202023.pdf",
        },
        {
          title: "学生手册 2024‑2025 (健康科学)",
          description:
            "适用于健康科学学院，是一本综合性学生手册，包含入学过渡内容：课程注册流程、校园服务、行为守则、福利资源等。",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/healthsciences/Fenwick222024-2025%20Student%20Handbook%20Doc.pdf.pdf",
        },
        {
          title: "住宿社区生活指南 (2024)",
          description:
            "此指南为2024年住宿社区生活手册，覆盖宿舍规则、安全守则、学生支持服务、访客政策、住宿费用等内容，是新生入住宿舍的核心参考资料。",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/residence/RCLG%202024_Halifax_Aug%201.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title:
            "2024–2025 International Fee Schedule – Guaranteed Tuition Model",
          description:
            "A guide to guaranteed tuition for international students in Canada, including fee standards and additional costs for programs like engineering, architecture, and health sciences.",
          url: "https://cdn.dal.ca/content/dam/dalhousie/images/admissions/moneymatters/ITG%202024-2025.pdf",
        },
        {
          title: "Political Science Career Guide",
          description:
            "Introduces career paths, transferable skills, industry analysis, and job title suggestions for political science majors.",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/politicalscience/Poli%20Sci%20Career%20Guide.pdf",
        },
        {
          title: "Management Career Services Fact Sheet",
          description:
            "Details the Management Co-op program, fourth-year internship details, employer engagement pathways, and myCareer platform functions.",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/faculty/management/management-career-services/Dalhousie%20MCS%20All%20Co-op%20and%20Internship%20Programs%20Fact%20Sheet.pdf",
        },
      ],
      cn: [
        {
          title: "2024–2025 国际生固定学费指南",
          description:
            "加拿大国际生固定学费指南，包含工程、建筑、健康科学等专业的学费标准和附加费用。",
          url: "https://cdn.dal.ca/content/dam/dalhousie/images/admissions/moneymatters/ITG%202024-2025.pdf",
        },
        {
          title: "政治学专业职业指南",
          description:
            "介绍政治学专业相关职业方向、技能迁移能力、行业分析与职称建议，是该专业学生就业规划的实用手册。",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/politicalscience/Poli%20Sci%20Career%20Guide.pdf",
        },
        {
          title: "管理学院职业服务概况",
          description:
            "介绍了管理学院合作教育方案、大四实习项目细则、雇主参与路径及 myCareer 平台功能，是商科学生的重要就业指南。",
          url: "https://cdn.dal.ca/content/dam/dalhousie/pdf/faculty/management/management-career-services/Dalhousie%20MCS%20All%20Co-op%20and%20Internship%20Programs%20Fact%20Sheet.pdf",
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
      title: "Dalhousie University",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🌊 About Dalhousie University",
      aboutParagraph1:
        "Dalhousie University is a public research university in Halifax, Nova Scotia, Canada, with three campuses in Halifax, a fourth in Bible Hill, and a second medical school campus in Saint John, New Brunswick. Dalhousie offers more than 4,000 courses, and 180 degree programs in twelve undergraduate, graduate, and professional faculties.",
      aboutParagraph2:
        "As a member of the U15 Group of Canadian Research Universities, it is a leading institution in Atlantic Canada, known for its strong programs in health sciences, law, and oceanography.",
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
      title: "戴尔豪斯大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🌊 关于戴尔豪斯大学",
      aboutParagraph1:
        "戴尔豪斯大学是位于加拿大新斯科舍省哈利法克斯市的一所公立研究型大学，在哈利法克斯拥有三个校区，在Bible Hill有第四个校区，并在新不伦瑞克省圣约翰市设有第二个医学院校区。戴尔豪斯大学在十二个本科、研究生和专业学院提供超过4000门课程和180个学位项目。",
      aboutParagraph2:
        "作为加拿大U15研究型大学联盟的成员，它是加拿大大西洋地区的领先学府，以其在健康科学、法律和海洋学领域的强大课程而闻名。",
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

const DalhousieUniversityPage = () => {
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
                  src="/logos/dalhousie.png"
                  alt="Dalhousie University Logo"
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
                              📍 6299 South St, Halifax, NS B3H 4R2, Canada
                              <br />
                              📞 (902) 494-2211
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.dal.ca/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#247e9f] underline"
                              >
                                www.dal.ca
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

export default DalhousieUniversityPage;
