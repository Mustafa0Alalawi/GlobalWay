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
          url: "https://www.topuniversities.com/universities/wilfrid-laurier-university?utm_source=chatgpt.com",
        },
        {
          title: "Campus Map",
          url: "https://conferences.wlu.ca/poms2017/wp-content/uploads/sites/12/2017/04/MAP.pdf?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/wilfrid-laurier-university?utm_source=chatgpt.com",
        },
        {
          title: "校区地图",
          url: "https://conferences.wlu.ca/poms2017/wp-content/uploads/sites/12/2017/04/MAP.pdf?utm_source=chatgpt.com",
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
          url: "https://www.wlu.ca/future-students/undergraduate/programs/index.html?utm_source=chatgpt.com",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.wlu.ca/academics/faculties/index.html",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://www.wlu.ca/future-students/undergraduate/programs/index.html?utm_source=chatgpt.com",
        },
        {
          title: "学院介绍",
          url: "https://www.wlu.ca/academics/faculties/index.html",
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
          url: "https://www.wlu.ca/future-students/undergraduate/admissions/index.html?utm_source=chatgpt.com",
        },
        {
          title: "Entry Requirements",
          url: "https://www.ouac.on.ca/guide/undergrad-laurier/?utm_source=chatgpt.com",
        },
        {
          title: "Important Dates",
          url: "https://www.wlu.ca/future-students/undergraduate/admissions/dates.html",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://www.wlu.ca/future-students/undergraduate/admissions/index.html?utm_source=chatgpt.com",
        },
        {
          title: "入学要求",
          url: "https://www.ouac.on.ca/guide/undergrad-laurier/?utm_source=chatgpt.com",
        },
        {
          title: "重要日期",
          url: "https://www.wlu.ca/future-students/undergraduate/admissions/dates.html",
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
          url: "https://www.ouac.on.ca/guide/undergrad-guide/?utm_source=chatgpt.com",
        },
        {
          title: "Direct Application",
          url: "https://www.wlu.ca/future-students/undergraduate/admissions/process/how-to-apply.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "安省申请流程（OUAC）",
          url: "https://www.ouac.on.ca/guide/undergrad-guide/?utm_source=chatgpt.com",
        },
        {
          title: "直申通道",
          url: "https://www.wlu.ca/future-students/undergraduate/admissions/process/how-to-apply.html?utm_source=chatgpt.com",
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
          url: "https://students.wlu.ca/registration-and-finances/tuition-and-fees/fees-breakdown/tuition-fees.html?utm_source=chatgpt.com",
        },
        {
          title: "Scholarship Search",
          url: "https://www.wlu.ca/future-students/undergraduate/applicants/international/tuition-and-finances.html?utm_source=chatgpt.com",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://students.wlu.ca/work-leadership-and-volunteering/jobs-on-campus/lwsp/index.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://students.wlu.ca/registration-and-finances/tuition-and-fees/fees-breakdown/tuition-fees.html?utm_source=chatgpt.com",
        },
        {
          title: "奖学金查询",
          url: "https://www.wlu.ca/future-students/undergraduate/applicants/international/tuition-and-finances.html?utm_source=chatgpt.com",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://students.wlu.ca/work-leadership-and-volunteering/jobs-on-campus/lwsp/index.html?utm_source=chatgpt.com",
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
          url: "https://students.wlu.ca/student-life/student-organizations/index.html",
        },
        {
          title: "Athletics & Recreation",
          url: "https://recreation.laurierathletics.com/sports/2022/10/20/sport-club-handbook.aspx?utm_source=chatgpt.com",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://students.wlu.ca/student-life/dining-on-campus/meal-plans.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "社团目录",
          url: "https://students.wlu.ca/student-life/student-organizations/index.html",
        },
        {
          title: "体育与运动",
          url: "https://recreation.laurierathletics.com/sports/2022/10/20/sport-club-handbook.aspx?utm_source=chatgpt.com",
        },
        {
          title: "校园餐饮计划",
          url: "https://students.wlu.ca/student-life/dining-on-campus/meal-plans.html?utm_source=chatgpt.com",
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
          url: "https://www.wlu.ca/future-students/undergraduate/residence/index.html",
        },
        {
          title: "Room Types & Fees",
          url: "https://students.wlu.ca/student-life/residence-and-off-campus-housing/residence/living-in-residence/index.html",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://students.wlu.ca/student-life/residence-and-off-campus-housing/off-campus-initiatives/off-campus-housing/index.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.wlu.ca/future-students/undergraduate/residence/index.html",
        },
        {
          title: "房型与费用",
          url: "https://students.wlu.ca/student-life/residence-and-off-campus-housing/residence/living-in-residence/index.html",
        },
        {
          title: "校外住宿办公室",
          url: "https://students.wlu.ca/student-life/residence-and-off-campus-housing/off-campus-initiatives/off-campus-housing/index.html?utm_source=chatgpt.com",
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
          url: "https://students.wlu.ca/student-life/international-student-support/index.html",
        },
        {
          title: "Working in Canada",
          url: "https://students.wlu.ca/student-life/international-student-support/working-in-canada.html?utm_source=chatgpt.com",
        },
        {
          title: "Study Permits",
          url: "https://students.wlu.ca/student-life/international-student-support/immigration/study-permits.html",
        },
        {
          title: "Health & Wellness",
          url: "https://students.wlu.ca/wellness-and-recreation/health-and-wellness/index.html?utm_source",
        },
      ],
      cn: [
        {
          title: "国际学生支持",
          url: "https://students.wlu.ca/student-life/international-student-support/index.html",
        },
        {
          title: "在加拿大工作",
          url: "https://students.wlu.ca/student-life/international-student-support/working-in-canada.html?utm_source=chatgpt.com",
        },
        {
          title: "学习许可",
          url: "https://students.wlu.ca/student-life/international-student-support/immigration/study-permits.html",
        },
        {
          title: "健康与福祉",
          url: "https://students.wlu.ca/wellness-and-recreation/health-and-wellness/index.html?utm_source",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Centre",
          url: "https://www.chooselaurier.ca/future-students/undergraduate/applicants/international/careers.html?utm_source",
        },
        {
          title: "Co-op Information",
          url: "https://www.wlu.ca/information-for/community-members/employers/co-op/index.html?utm_source",
        },
      ],
      cn: [
        {
          title: "职业中心",
          url: "https://www.chooselaurier.ca/future-students/undergraduate/applicants/international/careers.html?utm_source",
        },
        {
          title: "Co-op 信息",
          url: "https://www.wlu.ca/information-for/community-members/employers/co-op/index.html?utm_source",
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
          url: "https://students.wlu.ca/student-life/residence-and-off-campus-housing/off-campus-initiatives/off-campus-housing/index.html?utm_source",
        },
        {
          title: "Chinese Student Resources",
          url: "https://www.laurieric.ca/about/waterloo/?utm_source",
        },
      ],
      cn: [
        {
          title: "校外住宿",
          url: "https://students.wlu.ca/student-life/residence-and-off-campus-housing/off-campus-initiatives/off-campus-housing/index.html?utm_source",
        },
        {
          title: "华人资源链接",
          url: "https://www.laurieric.ca/about/waterloo/?utm_source",
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
          url: "https://www.wilfridlaurier.ca/future-students/undergraduate/campuses/waterloo.html?utm_source",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://www.wilfridlaurier.ca/future-students/undergraduate/campuses/waterloo.html?utm_source",
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
          title: "2025 Undergraduate Domestic Viewbook",
          description:
            "Core material for 'domestic student application overview + campus introduction' content. Covers three campuses, 100+ programs, admission requirements, Co‑op, application process, and scholarships.",
          url: "https://www.wlu.ca/future-students/undergraduate/assets/documents/laurier-domestic-viewbook.pdf",
        },
        {
          title: "International Viewbook",
          description:
            "Details international tuition guarantee, estimated living costs (including housing and meals), and scholarship types, clearly presenting the admission path and budget information for international students.",
          url: "https://www.wlu.ca/future-students/undergraduate/assets/documents/laurier-international-viewbook.pdf",
        },
        {
          title: "2024/2025 International Student Guide (by WLIC)",
          description:
            "Introduces the international pathway program WLIC (UTP Stage I & II), language policies, program transition paths, and Co‑op experience.",
          url: "https://45682646.fs1.hubspotusercontent-na1.net/hubfs/45682646/Downloads/Participating%20University%20Brochures/laurier-university-brochure.pdf",
        },
      ],
      cn: [
        {
          title: "2025年本科本地招生手册",
          description:
            "面向加拿大本地申请者，涵盖三校区培养方案、100+ 专业介绍、录取要求、Co‑op 项目、申请流程与奖学金信息，是制作“本地生申请全景+校园介绍”类内容的核心素材。",
          url: "https://www.wlu.ca/future-students/undergraduate/assets/documents/laurier-domestic-viewbook.pdf",
        },
        {
          title: "国际学生宣传册",
          description:
            "专为国际生设计，详细说明国际学费保证、生活费估算（包括住宿与膳食）、奖学金种类，清晰呈现国际生入学路径与预算信息。",
          url: "https://www.wlu.ca/future-students/undergraduate/assets/documents/laurier-international-viewbook.pdf",
        },
        {
          title: "2024/2025 国际学生指南 (由WLIC发布)",
          description:
            "介绍国际衔接课程 WLIC（UTP 一、二阶段）、语言政策、专业过渡路径及 Co‑op 体验，适合制作“国际预科 + 成功转入 Laurier”路径视频内容。",
          url: "https://45682646.fs1.hubspotusercontent-na1.net/hubfs/45682646/Downloads/Participating%20University%20Brochures/laurier-university-brochure.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Non‑Tuition Fee Report 2025/26",
          description:
            "Introduces mandatory ancillary fees beyond tuition (student union fees, UPass, health/dental insurance, athletic facility fees, etc.) and lists detailed information on residence, off-campus, and per-item campus fees.",
          url: "https://www.wlu.ca/about/public-accountability/assets/documents/student-fee-reports/2025-26-non-tuition-fee-report.pdf",
        },
        {
          title: "Tuition, Program, and Course Fees 2025/26 (PDF)",
          description:
            "Covers tuition setting strategies, increase limits, and government policy background, providing material for in-depth analysis of the fee system logic and the impact of policy changes.",
          url: "https://www.chooselaurier.ca/about/public-accountability/assets/documents/student-fee-reports/2025-26-tuition-report.pdf",
        },
        {
          title: "Community & Workplace Partnerships – 2022–23 Impact Summary",
          description:
            "Presents data on academic + industry collaborative learning programs (e.g., internships, community service learning) for 2022–23.",
          url: "https://students.wlu.ca/work-leadership-and-volunteering/community-and-workplace-partnerships/assets/documents/cwp-year-in-review-2022-23.pdf",
        },
      ],
      cn: [
        {
          title: "2025/26年度非学费报告",
          description:
            "介绍学费以外的强制性附加费用（学生会费、UPass、健康/牙齿保险、体育设施费等），并列出住校／校外／校园按项收费详细信息。",
          url: "https://www.wlu.ca/about/public-accountability/assets/documents/student-fee-reports/2025-26-non-tuition-fee-report.pdf",
        },
        {
          title: "2025/26年度学费、课程和项目费用 (PDF)",
          description:
            "涵盖学费设置策略、调涨限额与政府政策背景，为解释费用体系逻辑、政府政策变化影响的深度解析提供资料支持。",
          url: "https://www.chooselaurier.ca/about/public-accountability/assets/documents/student-fee-reports/2025-26-tuition-report.pdf",
        },
        {
          title: "社区与工作场所合作 – 2022–23年度影响摘要",
          description:
            "介绍 2022–23 年学术＋行业合作学习项目（如实习、社区服务学习）数据。",
          url: "https://students.wlu.ca/work-leadership-and-volunteering/community-and-workplace-partnerships/assets/documents/cwp-year-in-review-2022-23.pdf",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "Faculty of Music – Viewbook 2025",
          description:
            "New undergraduate music program guide, covering classical, jazz, opera, pop, musical theatre, rap, and other music learning paths; audition/interview admission instructions, flexible course plans, practical learning resources, and admission requirements.",
          url: "https://www.wlu.ca/academics/faculties/faculty-of-music/assets/faculty-of-music-viewbook-2025-web.pdf",
        },
        {
          title: "Historic Academic Calendar 2013/14 (Undergraduate)",
          description:
            "An old version of the complete undergraduate course handbook, covering program introductions, academic regulations, project settings, joint degrees, and elective/minor policies, useful for comparative analysis of program development and historical changes.",
          url: "https://downloads.wlu.ca/downloads/academics/calendars/13-14-sbe-sc-undergraduate-academic-booklet.pdf",
        },
      ],
      cn: [
        {
          title: "音乐学院 – 2025年宣传册",
          description:
            "全新音乐本科课程指南，涵盖古典、爵士、歌剧、流行、音乐剧、说唱等多风格音乐学习路径；面试 / 试演录取说明、灵活课程计划、实践型学习资源、录取条件说明等。",
          url: "https://www.wlu.ca/academics/faculties/faculty-of-music/assets/faculty-of-music-viewbook-2025-web.pdf",
        },
        {
          title: "历史学术日历 2013/14 (本科)",
          description:
            "旧版完整本科课程手册，涵盖各学院专业介绍、学术条款、项目设置、联合学位、选修与辅修政策等，有助于对比分析专业发展与变革历史。",
          url: "https://downloads.wlu.ca/downloads/academics/calendars/13-14-sbe-sc-undergraduate-academic-booklet.pdf",
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
      title: "Wilfrid Laurier University",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "💛 About Wilfrid Laurier University",
      aboutParagraph1:
        "Wilfrid Laurier University is a public university in Waterloo, Ontario, Canada. It has a second campus in Brantford and offices in Kitchener, Toronto, and Chongqing, China. It is named in honour of Sir Wilfrid Laurier, the seventh Prime Minister of Canada.",
      aboutParagraph2:
        "Laurier is known for its strong sense of community, student satisfaction, and a focus on experiential learning. It offers a wide range of undergraduate and graduate programs in arts, science, business, music, and social work.",
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
      title: "威尔弗里德·劳里埃大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "💛 关于威尔弗里德·劳里埃大学",
      aboutParagraph1:
        "威尔弗里德·劳里埃大学是位于加拿大安大略省滑铁卢市的一所公立大学。它在布兰特福德设有第二个校区，并在基奇纳、多伦多和中国重庆设有办事处。该校以纪念加拿大第七任总理威尔弗里德·劳里埃爵士而命名。",
      aboutParagraph2:
        "劳里埃大学以其强烈的社区感、学生满意度和对体验式学习的关注而闻名。它在文科、理科、商科、音乐和社会工作领域提供广泛的本科和研究生课程。",
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

const LaurierUniversityPage = () => {
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
                  src="/logos/wilfred.png"
                  alt="Wilfrid Laurier University Logo"
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
                              📍 75 University Ave W, Waterloo, ON N2L 3C5,
                              Canada
                              <br />
                              📞 (519) 884-0710
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.wlu.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.wlu.ca
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

export default LaurierUniversityPage;
