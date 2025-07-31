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
          url: "https://www.topuniversities.com/universities/california-college-arts?utm_source=chatgpt.com",
        },
        {
          title: "Campus Map",
          url: "https://portal.cca.edu/essentials/facilities/campus-maps/",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/california-college-arts?utm_source=chatgpt.com",
        },
        {
          title: "校区地图",
          url: "https://portal.cca.edu/essentials/facilities/campus-maps/",
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
          url: "https://www.cca.edu/academics/",
        },
        {
          title: "Academic Programs Portal",
          url: "https://portal.cca.edu/learning/academic-programs/",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.cca.edu/community/faculty/",
        },
      ],
      cn: [
        { title: "专业列表 / 宣传册", url: "https://www.cca.edu/academics/" },
        {
          title: "学术课程门户",
          url: "https://portal.cca.edu/learning/academic-programs/",
        },
        { title: "师资介绍", url: "https://www.cca.edu/community/faculty/" },
      ],
    },
  },
  {
    id: "admissions",
    links: {
      en: [
        {
          title: "Undergraduate Admission Home",
          url: "https://www.cca.edu/admissions/undergraduate/",
        },
        {
          title: "Entry Requirements & Dates",
          url: "https://www.cca.edu/admissions/undergraduate/?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://www.cca.edu/admissions/undergraduate/",
        },
        {
          title: "入学要求与重要日期",
          url: "https://www.cca.edu/admissions/undergraduate/?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        { title: "Direct Application", url: "https://www.cca.edu/admissions/" },
      ],
      cn: [{ title: "直接申请", url: "https://www.cca.edu/admissions/" }],
    },
  },
  {
    id: "cost-funding",
    links: {
      en: [
        {
          title: "Tuition Fees",
          url: "https://www.cca.edu/admissions/tuition/",
        },
        {
          title: "Scholarship Search Tips",
          url: "https://www.cca.edu/newsroom/ten-tips-finding-scholarships-art-schools/",
        },
      ],
      cn: [
        { title: "学费表", url: "https://www.cca.edu/admissions/tuition/" },
        {
          title: "奖学金查找技巧",
          url: "https://www.cca.edu/newsroom/ten-tips-finding-scholarships-art-schools/",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        {
          title: "Clubs / Student Organizations",
          url: "https://portal.cca.edu/thriving/student-engagement/finding-your-community/student-organizations/",
        },
        {
          title: "Student Life",
          url: "https://www.cca.edu/community/student-life/",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.cca.edu/admissions/housing-dining/",
        },
        {
          title: "Makers Cafe",
          url: "https://portal.cca.edu/thriving/housing-dining-resed/makers-cafe/",
        },
      ],
      cn: [
        {
          title: "社团 / 学生组织",
          url: "https://portal.cca.edu/thriving/student-engagement/finding-your-community/student-organizations/",
        },
        {
          title: "学生生活",
          url: "https://www.cca.edu/community/student-life/",
        },
        {
          title: "餐饮与膳食计划",
          url: "https://www.cca.edu/admissions/housing-dining/",
        },
        {
          title: "Makers 咖啡厅",
          url: "https://portal.cca.edu/thriving/housing-dining-resed/makers-cafe/",
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
          url: "https://www.cca.edu/admissions/housing-dining/",
        },
        {
          title: "Room Types & Fees",
          url: "https://portal.cca.edu/thriving/housing-dining-resed/resident-halls/rates/",
        },
        {
          title: "Off-Campus & Graduate Housing",
          url: "https://portal.cca.edu/thriving/housing-dining-resed/resident-halls/graduate-housing/?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.cca.edu/admissions/housing-dining/",
        },
        {
          title: "房型与费用",
          url: "https://portal.cca.edu/thriving/housing-dining-resed/resident-halls/rates/",
        },
        {
          title: "校外及研究生住宿",
          url: "https://portal.cca.edu/thriving/housing-dining-resed/resident-halls/graduate-housing/?utm_source=chatgpt.com",
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
          url: "https://portal.cca.edu/thriving/international-student-services/?utm_source=chatgpt.com",
        },
        {
          title: "Health & Wellness",
          url: "https://portal.cca.edu/thriving/health-well-being/?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "国际学生服务",
          url: "https://portal.cca.edu/thriving/international-student-services/?utm_source=chatgpt.com",
        },
        {
          title: "健康与福祉",
          url: "https://portal.cca.edu/thriving/health-well-being/?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Job Boards",
          url: "https://portal.cca.edu/learning/professional-development/resources/job-boards/",
        },
        {
          title: "International Students Career Resources",
          url: "https://portal.cca.edu/learning/professional-development/resources/international-students-career-resources/",
        },
        {
          title: "Internships at CCA",
          url: "https://portal.cca.edu/learning/professional-development/internships-at-cca/",
        },
        {
          title: "Alumni Network",
          url: "https://portal.cca.edu/essentials/alumni/",
        },
      ],
      cn: [
        {
          title: "职业招聘网站",
          url: "https://portal.cca.edu/learning/professional-development/resources/job-boards/",
        },
        {
          title: "国际学生职业资源",
          url: "https://portal.cca.edu/learning/professional-development/resources/international-students-career-resources/",
        },
        {
          title: "CCA 实习机会",
          url: "https://portal.cca.edu/learning/professional-development/internships-at-cca/",
        },
        { title: "校友网络", url: "https://portal.cca.edu/essentials/alumni/" },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Housing & Dining",
          url: "https://portal.cca.edu/thriving/housing-dining-resed/",
        },
        {
          title: "Transportation",
          url: "https://portal.cca.edu/essentials/transportation/",
        },
        {
          title: "Emergency Response",
          url: "https://portal.cca.edu/essentials/public-safety/emergency-response/",
        },
        {
          title: "Medical Emergencies Procedures",
          url: "https://portal.cca.edu/thriving/health-well-being/medical-emergencies-procedures/",
        },
      ],
      cn: [
        {
          title: "住宿与餐饮",
          url: "https://portal.cca.edu/thriving/housing-dining-resed/",
        },
        {
          title: "交通",
          url: "https://portal.cca.edu/essentials/transportation/",
        },
        {
          title: "应急响应",
          url: "https://portal.cca.edu/essentials/public-safety/emergency-response/",
        },
        {
          title: "医疗急救程序",
          url: "https://portal.cca.edu/thriving/health-well-being/medical-emergencies-procedures/",
        },
      ],
    },
  },
  {
    id: "tours-media",
    links: {
      en: [
        { title: "Visit CCA", url: "https://www.cca.edu/admissions/visit/" },
      ],
      cn: [{ title: "访问 CCA", url: "https://www.cca.edu/admissions/visit/" }],
    },
  },
];

const pdfViewData: SectionData[] = [
  {
    id: "admission_guides",
    links: {
      en: [
        {
          title: "CCA Undergraduate Viewbook",
          description:
            "Official undergraduate admissions handbook, covering college overview, program introductions, application requirements, academic resources, and campus life.",
          url: "https://media.cca.edu/documents/CCA_Undergraduate_Viewbook.pdf",
        },
        {
          title: "CCA Portfolio Guide",
          description:
            "Guides art and design school applicants in preparing their portfolios, offering suggestions on format, creative ideas, and submission procedures.",
          url: "https://media.cca.edu/documents/ADM_Portfolio-Guide_2021_6wdmPKo.pdf",
        },
      ],
      cn: [
        {
          title: "CCA 本科招生手册",
          description:
            "官方发布的本科招生手册，内容涵盖学院概览、专业介绍、申请要求、学术资源与校园生活，适合作为内容创作的入学全景参考。",
          url: "https://media.cca.edu/documents/CCA_Undergraduate_Viewbook.pdf",
        },
        {
          title: "CCA 作品集指南",
          description:
            "指导艺术与设计学院申请者准备作品集，提供作品格式建议、创作思路与提交流程说明，是申请级别内容创作的关键参考资源。",
          url: "https://media.cca.edu/documents/ADM_Portfolio-Guide_2021_6wdmPKo.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title:
            "Student Affairs Resource Guide (Orientation & Campus Services)",
          description:
            "Compiled by the Student Affairs office, this guide outlines new student orientation events, campus resources, and support service contacts.",
          url: "https://portal-media.cca.edu/documents/Student_Affairs_Resource_Guide_Current_20230130.pdf",
        },
        {
          title: "SA Resource Guide Update (Sept 2023)",
          description:
            "The latest version of the Student Affairs resource handbook, detailing Welcome Week, multicultural programs, and housing/dining services.",
          url: "https://portal-media.cca.edu/documents/SA_ResourceGuide_Update_20230901.pdf",
        },
        {
          title: "Housing Priority Guide for Room Selection",
          description:
            "Explains how to apply for priority room selection, factors influencing your time slot, and the self-selection process.",
          url: "https://portal-media.cca.edu/documents/Housing_Priority_Guide_for_Room_Selection-5.pdf",
        },
        {
          title: "Self-Elected Room Selection Guide",
          description:
            "A step-by-step guide on room selection, forming roommate groups, and using preference filters.",
          url: "https://portal-media.cca.edu/documents/Self-Elected_Room_Selection_Guide.pdf",
        },
        {
          title: "Off-Campus Housing Resources for International Students",
          description:
            "Provides recommendations for off-campus housing, apartment types, and rental information for international students.",
          url: "https://portal-media.cca.edu/documents/Off-Campus_Housing_Resources_for_international_students.pdf",
        },
      ],
      cn: [
        {
          title: "学生事务资源指南 (迎新与校园服务)",
          description:
            "由学生事务办公室编制，概览新生迎新活动、校园资源（多元文化中心、心理健康等）及支持服务联系方式。",
          url: "https://portal-media.cca.edu/documents/Student_Affairs_Resource_Guide_Current_20230130.pdf",
        },
        {
          title: "学生事务资源指南更新 (2023年9月)",
          description:
            "最新版学生事务资源手册，详细介绍迎新周内容、多元文化项目、CCA Cares 支持系统与住宿/餐饮事务入口。",
          url: "https://portal-media.cca.edu/documents/SA_ResourceGuide_Update_20230901.pdf",
        },
        {
          title: "房间选择优先指南",
          description:
            "解释如何申请优先选房名单、影响选房时段的因素（如年级、残障需求、提交时间）以及自选房间流程。",
          url: "https://portal-media.cca.edu/documents/Housing_Priority_Guide_for_Room_Selection-5.pdf",
        },
        {
          title: "自选房间指南",
          description:
            "逐步指导房间选择步骤、组建室友小组、使用偏好筛选和最终提交选房。",
          url: "https://portal-media.cca.edu/documents/Self-Elected_Room_Selection_Guide.pdf",
        },
        {
          title: "国际学生校外住房资源",
          description:
            "为国际学生提供的校外住房推荐、公寓类型、地区描述及租房须知。",
          url: "https://portal-media.cca.edu/documents/Off-Campus_Housing_Resources_for_international_students.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "2024-2025 Tuition and Fees Schedule",
          description:
            "Officially lists tuition, registration fees, insurance, and student activity fees for the 2024–25 academic year.",
          url: "https://portal-media.cca.edu/documents/2024_-2025_Tuition__Fees_Schedule_Portal_Page.pdf",
        },
        {
          title: "2024-2025 Undergrad Tuition Estimator",
          description:
            "A cost estimation tool for new undergraduates, showing net expenses and monthly payment options.",
          url: "https://portal-media.cca.edu/documents/22What_Will_I_Owe22_Estimator_Updated_562025.pdf",
        },
        {
          title: "2025 Summer Financial Aid Guide",
          description:
            "Details financial aid for summer courses, including federal loan amounts and scholarships.",
          url: "https://portal-media.cca.edu/documents/2025_Estimated_Financial_Aid_Eligibility_Chart.pdf",
        },
        {
          title: "Career Path / Job Level Slides",
          description:
            "Displays career path levels (Support → Professional → Management → Executive), including job responsibilities and promotion pathways.",
          url: "https://portal-media.cca.edu/documents/Career_Path_Job_Level_Slides_.pdf",
        },
      ],
      cn: [
        {
          title: "2024-2025 学费与费用表",
          description:
            "官方列出 2024–25 学年本科与研究生各项学费、注册费、保险费、学生活动费等。",
          url: "https://portal-media.cca.edu/documents/2024_-2025_Tuition__Fees_Schedule_Portal_Page.pdf",
        },
        {
          title: "2024-2025 本科生学费估算器",
          description:
            "为本科新生量身定制的成本估算工具，展示学费、住宿、餐饮、保险与贷款后的净支出与月付选项。",
          url: "https://portal-media.cca.edu/documents/22What_Will_I_Owe22_Estimator_Updated_562025.pdf",
        },
        {
          title: "2025 夏季财务援助指南",
          description:
            "详解夏季课程的资助范围，包括联邦贷款额度、奖学金与校内住宿补贴。",
          url: "https://portal-media.cca.edu/documents/2025_Estimated_Financial_Aid_Eligibility_Chart.pdf",
        },
        {
          title: "职业路径 / 职位级别幻灯片",
          description:
            "展示CCA内部与校外职位的职业路径等级，包含职责范围与晋升跳板。",
          url: "https://portal-media.cca.edu/documents/Career_Path_Job_Level_Slides_.pdf",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "Textiles Program Handbook",
          description:
            "Details for textiles students on studio hours, safety protocols (dyes, chemicals), tool usage, and cleaning responsibilities.",
          url: "https://portal-media.cca.edu/documents/Textiles_Program_Student_Handbook_2023-2024.pdf",
        },
        {
          title: "Jewelry/Metal Arts Program Handbook",
          description:
            "Comprehensive guide for Jewelry/Metal Arts students, covering lab access, tool use, safety measures, and studio rules.",
          url: "https://portal-media.cca.edu/documents/Jewelry_Metal_Arts_Program_Handbook.pdf",
        },
        {
          title: "Glass Program Safety Handbook",
          description:
            "Safety handbook for glassmaking students, explaining furnace operation, handling of toxic materials, and emergency procedures.",
          url: "https://portal-media.cca.edu/documents/Glass_Handbook-Health_Safety__Wellness_Spring_2020.pdf",
        },
      ],
      cn: [
        {
          title: "纺织品专业手册",
          description:
            "详细说明纺织专业学生的工作室使用时间、安全规范（染料、化学品管理）、工具器材使用流程与清洁责任。",
          url: "https://portal-media.cca.edu/documents/Textiles_Program_Student_Handbook_2023-2024.pdf",
        },
        {
          title: "珠宝/金属艺术专业手册",
          description:
            "珠宝金属艺术专业学生的综合指南，涵盖实验室准入制度、使用工具、防护措施、安全程序与工作室规章。",
          url: "https://portal-media.cca.edu/documents/Jewelry_Metal_Arts_Program_Handbook.pdf",
        },
        {
          title: "玻璃专业安全手册",
          description:
            "玻璃制作专业学生安全手册，说明高温炉操作、毒化材料处理、紧急程序与设备共享协议等内容。",
          url: "https://portal-media.cca.edu/documents/Glass_Handbook-Health_Safety__Wellness_Spring_2020.pdf",
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
      title: "California College of the Arts",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🎨 About California College of the Arts",
      aboutParagraph1:
        "Founded in 1907, California College of the Arts (CCA) is a leading art and design school located in the San Francisco Bay Area. It is known for its interdisciplinary approach, fostering innovation, and preparing students for creative careers.",
      aboutParagraph2:
        "CCA offers a wide range of undergraduate and graduate programs in art, design, architecture, and writing. With a strong commitment to social and environmental responsibility, the college empowers students to become creative leaders and cultural changemakers.",
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
      title: "加州艺术学院",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🎨 关于加州艺术学院",
      aboutParagraph1:
        "加州艺术学院（CCA）成立于1907年，是位于旧金山湾区的一所领先的艺术与设计学校。它以其跨学科的方法、培养创新精神以及为学生的创意职业生涯做准备而闻名。",
      aboutParagraph2:
        "CCA提供艺术、设计、建筑和写作等领域的广泛本科和研究生课程。学院坚定地致力于社会和环境责任，赋能学生成为创意领袖和文化变革者。",
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

const CCAUniversityPage = () => {
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
                  src="/logos/california.png"
                  alt="CCA Logo"
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
                              📍 1111 8th St, San Francisco, CA 94107, USA
                              <br />
                              📞 (415) 703-9500
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.cca.edu/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.cca.edu
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

export default CCAUniversityPage;
