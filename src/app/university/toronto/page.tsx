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
  | "orientation_and_planning"
  | "housing_and_finance"
  | "career_resources"
  | "department_handbooks"
  | "why-ubc"
  | "programs-faculties"
  | "admissions-deadlines"
  | "costs-scholarships"
  | "campus-life-snapshot"
  | "contact-info";

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
          title: "QS Ranking & Facts",
          url: "https://www.ubc.ca/about/facts.html",
        },
        { title: "Campus Map", url: "https://www.ubc.ca/about/maps.html" },
      ],
      cn: [
        { title: "QS 排名与事实", url: "https://www.ubc.ca/about/facts.html" },
        { title: "校区地图", url: "https://www.ubc.ca/about/maps.html" },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Programs List / Viewbook",
          url: "https://you.ubc.ca/programs/#mode=by-topic&viewMode=list",
        },
        {
          title: "Faculties & Schools Directory",
          url: "https://www.ubc.ca/our-campuses/vancouver/directories/faculties-schools.html",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://you.ubc.ca/programs/#mode=by-topic&viewMode=list",
        },
        {
          title: "学院与学部介绍",
          url: "https://www.ubc.ca/our-campuses/vancouver/directories/faculties-schools.html",
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
          url: "https://account.you.ubc.ca/s/apply-ubc",
        },
        {
          title: "Entry Requirements",
          url: "https://you.ubc.ca/applying-ubc/requirements/",
        },
        {
          title: "Important Dates",
          url: "https://you.ubc.ca/applying-ubc/dates-deadlines/",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://account.you.ubc.ca/s/apply-ubc",
        },
        {
          title: "入学要求",
          url: "https://you.ubc.ca/applying-ubc/requirements/",
        },
        {
          title: "重要日期",
          url: "https://you.ubc.ca/applying-ubc/dates-deadlines/",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "How to Apply",
          url: "https://you.ubc.ca/applying-ubc/how-to-apply/application/",
        },
        {
          title: "Common App Process",
          url: "https://www.commonapp.org/apply/first-year-students",
        },
      ],
      cn: [
        {
          title: "如何申请",
          url: "https://you.ubc.ca/applying-ubc/how-to-apply/application/",
        },
        {
          title: "Common App 流程",
          url: "https://www.commonapp.org/apply/first-year-students",
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
          url: "https://students.ubc.ca/finances/tuition-fees/undergraduate-tuition-fees/",
        },
        {
          title: "Scholarship Search",
          url: "https://students.ubc.ca/finances/awards-scholarships-bursaries/",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://students.ubc.ca/career/ubc-experiences/campus-jobs/",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://students.ubc.ca/finances/tuition-fees/undergraduate-tuition-fees/",
        },
        {
          title: "奖学金查询",
          url: "https://students.ubc.ca/finances/awards-scholarships-bursaries/",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://students.ubc.ca/career/ubc-experiences/campus-jobs/",
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
          url: "https://www.ams.ubc.ca/student-life/clubs/campusbase/",
        },
        {
          title: "Athletics & Recreation",
          url: "https://athleticsandrecreation.ubc.ca/",
        },
        { title: "Dining & Meal Plan", url: "https://food.ubc.ca/" },
      ],
      cn: [
        {
          title: "社团目录（AMS）",
          url: "https://www.ams.ubc.ca/student-life/clubs/campusbase/",
        },
        { title: "体育与运动", url: "https://athleticsandrecreation.ubc.ca/" },
        { title: "校园餐饮计划", url: "https://food.ubc.ca/" },
      ],
    },
  },
  {
    id: "residence-housing",
    links: {
      en: [
        { title: "Residence Home", url: "https://vancouver.housing.ubc.ca/" },
        {
          title: "Room Types & Fees",
          url: "https://vancouver.housing.ubc.ca/residences-rooms/residences/",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://vancouver.housing.ubc.ca/other-housing/off-campus-housing/",
        },
      ],
      cn: [
        { title: "宿舍主页", url: "https://vancouver.housing.ubc.ca/" },
        {
          title: "房型与费用",
          url: "https://vancouver.housing.ubc.ca/residences-rooms/residences/",
        },
        {
          title: "校外住宿办公室",
          url: "https://vancouver.housing.ubc.ca/other-housing/off-campus-housing/",
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
          url: "https://students.ubc.ca/international-student-guide/international-student-advising/",
        },
        {
          title: "Study Permit Guide",
          url: "https://students.ubc.ca/international-student-guide/study-permits/",
        },
        {
          title: "Post-Graduation Work Permit (PGWP)",
          url: "https://students.ubc.ca/international-student-guide/working-canada/post-graduation-work-permit/",
        },
        { title: "Health & Wellness", url: "https://students.ubc.ca/health/" },
      ],
      cn: [
        {
          title: "国际事务办公室",
          url: "https://students.ubc.ca/international-student-guide/international-student-advising/",
        },
        {
          title: "学签指南",
          url: "https://students.ubc.ca/international-student-guide/study-permits/",
        },
        {
          title: "毕业后工作许可 (PGWP)",
          url: "https://students.ubc.ca/international-student-guide/working-canada/post-graduation-work-permit/",
        },
        { title: "健康与心理支持", url: "https://students.ubc.ca/health/" },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Centre Home",
          url: "https://students.ubc.ca/about-student-services/ubc-career-centre/",
        },
        {
          title: "Co-op Program Info",
          url: "https://students.ubc.ca/career/ubc-experiences/co-op/",
        },
        {
          title: "Co-op Work Permit Guide",
          url: "https://students.ubc.ca/international-student-guide/working-canada/co-op-or-internship-work-permit/",
        },
        { title: "Alumni Network", url: "https://alumni.ubc.ca/" },
      ],
      cn: [
        {
          title: "职业中心主页",
          url: "https://students.ubc.ca/about-student-services/ubc-career-centre/",
        },
        {
          title: "Co-op 项目信息",
          url: "https://students.ubc.ca/career/ubc-experiences/co-op/",
        },
        {
          title: "Co-op 工作许可指南",
          url: "https://students.ubc.ca/international-student-guide/working-canada/co-op-or-internship-work-permit/",
        },
        { title: "校友网络", url: "https://alumni.ubc.ca/" },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Transit Information",
          url: "https://planning.ubc.ca/transportation/transit",
        },
        {
          title: "Off-Campus Housing",
          url: "https://vancouver.housing.ubc.ca/other-housing/off-campus-housing/",
        },
        {
          title: "Safety Resources",
          url: "https://security.ubc.ca/safety-resources",
        },
        {
          title: "Emergency Preparedness",
          url: "https://security.ubc.ca/emergency-preparedness",
        },
        { title: "Chinese Students’ Association (CSA)", url: "#" },
      ],
      cn: [
        {
          title: "交通指南",
          url: "https://planning.ubc.ca/transportation/transit",
        },
        {
          title: "校外租房",
          url: "https://vancouver.housing.ubc.ca/other-housing/off-campus-housing/",
        },
        { title: "安全资源", url: "https://security.ubc.ca/safety-resources" },
        {
          title: "应急准备",
          url: "https://security.ubc.ca/emergency-preparedness",
        },
        { title: "UBC 中华学生会 (CSA)", url: "#" },
      ],
    },
  },
  {
    id: "tours-media",
    links: {
      en: [
        {
          title: "Book Campus Tour",
          url: "https://you.ubc.ca/tours-events/campus-tours/",
        },
        {
          title: "Virtual Campus VR",
          url: "https://you.ubc.ca/tours-events/virtual-tour/",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/channel/UC327M9im1ba32Pv32LR118w",
        },
        {
          title: "Official Instagram",
          url: "https://www.instagram.com/universityofbc/",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://you.ubc.ca/tours-events/campus-tours/",
        },
        {
          title: "虚拟校园 VR",
          url: "https://you.ubc.ca/tours-events/virtual-tour/",
        },
        {
          title: "官方 YouTube",
          url: "https://www.youtube.com/channel/UC327M9im1ba32Pv32LR118w",
        },
        {
          title: "官方 Instagram",
          url: "https://www.instagram.com/universityofbc/",
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
          title: "2025 Prospective Undergraduate Student Guide",
          description:
            "Official 2025 UBC undergraduate application handbook, covering academic requirements, degree choices, personal profile writing, and more for international and domestic students.",
          url: "https://you.ubc.ca/wp-content/uploads/2024/09/2025_UBCStudentGuide_web.pdf",
        },
        {
          title: "2024 Student Guide",
          description:
            "Similar structure to the 2025 version, useful for comparing content changes over the years.",
          url: "https://you.ubc.ca/wp-content/uploads/2023/11/2024_UBCStudentGuide_web.pdf",
        },
        {
          title: "2023 Student Guide",
          description:
            "Past admission handbook, helpful for tracking the evolution of admission requirements and application processes.",
          url: "https://you.ubc.ca/wp-content/uploads/2022/08/2023_UBCStudentGuide_web.pdf",
        },
        {
          title: "2024 UBC Indigenous Student Handbook",
          description:
            "Designed for Indigenous new students, covering orientation, community support, priority housing, and cultural resources.",
          url: "https://you.ubc.ca/wp-content/uploads/2023/09/2024_UBCIndigenousHandbook.pdf",
        },
      ],
      cn: [
        {
          title: "2025 本科申请手册 (UBC)",
          description:
            "UBC 官方发布的 2025 本科申请手册，包含学术入学要求、学位选择、个人简介撰写、评分计算、英语水平条件、申请流程及费用说明，为国际与本地学生提供全面参考。",
          url: "https://you.ubc.ca/wp-content/uploads/2024/09/2025_UBCStudentGuide_web.pdf",
        },
        {
          title: "2024 学生指南",
          description: "与2025版相似结构，适合参考不同年份内容变化趋势。",
          url: "https://you.ubc.ca/wp-content/uploads/2023/11/2024_UBCStudentGuide_web.pdf",
        },
        {
          title: "2023 学生指南",
          description: "往年招生手册，有助对比入学要求和申请流程的演化。",
          url: "https://you.ubc.ca/wp-content/uploads/2022/08/2023_UBCStudentGuide_web.pdf",
        },
        {
          title: "2024 UBC 原住民学生手册",
          description:
            "专为原住民新生设计，涵盖定向活动、社区支持、优先住宿渠道及文化资源导航。",
          url: "https://you.ubc.ca/wp-content/uploads/2023/09/2024_UBCIndigenousHandbook.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_planning",
    links: {
      en: [
        {
          title: "UBC International Student Guide (Orientation)",
          description:
            "Comprehensive package for new international students, covering immigration, health insurance, taxes, orientation events, and mental health support.",
          url: "https://sciencespo2017.sites.olt.ubc.ca/files/2018/07/UBC-Orientation-Package.pdf",
        },
        {
          title: "First-Year Planning Guide (Okanagan – Sci/Nur 2025)",
          description:
            "For Okanagan campus Science/Nursing freshmen, covering post-acceptance steps, Workday registration, 'UBC 101' online platform, and campus support resources.",
          url: "https://students.ok.ubc.ca/wp-content/uploads/sites/90/2025/06/FYP-Guide_SciNur_UBCO-25_v2.pdf",
        },
        {
          title: "First‑Year Planning Guide – B.A.Sc. (Okanagan 2025)",
          description:
            "Admission planning guide for Applied Science freshmen, including course recommendations and registration notes.",
          url: "https://students.ok.ubc.ca/wp-content/uploads/sites/90/2025/05/FYP-Guide_ApSci_UBCO-25.pdf",
        },
      ],
      cn: [
        {
          title: "UBC 国际学生指南 (部分 Orientation 内容)",
          description:
            "面向国际新生的综合入学包，内容覆盖移民手续、健康保险、税务、迎新活动安排，以及心理健康支持。",
          url: "https://sciencespo2017.sites.olt.ubc.ca/files/2018/07/UBC-Orientation-Package.pdf",
        },
        {
          title: "第一年规划指南 (奥肯那根校区 – 理工/护理 2025)",
          description:
            "面向Okanagan校区理工／护理新生，包含接收录取后流程、Workday选课步骤、线上新生自学平台“UBC 101”、校园支持资源等。",
          url: "https://students.ok.ubc.ca/wp-content/uploads/sites/90/2025/06/FYP-Guide_SciNur_UBCO-25_v2.pdf",
        },
        {
          title: "第一年规划指南 – 应用科学学士 (奥肯那根 2025)",
          description:
            "为应用科学专业新生设计的入学计划指南，具体包含必修课程建议、学年规划以及注册注意事项。",
          url: "https://students.ok.ubc.ca/wp-content/uploads/sites/90/2025/05/FYP-Guide_ApSci_UBCO-25.pdf",
        },
      ],
    },
  },
  {
    id: "housing_and_finance",
    links: {
      en: [
        {
          title: "Year‑Round Residence Contract 2025–2026",
          description:
            "Details year-round housing contract terms, eligibility, fees, and payment schedules.",
          url: "https://vancouver.housing.ubc.ca/wp-content/uploads/2025/02/2025-2026-YRH-contract.pdf",
        },
        {
          title: "Term‑1 Winter Session Residence Contract 2025–2026",
          description:
            "Contract for the Winter Session (Term 1), including meal plan terms and community standards.",
          url: "https://vancouver.housing.ubc.ca/wp-content/uploads/2025/06/2025-2026-Term-1-Winter-Session-Contract.pdf",
        },
        {
          title: "Tuition and Non‑Instructional Fees 2025–2026 (PDF)",
          description:
            "Report approved by the Board of Governors detailing fee increases for domestic and international students.",
          url: "https://bog3.sites.olt.ubc.ca/files/2024/11/1.5_2024.12_Tuition-and-Non-Instructional-Fees-2025-2026-Revised.pdf",
        },
      ],
      cn: [
        {
          title: "2025–2026 学年全年住宿合同",
          description:
            "详细说明常年住宿合同条款、入住资格、费用与付款安排，是新生签订住宿协议的核心参考来源。",
          url: "https://vancouver.housing.ubc.ca/wp-content/uploads/2025/02/2025-2026-YRH-contract.pdf",
        },
        {
          title: "2025–2026 冬季学期住宿合同",
          description:
            "专用于冬季学期（Term 1）的住宿合同，包含饭费方案、公共设施使用条款与行为守则。",
          url: "https://vancouver.housing.ubc.ca/wp-content/uploads/2025/06/2025-2026-Term-1-Winter-Session-Contract.pdf",
        },
        {
          title: "2025–2026 学费与非教学费用 (PDF)",
          description:
            "由大学理事会批准的报告，明确国内学生学费上涨2%，新入学国际本科生上涨5%（续读3%），强制性杂费上涨2%。",
          url: "https://bog3.sites.olt.ubc.ca/files/2024/11/1.5_2024.12_Tuition-and-Non-Instructional-Fees-2025-2026-Revised.pdf",
        },
      ],
    },
  },
  {
    id: "career_resources",
    links: {
      en: [
        {
          title: "Work Learn Program Student FAQ & Terms (2025)",
          description:
            "FAQ and guide for UBC's paid on-campus internship program, covering eligibility, pay rates, and hour limits.",
          url: "https://students.ubc.ca/wp-content/uploads/work_learn_student_FAQ.pdf",
        },
        {
          title: "Navigating Your First Engineering Job Search",
          description:
            "A comprehensive guide for new engineering graduates, from goal setting to resume and interview strategies.",
          url: "https://experience.apsc.ubc.ca/sites/default/files/2024-04/Navigating%20Your%20First%20Engineering%20Job%20Search.pdf",
        },
        {
          title: "Engineering Resume Toolkit",
          description:
            "Toolkit for engineering students covering format, quantifying achievements, and ATS optimization.",
          url: "https://experience.apsc.ubc.ca/sites/default/files/2021-09/UBC-Engineering-Resume-Toolkit.pdf",
        },
        {
          title: "Engineering Cover Letter Toolkit",
          description:
            "Step-by-step guide to writing engineering cover letters, including structure and START examples.",
          url: "https://experience.apsc.ubc.ca/sites/default/files/2021-09/UBC-Engineering-Cover-Letter-Toolkit.pdf",
        },
        {
          title: "Civil Engineering Industry Guide",
          description:
            "Outlines industries and typical roles for civil engineering undergrads, such as structural, transportation, and water resources.",
          url: "https://experience.apsc.ubc.ca/sites/default/files/2025-05/civl-industry-guide.pdf",
        },
      ],
      cn: [
        {
          title: "Work Learn 项目学生 FAQ 与条款 (2025)",
          description:
            "为 UBC 校内有偿实习项目 Work Learn 提供的 FAQ 和使用指南，涵盖申请条件、薪资标准、工时限制及项目要求。",
          url: "https://students.ubc.ca/wp-content/uploads/work_learn_student_FAQ.pdf",
        },
        {
          title: "工程专业第一份工作求职导航",
          description:
            "为工程新毕业生编写的求职全流程指南，从目标设定、自我评估到简历、面试策略，帮助构建系统求职路径。",
          url: "https://experience.apsc.ubc.ca/sites/default/files/2024-04/Navigating%20Your%20First%20Engineering%20Job%20Search.pdf",
        },
        {
          title: "工程简历工具包",
          description:
            "面向工程学生的简历制作工具，涵盖格式、量化成果写作、ATS 优化等技巧。",
          url: "https://experience.apsc.ubc.ca/sites/default/files/2021-09/UBC-Engineering-Resume-Toolkit.pdf",
        },
        {
          title: "工程求职信工具包",
          description:
            "分步骤指导撰写工程类求职信，包括查找信息、结构设定、START示例等实操方法。",
          url: "https://experience.apsc.ubc.ca/sites/default/files/2021-09/UBC-Engineering-Cover-Letter-Toolkit.pdf",
        },
        {
          title: "土木工程行业指南",
          description:
            "概述土木工程本科生可去往的行业与典型岗位，如结构、交通、水资源，适合行业认知内容输出。",
          url: "https://experience.apsc.ubc.ca/sites/default/files/2025-05/civl-industry-guide.pdf",
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
      title: "University of British Columbia",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🏰 About UBC",
      aboutParagraph1:
        "The University of British Columbia (UBC) is a global centre for research and teaching, consistently ranked among the top 20 public universities in the world. UBC has two main campuses: the Vancouver campus and the Okanagan campus in Kelowna.",
      aboutParagraph2:
        "As one of North America's leading research universities, UBC has a strong focus on innovation and discovery, attracting students and faculty from over 160 countries. It is renowned for its stunning natural setting, diverse programs, and commitment to sustainability.",
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
      orientation_and_planning: "Orientation & Planning",
      housing_and_finance: "Housing & Finance",
      career_resources: "Career & Engineering Guides",
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
      title: "不列颠哥伦比亚大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🏰 关于 UBC",
      aboutParagraph1:
        "不列颠哥伦比亚大学（UBC）是一个全球性的研究和教学中心，持续位列全球顶尖公立大学前20名。UBC有两个主要校区：温哥华校区和位于基洛纳的奥肯那根校区。",
      aboutParagraph2:
        "作为北美领先的研究型大学之一，UBC非常注重创新和发现，吸引了来自160多个国家的学生和教职员工。它以其壮丽的自然环境、多样化的课程和对可持续发展的承诺而闻名。",
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
      orientation_and_planning: "迎新与规划",
      housing_and_finance: "住宿与财务",
      career_resources: "职业与工程指南",
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

const UBCUniversityPage = () => {
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
                  src="/logos/ubc.png"
                  alt="UBC Logo"
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
                              📍 2329 West Mall, Vancouver, BC V6T 1Z4, Canada
                              <br />
                              � (604) 822-2211
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.ubc.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.ubc.ca
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

export default UBCUniversityPage;
