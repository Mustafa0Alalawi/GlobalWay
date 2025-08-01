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
  | "career_guides"
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
          url: "https://www.topuniversities.com/universities/simon-fraser-university?utm_source=chatgpt.com",
        },
        {
          title: "Campus Map",
          url: "https://www.sfu.ca/fs/campus-maps.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/simon-fraser-university?utm_source=chatgpt.com",
        },
        {
          title: "校区地图",
          url: "https://www.sfu.ca/fs/campus-maps.html?utm_source=chatgpt.com",
        },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Programs List (A-Z)",
          url: "https://www.sfu.ca/students/admission/programs/a-z.html",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.sfu.ca/students/admission/programs/faculties.html",
        },
      ],
      cn: [
        {
          title: "专业列表 (A-Z)",
          url: "https://www.sfu.ca/students/admission/programs/a-z.html",
        },
        {
          title: "学院介绍",
          url: "https://www.sfu.ca/students/admission/programs/faculties.html",
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
          url: "https://www.sfu.ca/students/admission.html",
        },
        {
          title: "Entry Requirements",
          url: "https://www.sfu.ca/students/admission/admission-requirements.html",
        },
        {
          title: "Important Dates",
          url: "https://www.sfu.ca/students/admission/apply/timeline-and-evaluation.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://www.sfu.ca/students/admission.html",
        },
        {
          title: "入学要求",
          url: "https://www.sfu.ca/students/admission/admission-requirements.html",
        },
        {
          title: "重要日期",
          url: "https://www.sfu.ca/students/admission/apply/timeline-and-evaluation.html?utm_source=chatgpt.com",
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
          url: "https://www.sfu.ca/students/admission/apply.html",
        },
      ],
      cn: [
        {
          title: "直接申请",
          url: "https://www.sfu.ca/students/admission/apply.html",
        },
      ],
    },
  },
  {
    id: "cost-funding",
    links: {
      en: [
        {
          title: "Tuition & Fees",
          url: "https://www.sfu.ca/students/admission/fees-scholarships.html?utm_source=chatgpt.com",
        },
        {
          title: "Scholarship Search",
          url: "https://www.sfu.ca/students/financial-aid/undergraduate/scholarships.html",
        },
        {
          title: "Work-Study Program",
          url: "https://www.sfu.ca/students/financial-aid/undergraduate/work-study.html",
        },
      ],
      cn: [
        {
          title: "学费与费用",
          url: "https://www.sfu.ca/students/admission/fees-scholarships.html?utm_source=chatgpt.com",
        },
        {
          title: "奖学金查询",
          url: "https://www.sfu.ca/students/financial-aid/undergraduate/scholarships.html",
        },
        {
          title: "勤工助学项目",
          url: "https://www.sfu.ca/students/financial-aid/undergraduate/work-study.html",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        { title: "Clubs Directory", url: "https://go.sfss.ca/clubs/list" },
        {
          title: "Athletics & Recreation",
          url: "https://www.sfu.ca/recreation/facility/SportsClubs.html",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.sfu.ca/food/mealplans.html",
        },
      ],
      cn: [
        { title: "社团目录", url: "https://go.sfss.ca/clubs/list" },
        {
          title: "体育与运动",
          url: "https://www.sfu.ca/recreation/facility/SportsClubs.html",
        },
        {
          title: "校园餐饮计划",
          url: "https://www.sfu.ca/food/mealplans.html",
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
          url: "https://www.sfu.ca/students/residences.html",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.sfu.ca/students/residences/housing-options.html",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.sfu.ca/students/residences/housing-options/off-campus-housing.html",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.sfu.ca/students/residences.html",
        },
        {
          title: "房型与费用",
          url: "https://www.sfu.ca/students/residences/housing-options.html",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.sfu.ca/students/residences/housing-options/off-campus-housing.html",
        },
      ],
    },
  },
  {
    id: "intl-support",
    links: {
      en: [
        {
          title: "International Services for Students (ISS)",
          url: "https://www.sfu.ca/students/iss.html",
        },
        {
          title: "Work After Graduation (PGWP)",
          url: "https://www.sfu.ca/students/isap/explore/employment/work-after-grad11.html",
        },
        {
          title: "Resource Guides",
          url: "https://www.sfu.ca/students/isap/resources/guides.html",
        },
        {
          title: "Health & Wellness",
          url: "https://www.sfu.ca/vancouver/students/health-wellness-services.html",
        },
      ],
      cn: [
        {
          title: "国际学生服务 (ISS)",
          url: "https://www.sfu.ca/students/iss.html",
        },
        {
          title: "毕业后工作 (PGWP)",
          url: "https://www.sfu.ca/students/isap/explore/employment/work-after-grad11.html",
        },
        {
          title: "资源指南",
          url: "https://www.sfu.ca/students/isap/resources/guides.html",
        },
        {
          title: "健康与心理支持",
          url: "https://www.sfu.ca/vancouver/students/health-wellness-services.html",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career & Volunteer Services",
          url: "https://www.sfu.ca/students/career.html",
        },
        { title: "Co-op Home", url: "https://www.sfu.ca/coop.html" },
        {
          title: "Co-op Career Development Program",
          url: "https://www.sfu.ca/students/get-involved/programs-and-opportunities/co-op-career-development-program.html",
        },
        {
          title: "Co-op Programs",
          url: "https://www.sfu.ca/hire/coop/programs.html",
        },
        {
          title: "Finding a Co-op Job (International)",
          url: "https://www.sfu.ca/coop/international/finding-a-job.html",
        },
        { title: "Alumni Network", url: "https://www.sfu.ca/alumni.html" },
      ],
      cn: [
        {
          title: "职业与志愿者服务",
          url: "https://www.sfu.ca/students/career.html",
        },
        { title: "Co-op 主页", url: "https://www.sfu.ca/coop.html" },
        {
          title: "Co-op 职业发展项目",
          url: "https://www.sfu.ca/students/get-involved/programs-and-opportunities/co-op-career-development-program.html",
        },
        {
          title: "Co-op 专业",
          url: "https://www.sfu.ca/hire/coop/programs.html",
        },
        {
          title: "寻找 Co-op 工作（国际生）",
          url: "https://www.sfu.ca/coop/international/finding-a-job.html",
        },
        { title: "校友网络", url: "https://www.sfu.ca/alumni.html" },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "U-Pass (Transit)",
          url: "https://www.sfu.ca/students/enrolment-services/upass/general-info.html?utm_source=chatgpt.com",
        },
        {
          title: "Arriving in Vancouver",
          url: "https://www.sfu.ca/students/isap/new/plan-your-trip/arriving-vancouver.html?utm_source=chatgpt.com",
        },
        {
          title: "Severe Weather Procedures",
          url: "https://www.sfu.ca/srs/risk-emergency-planning/emergency-preparedness/emergency-procedures/severe-weather.html?utm_source=chatgpt.com",
        },
        {
          title: "Chinese Students & Scholars Association",
          url: "https://go.sfss.ca/clubs/126/info?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "U-Pass (公交)",
          url: "https://www.sfu.ca/students/enrolment-services/upass/general-info.html?utm_source=chatgpt.com",
        },
        {
          title: "抵达温哥华",
          url: "https://www.sfu.ca/students/isap/new/plan-your-trip/arriving-vancouver.html?utm_source=chatgpt.com",
        },
        {
          title: "恶劣天气应急程序",
          url: "https://www.sfu.ca/srs/risk-emergency-planning/emergency-preparedness/emergency-procedures/severe-weather.html?utm_source=chatgpt.com",
        },
        {
          title: "中华学生学者联谊会",
          url: "https://go.sfss.ca/clubs/126/info?utm_source=chatgpt.com",
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
          url: "https://www.sfu.ca/students/admission/tours-events/campus-tours.html?utm_source=chatgpt.com",
        },
        {
          title: "Virtual Campus VR",
          url: "https://www.sfu.ca/students/admission/tours-events/virtual-campus-tours.html?utm_source=chatgpt.com",
        },
        {
          title: "Tours & Events Home",
          url: "https://www.sfu.ca/students/admission/tours-events.html?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://www.sfu.ca/students/admission/tours-events/campus-tours.html?utm_source=chatgpt.com",
        },
        {
          title: "虚拟校园 VR",
          url: "https://www.sfu.ca/students/admission/tours-events/virtual-campus-tours.html?utm_source=chatgpt.com",
        },
        {
          title: "参观与活动主页",
          url: "https://www.sfu.ca/students/admission/tours-events.html?utm_source=chatgpt.com",
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
          title: "SFU Main Undergraduate Viewbook",
          description:
            "SFU's core recruitment material, detailing undergraduate program overviews, campus life, student testimonials, admission timelines, application steps, and student support systems.",
          url: "https://www.sfu.ca/content/dam/sfu/communicators-toolkit/brand/recruitment-toolkit/SFU-Viewbook-2025-Main.pdf",
        },
        {
          title: "SFU Compact Undergraduate Viewbook",
          description:
            "A simplified version of the recruitment handbook, covering program features, application process, and key timelines, suitable for users getting a quick overview of SFU.",
          url: "https://www.sfu.ca/content/dam/sfu/communicators-toolkit/brand/recruitment-toolkit/SFU-Viewbook-2025-Main.pdf",
        },
        {
          title: "Graduate Student Admission Handbook",
          description:
            "A guide for SFU graduate and doctoral candidates, including program introductions, application steps, scholarships, and campus resources.",
          url: "https://www.uniagents.com/ga-institution/uploads/prospectus/institute_2455_prospectus1610000138Graduate%20and%20Postdoctoral%20Studies%20Student%20Handbook.pdf",
        },
      ],
      cn: [
        {
          title: "SFU本科招生主手册",
          description:
            "SFU 的核心招生资料，详述本科专业概览、校园生活、学生推荐、入学时间轴、申请步骤及学生支持体系，为未来申请人提供一站式了解 SFU 的官方手册。",
          url: "https://www.sfu.ca/content/dam/sfu/communicators-toolkit/brand/recruitment-toolkit/SFU-Viewbook-2025-Main.pdf",
        },
        {
          title: "SFU本科招生简明手册",
          description:
            "简化版本的招生手册，涵盖项目特色、申请流程、关键时间节点，适合初步了解 SFU 的用户快速阅读。",
          url: "https://www.sfu.ca/content/dam/sfu/communicators-toolkit/brand/recruitment-toolkit/SFU-Viewbook-2025-Main.pdf",
        },
        {
          title: "研究生入学手册",
          description:
            "为 SFU 研究生及博士候选人设计的招生指导，包括专业介绍、申请步骤、奖学金与校园资源，完整展示研究生入学路径。",
          url: "https://www.uniagents.com/ga-institution/uploads/prospectus/institute_2455_prospectus1610000138Graduate%20and%20Postdoctoral%20Studies%20Student%20Handbook.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "MBB Graduate Student Orientation Booklet",
          description:
            "A guide for new graduate students in the Molecular Biology and Biochemistry department, covering academic planning, campus resources, the advising system, and procedural guidance.",
          url: "https://www.sfu.ca/content/dam/sfu/mbb/Grad/MBB%20Orientation%20Booklet%202023.pdf",
        },
        {
          title: "Residence & Housing Handbook (2024-25 & 2025-26)",
          description:
            "A must-read for new and returning residents, covering community guidelines, room change procedures, move-in guides, and public space rules.",
          url: "https://www.sfu.ca/students/residences/community/contract-handbook.html?utm_source=chatgpt.com",
        },
        {
          title: "SFU Vancouver Student Guide",
          description:
            "A practical guide for students at the Vancouver campus, including campus resources, event organizations, service centers, life tips, and housing information.",
          url: "https://www.sfu.ca/content/sfu/vancouver/students/_jcr_content/main_content/download/file.res/SFU%20Vancouver%20Student%20Guide.pdf",
        },
      ],
      cn: [
        {
          title: "MBB研究生迎新册",
          description:
            "面向分子生物与生化系（MBB）研究生的新生指南，内容包括学术规划、校园资源、导师制度及程序引导，适合研究型专业入门类内容拆解。",
          url: "https://www.sfu.ca/content/dam/sfu/mbb/Grad/MBB%20Orientation%20Booklet%202023.pdf",
        },
        {
          title: "住宿手册 (2024-25 & 2025-26)",
          description:
            "新老居民必读，涵盖社区守则、换房流程、入住指南、公共空间规则等，适合制作住宿生活说明与细节讲解。",
          url: "https://www.sfu.ca/students/residences/community/contract-handbook.html?utm_source=chatgpt.com",
        },
        {
          title: "SFU温哥华校区学生指南",
          description:
            "提供温哥华校区学生实用指南，包括校园资源、活动组织、服务中心、生活技巧、住宿信息等，适合拆解为“校园生活全指南”内容系列。",
          url: "https://www.sfu.ca/content/sfu/vancouver/students/_jcr_content/main_content/download/file.res/SFU%20Vancouver%20Student%20Guide.pdf",
        },
      ],
    },
  },
  {
    id: "career_guides",
    links: {
      en: [
        {
          title: "Preparing an Academic CV",
          description:
            "Written by an SFU math professor, this guide details the key points of writing an academic CV, including category structure, formatting standards, and content quality.",
          url: "https://www.sfu.ca/~jstockie/research/cfdgroup/cvs2017.pdf",
        },
        {
          title: "Job Search Strategies (Beedie School of Business)",
          description:
            "Covers the entire job search process, including industry research, optimizing application documents, networking, and interview preparation. Especially suitable for business students.",
          url: "https://beediecommunity.sfu.ca/content/documents/Link/CMC/4_%20Job%20Search%20Strategies.pdf",
        },
        {
          title: "Effective Cover Letters (Beedie Real Estate Centre)",
          description:
            "Provides a structural guide and writing advice for high-quality cover letters, including techniques for targeting specific positions.",
          url: "https://beediecommunity.sfu.ca/content/documents/Link/Cover%20Letters%282%29.pdf",
        },
      ],
      cn: [
        {
          title: "准备学术简历",
          description:
            "由 SFU 数学系教授编写，详细说明学术型简历的编写要点，包括分类结构、格式规范和内容优劣，是准备科研职位或研究生申请简历的实用模板。",
          url: "https://www.sfu.ca/~jstockie/research/cfdgroup/cvs2017.pdf",
        },
        {
          title: "求职策略 (Beedie商学院)",
          description:
            "全面涵盖求职流程，包括行业研究、求职文件优化、网络拓展与面试准备，尤其适合商科学生及职涯初入者。",
          url: "https://beediecommunity.sfu.ca/content/documents/Link/CMC/4_%20Job%20Search%20Strategies.pdf",
        },
        {
          title: "有效的求职信 (Beedie地产中心)",
          description:
            "提供撰写高质量求职信的结构指南和写作建议，包括针对目标职位的技巧。",
          url: "https://beediecommunity.sfu.ca/content/documents/Link/Cover%20Letters%282%29.pdf",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title:
            "SIAT Survival Guide (School of Interactive Arts and Technology)",
          description:
            "A 'survival guide' written by SIAT students, covering course recommendations, equipment, portfolio advice, and critique participation strategies.",
          url: "https://www.sfu.ca/~kkt12/SIAT%20Survival%20Guide/SIAT_survivalguide.pdf",
        },
        {
          title: "Urban Studies Student Handbook (Graduate Program)",
          description:
            "Official handbook for the 2024-25 Urban Studies graduate program, containing curriculum structure, research projects, internal communication, resource links, and graduation requirements.",
          url: "https://www.sfu.ca/content/dam/sfu/urban/currentstudents/Studenthandbook/2024-25_UrbanStudiesStudentHandbook.pdf",
        },
      ],
      cn: [
        {
          title: "SIAT生存指南 (互动艺术与技术学院)",
          description:
            "由 SIAT 学生编写的专业“生存指南”，内容包括课程推荐、工具设备、项目组合（portfolio）建议、批评会参与策略等，聚焦实战技能，非常实用。",
          url: "https://www.sfu.ca/~kkt12/SIAT%20Survival%20Guide/SIAT_survivalguide.pdf",
        },
        {
          title: "城市研究学生手册 (研究生项目)",
          description:
            "Urban Studies 项目官方手册，针对 2024–25 年度研究生，含课程结构、研究项目、校内交流、资源链接、毕业要求等。",
          url: "https://www.sfu.ca/content/dam/sfu/urban/currentstudents/Studenthandbook/2024-25_UrbanStudiesStudentHandbook.pdf",
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
      title: "Simon Fraser University",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🏔️ About Simon Fraser University",
      aboutParagraph1:
        "Simon Fraser University (SFU) is a public research university in British Columbia, Canada, with three campuses: Burnaby (main campus), Surrey, and Vancouver. Established in 1965, SFU has a reputation for its interdisciplinary programs and innovative spirit.",
      aboutParagraph2:
        "SFU is consistently ranked as one of Canada's top comprehensive universities and is known for its strong co-op education program, which provides students with valuable work experience. It is a member of the U15 Group of Canadian Research Universities.",
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
      career_guides: "Career Guides",
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
      title: "西蒙菲莎大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🏔️ 关于西蒙菲莎大学",
      aboutParagraph1:
        "西蒙菲莎大学（SFU）是加拿大不列颠哥伦比亚省的一所公立研究型大学，拥有三个校区：本那比（主校区）、素里和温哥华。SFU成立于1965年，以其跨学科课程和创新精神而闻名。",
      aboutParagraph2:
        "SFU一直被评为加拿大顶尖的综合性大学之一，并以其强大的合作教育（co-op）项目而著称，该项目为学生提供了宝贵的工作经验。它是加拿大U15研究型大学联盟的成员。",
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
      career_guides: "职业指南",
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

const SFUUniversityPage = () => {
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
                  src="/logos/sfu.png"
                  alt="SFU Logo"
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
                              📍 8888 University Dr, Burnaby, BC V5A 1S6, Canada
                              <br />
                              📞 (778) 782-3111
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.sfu.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.sfu.ca
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

export default SFUUniversityPage;
