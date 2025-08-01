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
          url: "https://www.topuniversities.com/universities/universite-de-montreal",
        },
        {
          title: "Campus Map",
          url: "https://plancampus.umontreal.ca/montreal/",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/universite-de-montreal",
        },
        { title: "校区地图", url: "https://plancampus.umontreal.ca/montreal/" },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Programs List / Viewbook",
          url: "https://admission.umontreal.ca/en/programs-of-study/",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.umontreal.ca/en/faculties-and-schools/",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://admission.umontreal.ca/en/programs-of-study/",
        },
        {
          title: "学院介绍",
          url: "https://www.umontreal.ca/en/faculties-and-schools/",
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
          url: "https://admission.umontreal.ca/programmes-de-1er-cycle/",
        },
        {
          title: "Entry Requirements",
          url: "https://admission.umontreal.ca/en/studies/undergraduate-programs/",
        },
        {
          title: "Important Dates",
          url: "https://admission.umontreal.ca/en/admissions/preparing-your-application/respect-official-deadlines/?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://admission.umontreal.ca/programmes-de-1er-cycle/",
        },
        {
          title: "入学要求",
          url: "https://admission.umontreal.ca/en/studies/undergraduate-programs/",
        },
        {
          title: "重要日期",
          url: "https://admission.umontreal.ca/en/admissions/preparing-your-application/respect-official-deadlines/?utm_source=chatgpt.com",
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
          url: "https://admission.umontreal.ca/en/admissions/submitting-your-application/submit-an-application/",
        },
      ],
      cn: [
        {
          title: "直申通道",
          url: "https://admission.umontreal.ca/en/admissions/submitting-your-application/submit-an-application/",
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
          url: "https://esp.umontreal.ca/english/what-you-need-to-know/admission/tuition-fees/",
        },
        {
          title: "Scholarship Search",
          url: "https://admission.umontreal.ca/bourses-pour-etudiants-internationaux/",
        },
        {
          title: "Work-Study Program",
          url: "https://vieetudiante.umontreal.ca/aide-financiere-emploi/travail-etudiant-perspectives-carriere/programme-etudes-travail",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://esp.umontreal.ca/english/what-you-need-to-know/admission/tuition-fees/",
        },
        {
          title: "奖学金查询",
          url: "https://admission.umontreal.ca/bourses-pour-etudiants-internationaux/",
        },
        {
          title: "勤工助学项目",
          url: "https://vieetudiante.umontreal.ca/aide-financiere-emploi/travail-etudiant-perspectives-carriere/programme-etudes-travail",
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
          url: "https://vieetudiante.umontreal.ca/experience-etudiante/implication-benevole/regroupements-etudiants",
        },
        {
          title: "Athletics & Recreation",
          url: "https://www.umontreal.ca/en/activities-and-services/",
        },
      ],
      cn: [
        {
          title: "学生社团",
          url: "https://vieetudiante.umontreal.ca/experience-etudiante/implication-benevole/regroupements-etudiants",
        },
        {
          title: "体育与运动",
          url: "https://www.umontreal.ca/en/activities-and-services/",
        },
      ],
    },
  },
  {
    id: "residence-housing",
    links: {
      en: [
        {
          title: "Student Services (Housing)",
          url: "https://admission.umontreal.ca/decouvrir-ludem/joindre-la-communaute/services-aux-etudiants/",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://vieetudiante.umontreal.ca/a-propos/service/logement-hors-campus",
        },
      ],
      cn: [
        {
          title: "学生服务（住宿）",
          url: "https://admission.umontreal.ca/decouvrir-ludem/joindre-la-communaute/services-aux-etudiants/",
        },
        {
          title: "校外住宿办公室",
          url: "https://vieetudiante.umontreal.ca/a-propos/service/logement-hors-campus",
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
          url: "https://admission.umontreal.ca/en/who-are-you/foreign-student/",
        },
        {
          title: "Immigration Info",
          url: "https://international.umontreal.ca/english/home/",
        },
        {
          title: "Required Documents",
          url: "https://registraire.umontreal.ca/etudes-et-services/etudiants-internationaux-exigences-documentaires/international-students-required-documents/",
        },
        {
          title: "Health & Wellness",
          url: "https://vieetudiante.umontreal.ca/sante-bien-etre",
        },
      ],
      cn: [
        {
          title: "国际事务办公室",
          url: "https://admission.umontreal.ca/en/who-are-you/foreign-student/",
        },
        {
          title: "移民信息",
          url: "https://international.umontreal.ca/english/home/",
        },
        {
          title: "所需文件",
          url: "https://registraire.umontreal.ca/etudes-et-services/etudiants-internationaux-exigences-documentaires/international-students-required-documents/",
        },
        {
          title: "健康与心理支持",
          url: "https://vieetudiante.umontreal.ca/sante-bien-etre",
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
          url: "https://www.umontreal.ca/carrieres/",
        },
        {
          title: "Co-op / Internship Info",
          url: "https://diro.umontreal.ca/english/student-resources/internships/co-op-option/",
        },
        {
          title: "Alumni Network",
          url: "https://reseau.umontreal.ca/s/1857/bp18/Home.aspx?gid=2&pgid=61",
        },
      ],
      cn: [
        { title: "职业中心主页", url: "https://www.umontreal.ca/carrieres/" },
        {
          title: "Co-op / 实习信息",
          url: "https://diro.umontreal.ca/english/student-resources/internships/co-op-option/",
        },
        {
          title: "校友网络",
          url: "https://reseau.umontreal.ca/s/1857/bp18/Home.aspx?gid=2&pgid=61",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "10 Things to Do When You Arrive",
          url: "https://admission.umontreal.ca/en/focus-udem/article/10-things-to-do-when-you-arrive-in-montreal/",
        },
        {
          title: "Finding an Apartment",
          url: "https://admission.umontreal.ca/en/focus-udem/article/finding-an-apartment-in-montreal-the-first-steps/",
        },
        {
          title: "COVID-19 Info",
          url: "https://infocovid19.umontreal.ca/en/english/",
        },
        {
          title: "Chinese Student Resources (CSSA)",
          url: "https://ca.linkedin.com/in/udem-cssa-405b46184",
        },
      ],
      cn: [
        {
          title: "抵达蒙特利尔后要做的10件事",
          url: "https://admission.umontreal.ca/en/focus-udem/article/10-things-to-do-when-you-arrive-in-montreal/",
        },
        {
          title: "寻找公寓",
          url: "https://admission.umontreal.ca/en/focus-udem/article/finding-an-apartment-in-montreal-the-first-steps/",
        },
        {
          title: "COVID-19 信息",
          url: "https://infocovid19.umontreal.ca/en/english/",
        },
        {
          title: "华人学生资源 (CSSA)",
          url: "https://ca.linkedin.com/in/udem-cssa-405b46184",
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
          url: "https://vieetudiante.umontreal.ca/activites/campus-tour-in-english/15187",
        },
        {
          title: "Virtual Campus VR",
          url: "https://admission.umontreal.ca/universite-de-montreal/visite-virtuelle/",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/@umontreal",
        },
        {
          title: "Official Instagram",
          url: "https://www.umontreal.ca/reseaux-sociaux/instagram/",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://vieetudiante.umontreal.ca/activites/campus-tour-in-english/15187",
        },
        {
          title: "虚拟校园 VR",
          url: "https://admission.umontreal.ca/universite-de-montreal/visite-virtuelle/",
        },
        { title: "官方 YouTube", url: "https://www.youtube.com/@umontreal" },
        {
          title: "官方 Instagram",
          url: "https://www.umontreal.ca/reseaux-sociaux/instagram/",
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
          title: "Admission Brochure – Undergraduate",
          description:
            "Official UdeM guide covering all undergraduate programs, academic requirements, admission process, tuition, campus life, and student services.",
          url: "https://registraire.umontreal.ca/fileadmin/registrariat/documents/Annuaires/Guide_admission/Guide_admission-2023-2024.pdf",
        },
        {
          title:
            "“Starting University” Roadmap – International Students (2025)",
          description:
            "A timeline guide for new international students, covering budget, housing, transport, language adaptation, student services, and community events.",
          url: "https://admission.umontreal.ca/fileadmin/fichiers/Conversion_2025/RDV-Admis-Livret-International_2025_EN.pdf",
        },
        {
          title: "Future Students Out of Quebec” Viewbook (2022–23)",
          description:
            "For Canadian and international applicants outside Quebec, detailing programs, scholarships, tuition, language support, and application steps.",
          url: "https://admission.umontreal.ca/fileadmin/fichiers/pages/Brochures/2022-2023/Brochure_UdeM_Hors_Quebec_2022-2023_EN.pdf",
        },
      ],
      cn: [
        {
          title: "本科招生手册",
          description:
            "来自官网“下载我们的招生手册”页面，由 UdeM 官方提供，内容涵盖所有本科专业、学术要求、入学流程、学费、校园生活与学生服务等。",
          url: "https://registraire.umontreal.ca/fileadmin/registrariat/documents/Annuaires/Guide_admission/Guide_admission-2023-2024.pdf",
        },
        {
          title: "“开启大学生活”路线图 – 国际学生 (2025)",
          description:
            "聚焦国际新生，列出入学前到入学后的关键事项指南，如预算、住宿、交通、语言适应、学生服务与社区活动。“从申请到第一节课”的时间线清晰。",
          url: "https://admission.umontreal.ca/fileadmin/fichiers/Conversion_2025/RDV-Admis-Livret-International_2025_EN.pdf",
        },
        {
          title: "魁北克省外未来学生宣传册 (2022–23)",
          description:
            "专为魁北克省以外的加拿大省份及国际申请者准备，介绍项目、奖学金、学费、语言支持与申请步骤，内容仍具参考价值。",
          url: "https://admission.umontreal.ca/fileadmin/fichiers/pages/Brochures/2022-2023/Brochure_UdeM_Hors_Quebec_2022-2023_EN.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "Université de Montréal International",
          description:
            "Explains that on-campus housing is mainly for local students with fewer options for exchange students; provides steps and platform recommendations for finding off-campus housing.",
          url: "https://international.umontreal.ca/fileadmin/international/documents/Mobilite/Fiche_information_UdeM.pdf",
        },
        {
          title: "UdeM Campus Tour Map",
          description:
            "PDF campus map marking locations of student service centers, international office, off-campus housing assistance office, etc.",
          url: "https://plancampus.umontreal.ca/public/plancampus/uploads/Depliant-plan-campus-HR.pdf",
        },
      ],
      cn: [
        {
          title: "蒙特利尔大学国际部",
          description:
            "介绍校内住宿主要面向本地学生，交换生选择较少；提供寻找校外住房的步骤与平台建议（如学生住房银行、Facebook社群），并列出医疗保险、签证等实用信息。",
          url: "https://international.umontreal.ca/fileadmin/international/documents/Mobilite/Fiche_information_UdeM.pdf",
        },
        {
          title: "UdeM校园导览",
          description:
            "校园地图PDF，标注学生服务中心、国际办公室、校外住宿帮助办公地点等常用设施。",
          url: "https://plancampus.umontreal.ca/public/plancampus/uploads/Depliant-plan-campus-HR.pdf",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Official Regulations – Tuition & Other Fees (2025)",
          description:
            "Legal document detailing the fee structure, including per-credit fees, semester fees, student service fees, and specialized program fees.",
          url: "https://secretariatgeneral.umontreal.ca/public/secretariatgeneral/documents/doc_officiels/reglements/enseignement/regl20_1-reglement-relatif-droits-scolarite-autres-frais-exigibles-des-etudiants.pdf",
        },
        {
          title: "Job Search for Students and Graduates",
          description:
            "Produced by the Faculty of Law's Career Development Centre, this guide details strategies to enhance job competitiveness within Canada, including job platform recommendations.",
          url: "https://droit.umontreal.ca/fileadmin/droit/documents/PDF/CDP_Aminata/La_recherche_d_emploi_pour_etudiants_et_finissantes.pdf",
        },
        {
          title: "CV and Letter Samples",
          description:
            "Published by the Student Affairs Office, includes resume and cover letter templates for positions like research assistant, project coordinator, and research roles.",
          url: "https://cdn.vieetudiante.umontreal.ca/aide-financiere-emploi/travail-etudiant-perspectives-carriere/consultation-conseils-carriere-offres-emploi/Dossier-candidature-CV-lettre-annexes.pdf",
        },
      ],
      cn: [
        {
          title: "官方规定 - 学费及其他费用 (2025版)",
          description:
            "法规文件，详细列出收费结构，包括学分费、学期费、学生服务费、专家课程费等项，适用于制定预算与合规参考。",
          url: "https://secretariatgeneral.umontreal.ca/public/secretariatgeneral/documents/doc_officiels/reglements/enseignement/regl20_1-reglement-relatif-droits-scolarite-autres-frais-exigibles-des-etudiants.pdf",
        },
        {
          title: "学生与毕业生的求职",
          description:
            "由法学院职业发展中心制作，详述加拿大境内提升就业竞争力的策略，包含就业平台推荐、简历/求职信注意事项等。",
          url: "https://droit.umontreal.ca/fileadmin/droit/documents/PDF/CDP_Aminata/La_recherche_d_emploi_pour_etudiants_et_finissantes.pdf",
        },
        {
          title: "简历与信函范例",
          description:
            "由学生事务办公室发布，包含简历与求职信模板示例，涵盖研究助理、项目协调、科研职位等。",
          url: "https://cdn.vieetudiante.umontreal.ca/aide-financiere-emploi/travail-etudiant-perspectives-carriere/consultation-conseils-carriere-offres-emploi/Dossier-candidature-CV-lettre-annexes.pdf",
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
            "Undergraduate Guide to Biomedical Sciences (Faculty of Medicine)",
          description:
            "Details the goals, curriculum, faculty, and support for the biomedical sciences program.",
          url: "https://admission.umontreal.ca/fileadmin/fichiers/documents/references_pdf/Admission_a_un_Prog-Quebec_v4.pdf?utm_source=chatgpt.com",
        },
        {
          title: "Guide to a Minor in Arts and Sciences",
          description:
            "For the Arts and Sciences minor program, explaining course options, program flexibility, and credit requirements.",
          url: "https://safire.umontreal.ca/public/FAS/safire/Documents/Guide_%C3%A9tudiant_MAS.pdf",
        },
      ],
      cn: [
        {
          title: "生物医学科学本科指南（医学院）",
          description:
            "详尽介绍生物医学科学专业目标、课程结构、教学团队及入学支持。",
          url: "https://admission.umontreal.ca/fileadmin/fichiers/documents/references_pdf/Admission_a_un_Prog-Quebec_v4.pdf?utm_source=chatgpt.com",
        },
        {
          title: "文理辅修指南",
          description:
            "针对文理学院辅修项目，说明辅修课程设置、专业灵活性与学分要求。",
          url: "https://safire.umontreal.ca/public/FAS/safire/Documents/Guide_%C3%A9tudiant_MAS.pdf",
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
      title: "Université de Montréal",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "⚜️ About Université de Montréal",
      aboutParagraph1:
        "The Université de Montréal is a French-language public research university in Montreal, Quebec, Canada. It is one of the largest universities in the country and a member of the U15 Group of Canadian Research Universities.",
      aboutParagraph2:
        "Founded in 1878, UdeM is renowned for its comprehensive programs, particularly in health sciences, and its vibrant campus life in the multicultural city of Montreal. It attracts students from all over the world, contributing to a diverse and dynamic academic environment.",
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
      title: "蒙特利尔大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "⚜️ 关于蒙特利尔大学",
      aboutParagraph1:
        "蒙特利尔大学是位于加拿大魁北克省蒙特利尔市的一所法语公立研究型大学。它是加拿大规模最大的大学之一，也是加拿大U15研究型大学联盟的成员。",
      aboutParagraph2:
        "UdeM成立于1878年，以其全面的课程，尤其是在健康科学领域的卓越表现，以及在多元文化城市蒙特利尔充满活力的校园生活而闻名。它吸引了来自世界各地的学生，为多元化和充满活力的学术环境做出了贡献。",
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

const MontrealUniversityPage = () => {
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
                  src="/logos/montreal.png"
                  alt="Université de Montréal Logo"
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
                              📍 2900 Edouard Montpetit Blvd, Montreal, Quebec
                              H3T 1J4, Canada
                              <br />
                              📞 (514) 343-6111
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.umontreal.ca/en/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.umontreal.ca
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

export default MontrealUniversityPage;
