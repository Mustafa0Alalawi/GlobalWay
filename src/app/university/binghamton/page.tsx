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
          url: "https://www.topuniversities.com/universities/binghamton-university-suny",
        },
        {
          title: "Campus Map",
          url: "https://www.binghamton.edu/maps/index.html",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/binghamton-university-suny",
        },
        {
          title: "校区地图",
          url: "https://www.binghamton.edu/maps/index.html",
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
          url: "https://www.binghamton.edu/academics/programs/index.html",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.binghamton.edu/academics/schools.html",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://www.binghamton.edu/academics/programs/index.html",
        },
        {
          title: "学院介绍",
          url: "https://www.binghamton.edu/academics/schools.html",
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
          url: "https://www.binghamton.edu/admissions/undergraduate/index.html",
        },
        {
          title: "Entry Requirements",
          url: "https://www.binghamton.edu/admissions/undergraduate/apply/freshman/index.html",
        },
        {
          title: "Important Dates",
          url: "https://www.binghamton.edu/admissions/undergraduate/new-students/fall/timeline.html",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://www.binghamton.edu/admissions/undergraduate/index.html",
        },
        {
          title: "入学要求",
          url: "https://www.binghamton.edu/admissions/undergraduate/apply/freshman/index.html",
        },
        {
          title: "重要日期",
          url: "https://www.binghamton.edu/admissions/undergraduate/new-students/fall/timeline.html",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "Common App & SUNY App Process",
          url: "https://www.binghamton.edu/admissions/undergraduate/apply/index.html",
        },
      ],
      cn: [
        {
          title: "Common App 与 SUNY 申请流程",
          url: "https://www.binghamton.edu/admissions/undergraduate/apply/index.html",
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
          url: "https://www.binghamton.edu/student-accounts/tuition-fees/tuition-semester/index.html",
        },
        {
          title: "Scholarship Search",
          url: "https://www.binghamton.edu/financial-aid/types-of-aid/scholarships/index.html",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://www.binghamton.edu/financial-aid/types-of-aid/work-study.html",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://www.binghamton.edu/student-accounts/tuition-fees/tuition-semester/index.html",
        },
        {
          title: "奖学金查询",
          url: "https://www.binghamton.edu/financial-aid/types-of-aid/scholarships/index.html",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://www.binghamton.edu/financial-aid/types-of-aid/work-study.html",
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
          url: "https://www.binghamton.edu/admissions/undergraduate/life/clubs.html",
        },
        {
          title: "Athletics & Recreation",
          url: "https://www.binghamton.edu/admissions/undergraduate/life/health-fitness.html",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.binghamton.edu/services/auxiliary/dining/",
        },
      ],
      cn: [
        {
          title: "社团目录",
          url: "https://www.binghamton.edu/admissions/undergraduate/life/clubs.html",
        },
        {
          title: "体育与运动",
          url: "https://www.binghamton.edu/admissions/undergraduate/life/health-fitness.html",
        },
        {
          title: "校园餐饮计划",
          url: "https://www.binghamton.edu/services/auxiliary/dining/",
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
          url: "https://www.binghamton.edu/residential-life/housing/index.html",
        },
        {
          title: "Room Types & Fees (First Year)",
          url: "https://www.binghamton.edu/residential-life/housing/newstudents/first-year.html",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.binghamton.edu/occ/housing/index.html",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.binghamton.edu/residential-life/housing/index.html",
        },
        {
          title: "房型与费用（大一）",
          url: "https://www.binghamton.edu/residential-life/housing/newstudents/first-year.html",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.binghamton.edu/occ/housing/index.html",
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
          url: "https://www.binghamton.edu/international/student-scholar-services/index.html",
        },
        {
          title: "Health & Wellness",
          url: "https://www.binghamton.edu/health/index.html",
        },
      ],
      cn: [
        {
          title: "国际学生服务",
          url: "https://www.binghamton.edu/international/student-scholar-services/index.html",
        },
        {
          title: "健康与心理支持",
          url: "https://www.binghamton.edu/health/index.html",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Centre Home",
          url: "https://www.binghamton.edu/ccpd/index.html",
        },
        {
          title: "Internship Search",
          url: "https://careertools.binghamton.edu/jobs/category/internship/",
        },
        {
          title: "Alumni Network",
          url: "https://www.binghamton.edu/alumni/index.html",
        },
      ],
      cn: [
        {
          title: "职业中心主页",
          url: "https://www.binghamton.edu/ccpd/index.html",
        },
        {
          title: "实习查询",
          url: "https://careertools.binghamton.edu/jobs/category/internship/",
        },
        {
          title: "校友网络",
          url: "https://www.binghamton.edu/alumni/index.html",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Getting to Binghamton",
          url: "https://www.binghamton.edu/international/student-scholar-services/new-students/gettingtobing.html",
        },
        {
          title: "Off-Campus Housing",
          url: "https://www.binghamton.edu/occ/housing/index.html",
        },
        {
          title: "Emergency Response Plan",
          url: "https://www.binghamton.edu/emergency/emergency-response-plan/annex-21.html",
        },
        {
          title: "Travel to Binghamton (Chinese)",
          url: "https://www.binghamton.edu/international/student-scholar-services/new-students/travel-to-bing-1.html",
        },
      ],
      cn: [
        {
          title: "如何抵达宾汉姆顿",
          url: "https://www.binghamton.edu/international/student-scholar-services/new-students/gettingtobing.html",
        },
        {
          title: "校外住宿",
          url: "https://www.binghamton.edu/occ/housing/index.html",
        },
        {
          title: "应急响应计划",
          url: "https://www.binghamton.edu/emergency/emergency-response-plan/annex-21.html",
        },
        {
          title: "前往宾汉姆顿（中文）",
          url: "https://www.binghamton.edu/international/student-scholar-services/new-students/travel-to-bing-1.html",
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
          url: "https://www.binghamton.edu/admissions/undergraduate/visit/tour/index.html",
        },
        {
          title: "Virtual Campus VR",
          url: "https://www.binghamton.edu/admissions/undergraduate/visit/tour/campus360.html",
        },
        {
          title: "Social Media Guidelines",
          url: "https://www.binghamton.edu/communications-and-marketing/media-public-relations/social-media/guidelines.html",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://www.binghamton.edu/admissions/undergraduate/visit/tour/index.html",
        },
        {
          title: "虚拟校园 VR",
          url: "https://www.binghamton.edu/admissions/undergraduate/visit/tour/campus360.html",
        },
        {
          title: "社交媒体指南",
          url: "https://www.binghamton.edu/communications-and-marketing/media-public-relations/social-media/guidelines.html",
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
          title: "College Link Application for Admission",
          description:
            "Application for the 'College Link' program for students with advanced college credits from high school.",
          url: "https://www.binghamton.edu/admissions/undergraduate/pdf/college-link-application.pdf",
        },
        {
          title: "Undergraduate Re-Enrollment Guidelines",
          description:
            "Details the process for applying for re-enrollment after a leave of absence of three semesters.",
          url: "https://www.binghamton.edu/admissions/undergraduate/pdf/reenrollment_guidelines.pdf",
        },
        {
          title: "Binghamton By the Book (2025 Edition)",
          description:
            "President's annual report compilation, showing admission data, SAT/GPA requirements, and enrollment trends.",
          url: "https://www.binghamton.edu/president/docs/by_the_book_2025.pdf",
        },
        {
          title: "Common Data Set 2024–2025",
          description:
            "Standardized admission data including applicant/admitted/enrolled numbers, SAT/GPA distributions, and evaluation criteria.",
          url: "https://www.binghamton.edu/offices/oir/upload_data/cds20242025p.pdf",
        },
      ],
      cn: [
        {
          title: "大学链接项目申请表",
          description:
            "适用于在高中阶段完成大学先修课程并申请入学的学生，注明申请流程与成绩/推荐信要求。",
          url: "https://www.binghamton.edu/admissions/undergraduate/pdf/college-link-application.pdf",
        },
        {
          title: "本科生重新入学指南",
          description:
            "详细说明休学三学期后申请重新入学的流程、所需材料、各学院政策及可能的财政援助调整。",
          url: "https://www.binghamton.edu/admissions/undergraduate/pdf/reenrollment_guidelines.pdf",
        },
        {
          title: "宾汉姆顿大学手册 (2025年版)",
          description:
            "校长年度报告汇编文件，展示招生数据、录取人数、SAT/GPA要求、学生保留率及录取趋势。",
          url: "https://www.binghamton.edu/president/docs/by_the_book_2025.pdf",
        },
        {
          title: "通用数据集 2024–2025",
          description:
            "标准化招生资料，列出申请人/录取人/注册人数据，SAT/GPA分布，高中必修课程要求及评价指标。",
          url: "https://www.binghamton.edu/offices/oir/upload_data/cds20242025p.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "J-1 Exchange Visitor Orientation Guide",
          description:
            "Official guide for J-1 exchange visitors detailing check-in, immigration, insurance, and campus safety.",
          url: "https://www.binghamton.edu/international/student-scholar-services/faculty/pdf/international_scholar_orientation_guide.pdf",
        },
        {
          title: "A New Student’s Guide to Off-Campus Living",
          description:
            "Practical guide for undergraduates living off-campus, covering location, rent, roommates, and transportation.",
          url: "https://www.binghamton.edu/occ/pdfs/newstudentguide.pdf",
        },
        {
          title: "Housing Accommodation Request Student Form",
          description:
            "Application form for students with special housing needs (e.g., accessibility, quiet environment).",
          url: "https://www.binghamton.edu/ssd/policies/studenthousingformfillable.pdf",
        },
      ],
      cn: [
        {
          title: "J-1 交换访问学者迎新指南",
          description:
            "官方针对 J-1 项目访问学者发布，详细介绍报到流程、入境指南、保险服务、学生身份管理及校园安全信息。",
          url: "https://www.binghamton.edu/international/student-scholar-services/faculty/pdf/international_scholar_orientation_guide.pdf",
        },
        {
          title: "新生校外住宿指南",
          description:
            "本科新生离校后租房实用手册，详解选址方式、租金水平、室友配对、交通选项与租赁注意事项。",
          url: "https://www.binghamton.edu/occ/pdfs/newstudentguide.pdf",
        },
        {
          title: "住宿特殊需求申请表",
          description:
            "提供给有特殊住宿需求（如无障碍、安静环境等）学生的申请表格。",
          url: "https://www.binghamton.edu/ssd/policies/studenthousingformfillable.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Undergraduate Tuition and Fee Rates: Fall 2024",
          description:
            "Lists in-state and out-of-state/international tuition and mandatory fees by credit hour.",
          url: "https://www.binghamton.edu/student-accounts/tuition-fees/tuition-semester/undergradtuitionfall2024.pdf",
        },
        {
          title: "Undergraduate Tuition and Fee Rates: Summer 2024",
          description:
            "Covers per-credit tuition rates for undergraduate and graduate summer courses.",
          url: "https://www.binghamton.edu/student-accounts/tuition-fees/tuition-semester/undergradtuitionsummer2024.pdf",
        },
        {
          title: "Estimated Costs for Exchange Students (2025–26)",
          description:
            "Budget breakdown for exchange students, including tuition, housing, meals, insurance, and living expenses.",
          url: "https://www.binghamton.edu/offices/iegi/pdf/undergraduate-exchange-tuition-fees.pdf",
        },
        {
          title: "Career Guide 2023–24 (Interactive PDF)",
          description:
            "A comprehensive university-wide guide covering resumes, cover letters, interviews, career planning, and networking.",
          url: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/60/2023/08/Career-Guide-2023%E2%80%9324-interactive.pdf",
        },
        {
          title: "MPA Internship Handbook 2025–26",
          description:
            "Paid internship handbook for Public Administration students, outlining objectives, schedule, and credit requirements.",
          url: "https://www.binghamton.edu/public-administration-and-policy/academics/internships/2526mpainternhandbook.pdf",
        },
      ],
      cn: [
        {
          title: "2024年秋季本科学费和费用标准",
          description:
            "列出不同学分下的本地与州外/国际本科生学费和各种强制性杂费。",
          url: "https://www.binghamton.edu/student-accounts/tuition-fees/tuition-semester/undergradtuitionfall2024.pdf",
        },
        {
          title: "2024年夏季本科学费和费用标准",
          description:
            "涵盖夏季学期按学分计费的学费表，包括本科生和研究生夏季课程的收费标准。",
          url: "https://www.binghamton.edu/student-accounts/tuition-fees/tuition-semester/undergradtuitionsummer2024.pdf",
        },
        {
          title: "交换生预估费用 (2025–26)",
          description:
            "列出交换生每学期学费、住宿与餐饮计划、健康保险费、课本及生活费用估算等总预算明细。",
          url: "https://www.binghamton.edu/offices/iegi/pdf/undergraduate-exchange-tuition-fees.pdf",
        },
        {
          title: "2023–24 职业指南 (互动PDF)",
          description:
            "由 Fleishman 职业发展中心发布，涵盖简历、求职信、面试、职业探索、实习申请与网络建设。",
          url: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/60/2023/08/Career-Guide-2023%E2%80%9324-interactive.pdf",
        },
        {
          title: "MPA 实习手册 2025–26",
          description:
            "公共管理专业学生的带薪实习手册，提供实习目标、时间安排、学分要求与注册流程。",
          url: "https://www.binghamton.edu/public-administration-and-policy/academics/internships/2526mpainternhandbook.pdf",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "Chemistry Undergraduate Student Handbook (2023–24)",
          description:
            "Includes curriculum, 4+1 BS/MS program structure, and application details.",
          url: "https://www.binghamton.edu/chemistry/undergraduate/undergradstudenthandbook-2023-24-final-1.pdf",
        },
        {
          title: "Graduate Program Handbook Template",
          description:
            "Default handbook template for graduate programs, covering program structure, requirements, and policies.",
          url: "https://www.binghamton.edu/grad-school/pdf/graduate_program_handbook_template.pdf",
        },
        {
          title: "Philosophy Graduate Student Handbook (2024–25)",
          description:
            "Covers curriculum, GPA requirements, writing milestones, and appeal procedures for philosophy grad students.",
          url: "https://www.binghamton.edu/philosophy/documents/spel-grad-handbook.pdf",
        },
        {
          title: "SSIE Graduate Student Handbook (2022)",
          description:
            "Handbook for Systems Science and Industrial Engineering graduate students.",
          url: "https://www.binghamton.edu/ssie/graduate/ssie_graduate_handbook_042522.pdf",
        },
      ],
      cn: [
        {
          title: "化学系本科生手册 (2023–24)",
          description:
            "化学系本科手册，包含课程体系、4＋1 本/硕连读方案结构与申请流程、以及本/硕衔接注意事项。",
          url: "https://www.binghamton.edu/chemistry/undergraduate/undergradstudenthandbook-2023-24-final-1.pdf",
        },
        {
          title: "研究生项目手册模板",
          description:
            "研究生项目默认手册模板，覆盖专业结构、课程要求、论文流程和学术政策。",
          url: "https://www.binghamton.edu/grad-school/pdf/graduate_program_handbook_template.pdf",
        },
        {
          title: "哲学研究生手册 (2024–25)",
          description:
            "哲学系研究生手册，涵盖课程设置、GPA 要求、写作里程碑与申诉流程。",
          url: "https://www.binghamton.edu/philosophy/documents/spel-grad-handbook.pdf",
        },
        {
          title: "SSIE 研究生手册 (2022)",
          description:
            "系统科学与工业工程 (SSIE) 研究生手册，内容包括学术要求、课程途径、政策规定与资源说明。",
          url: "https://www.binghamton.edu/ssie/graduate/ssie_graduate_handbook_042522.pdf",
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
      title: "Binghamton University",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🐻 About Binghamton University",
      aboutParagraph1:
        "Binghamton University, part of the State University of New York (SUNY) system, is a premier public research university. It is known for its rigorous academic programs, vibrant campus life, and commitment to providing an accessible, high-quality education.",
      aboutParagraph2:
        "Recognized as a 'Public Ivy,' Binghamton offers a broad range of undergraduate and graduate degrees across six schools. It attracts high-achieving students from around the world and is noted for its strong research output and value.",
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
      title: "宾汉姆顿大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🐻 关于宾汉姆顿大学",
      aboutParagraph1:
        "宾汉姆顿大学是纽约州立大学（SUNY）系统的一部分，是一所顶尖的公立研究型大学。它以其严谨的学术课程、充满活力的校园生活以及致力于提供平价优质教育而闻名。",
      aboutParagraph2:
        "宾汉姆顿大学被誉为“公立常春藤”，通过六个学院提供广泛的本科和研究生学位。它吸引了来自世界各地的高成就学生，并以其强大的科研产出和价值而著称。",
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

const BinghamtonUniversityPage = () => {
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
                  src="/logos/binghamton.png"
                  alt="Binghamton University Logo"
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
                              📍 4400 Vestal Pkwy E, Binghamton, NY 13902, USA
                              <br />
                              📞 (607) 777-2000
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.binghamton.edu/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.binghamton.edu
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

export default BinghamtonUniversityPage;
