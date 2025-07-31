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

// More specific types for the translations object
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
          url: "https://www.topuniversities.com/universities/university-alberta",
        },
        {
          title: "Campus Map",
          url: "https://www.ualberta.ca/en/maps.html?l=53.522898,-113.525575&z=15&campus=north_campus",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/university-alberta",
        },
        {
          title: "校区地图",
          url: "https://www.ualberta.ca/en/maps.html?l=53.522898,-113.525575&z=15&campus=north_campus",
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
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2025-26/uofa_undergrad_2025-26.pdf",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.ualberta.ca/en/faculties/index.html",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2025-26/uofa_undergrad_2025-26.pdf",
        },
        {
          title: "学院介绍",
          url: "https://www.ualberta.ca/en/faculties/index.html",
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
          url: "https://apply.ualberta.ca/apply/",
        },
        {
          title: "Entry Requirements",
          url: "https://www.ualberta.ca/en/admissions/how-to-apply/admission-requirements/index.html",
        },
        {
          title: "Important Dates",
          url: "https://www.ualberta.ca/en/admissions/how-to-apply/dates-deadlines/index.html",
        },
      ],
      cn: [
        { title: "本科申请主页", url: "https://apply.ualberta.ca/apply/" },
        {
          title: "入学要求",
          url: "https://www.ualberta.ca/en/admissions/how-to-apply/admission-requirements/index.html",
        },
        {
          title: "重要日期",
          url: "https://www.ualberta.ca/en/admissions/how-to-apply/dates-deadlines/index.html",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "Direct Application Process",
          url: "https://www.ualberta.ca/en/education/programs/undergraduate-admissions/application-process.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "直申通道流程",
          url: "https://www.ualberta.ca/en/education/programs/undergraduate-admissions/application-process.html?utm_source=chatgpt.com",
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
          url: "https://www.ualberta.ca/en/registrar/costs-tuition-fees/undergraduate-tuition/tuition-model.html?utm_source=chatgpt.com",
        },
        {
          title: "International Scholarships",
          url: "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-undergraduate-scholarships/index.html?utm_source=chatgpt.com",
        },
        {
          title: "Entrance Scholarships",
          url: "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/entrance-scholarships/index.html?utm_source=chatgpt.com",
        },
        {
          title: "Working in Canada",
          url: "https://www.ualberta.ca/en/international/international-student-services/immigration/working-in-canada/index.html?utm_source=chatgpt.com",
        },
        {
          title: "Landing a Summer Job",
          url: "https://www.ualberta.ca/en/youalberta/2025/04/landing-a-summer-job-as-a-student.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://www.ualberta.ca/en/registrar/costs-tuition-fees/undergraduate-tuition/tuition-model.html?utm_source=chatgpt.com",
        },
        {
          title: "国际生奖学金",
          url: "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-undergraduate-scholarships/index.html?utm_source=chatgpt.com",
        },
        {
          title: "入学奖学金",
          url: "https://www.ualberta.ca/en/admissions/tuition-and-scholarships/entrance-scholarships/index.html?utm_source=chatgpt.com",
        },
        {
          title: "在加拿大工作",
          url: "https://www.ualberta.ca/en/international/international-student-services/immigration/working-in-canada/index.html?utm_source=chatgpt.com",
        },
        {
          title: "找到暑期工作",
          url: "https://www.ualberta.ca/en/youalberta/2025/04/landing-a-summer-job-as-a-student.html?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        {
          title: "Student Groups",
          url: "https://www.su.ualberta.ca/this-is-how-you-get-involved/student-groups/",
        },
        {
          title: "Athletics & Recreation",
          url: "https://www.ualberta.ca/en/campus-community-recreation/index.html",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.ualberta.ca/en/dining-services/meal-plans/index.html",
        },
      ],
      cn: [
        {
          title: "学生社团",
          url: "https://www.su.ualberta.ca/this-is-how-you-get-involved/student-groups/",
        },
        {
          title: "体育与运动",
          url: "https://www.ualberta.ca/en/campus-community-recreation/index.html",
        },
        {
          title: "校园餐饮计划",
          url: "https://www.ualberta.ca/en/dining-services/meal-plans/index.html",
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
          url: "https://www.ualberta.ca/en/residence/index.html",
        },
        {
          title: "Our Residences",
          url: "https://www.ualberta.ca/en/residence/our-residences/index.html#sort=relevancy",
        },
        {
          title: "Apply for Residence",
          url: "https://www.ualberta.ca/en/residence/apply/index.html",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.ualberta.ca/en/residence/our-residences/unit-types.html",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.ualberta.ca/en/international/international-student-services/settlement-services/housing/off-campus-housing.html",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.ualberta.ca/en/residence/index.html",
        },
        {
          title: "我们的宿舍",
          url: "https://www.ualberta.ca/en/residence/our-residences/index.html#sort=relevancy",
        },
        {
          title: "申请宿舍",
          url: "https://www.ualberta.ca/en/residence/apply/index.html",
        },
        {
          title: "房型与费用",
          url: "https://www.ualberta.ca/en/residence/our-residences/unit-types.html",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.ualberta.ca/en/international/international-student-services/settlement-services/housing/off-campus-housing.html",
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
          url: "https://www.ualberta.ca/en/international/international-student-services/index.html?utm_source=chatgpt.com",
        },
        {
          title: "PGWP Guide",
          url: "https://www.ualberta.ca/en/international/international-student-services/immigration/working-in-canada/pgwp.html?utm_source=chatgpt.com",
        },
        {
          title: "Study Permit Guide",
          url: "https://www.ualberta.ca/en/international/international-student-services/immigration/studying-in-canada/study-permit.html?utm_source=chatgpt.com",
        },
        {
          title: "Mental Health Support",
          url: "https://www.ualberta.ca/en/campus-life/health-wellness/mental-health/index.html?utm_source=chatgpt.com",
        },
        {
          title: "Health & Wellness for Intl Students",
          url: "https://www.ualberta.ca/en/international/international-student-services/settlement-services/health-wellness/index.html",
        },
      ],
      cn: [
        {
          title: "国际学生服务",
          url: "https://www.ualberta.ca/en/international/international-student-services/index.html?utm_source=chatgpt.com",
        },
        {
          title: "PGWP 指南",
          url: "https://www.ualberta.ca/en/international/international-student-services/immigration/working-in-canada/pgwp.html?utm_source=chatgpt.com",
        },
        {
          title: "学签指南",
          url: "https://www.ualberta.ca/en/international/international-student-services/immigration/studying-in-canada/study-permit.html?utm_source=chatgpt.com",
        },
        {
          title: "心理健康支持",
          url: "https://www.ualberta.ca/en/campus-life/health-wellness/mental-health/index.html?utm_source=chatgpt.com",
        },
        {
          title: "国际学生健康与福祉",
          url: "https://www.ualberta.ca/en/international/international-student-services/settlement-services/health-wellness/index.html",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Centre Resources",
          url: "https://www.ualberta.ca/en/career-centre/resources/index.html?utm_source=chatgpt.com",
        },
        {
          title: "Engineering Co-op Program",
          url: "https://www.ualberta.ca/en/experiential-learning/opportunities/engineering-co-op-program.html?utm_source=chatgpt.com",
        },
        {
          title: "Business Co-op Program",
          url: "https://www.ualberta.ca/en/experiential-learning/opportunities/business-co-op-program.html?utm_source=chatgpt.com",
        },
        {
          title: "Co-op Work Permit",
          url: "https://www.ualberta.ca/en/international/international-student-services/immigration/working-in-canada/coop-work-permit.html?utm_source=chatgpt.com",
        },
        {
          title: "Alumni Network",
          url: "https://www.ualberta.ca/en/alumni/index.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "职业中心资源",
          url: "https://www.ualberta.ca/en/career-centre/resources/index.html?utm_source=chatgpt.com",
        },
        {
          title: "工程 Co-op 项目",
          url: "https://www.ualberta.ca/en/experiential-learning/opportunities/engineering-co-op-program.html?utm_source=chatgpt.com",
        },
        {
          title: "商科 Co-op 项目",
          url: "https://www.ualberta.ca/en/experiential-learning/opportunities/business-co-op-program.html?utm_source=chatgpt.com",
        },
        {
          title: "Co-op 工作许可",
          url: "https://www.ualberta.ca/en/international/international-student-services/immigration/working-in-canada/coop-work-permit.html?utm_source=chatgpt.com",
        },
        {
          title: "校友网络",
          url: "https://www.ualberta.ca/en/alumni/index.html?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Housing and Transportation",
          url: "https://www.ualberta.ca/en/rehabilitation/student-services/student-life/housing-and-transportation.html",
        },
        {
          title: "Severe Weather Procedures",
          url: "https://www.ualberta.ca/en/emergency/procedures-severe-weather.html",
        },
        {
          title: "China Institute",
          url: "https://www.ualberta.ca/en/china-institute/about/contact-us.html",
        },
      ],
      cn: [
        {
          title: "住宿与交通",
          url: "https://www.ualberta.ca/en/rehabilitation/student-services/student-life/housing-and-transportation.html",
        },
        {
          title: "恶劣天气程序",
          url: "https://www.ualberta.ca/en/emergency/procedures-severe-weather.html",
        },
        {
          title: "中国学院",
          url: "https://www.ualberta.ca/en/china-institute/about/contact-us.html",
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
          url: "https://www.ualberta.ca/en/admissions/events/campus-tours/index.html",
        },
        {
          title: "Virtual Campus VR",
          url: "https://www.ualberta.ca/en/admissions/events/campus-tours/virtual-campus-experience.html",
        },
        { title: "Official YouTube", url: "https://www.youtube.com/ualberta" },
        {
          title: "Official Instagram",
          url: "https://www.instagram.com/ualberta/",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://www.ualberta.ca/en/admissions/events/campus-tours/index.html",
        },
        {
          title: "虚拟校园 VR",
          url: "https://www.ualberta.ca/en/admissions/events/campus-tours/virtual-campus-experience.html",
        },
        { title: "官方 YouTube", url: "https://www.youtube.com/ualberta" },
        { title: "官方 Instagram", url: "https://www.instagram.com/ualberta/" },
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
          title: "Undergraduate Viewbook 2025–26",
          description:
            "Comprehensive undergraduate application handbook, including campus intro, program list, application process, scholarships, and campus life.",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2025-26/uofa_undergrad_2025-26.pdf",
        },
        {
          title: "Undergraduate Viewbook 2024–25",
          description:
            "Previous year's version, similar in structure, useful for comparison.",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2023/96250-viewbookundergraduate-24-25-completedigital_spreads.pdf",
        },
        {
          title: "International Undergraduate Handbook 2025–26",
          description:
            "For international students, explains guaranteed tuition rates, four-year tuition ranges, scholarships, and language policies.",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2025-26/uofa_international_2025-26.pdf",
        },
        {
          title:
            "2025–26 Undergraduate Handbooks (AP / IB / Intl / Indigenous)",
          description:
            "Custom handbooks for various groups like Advanced Placement, IB, International Students in Canada, and Indigenous Students.",
          url: "https://www.ualberta.ca/en/admissions/publications.html",
        },
        {
          title: "Faculty Viewbooks (e.g., Arts)",
          description:
            "Faculty-specific viewbooks for Science, Engineering, etc., can also be accessed via the Publications page.",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2025-26/uofa_arts_2025-26.pdf",
        },
      ],
      cn: [
        {
          title: "本科招生手册 2025–26",
          description:
            "综合本科申请手册，含校区简介、专业列表、申请流程、奖学金及校园生活等内容。",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2025-26/uofa_undergrad_2025-26.pdf",
        },
        {
          title: "本科招生手册 2024–25",
          description:
            "上一年版本，结构接近当前内容，可用于内容对比或素材补充。",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2023/96250-viewbookundergraduate-24-25-completedigital_spreads.pdf",
        },
        {
          title: "国际本科生手册 2025–26",
          description:
            "针对国际学生，说明保证学费率、入学四年学费范围、奖学金与语言政策。",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2025-26/uofa_international_2025-26.pdf",
        },
        {
          title: "2025–26 本科手册系列",
          description:
            "包含多个群体定制手册，例如 AP, IB, 加拿大国际学生, 和原住民学生指南等。",
          url: "https://www.ualberta.ca/en/admissions/publications.html",
        },
        {
          title: "学院宣传册 (例如文学院)",
          description: "其它如理学院、工学院等也可通过 Publications 页面获取。",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/viewbook-2025-26/uofa_arts_2025-26.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "Parent Orientation Handbook 2022/2023",
          description:
            "This handbook for first-year undergraduate students and their parents details campus adjustment, academic and social life, support resources, and important dates.",
          url: "https://www.ualberta.ca/en/augustana/media-library/admissions/incoming/fall-2022-parent-orientation-handbook.pdf?",
        },
        {
          title: "New Student Orientation 2024",
          description:
            "Two-day orientation schedule including check-in, ceremonies, social events, info sessions, and campus navigation.",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/81/Schedule-2024%20New%20Student%20Orientation%20August%2029%20and%2030.pdf",
        },
        {
          title: "Residence House Rules (April 2022)",
          description:
            "Details daily life regulations in on-campus residences, including visitors, safety, noise, cleaning, and smoking rules.",
          url: "https://www.ualberta.ca/en/residence/media-library/documents/residence-house-rules.pdf",
        },
        {
          title: "East Campus Residence Agreement 2024–2025",
          description:
            "Standard contract for East Campus student apartments, including move-in terms, rent payment, move-out regulations, and shared space policies.",
          url: "https://www.ualberta.ca/en/residence/media-library/documents/residence-agreements/2024-2025-east-campus-houses-residence-agreement-final.pdf",
        },
      ],
      cn: [
        {
          title: "家长迎新手册 2022/2023",
          description:
            "该手册面向第一年本科新生及其家长，详细介绍校园适应、学术与社交生活节奏、支持资源与重要时间节点。",
          url: "https://www.ualberta.ca/en/augustana/media-library/admissions/incoming/fall-2022-parent-orientation-handbook.pdf?",
        },
        {
          title: "新生迎新活动 2024",
          description:
            "为期两天的迎新详细活动安排，包括院系分组、报到时间、迎新仪式、社交活动、信息讲座、校园导航等。",
          url: "https://www.ucalgary.ca/live-uc-ucalgary-site/sites/default/files/teams/81/Schedule-2024%20New%20Student%20Orientation%20August%2029%20and%2030.pdf",
        },
        {
          title: "宿舍规定 (2022年4月)",
          description:
            "详细说明校内宿舍的日常生活规范，包括访客、安全、噪声、清洁、禁烟规定等。",
          url: "https://www.ualberta.ca/en/residence/media-library/documents/residence-house-rules.pdf",
        },
        {
          title: "东校区住宿协议 2024–2025",
          description:
            "东校区学生公寓标准合同，包含入住条款、租金支付、搬出规定、共享空间政策。",
          url: "https://www.ualberta.ca/en/residence/media-library/documents/residence-agreements/2024-2025-east-campus-houses-residence-agreement-final.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Undergraduate Tuition Trends (Student Union)",
          description:
            "Historical data charts from 1972-2022 showing national and U of A tuition trends.",
          url: "https://www2.su.ualberta.ca/media/uploads/1143/Undergraduate%20Tuition%20Trends%20in%20Canada%20and%20Alberta.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Job Search Guidebook",
          description:
            "Guides students on how to proactively search for jobs, including on- and off-campus position retrieval, filtering techniques, and contacting professors/departments.",
          url: "https://www.ualberta.ca/en/career-centre/media-library/documents/publications/job-search-guidebook.pdf",
        },
        {
          title: "Career Information Interviewing Guidebook",
          description:
            "Explains the process of informational interviews, including sample questions, preparation, and networking advice.",
          url: "https://www.ualberta.ca/en/career-centre/media-library/documents/publications/career-information-interviewing-guidebook.pdf",
        },
        {
          title: "Alberta School of Business Co-op Handbook",
          description:
            "Designed for the Business Co-op program, this handbook includes internship terms, work procedures, and employer communication.",
          url: "https://www.ualberta.ca/en/business/careers/recruit-our-students/alberta-school-of-business-co-op-handbook-updated-2023.pdf",
        },
      ],
      cn: [
        {
          title: "加拿大及阿尔伯塔省本科学费趋势 (学生会发布)",
          description:
            "由学生会编制历史数据图表，横跨 1972–2022，全国与艾大本地学费趋势。",
          url: "https://www2.su.ualberta.ca/media/uploads/1143/Undergraduate%20Tuition%20Trends%20in%20Canada%20and%20Alberta.pdf?utm_source=chatgpt.com",
        },
        {
          title: "求职指南",
          description:
            "详细指导学生如何主动寻找工作，包括校内外岗位检索、筛选技巧、联系教授/部门、邮件筛选设置等。",
          url: "https://www.ualberta.ca/en/career-centre/media-library/documents/publications/job-search-guidebook.pdf",
        },
        {
          title: "职业信息访谈指南",
          description:
            "阐述职业信息访谈流程，包括提问范例、访谈准备、网络拓展建议等。",
          url: "https://www.ualberta.ca/en/career-centre/media-library/documents/publications/career-information-interviewing-guidebook.pdf",
        },
        {
          title: "阿尔伯塔商学院 Co-op 手册",
          description:
            "为商学院 Co‑op 项目设计，内容包括实习条款、工作流程、雇主沟通与评价体系。",
          url: "https://www.ualberta.ca/en/business/careers/recruit-our-students/alberta-school-of-business-co-op-handbook-updated-2023.pdf",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "Faculty of Arts – Enriched Curriculum Handbook (2023–24)",
          description:
            "For Bachelor of Arts students, detailing elective paths (honors, minors, certificates), course planning, and practical resources.",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/handbooks/enriched-curriculum-handbook-2023-24.pdf?",
        },
        {
          title: "Interdepartmental Science Students’ Society (ISSS) Handbook",
          description:
            "A resource handbook from the Science student society, including semester planning, course resources, policy guides, and templates.",
          url: "https://www.isss.ca/handbook?utm_source",
        },
        {
          title: "GFC Handbook – Graduate & Faculty Governance",
          description:
            "Comprehensive list of program structures, course approvals, and governance mechanisms at the General Faculties Council (GFC) level.",
          url: "https://www2.su.ualberta.ca/media/uploads/580/GFCHandbook.pdf?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "文学院 - 丰富课程手册 (2023–24)",
          description:
            "面向 Arts 学士项目，详述学程选修（如荣誉项目、辅修、证书等）、课程路径规划、评估制度与专业实践资源。",
          url: "https://www.ualberta.ca/en/admissions/media-library/uai-assets/docs/handbooks/enriched-curriculum-handbook-2023-24.pdf?",
        },
        {
          title: "跨部门理科学生会 (ISSS) 手册",
          description:
            "Science 学院学生协会发布的资源手册，包含学期规划、课程资源、政策指南、考试与规划表模板。",
          url: "https://www.isss.ca/handbook?utm_source",
        },
        {
          title: "GFC 手册 – 研究生与学院治理",
          description:
            "全面罗列各学院在 GFC (General Faculties Council) 层面的专业设置结构、课程审批及项目治理机制。",
          url: "https://www2.su.ualberta.ca/media/uploads/580/GFCHandbook.pdf?utm_source=chatgpt.com",
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
      title: "University of Alberta",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🐻 About University of Alberta",
      aboutParagraph1:
        "The University of Alberta in Edmonton is one of the top teaching and research universities in Canada, with an international reputation for excellence across the humanities, sciences, creative arts, business, engineering, and health sciences.",
      aboutParagraph2:
        "Home to leading experts from around the world, the U of A is a member of the U15 Group of Canadian Research Universities and is known for its strong community engagement and commitment to innovation.",
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
      title: "阿尔伯塔大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🐻 关于阿尔伯塔大学",
      aboutParagraph1:
        "位于埃德蒙顿的阿尔伯塔大学是加拿大顶尖的教学和研究型大学之一，在人文学科、科学、创意艺术、商业、工程和健康科学领域享有卓越的国际声誉。",
      aboutParagraph2:
        "作为来自世界各地的顶尖专家的家园，阿尔伯塔大学是加拿大U15研究型大学联盟的成员，以其强大的社区参与和对创新的承诺而闻名。",
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

const AlbertaUniversityPage = () => {
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
                  src="/logos/alberta.png"
                  alt="University of Alberta Logo"
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
                              📍 116 St & 85 Ave, Edmonton, AB T6G 2R3, Canada
                              <br />
                              📞 (780) 492-3111
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.ualberta.ca/en/index.html"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.ualberta.ca
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

export default AlbertaUniversityPage;
