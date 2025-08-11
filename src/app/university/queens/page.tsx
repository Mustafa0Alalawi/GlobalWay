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
  | "general_admissions"
  | "faculty_and_academics"
  | "housing_and_campus_life"
  | "career_and_employment";

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

type InstructionsTranslations = {
  title: string;
  intro: string;
  tableHeaders: string[];
  tableContent: string[][];
  tipsTitle: string;
  tips: string[];
  outro: string;
};

type Translations = {
  [lang: string]: {
    sidebar: SidebarTranslations;
    header: HeaderTranslations;
    universityView: UniversityViewTranslations;
    instructions: InstructionsTranslations;
    sectionTitles: { [key in SectionId]?: string };
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
          url: "https://www.topuniversities.com/universities/queens-university",
        },
        { title: "Campus Map", url: "https://www.queensu.ca/campusmap/" },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/queens-university",
        },
        { title: "校区地图", url: "https://www.queensu.ca/campusmap/" },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Programs List / Viewbook",
          url: "https://www.queensu.ca/academics/programs",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.queensu.ca/academics/programs",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://www.queensu.ca/academics/programs",
        },
        { title: "学院介绍", url: "https://www.queensu.ca/academics/programs" },
      ],
    },
  },
  {
    id: "admissions",
    links: {
      en: [
        {
          title: "Undergraduate Admission Home",
          url: "https://www.queensu.ca/admission/",
        },
        {
          title: "Entry Requirements",
          url: "https://www.queensu.ca/admission/applying/admission-requirements",
        },
        {
          title: "Important Dates",
          url: "https://www.queensu.ca/registrar/key-dates?utm_source=chatgpt.com",
        },
      ],
      cn: [
        { title: "本科申请主页", url: "https://www.queensu.ca/admission/" },
        {
          title: "入学要求",
          url: "https://www.queensu.ca/admission/applying/admission-requirements",
        },
        {
          title: "重要日期",
          url: "https://www.queensu.ca/registrar/key-dates?utm_source=chatgpt.com",
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
          title: "Common App Process",
          url: "https://www.commonapp.org/apply/first-year-students",
        },
        {
          title: "Direct Application (Exclusive)",
          url: "https://www.queensu.ca/admission/applying/how-to-apply",
        },
      ],
      cn: [
        {
          title: "安省申请流程（OUAC）",
          url: "https://www.ouac.on.ca/guide/undergrad-guide/?utm_source=chatgpt.com",
        },
        {
          title: "Common App 流程",
          url: "https://www.commonapp.org/apply/first-year-students",
        },
        {
          title: "直申通道（Exclusive）",
          url: "https://www.queensu.ca/admission/applying/how-to-apply",
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
          url: "https://www.queensu.ca/registrar/tuition-fees?utm_source=chatgpt.com",
        },
        {
          title: "Scholarship Search",
          url: "https://www.queensu.ca/registrar/financial-aid/application-required/current-students/scholarships-awards?utm_source=chatgpt.com",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://www.queensu.ca/registrar/financial-aid/application-required/current-students/work-study?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://www.queensu.ca/registrar/tuition-fees?utm_source=chatgpt.com",
        },
        {
          title: "奖学金查询",
          url: "https://www.queensu.ca/registrar/financial-aid/application-required/current-students/scholarships-awards?utm_source=chatgpt.com",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://www.queensu.ca/registrar/financial-aid/application-required/current-students/work-study?utm_source=chatgpt.com",
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
          url: "https://quic.queensu.ca/student-life/clubs",
        },
        { title: "Athletics & Recreation", url: "https://gogaelsgo.com/" },
        {
          title: "Dining & Meal Plan",
          url: "https://www.queensu.ca/food/meal-plans/campus-meal-plans",
        },
      ],
      cn: [
        {
          title: "社团目录（AMS）",
          url: "https://quic.queensu.ca/student-life/clubs",
        },
        { title: "体育与运动", url: "https://gogaelsgo.com/" },
        {
          title: "校园餐饮计划",
          url: "https://www.queensu.ca/food/meal-plans/campus-meal-plans",
        },
      ],
    },
  },
  {
    id: "residence-housing",
    links: {
      en: [
        { title: "Residence Home", url: "https://www.queensu.ca/residences/" },
        {
          title: "Room Types & Fees",
          url: "https://www.queensu.ca/residences/buildings",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.queensu.ca/ocla/off-campus-housing",
        },
      ],
      cn: [
        { title: "宿舍主页", url: "https://www.queensu.ca/residences/" },
        {
          title: "房型与费用",
          url: "https://www.queensu.ca/residences/buildings",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.queensu.ca/ocla/off-campus-housing",
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
          url: "https://www.queensu.ca/ipo/incoming-exchange/student-life-and-services",
        },
        { title: "Study Permit / PGWP Guide", url: "#" },
        {
          title: "Health & Wellness",
          url: "https://www.queensu.ca/studentwellness/supports-resources",
        },
      ],
      cn: [
        {
          title: "国际事务办公室",
          url: "https://www.queensu.ca/ipo/incoming-exchange/student-life-and-services",
        },
        { title: "学签 / PGWP 指南", url: "#" },
        {
          title: "健康与心理支持",
          url: "https://www.queensu.ca/studentwellness/supports-resources",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        { title: "Career Centre Home", url: "https://careers.queensu.ca/" },
        {
          title: "Co-op / Internship Info",
          url: "https://careers.queensu.ca/jobs-experience/internships-quip",
        },
        { title: "Alumni Network", url: "https://www.queensu.ca/alumni/" },
      ],
      cn: [
        { title: "职业中心主页", url: "https://careers.queensu.ca/" },
        {
          title: "Co-op / 实习信息",
          url: "https://careers.queensu.ca/jobs-experience/internships-quip",
        },
        { title: "校友网络", url: "https://www.queensu.ca/alumni/" },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Transportation & Housing Guide",
          url: "https://www.queensu.ca/facilities/services/commuter/bus-transpass-program",
        },
        { title: "Weather / Safety Report", url: "#" },
        { title: "Chinese Student Resources", url: "#" },
      ],
      cn: [
        {
          title: "交通 & 租房指南",
          url: "https://www.queensu.ca/facilities/services/commuter/bus-transpass-program",
        },
        { title: "天气 / 安全报告", url: "#" },
        { title: "华人资源链接", url: "#" },
      ],
    },
  },
  {
    id: "tours-media",
    links: {
      en: [
        {
          title: "Book Campus Tour",
          url: "https://www.queensu.ca/admission/visit/campus-tours",
        },
        {
          title: "Virtual Campus VR",
          url: "https://www.queensu.ca/admission/visit/campus-tours",
        },
        {
          title: "Official YouTube / Instagram",
          url: "https://www.youtube.com/QueensUCanada",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://www.queensu.ca/admission/visit/campus-tours",
        },
        {
          title: "虚拟校园 VR",
          url: "https://www.queensu.ca/admission/visit/campus-tours",
        },
        {
          title: "官方 YouTube / Instagram",
          url: "https://www.youtube.com/QueensUCanada",
        },
      ],
    },
  },
];

const pdfViewData: SectionData[] = [
  {
    id: "general_admissions",
    links: {
      en: [
        {
          title: "Undergraduate Viewbook 2025",
          description:
            "Academic overview, campus support, application & scholarship summary (38-page color brochure).",
          url: "https://www.queensu.ca/admission/sites/uarwww/files/uploaded_files/QU_Undergraduate_Viewbook.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Undergraduate Admission Viewbook 2024",
          description:
            "A different year's version from the one above, can be used for comparison.",
          url: "https://www.queensu.ca/admission/sites/uarwww/files/uploaded_files/QU_Undergraduate_Viewbook.pdf?utm_source=chatgpt.com",
        },
        {
          title: "International Applicant Handbook 2024",
          description:
            "Visa timeline, language requirements, cost estimation for international students.",
          url: "https://www.queensu.ca/admission/sites/uarwww/files/uploaded_files/QU_2024_Intl_Applicant_Handbook.pdf?utm_source=chatgpt.com",
        },
        {
          title: "International Undergraduate Viewbook 2025",
          description:
            "A “Why Queen’s” brochure designed for overseas high school students.",
          url: "https://www.queensu.ca/admission/sites/uarwww/files/uploaded_files/QU_International_Undergraduate_Viewbook.pdf?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "本科招生手册 2025",
          description: "学术概况、校园支持、申请与奖学金综览（38 页彩册）。",
          url: "https://www.queensu.ca/admission/sites/uarwww/files/uploaded_files/QU_Undergraduate_Viewbook.pdf?utm_source=chatgpt.com",
        },
        {
          title: "本科招生手册 2024",
          description: "与上一本不同年度版本，可双版本并列供对比。",
          url: "https://www.queensu.ca/admission/sites/uarwww/files/uploaded_files/QU_Undergraduate_Viewbook.pdf?utm_source=chatgpt.com",
        },
        {
          title: "国际申请人手册 2024",
          description: "国际生签证时程、语言要求、费用估算。",
          url: "https://www.queensu.ca/admission/sites/uarwww/files/uploaded_files/QU_2024_Intl_Applicant_Handbook.pdf?utm_source=chatgpt.com",
        },
        {
          title: "国际本科招生手册 2025",
          description: "专为海外高中生设计的“Why Queen’s”彩册。",
          url: "https://www.queensu.ca/admission/sites/uarwww/files/uploaded_files/QU_International_Undergraduate_Viewbook.pdf?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "faculty_and_academics",
    links: {
      en: [
        {
          title: "First-Year Student Handbook (Arts & Science)",
          description:
            "Course selection rules, first-year course combinations, Plan application instructions.",
          url: "https://healthsci.queensu.ca/liscbchm/sites/liscbchm/files/inline-files/first_year_handbook_2021.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Public Health Sciences First-Year Handbook",
          description: "Major requirements & research/internship pathways.",
          url: "https://phs.queensu.ca/source/PHS/2021%2008%2017%20MPH%20Student%20handbook%20-%202021-22%20Academic%20Year.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Exchange Student Handbook – Smith School of Business",
          description:
            "Course selection for exchange students, arrival process, life guide.",
          url: "https://smith.queensu.ca/_templates/documents/international/Exchange_Student_Handbook.pdf?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "新生手册 (文理学院)",
          description: "选课规则、第一学年课程组合、Plan 申请说明。",
          url: "https://healthsci.queensu.ca/liscbchm/sites/liscbchm/files/inline-files/first_year_handbook_2021.pdf?utm_source=chatgpt.com",
        },
        {
          title: "公共卫生科学新生手册",
          description: "专业必修 & 研究/实习路线图。",
          url: "https://phs.queensu.ca/source/PHS/2021%2008%2017%20MPH%20Student%20handbook%20-%202021-22%20Academic%20Year.pdf?utm_source=chatgpt.com",
        },
        {
          title: "交换生手册 – 史密斯商学院",
          description: "交换生选课、到达流程、生活指南。",
          url: "https://smith.queensu.ca/_templates/documents/international/Exchange_Student_Handbook.pdf?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "housing_and_campus_life",
    links: {
      en: [
        {
          title: "Residence Contract & Community Standards",
          description: "Housing terms, demerit point system, code of conduct.",
          url: "https://www.queensu.ca/residences/sites/residencewww/files/uploaded_files/Conduct/ResidenceContractFinal.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Residence Move-in Web PDF (with checklist)",
          description:
            "Move-in week schedule, must-bring items, parking routes.",
          url: "https://www.queensu.ca/registrar/registration/student-guide-registration",
        },
      ],
      cn: [
        {
          title: "住宿合同与社区标准",
          description: "住宿条款、违规点制、行为准则。",
          url: "https://www.queensu.ca/residences/sites/residencewww/files/uploaded_files/Conduct/ResidenceContractFinal.pdf?utm_source=chatgpt.com",
        },
        {
          title: "住宿入住指南PDF（含清单）",
          description: "报到周时程、必带物品、停车路线。",
          url: "https://www.queensu.ca/registrar/registration/student-guide-registration",
        },
      ],
    },
  },
  {
    id: "career_and_employment",
    links: {
      en: [
        {
          title: "BCom Employment Report 2023",
          description:
            "Business school undergraduate employment rate, starting salary, industry breakdown.",
          url: "https://smith.queensu.ca/_templates/documents/bcom/cac-bcom-employment-report.pdf?utm_source=chatgpt.com",
        },
        {
          title: "BCom Employment Report 2022",
          description: "Can be used for year-over-year comparison.",
          url: "https://smith.queensu.ca/_templates/documents/bcom/CAC-BCom2022-employment-report.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Queen’s University Employment Rate 2021 (Provincial KPI)",
          description:
            "Overall undergraduate 6-month & 24-month employment rate.",
          url: "https://www.queensu.ca/planningandbudget/irp/sites/irpwww/files/uploaded_files/KPIs/Emp%20Rate%202021%20for%202019%20grads%20-%2012Jan23.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Career Services Tipsheet – CV for Grad School",
          description:
            "CV samples for new job seekers / graduate school applications.",
          url: "https://careers.queensu.ca/sites/cars3www/files/uploaded_files/TipSheets/CV_for_GradSchool_Tipsheet%20Visual%20Updated_0.pdf?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "BCom 就业报告 2023",
          description: "商学院本科就业率、起薪、行业去向。",
          url: "https://smith.queensu.ca/_templates/documents/bcom/cac-bcom-employment-report.pdf?utm_source=chatgpt.com",
        },
        {
          title: "BCom 就业报告 2022",
          description: "可做历年对比。",
          url: "https://smith.queensu.ca/_templates/documents/bcom/CAC-BCom2022-employment-report.pdf?utm_source=chatgpt.com",
        },
        {
          title: "女王大学就业率 2021 (省级KPI)",
          description: "本科整体 6 月 & 24 月就业率。",
          url: "https://www.queensu.ca/planningandbudget/irp/sites/irpwww/files/uploaded_files/KPIs/Emp%20Rate%202021%20for%202019%20grads%20-%2012Jan23.pdf?utm_source=chatgpt.com",
        },
        {
          title: "职业服务提示 – 研究生院简历",
          description: "新生求职 / 研究生申请 CV 样例。",
          url: "https://careers.queensu.ca/sites/cars3www/files/uploaded_files/TipSheets/CV_for_GradSchool_Tipsheet%20Visual%20Updated_0.pdf?utm_source=chatgpt.com",
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
      title: "Queen’s University",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    instructions: {
      title: "How to Use the Link Hub",
      intro:
        "Our Queen’s “Important Links” hub is split into seven high-value sections. Use it like a quick dashboard:",
      tableHeaders: ["Section", "When to click", "What you’ll find"],
      tableContent: [
        [
          "International Centre (QUIC)",
          "For visas, health insurance, orientation",
          "Study-permit & visa guides, UHIP details, arrival checklists, peer programs",
        ],
        [
          "Admission Transition",
          "After getting accepted, before classes start",
          "First-year “Next Steps”, summer events, peer-mentor (QSuccess), English prep",
        ],
        [
          "SOLUS System",
          "For course selection, grades, tuition payment",
          "Secure login + help pages for Queen’s main student information system",
        ],
        [
          "Tuition Fees",
          "To check fee details or payment deadlines",
          "Fee schedules, payment options, tax forms, add-on fee explanations",
        ],
        [
          "Residence",
          "To apply for or manage on-campus housing",
          "Residence application portal, meal plans, move-in dates",
        ],
        [
          "Mental Health",
          "When you need medical or psychological support",
          "Student Wellness booking, counselling groups, peer health education",
        ],
        [
          "Clubs (AMS)",
          "To join clubs and expand your network",
          "200+ club directory, event listings, student government resources",
        ],
      ],
      tipsTitle: "Tips",
      tips: [
        "Filter: Use the 'High School' ⇄ 'University' view toggle in the sidebar to see only the most relevant links.",
        "Quick Search: Use Ctrl+F or Cmd+F to search for keywords (e.g., 'visa', 'residence', 'career').",
        "Mobile Access: Long-press any link to save it to your reading list for offline viewing.",
        "Updates: We check official URLs every semester. If a link is broken, please let us know!",
      ],
      outro:
        "With this hub, you can skip jumping between multiple official websites and get straight to the most useful Queen’s resources. Good luck with your research and enjoy your campus life!",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🏰 About Queen’s University (Kingston, Ontario)",
      aboutParagraph1:
        "Founded in 1841 by Royal Charter, Queen’s University is one of Canada’s oldest public research institutions. Located on the shores of Lake Ontario in the historic city of Kingston, Queen’s offers an intimate, walk-able campus, more than 200 undergraduate and graduate programs across eight faculties and schools, and a community of 33,000 students from 100+ countries.",
      aboutParagraph2:
        "The university is a member of the U15 Group of Canadian Research Universities, home to Nobel- and Turing-affiliated scholars, and is consistently ranked for student satisfaction, research intensity, and global impact. From its storied limestone buildings to its modern innovation hubs, Queen’s blends tradition with forward-looking teaching, discovery, and community engagement. Wikipedia女王大学",
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
      general_admissions: "General & Admissions Guides",
      faculty_and_academics: "Faculty & Academics Handbooks",
      housing_and_campus_life: "Housing & Campus Life",
      career_and_employment: "Career & Employment",
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
      title: "女王大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    instructions: {
      title: "如何使用链接中心",
      intro:
        "我们的女王大学“重要链接”中心分为七个高价值部分。像使用快速仪表盘一样使用它：",
      tableHeaders: ["部分", "何时点击", "你会找到什么"],
      tableContent: [
        [
          "国际中心 (QUIC)",
          "国际学生办理签证、健康保险、迎新攻略时",
          "学习许可和签证指南、UHIP详情、抵达清单、同伴项目",
        ],
        [
          "入学过渡",
          "已拿到录取、准备开学，或想知道迎新/下一步",
          "新生“后续步骤”、暑期活动、同伴导师 (QSuccess)、英语准备",
        ],
        [
          "学校系统 SOLUS",
          "选课、查成绩、交学费时",
          "女王大学主要学生信息系统的安全登录和帮助页面",
        ],
        [
          "学费",
          "想查看费用明细或付款截止日期时",
          "费用表、付款方式、税表、附加费用解释",
        ],
        ["住宿", "申请或管理校内宿舍时", "住宿申请门户、膳食计划、入住日期"],
        [
          "心理健康",
          "需要医疗或心理支持时",
          "学生健康服务预约、咨询小组、同伴健康教育",
        ],
        [
          "社团 (AMS)",
          "想加入社团、拓展人脉时",
          "200多个社团目录、活动列表、学生会资源",
        ],
      ],
      tipsTitle: "小贴士",
      tips: [
        "筛选：在侧边栏使用“高中”⇄“大学”视图切换，只查看与你最相关的链接。",
        "快速搜索：使用 Ctrl+F 或 Cmd+F 搜索关键词（例如“visa”, “residence”, “career”）。",
        "手机访问：长按任何链接可收藏至微信/浏览器阅读列表，方便离线查看。",
        "实时更新：我们每学期核对官方网址。如遇失效链接，请告知我们！",
      ],
      outro:
        "借助这个集中导航，你无需在多个官网页面来回跳转——一步直达最实用的女王大学资源。祝你研究顺利，校园生活愉快！",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🏰 关于女王大学（安大略省金斯顿）",
      aboutParagraph1:
        "女王大学于1841年根据皇家宪章成立，是加拿大最古老的公立研究型大学之一。它坐落在历史名城金斯顿的安大略湖畔，拥有一个温馨、适合步行的校园，设有八个学院和学院，提供200多个本科和研究生课程，汇集了来自100多个国家的33,000名学生。",
      aboutParagraph2:
        "该大学是加拿大U15研究型大学联盟的成员，拥有诺贝尔奖和图灵奖相关的学者，并因其学生满意度、研究强度和全球影响力而持续获得高排名。从其历史悠久的石灰岩建筑到现代化的创新中心，女王大学将传统与前瞻性的教学、发现和社区参与融为一体。维基百科女王大学",
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
      general_admissions: "整体入学指南",
      faculty_and_academics: "学院 / 专业新生手册",
      housing_and_campus_life: "住宿与校园生活",
      career_and_employment: "职业与就业",
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

const QueensUniversityPage = () => {
  const [showInfoPanel, setShowInfoPanel] = useState(true);
  const [activeView, setActiveView] = useState<
    "university" | "highschool" | "instructions" | "pdfView"
  >("instructions");
  const [language, setLanguage] = useState<"en" | "cn">("en");

  const t = translations[language];

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
        <main className="flex-1 flex min-h-screen px-4 md:px-12 py-8">
          <div className="flex-1 flex flex-col">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 md:px-12 py-4 border-b">
              <div className="flex items-center">
                <img
                  src="/logos/queens.png"
                  alt="Queen's University Logo"
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
              {/* Instructions View */}
              {activeView === "instructions" && (
                <div className="prose max-w-4xl text-gray-800">
                  <h2 className="text-2xl font-bold mb-4">
                    {t.instructions.title}
                  </h2>
                  <p>{t.instructions.intro}</p>
                  <table className="table-auto border mt-6 w-full text-left text-sm">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2 font-semibold">
                          {t.instructions.tableHeaders[0]}
                        </th>
                        <th className="border px-4 py-2 font-semibold">
                          {t.instructions.tableHeaders[1]}
                        </th>
                        <th className="border px-4 py-2 font-semibold">
                          {t.instructions.tableHeaders[2]}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.instructions.tableContent.map((row, i) => (
                        <tr key={i}>
                          <td className="border px-4 py-2 font-bold">
                            {row[0]}
                          </td>
                          <td className="border px-4 py-2">{row[1]}</td>
                          <td className="border px-4 py-2">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h3 className="text-xl font-semibold mt-8">
                    {t.instructions.tipsTitle}
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 mt-2">
                    {t.instructions.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ol>
                  <p className="mt-4">{t.instructions.outro}</p>
                </div>
              )}

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
                              📍 74 Union St., Gordon Hall, Kingston, ON K7L
                              2N8, Canada
                              <br />
                              📧{" "}
                              <a
                                href="mailto:admission@queensu.ca"
                                className="text-[#247e9f] underline"
                              >
                                admission@queensu.ca
                              </a>
                              <br />
                              📞 (613) 533-2218
                              <br />{" "}
                              <a
                                href="https://www.queensu.ca/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#247e9f] underline"
                              >
                                www.queensu.ca
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
              {/* HIGHSCHOOL VIEW */}
              {activeView === "highschool" && (
                <div>
                  <div className="space-y-10 text-gray-700">
                    <section>
                      <h2 className="text-2xl font-bold mb-2">Why Queen’s?</h2>
                      <ul className="list-disc pl-5">
                        <li>
                          <a
                            href="https://www.queensu.ca/"
                            className="text-[#247e9f] underline"
                          >
                            Official Website
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bit.ly/Queens_Viewbook"
                            className="text-[#247e9f] underline"
                          >
                            Viewbook (Domestic)
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bit.ly/Queens_Int_Viewbook"
                            className="text-[#247e9f] underline"
                          >
                            Viewbook (International)
                          </a>
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h2 className="text-2xl font-bold mb-2">
                        Programs & Faculties
                      </h2>
                      <a
                        href="https://www.queensu.ca/academics/programs"
                        className="text-[#247e9f] underline"
                      >
                        Explore Programs
                      </a>
                    </section>
                    <section>
                      <h2 className="text-2xl font-bold mb-2">
                        Admissions & Deadlines
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>
                          <a
                            href="https://www.queensu.ca/admission/applying/how-to-apply"
                            className="text-[#247e9f] underline"
                          >
                            How to Apply
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.queensu.ca/admission/applying/dates-deadlines"
                            className="text-[#247e9f] underline"
                          >
                            Important Dates
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.ouac.on.ca/guide/undergrad-guide"
                            className="text-[#247e9f] underline"
                          >
                            OUAC
                          </a>
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h2 className="text-2xl font-bold mb-2">
                        Costs & Scholarships
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>
                          <a
                            href="https://www.queensu.ca/registrar/financial-aid"
                            className="text-[#247e9f] underline"
                          >
                            Financial Aid
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.queensu.ca/admission/scholarships"
                            className="text-[#247e9f] underline"
                          >
                            Entrance Scholarships
                          </a>
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h2 className="text-2xl font-bold mb-2">
                        Campus Life Snapshot
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>
                          <a
                            href="https://www.queensu.ca/residences/"
                            className="text-[#247e9f] underline"
                          >
                            Residence
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.myams.org/clubs/club-directory/"
                            className="text-[#247e9f] underline"
                          >
                            Clubs & Activities
                          </a>
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h2 className="text-2xl font-bold mb-2">Contact Info</h2>
                      <p>
                        📧{" "}
                        <a
                          href="mailto:admission@queensu.ca"
                          className="text-[#247e9f] underline"
                        >
                          admission@queensu.ca
                        </a>
                        <br />
                        📞 (613) 533-2218
                      </p>
                    </section>
                  </div>
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default QueensUniversityPage;
