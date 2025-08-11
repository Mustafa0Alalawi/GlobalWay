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
          url: "https://www.topuniversities.com/universities/university-ottawa?utm_source=chatgpt.com",
        },
        {
          title: "Campus Map",
          url: "https://www.uottawa.ca/about-us/administration-services/facilities/campus-maps?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/university-ottawa?utm_source=chatgpt.com",
        },
        {
          title: "校区地图",
          url: "https://www.uottawa.ca/about-us/administration-services/facilities/campus-maps?utm_source=chatgpt.com",
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
          url: "https://catalogue.uottawa.ca/en/undergrad/",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.uottawa.ca/about-us/faculties?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://catalogue.uottawa.ca/en/undergrad/",
        },
        {
          title: "学院介绍",
          url: "https://www.uottawa.ca/about-us/faculties?utm_source=chatgpt.com",
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
          url: "https://www.uottawa.ca/study/undergraduate-studies",
        },
        {
          title: "Entry Requirements",
          url: "https://www.uottawa.ca/study/undergraduate-studies/program-prerequisites?utm_source=chatgpt.com",
        },
        {
          title: "Important Dates",
          url: "https://www.uottawa.ca/study/undergraduate-studies/application-deadlines-available-programs-international",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://www.uottawa.ca/study/undergraduate-studies",
        },
        {
          title: "入学要求",
          url: "https://www.uottawa.ca/study/undergraduate-studies/program-prerequisites?utm_source=chatgpt.com",
        },
        {
          title: "重要日期",
          url: "https://www.uottawa.ca/study/undergraduate-studies/application-deadlines-available-programs-international",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "Direct Application (International)",
          url: "https://www.uottawa.ca/study/undergraduate-studies/international-applicants",
        },
      ],
      cn: [
        {
          title: "直申通道（国际生）",
          url: "https://www.uottawa.ca/study/undergraduate-studies/international-applicants",
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
          url: "https://www.uottawa.ca/study/fees-financial-support/university-fees?utm_source=chatgpt.com",
        },
        {
          title: "Scholarship Search",
          url: "https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview?utm_source=chatgpt.com",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://www.uottawa.ca/study/career-experiential-learning/campus-employment",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://www.uottawa.ca/study/fees-financial-support/university-fees?utm_source=chatgpt.com",
        },
        {
          title: "奖学金查询",
          url: "https://www.uottawa.ca/study/fees-financial-support/scholarships-awards-overview?utm_source=chatgpt.com",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://www.uottawa.ca/study/career-experiential-learning/campus-employment",
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
          url: "https://www.uottawa.ca/campus-life/student-clubs-organizations?utm_source=chatgpt.com",
        },
        {
          title: "Athletics & Recreation",
          url: "https://www.uottawa.ca/campus-life/recreation/facilities?utm_source=chatgpt.com",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.uottawa.ca/campus-life/eat-campus/meal-plans?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "社团目录",
          url: "https://www.uottawa.ca/campus-life/student-clubs-organizations?utm_source=chatgpt.com",
        },
        {
          title: "体育与运动",
          url: "https://www.uottawa.ca/campus-life/recreation/facilities?utm_source=chatgpt.com",
        },
        {
          title: "校园餐饮计划",
          url: "https://www.uottawa.ca/campus-life/eat-campus/meal-plans?utm_source=chatgpt.com",
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
          url: "https://www.uottawa.ca/campus-life/housing",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.uottawa.ca/campus-life/housing/fees-payment-information",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.uottawa.ca/campus-life/housing/off-campus-housing-information-resources",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.uottawa.ca/campus-life/housing",
        },
        {
          title: "房型与费用",
          url: "https://www.uottawa.ca/campus-life/housing/fees-payment-information",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.uottawa.ca/campus-life/housing/off-campus-housing-information-resources",
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
          url: "https://www.uottawa.ca/study/international-students?utm_source=chatgpt.com",
        },
        {
          title: "How to Apply for a Study Permit",
          url: "https://www.uottawa.ca/study/international-students/immigration/how-apply-study-permit?utm_source=chatgpt.com",
        },
        {
          title: "Immigration Information",
          url: "https://www.uottawa.ca/study/international-students/immigration?utm_source=chatgpt.com",
        },
        {
          title: "Health & Wellness",
          url: "https://www.uottawa.ca/campus-life/health-wellness/student-health-wellness-centre?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "国际事务办公室",
          url: "https://www.uottawa.ca/study/international-students?utm_source=chatgpt.com",
        },
        {
          title: "如何申请学签",
          url: "https://www.uottawa.ca/study/international-students/immigration/how-apply-study-permit?utm_source=chatgpt.com",
        },
        {
          title: "移民信息",
          url: "https://www.uottawa.ca/study/international-students/immigration?utm_source=chatgpt.com",
        },
        {
          title: "健康与心理支持",
          url: "https://www.uottawa.ca/campus-life/health-wellness/student-health-wellness-centre?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Centre Home (Telfer)",
          url: "https://telfer.uottawa.ca/en/careercentre/?utm_source=chatgpt.com",
        },
        {
          title: "Co-op Programs",
          url: "https://www.uottawa.ca/study/career-experiential-learning/coop/coop-programs?utm_source=chatgpt.com",
        },
        {
          title: "Work-Study Program",
          url: "https://www.uottawa.ca/study/career-experiential-learning/campus-employment/work-study-program",
        },
      ],
      cn: [
        {
          title: "职业中心主页 (Telfer)",
          url: "https://telfer.uottawa.ca/en/careercentre/?utm_source=chatgpt.com",
        },
        {
          title: "Co-op 项目",
          url: "https://www.uottawa.ca/study/career-experiential-learning/coop/coop-programs?utm_source=chatgpt.com",
        },
        {
          title: "勤工助学项目",
          url: "https://www.uottawa.ca/study/career-experiential-learning/campus-employment/work-study-program",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Housing Guide",
          url: "https://www.uottawa.ca/campus-life/housing",
        },
        {
          title: "Health & Safety Quick Reference",
          url: "https://www.uottawa.ca/about-us/administration-services/office-chief-risk-officer/health-safety-environmental-management/quick-reference",
        },
        {
          title: "Resources for Applicants from China",
          url: "https://www.uottawa.ca/study/undergraduate-studies/international-applicants/china",
        },
      ],
      cn: [
        {
          title: "住宿指南",
          url: "https://www.uottawa.ca/campus-life/housing",
        },
        {
          title: "健康与安全快速参考",
          url: "https://www.uottawa.ca/about-us/administration-services/office-chief-risk-officer/health-safety-environmental-management/quick-reference",
        },
        {
          title: "中国申请人资源",
          url: "https://www.uottawa.ca/study/undergraduate-studies/international-applicants/china",
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
          url: "https://www.uottawa.ca/study/campus-tours-admissions-events/campus-tours?utm_source=chatgpt.com",
        },
        {
          title: "Virtual Campus VR",
          url: "https://www.uottawa.ca/campus-life/events-all/virtual-tours-new-students?utm_source=chatgpt.com",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/watch?v=JeAqNmyiQjo",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://www.uottawa.ca/study/campus-tours-admissions-events/campus-tours?utm_source=chatgpt.com",
        },
        {
          title: "虚拟校园 VR",
          url: "https://www.uottawa.ca/campus-life/events-all/virtual-tours-new-students?utm_source=chatgpt.com",
        },
        {
          title: "官方 YouTube",
          url: "https://www.youtube.com/watch?v=JeAqNmyiQjo",
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
          title: "Undergraduate Viewbook 2025",
          description:
            "A comprehensive guide to uOttawa's 550+ undergraduate programs, admission requirements, Co-op, French immersion, and application steps.",
          url: "https://www.uottawa.ca/study/sites/g/files/bhrskd296/files/2024-09/uOttawa-Viewbook-2025.pdf?",
        },
        {
          title: "International Undergraduate Viewbook",
          description:
            "For international applicants, covering admission requirements, language tests, Co-op, scholarships, and fees.",
          url: "https://www.uottawa.ca/study/sites/g/files/bhrskd296/files/2025-07/Viewbook-International-2026-EN.pdf?utm_source",
        },
      ],
      cn: [
        {
          title: "2025年本科招生宣传册",
          description:
            "全面介绍 uOttawa 的本科专业（共 550+）、入学要求、Co-op 项目、法语沉浸、双学位方案、重要申请流程与步骤。",
          url: "https://www.uottawa.ca/study/sites/g/files/bhrskd296/files/2024-09/uOttawa-Viewbook-2025.pdf?",
        },
        {
          title: "国际本科招生宣传册",
          description:
            "针对国际申请者，涵盖国际入学要求、语言测试、法语沉浸项目、Co-op + 双学位机会，还包含奖学金与费用等信息。",
          url: "https://www.uottawa.ca/study/sites/g/files/bhrskd296/files/2025-07/Viewbook-International-2026-EN.pdf?utm_source",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "Express Pathway Program Overview",
          description:
            "Details uOttawa's language transition program, including online prep, on-campus integration, and language testing.",
          url: "https://www.uottawa.ca/about-us/sites/g/files/bhrskd336/files/2025-05/20250501%20ILOB_EPP_brochure_web--updated__v3.pdf",
        },
        {
          title: "Incoming Exchange Students Fact Sheet",
          description:
            "For undergraduate exchange students, includes arrival times, virtual orientation, Buddy Program, housing, and health insurance.",
          url: "https://www.uottawa.ca/study/sites/g/files/bhrskd296/files/2025-01/FACT-SHEET_INCOMING-STUDENTS-EN-2024.pdf",
        },
        {
          title: "Residence Agreement, Code of Conduct 2024–2025",
          description:
            "Details on-campus housing contract terms, visitor policies, roommate agreements, and disciplinary procedures.",
          url: "https://www.uottawa.ca/campus-life/sites/g/files/bhrskd281/files/2024-04/Residence%20Agreement%202024-2025.pdf",
        },
      ],
      cn: [
        {
          title: "快速通道项目概述（预科+过渡课程）",
          description:
            "说明 uOttawa 的语言过渡项目，包括在线预备学习、校内学术融合课程、语言能力测试等内容。",
          url: "https://www.uottawa.ca/about-us/sites/g/files/bhrskd336/files/2025-05/20250501%20ILOB_EPP_brochure_web--updated__v3.pdf",
        },
        {
          title: "入境交换生情况说明书",
          description:
            "该手册面向本科交换生，包括推荐到校时间、虚拟迎新说明、Buddy Program、住宿安排和健康保险等内容。",
          url: "https://www.uottawa.ca/study/sites/g/files/bhrskd296/files/2025-01/FACT-SHEET_INCOMING-STUDENTS-EN-2024.pdf",
        },
        {
          title: "2024-2025年住宿协议与行为准则",
          description:
            "详述校内住宿合约条款、访客规定、室友协议、守则与违规后果等。",
          url: "https://www.uottawa.ca/campus-life/sites/g/files/bhrskd281/files/2024-04/Residence%20Agreement%202024-2025.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "The Resume and Cover Letter Guide",
          description:
            "Designed for undergraduate and law students, this guide explains how to structure clear resumes and cover letters with examples.",
          url: "https://www.uottawa.ca/faculty-law/sites/g/files/bhrskd406/files/2022-03/resume-cover-letter-2021.pdf",
        },
        {
          title: "Student‑Proposed Internship (SPI) Step‑By‑Step Guide",
          description:
            "A guide for law undergrads on how to find, contact, and secure their own internship opportunities.",
          url: "https://www.uottawa.ca/faculty-law/sites/g/files/bhrskd406/files/2023-09/Step-by-Step%20Guide%20-%20Student%20Proposed%20Internship%20%28SPI%29.pdf",
        },
      ],
      cn: [
        {
          title: "简历与求职信指南",
          description:
            "专为本科生和法学院学生设计，详细说明如何构建清晰结构的简历和求职信，提供准备流程示例。",
          url: "https://www.uottawa.ca/faculty-law/sites/g/files/bhrskd406/files/2022-03/resume-cover-letter-2021.pdf",
        },
        {
          title: "学生自荐实习 (SPI) 分步指南",
          description:
            "特别为法学院本科生设计的自拟实习指南，详细说明如何寻找、联系并落实实习机会。",
          url: "https://www.uottawa.ca/faculty-law/sites/g/files/bhrskd406/files/2023-09/Step-by-Step%20Guide%20-%20Student%20Proposed%20Internship%20%28SPI%29.pdf",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "Faculty of Education – Practicum Guide 2024–2025",
          description:
            "For teacher education programs, detailing practicum timelines, teaching objectives, and safety/ethics policies.",
          url: "https://www.uottawa.ca/faculty-education/sites/g/files/bhrskd391/files/2024-07/UO_FEFE_Practicum-Guide_24-25.pdf",
        },
        {
          title: "Faculty of Engineering – Engineering Program Guide (2023)",
          description:
            "Undergraduate guide for engineering, with details on 11 Co-op programs, internship benefits, and average salaries.",
          url: "https://www.uottawa.ca/faculty-engineering/sites/g/files/bhrskd396/files/2022-09/engineering-program-guide-2023.pdf",
        },
        {
          title: "Faculty of Social Sciences – 2023 Program Guide",
          description:
            "Guide to the faculty's structure, program options, support resources, and internship/career paths.",
          url: "https://www.uottawa.ca/faculty-social-sciences/sites/g/files/bhrskd371/files/2022-10/Guide2023_web.En_.%C6%92_v2.pdf",
        },
      ],
      cn: [
        {
          title: "教育学院 – 实习指南 2024–2025",
          description:
            "专为教师教育项目设计，详细列出实习时间表、教学实务目标、安全/职业伦理政策与角色分工说明。",
          url: "https://www.uottawa.ca/faculty-education/sites/g/files/bhrskd391/files/2024-07/UO_FEFE_Practicum-Guide_24-25.pdf",
        },
        {
          title: "工程学院 – 工程项目指南 (2023)",
          description:
            "工程学院本科导览手册，含 11 个专业 Co‑op 项目详情、实习收益、平均工资及国际实习路径等。",
          url: "https://www.uottawa.ca/faculty-engineering/sites/g/files/bhrskd396/files/2022-09/engineering-program-guide-2023.pdf",
        },
        {
          title: "社会科学学院 – 2023年项目指南",
          description:
            "社会科学学院项目指南，介绍学院结构、专业可选方向、支持资源与实习/职业发展路径。",
          url: "https://www.uottawa.ca/faculty-social-sciences/sites/g/files/bhrskd371/files/2022-10/Guide2023_web.En_.%C6%92_v2.pdf",
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
      title: "University of Ottawa",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🏛️ About University of Ottawa",
      aboutParagraph1:
        "The University of Ottawa is the largest bilingual (English-French) university in the world, located in the heart of Canada's capital. Founded in 1848, it is a major research university and a member of the U15 Group of Canadian Research Universities.",
      aboutParagraph2:
        "With a diverse student population from over 150 countries, uOttawa offers a wide range of programs across 10 faculties. Its location in downtown Ottawa provides unique opportunities for students to engage with national institutions, embassies, and NGOs.",
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
      title: "渥太华大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🏛️ 关于渥太华大学",
      aboutParagraph1:
        "渥太华大学是全球最大的英法双语大学，位于加拿大首都的中心地带。它成立于1848年，是一所主要的研究型大学，也是加拿大U15研究型大学联盟的成员。",
      aboutParagraph2:
        "渥太华大学拥有来自150多个国家的多样化学生群体，通过10个学院提供广泛的课程。其位于渥太华市中心的位置为学生提供了与国家机构、大使馆和非政府组织互动的独特机会。",
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

const OttawaUniversityPage = () => {
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
                  src="/logos/ottawa.png"
                  alt="University of Ottawa Logo"
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
                              📍 75 Laurier Ave. E, Ottawa, ON K1N 6N5, Canada
                              <br />
                              📞 (613) 562-5700
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.uottawa.ca/en"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.uottawa.ca
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

export default OttawaUniversityPage;
