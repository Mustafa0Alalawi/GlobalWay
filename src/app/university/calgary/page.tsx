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
          url: "https://www.topuniversities.com/universities/university-calgary?utm_source=chatgpt.com",
        },
        {
          title: "Campus Map",
          url: "https://www.ucalgary.ca/about-ucalgary/our-campuses/campus-maps-and-room-finder?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/university-calgary?utm_source=chatgpt.com",
        },
        {
          title: "校区地图",
          url: "https://www.ucalgary.ca/about-ucalgary/our-campuses/campus-maps-and-room-finder?utm_source=chatgpt.com",
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
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/15/viewbook-international.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Undergraduate Programs",
          url: "https://www.ucalgary.ca/future-students/undergraduate/programs?utm_source=chatgpt.com",
        },
        {
          title: "Faculty Introduction",
          url: "https://ucalgary.ca/about-ucalgary/our-organization/faculties?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/15/viewbook-international.pdf?utm_source=chatgpt.com",
        },
        {
          title: "本科专业",
          url: "https://www.ucalgary.ca/future-students/undergraduate/programs?utm_source=chatgpt.com",
        },
        {
          title: "学院介绍",
          url: "https://ucalgary.ca/about-ucalgary/our-organization/faculties?utm_source=chatgpt.com",
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
          url: "https://www.ucalgary.ca/future-students/undergraduate/admissions",
        },
        {
          title: "Entry Requirements",
          url: "https://www.ucalgary.ca/future-students/undergraduate/admissions/requirements",
        },
        {
          title: "Important Dates",
          url: "https://www.ucalgary.ca/future-students/undergraduate/admissions/dates",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://www.ucalgary.ca/future-students/undergraduate/admissions",
        },
        {
          title: "入学要求",
          url: "https://www.ucalgary.ca/future-students/undergraduate/admissions/requirements",
        },
        {
          title: "重要日期",
          url: "https://www.ucalgary.ca/future-students/undergraduate/admissions/dates",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "Direct Application",
          url: "https://ucalgary.ca/future-students/undergraduate/admissions/how-to-apply?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "直接申请",
          url: "https://ucalgary.ca/future-students/undergraduate/admissions/how-to-apply?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "cost-funding",
    links: {
      en: [
        {
          title: "Tuition Fees (International)",
          url: "https://conted.ucalgary.ca/international/info/fees.jsp?utm_source=chatgpt.com",
        },
        {
          title: "Tuition Fees (Archive)",
          url: "https://www.ucalgary.ca/pubs/calendar/archives/2023/p-1-1.html?utm_source=chatgpt.com#gsc.tab=0",
        },
        {
          title: "Scholarship Search",
          url: "https://ucalgary.ca/registrar/finances/awards",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://www.ucalgary.ca/student-services/iss/settling-calgary/finding-work/campus-jobs?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "学费表（国际生）",
          url: "https://conted.ucalgary.ca/international/info/fees.jsp?utm_source=chatgpt.com",
        },
        {
          title: "学费表（存档）",
          url: "https://www.ucalgary.ca/pubs/calendar/archives/2023/p-1-1.html?utm_source=chatgpt.com#gsc.tab=0",
        },
        {
          title: "奖学金查询",
          url: "https://ucalgary.ca/registrar/finances/awards",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://www.ucalgary.ca/student-services/iss/settling-calgary/finding-work/campus-jobs?utm_source=chatgpt.com",
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
          url: "https://suuofc.campuslabs.ca/engage/organizations",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.ucalgary.ca/ancillary/unicard/use-card/meal-plan",
        },
      ],
      cn: [
        {
          title: "社团目录",
          url: "https://suuofc.campuslabs.ca/engage/organizations",
        },
        {
          title: "校园餐饮计划",
          url: "https://www.ucalgary.ca/ancillary/unicard/use-card/meal-plan",
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
          url: "https://www.ucalgary.ca/ancillary/residence/live-with-us",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.ucalgary.ca/ancillary/residence/live-us/places-live/rates-2025-2026?utm_source=chatgpt.com",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.ucalgary.ca/student-services/iss/settling-calgary/housing",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.ucalgary.ca/ancillary/residence/live-with-us",
        },
        {
          title: "房型与费用",
          url: "https://www.ucalgary.ca/ancillary/residence/live-us/places-live/rates-2025-2026?utm_source=chatgpt.com",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.ucalgary.ca/student-services/iss/settling-calgary/housing",
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
          url: "https://www.ucalgary.ca/student-services/iss/iss",
        },
        {
          title: "Study Permits",
          url: "https://www.ucalgary.ca/student-services/iss/immigration/study-permits",
        },
        {
          title: "Post-Graduation Work Permit",
          url: "https://www.ucalgary.ca/student-services/iss/immigration/work-permits/post-graduation-work-permit",
        },
        {
          title: "Health & Wellness",
          url: "https://www.ucalgary.ca/sustainability/our-sustainable-campus/health-and-wellbeing",
        },
      ],
      cn: [
        {
          title: "国际学生服务",
          url: "https://www.ucalgary.ca/student-services/iss/iss",
        },
        {
          title: "学习许可",
          url: "https://www.ucalgary.ca/student-services/iss/immigration/study-permits",
        },
        {
          title: "毕业后工作许可",
          url: "https://www.ucalgary.ca/student-services/iss/immigration/work-permits/post-graduation-work-permit",
        },
        {
          title: "健康与福祉",
          url: "https://www.ucalgary.ca/sustainability/our-sustainable-campus/health-and-wellbeing",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Services for Students",
          url: "https://live-ucalgary.ucalgary.ca/student-services/careers/students?utm_source=chatgpt.com",
        },
        {
          title: "Co-op & Internships",
          url: "https://live-ucalgary.ucalgary.ca/student-services/careers/students/co-op-and-internships?utm_source=chatgpt.com",
        },
        {
          title: "Alumni Career Services",
          url: "https://live-ucalgary.ucalgary.ca/student-services/careers/alumni?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "学生职业服务",
          url: "https://live-ucalgary.ucalgary.ca/student-services/careers/students?utm_source=chatgpt.com",
        },
        {
          title: "合作教育与实习",
          url: "https://live-ucalgary.ucalgary.ca/student-services/careers/students/co-op-and-internships?utm_source=chatgpt.com",
        },
        {
          title: "校友职业服务",
          url: "https://live-ucalgary.ucalgary.ca/student-services/careers/alumni?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Your Guide to Living On Campus",
          url: "https://news.ucalgary.ca/news/your-guide-living-campus?utm_source=chatgpt.com",
        },
        {
          title: "Getting Around Calgary",
          url: "https://www.ucalgary.ca/student-services/iss/settling-calgary/getting-around",
        },
        {
          title: "Severe Weather Plan",
          url: "https://www.ucalgary.ca/risk/emergency-management/plans-procedures/emergency-plans/severe-weather",
        },
        {
          title: "Report a Concern/Incident",
          url: "https://www.ucalgary.ca/risk/environment-health-safety/report-ehs-concernincident",
        },
      ],
      cn: [
        {
          title: "校园生活指南",
          url: "https://news.ucalgary.ca/news/your-guide-living-campus?utm_source=chatgpt.com",
        },
        {
          title: "卡尔加里交通",
          url: "https://www.ucalgary.ca/student-services/iss/settling-calgary/getting-around",
        },
        {
          title: "恶劣天气计划",
          url: "https://www.ucalgary.ca/risk/emergency-management/plans-procedures/emergency-plans/severe-weather",
        },
        {
          title: "报告问题/事件",
          url: "https://www.ucalgary.ca/risk/environment-health-safety/report-ehs-concernincident",
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
          url: "https://discover.ucalgary.ca/portal/undergraduate_tours",
        },
        {
          title: "Virtual Campus VR",
          url: "https://discover.ucalgary.ca/portal/undergraduate_tours?utm_source=chatgpt.com",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/c/UcalgaryCa/about?utm_source=chatgpt.com",
        },
        {
          title: "Official Instagram",
          url: "https://www.instagram.com/ucalgary/",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://discover.ucalgary.ca/portal/undergraduate_tours",
        },
        {
          title: "虚拟校园 VR",
          url: "https://discover.ucalgary.ca/portal/undergraduate_tours?utm_source=chatgpt.com",
        },
        {
          title: "官方 YouTube",
          url: "https://www.youtube.com/c/UcalgaryCa/about?utm_source=chatgpt.com",
        },
        { title: "官方 Instagram", url: "https://www.instagram.com/ucalgary/" },
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
          title: "Canadian Undergraduate Viewbook (Domestic)",
          description:
            "Undergraduate recruitment guide for Canadian students, including program overviews, admission requirements, scholarships, and campus resources.",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/15/viewbook-domestic.pdf",
        },
        {
          title: "Indigenous Viewbook (Fall 2025)",
          description:
            "Recruitment material for Indigenous applicants, highlighting support strategies and cultural community facilities.",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/15/viewbook-indigenous.pdf",
        },
        {
          title: "Transfer Viewbook (Fall 2025 Transfer Applicants)",
          description:
            "For transfer students, detailing credit transfer policies, application process, and course matching rules.",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/15/viewbook-transfer.pdf",
        },
      ],
      cn: [
        {
          title: "加拿大本科招生手册 (本地生)",
          description:
            "面向加拿大学生的本科招生指南，含专业概览、录取要求、奖学金、校园资源、申请流程与重要日期。",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/15/viewbook-domestic.pdf",
        },
        {
          title: "原住民学生手册 (2025年秋季)",
          description:
            "专供原住民申请者的招生资料，重点展示支持策略、文化社区设施、奖学金资源与录取路径透明度。",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/15/viewbook-indigenous.pdf",
        },
        {
          title: "转学生手册 (2025年秋季)",
          description:
            "针对已有学分转学学生，详细说明接受学分政策、转学流程、课程匹配规则及成功案例。",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/15/viewbook-transfer.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "New Student Orientation 2024",
          description:
            "A two-day orientation schedule including faculty groups, check-in times, welcome ceremonies, and social events.",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/81/Schedule-2024%20New%20Student%20Orientation%20August%2029%20and%2030.pdf",
        },
        {
          title: "New-to-Calgary Student Checklist (PDF)",
          description:
            "Checklist from International Student Services covering tasks before and after arrival.",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/69/New_International_Student_Checklist_Updated_Fall25.pdf",
        },
        {
          title: "Residence Procedures and Community Standards",
          description:
            "Details on-campus housing policies, community conduct standards, and appeal processes.",
          url: "https://www.ucalgary.ca/ancillary/sites/default/files/teams/11/Community_Standards_2021-2022.pdf",
        },
      ],
      cn: [
        {
          title: "2024年新生迎新",
          description:
            "包含为期两天的迎新详细活动安排，包括院系分组、报到时间、迎新仪式、社交活动等。",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/81/Schedule-2024%20New%20Student%20Orientation%20August%2029%20and%2030.pdf",
        },
        {
          title: "初到卡尔加里学生清单 (PDF)",
          description:
            "由国际学生服务发布，涵盖到达前后需完成的事项，如注册预到课程、报到领卡等。",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/69/New_International_Student_Checklist_Updated_Fall25.pdf",
        },
        {
          title: "宿舍程序与社区标准",
          description: "详细阐述校内宿舍政策、社区行为规范与申诉流程。",
          url: "https://www.ucalgary.ca/ancillary/sites/default/files/teams/11/Community_Standards_2021-2022.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "2025–26 Undergraduate Tuition Outlook",
          description:
            "University's forecast for tuition and service fee adjustments in the coming academic years.",
          url: "https://www.ucalgary.ca/provost/sites/default/files/teams/1/2025-26%20Tuition%20Outlook_0.pdf",
        },
        {
          title: "Graduate Tuition and General Fees",
          description:
            "Details the tuition structure for graduate students (Master's/PhD).",
          url: "https://www.ucalgary.ca/sites/default/files/teams/14/Graduate_Tuition_and_Fees-2020_2021.pdf",
        },
        {
          title: "Co‑op Student Handbook – Haskayne School of Business",
          description:
            "Covers the entire Co-op program process, from accepting a work term to completing the final evaluation.",
          url: "https://haskayne.ucalgary.ca/sites/default/files/teams/2/3c.%20Co-op%20Student%20Handbook_2024_v1.2.pdf?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "2025–26 本科生学费展望",
          description: "由校方预告未来多个学年的学费和服务费调整比例。",
          url: "https://www.ucalgary.ca/provost/sites/default/files/teams/1/2025-26%20Tuition%20Outlook_0.pdf",
        },
        {
          title: "研究生学费和一般费用",
          description: "详细列出研究生（硕士/博士）学费结构。",
          url: "https://www.ucalgary.ca/sites/default/files/teams/14/Graduate_Tuition_and_Fees-2020_2021.pdf",
        },
        {
          title: "Co-op 学生手册 – Haskayne 商学院",
          description:
            "涵盖 Co‑op 项目全流程——从接收工期、工作术语注册、职业辅导到完成终期评估。",
          url: "https://haskayne.ucalgary.ca/sites/default/files/teams/2/3c.%20Co-op%20Student%20Handbook_2024_v1.2.pdf?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "Dance Undergraduate Handbook (2024–2025)",
          description:
            "For undergraduate dance majors, includes curriculum, performance schedules, and academic requirements.",
          url: "https://arts.ucalgary.ca/sites/default/files/teams/26/2024-25%20DANCE%20UG%20Student%20Handbook.pdf",
        },
        {
          title: "Art & Art History Undergraduate Handbook (2024–2025)",
          description:
            "Guides students in Art & Art History through coursework, fieldwork, and degree requirements.",
          url: "https://arts.ucalgary.ca/sites/default/files/teams/36/DAAH%20Undergraduate%20Student%20Handbook.pdf",
        },
        {
          title: "Philosophy Graduate Handbook (2021)",
          description:
            "Graduate program guide, including Master's/PhD curriculum and course selection.",
          url: "https://arts.ucalgary.ca/sites/default/files/teams/29/Handbook%20%282024%29.pdf",
        },
      ],
      cn: [
        {
          title: "舞蹈本科生手册 (2024–2025)",
          description:
            "面向舞蹈专业本科生，包含课程设置、实践演出安排、设施使用、学术要求和专业资源。",
          url: "https://arts.ucalgary.ca/sites/default/files/teams/26/2024-25%20DANCE%20UG%20Student%20Handbook.pdf",
        },
        {
          title: "艺术与艺术史本科生手册 (2024–2025)",
          description:
            "指导学生如何在艺术与艺术史专业中完成课程、参与实地学习、完成学位要求及融入校园文化。",
          url: "https://arts.ucalgary.ca/sites/default/files/teams/36/DAAH%20Undergraduate%20Student%20Handbook.pdf",
        },
        {
          title: "哲学研究生手册 (2021)",
          description:
            "研究生项目指南，包括硕士／博士课程结构、课程选择流程、资格考试及学术规范。",
          url: "https://arts.ucalgary.ca/sites/default/files/teams/29/Handbook%20%282024%29.pdf",
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
      title: "University of Calgary",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🤠 About University of Calgary",
      aboutParagraph1:
        "The University of Calgary is a public research university located in Calgary, Alberta, Canada. Founded in 1966, it is one of Canada's top research universities and a member of the U15 Group of Canadian Research Universities.",
      aboutParagraph2:
        "The university offers 250+ programs in post-secondary education and is known for its engineering, business, and kinesiology programs. It has a strong entrepreneurial spirit and a commitment to community engagement.",
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
      title: "卡尔加里大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🤠 关于卡尔加里大学",
      aboutParagraph1:
        "卡尔加里大学是位于加拿大阿尔伯塔省卡尔加里市的一所公立研究型大学。它成立于1966年，是加拿大顶尖的研究型大学之一，也是加拿大U15研究型大学联盟的成员。",
      aboutParagraph2:
        "该大学提供250多个高等教育课程，以其工程、商业和运动机能学课程而闻名。它拥有强烈的创业精神和对社区参与的承诺。",
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

const CalgaryUniversityPage = () => {
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
                  src="/logos/calgary.png"
                  alt="University of Calgary Logo"
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
                              📍 2500 University Dr NW, Calgary, AB T2N 1N4,
                              Canada
                              <br />
                              📞 (403) 220-5110
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.ucalgary.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.ucalgary.ca
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

export default CalgaryUniversityPage;
