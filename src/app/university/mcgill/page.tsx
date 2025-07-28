"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

// Data structure holding both English and Chinese links for McGill University
const universityViewData = [
  {
    id: "overview",
    links: {
      en: [
        {
          title: "QS Ranking",
          url: "https://reporter.mcgill.ca/mcgill-no-1-in-canada-in-2026-qs-world-university-rankings/?utm_source=chatgpt.com",
        },
        { title: "Campus Map", url: "https://maps.mcgill.ca/" },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://reporter.mcgill.ca/mcgill-no-1-in-canada-in-2026-qs-world-university-rankings/?utm_source=chatgpt.com",
        },
        { title: "校区地图", url: "https://maps.mcgill.ca/" },
      ],
    },
  },
  {
    id: "academics",
    links: {
      en: [
        {
          title: "Programs List",
          url: "https://www.mcgill.ca/undergraduate-admissions/programs",
        },
        {
          title: "Viewbook (PDF)",
          url: "https://www.mcgill.ca/undergraduate-admissions/files/undergraduate-admissions/mcgill_undergraduate_programs_2020_en.pdf",
        },
        {
          title: "Faculty Introduction",
          url: "https://www.mcgill.ca/faculties/",
        },
      ],
      cn: [
        {
          title: "专业列表",
          url: "https://www.mcgill.ca/undergraduate-admissions/programs",
        },
        {
          title: "宣传册 (PDF)",
          url: "https://www.mcgill.ca/undergraduate-admissions/files/undergraduate-admissions/mcgill_undergraduate_programs_2020_en.pdf",
        },
        { title: "学院介绍", url: "https://www.mcgill.ca/faculties/" },
      ],
    },
  },
  {
    id: "admissions",
    links: {
      en: [
        {
          title: "Undergraduate Admission Home",
          url: "https://www.mcgill.ca/undergraduate-admissions/apply",
        },
        {
          title: "Entry Requirements",
          url: "https://www.mcgill.ca/undergraduate-admissions/apply/requirements",
        },
        {
          title: "Important Dates",
          url: "https://www.mcgill.ca/importantdates/key-dates",
        },
      ],
      cn: [
        {
          title: "本科申请主页",
          url: "https://www.mcgill.ca/undergraduate-admissions/apply",
        },
        {
          title: "入学要求",
          url: "https://www.mcgill.ca/undergraduate-admissions/apply/requirements",
        },
        {
          title: "重要日期",
          url: "https://www.mcgill.ca/importantdates/key-dates",
        },
      ],
    },
  },
  {
    id: "how-to-apply",
    links: {
      en: [
        {
          title: "Application Steps (PDF)",
          url: "https://www.mcgill.ca/undergraduate-admissions/files/undergraduate-admissions/steps_applying_2022_1.pdf",
        },
        {
          title: "FAQ for International Counsellors",
          url: "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/faq-counsellors",
        },
      ],
      cn: [
        {
          title: "申请步骤 (PDF)",
          url: "https://www.mcgill.ca/undergraduate-admissions/files/undergraduate-admissions/steps_applying_2022_1.pdf",
        },
        {
          title: "国际招生顾问常见问题解答",
          url: "https://www.mcgill.ca/undergraduate-admissions/apply/requirements/international/faq-counsellors",
        },
      ],
    },
  },
  {
    id: "cost-funding",
    links: {
      en: [
        {
          title: "Tuition & Fees Tables",
          url: "https://www.mcgill.ca/student-accounts/tuition-fees/tuition-and-fees-tables-and-rates",
        },
        {
          title: "Undergraduate Fees",
          url: "https://www.mcgill.ca/student-accounts/tuition-charges/fallwinter-term-tuition-and-fees/undergraduate-fees",
        },
        {
          title: "Entrance Scholarships",
          url: "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships",
        },
        {
          title: "All Scholarships & Aid",
          url: "https://www.mcgill.ca/studentaid/scholarships-aid",
        },
        {
          title: "Work-Study Program",
          url: "https://www.mcgill.ca/studentaid/work-study",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://www.mcgill.ca/student-accounts/tuition-fees/tuition-and-fees-tables-and-rates",
        },
        {
          title: "本科学费",
          url: "https://www.mcgill.ca/student-accounts/tuition-charges/fallwinter-term-tuition-and-fees/undergraduate-fees",
        },
        {
          title: "入学奖学金",
          url: "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships",
        },
        {
          title: "所有奖学金与助学金",
          url: "https://www.mcgill.ca/studentaid/scholarships-aid",
        },
        {
          title: "勤工助学项目",
          url: "https://www.mcgill.ca/studentaid/work-study",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        {
          title: "Student-led Clubs & Societies",
          url: "https://www.mcgill.ca/cle/life-campus/student-led-clubs-societies-and-associations",
        },
        {
          title: "Athletics & Recreation",
          url: "https://recreation.mcgill.ca/",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://www.mcgill.ca/foodservices/mealplans",
        },
      ],
      cn: [
        {
          title: "学生社团与协会",
          url: "https://www.mcgill.ca/cle/life-campus/student-led-clubs-societies-and-associations",
        },
        { title: "体育与运动", url: "https://recreation.mcgill.ca/" },
        {
          title: "校园餐饮计划",
          url: "https://www.mcgill.ca/foodservices/mealplans",
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
          url: "https://www.mcgill.ca/students/housing/",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.mcgill.ca/students/housing/fees-applying/undergrad-downtown-fees",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://www.mcgill.ca/students/housing/offcampus",
        },
      ],
      cn: [
        { title: "宿舍主页", url: "https://www.mcgill.ca/students/housing/" },
        {
          title: "房型与费用",
          url: "https://www.mcgill.ca/students/housing/fees-applying/undergrad-downtown-fees",
        },
        {
          title: "校外住宿办公室",
          url: "https://www.mcgill.ca/students/housing/offcampus",
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
          url: "https://www.mcgill.ca/internationalstudents/",
        },
        {
          title: "Study Permit FAQs",
          url: "https://www.mcgill.ca/internationalstudents/faqs/study-permit-faqs",
        },
        {
          title: "Post-Graduation Work Permit",
          url: "https://www.mcgill.ca/internationalstudents/work/post-graduation-work-permit",
        },
        {
          title: "Health & Wellness Hub",
          url: "https://www.mcgill.ca/wellness-hub/",
        },
      ],
      cn: [
        {
          title: "国际学生服务",
          url: "https://www.mcgill.ca/internationalstudents/",
        },
        {
          title: "学签常见问题",
          url: "https://www.mcgill.ca/internationalstudents/faqs/study-permit-faqs",
        },
        {
          title: "毕业后工作许可",
          url: "https://www.mcgill.ca/internationalstudents/work/post-graduation-work-permit",
        },
        {
          title: "健康与心理支持中心",
          url: "https://www.mcgill.ca/wellness-hub/",
        },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Centre Home (CaPS)",
          url: "https://www.mcgill.ca/caps/",
        },
        {
          title: "Engineering Internships & Co-ops",
          url: "https://www.mcgill.ca/engineering/students/undergraduate/internships-and-co-ops",
        },
        {
          title: "Internship Opportunities (CaPS)",
          url: "https://www.mcgill.ca/caps/students/internship/internship-opportunities",
        },
        {
          title: "Alumni Network",
          url: "https://myalumni.mcgill.ca/s/1762/gid2/interior-connect.aspx?pgid=490&gid=2",
        },
      ],
      cn: [
        { title: "职业中心主页 (CaPS)", url: "https://www.mcgill.ca/caps/" },
        {
          title: "工程实习与 Co-op",
          url: "https://www.mcgill.ca/engineering/students/undergraduate/internships-and-co-ops",
        },
        {
          title: "实习机会 (CaPS)",
          url: "https://www.mcgill.ca/caps/students/internship/internship-opportunities",
        },
        {
          title: "校友网络",
          url: "https://myalumni.mcgill.ca/s/1762/gid2/interior-connect.aspx?pgid=490&gid=2",
        },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Getting Around Montreal",
          url: "https://www.mcgill.ca/gradhub/montreal-and-getting-involved/housing-community/getting-around",
        },
        {
          title: "Emergency Procedures",
          url: "https://www.mcgill.ca/campussafety/emergency-management/emergency-procedures-and-protocols",
        },
      ],
      cn: [
        {
          title: "蒙特利尔交通指南",
          url: "https://www.mcgill.ca/gradhub/montreal-and-getting-involved/housing-community/getting-around",
        },
        {
          title: "应急程序",
          url: "https://www.mcgill.ca/campussafety/emergency-management/emergency-procedures-and-protocols",
        },
      ],
    },
  },
  {
    id: "tours-media",
    links: {
      en: [
        {
          title: "Campus Tours",
          url: "https://www.mcgill.ca/undergraduate-admissions/visit",
        },
        {
          title: "Virtual Campus VR",
          url: "https://future.mcgill.ca/portal/virtual_campus_tours",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/c/mcgilluniversity/live",
        },
        {
          title: "Social Media Directory",
          url: "https://www.mcgill.ca/newsroom/faculty-and-staff/socialmedia?utm_source=chatgpt.com",
        },
      ],
      cn: [
        {
          title: "校园参观",
          url: "https://www.mcgill.ca/undergraduate-admissions/visit",
        },
        {
          title: "虚拟校园 VR",
          url: "https://future.mcgill.ca/portal/virtual_campus_tours",
        },
        {
          title: "官方 YouTube",
          url: "https://www.youtube.com/c/mcgilluniversity/live",
        },
        {
          title: "社交媒体目录",
          url: "https://www.mcgill.ca/newsroom/faculty-and-staff/socialmedia?utm_source=chatgpt.com",
        },
      ],
    },
  },
];

const pdfViewData = [
  {
    id: "admission_guides",
    links: {
      en: [
        {
          title: "McGill Undergraduate Viewbooks 2025-26",
          description:
            "Comprehensive guides covering academic programs, admission requirements, campus life, and international student support.",
          url: "https://www.mcgill.ca/undergraduate-admissions/apply/undergraduate-viewbooks",
        },
        {
          title: "Step-by-Step Guide to Applying to McGill Online (2022)",
          description:
            "A detailed, illustrated guide to the online application process, from creating an account to submitting materials.",
          url: "https://www.mcgill.ca/undergraduate-admissions/files/undergraduate-admissions/steps_applying_2022_1.pdf",
        },
        {
          title: "Admissions Guide – McGill Schulich School of Music (2024)",
          description:
            "An official guide for applicants to the undergraduate programs at the Schulich School of Music.",
          url: "https://www.mcgill.ca/music/files/music/slch_admissionsguide_2024_ang.pdf",
        },
      ],
      cn: [
        {
          title: "麦吉尔大学本科招生手册 2025-26",
          description:
            "每本 Viewbook 包含学科介绍、入学要求、校园生活、国际学生支持及申请流程概览，适合全面了解 McGill 入学信息。",
          url: "https://www.mcgill.ca/undergraduate-admissions/apply/undergraduate-viewbooks",
        },
        {
          title: "McGill 在线申请分步指南 (2022)",
          description:
            "详细介绍申请流程，从注册账号、填写学历信息、材料上传到提交申请，全程图文并茂，非常适合新手申请者参考。",
          url: "https://www.mcgill.ca/undergraduate-admissions/files/undergraduate-admissions/steps_applying_2022_1.pdf",
        },
        {
          title: "舒立克音乐学院招生指南 (2024)",
          description:
            "这是一份专为申请 McGill 大学舒立克音乐学院本科项目的学生准备的官方指南。",
          url: "https://www.mcgill.ca/music/files/music/slch_admissionsguide_2024_ang.pdf",
        },
      ],
    },
  },
  {
    id: "orientation_and_housing",
    links: {
      en: [
        {
          title: "Orientation Handbook 2024–2025 (McGill University Library)",
          description:
            "A guide for new students covering library branches, services, borrowing procedures, and e-resource access.",
          url: "https://www.mcgill.ca/library/files/library/welcome_handbook_2024-2025.pdf",
        },
        {
          title: "Residence Handbook 2025–2026 (Downtown Campus)",
          description:
            "Outlines residence rules, roommate agreements, safety protocols, and disciplinary procedures for the downtown campus.",
          url: "https://www.mcgill.ca/students/housing/files/students.housing/residence_handbook.pdf",
        },
        {
          title: "First Year Undergraduate Residence Options 2025–2026",
          description:
            "Lists various residence types, including rent, facilities, and meal plan information.",
          url: "https://www.mcgill.ca/students/housing/files/students.housing/blng_print_firstyearchart_2025.pdf?utm_source",
        },
      ],
      cn: [
        {
          title: "新生迎新手册 2024–2025 (McGill 图书馆)",
          description:
            "这份手册由 McGill 图书馆发布，专为新生设计，内容涵盖图书馆分支介绍、服务概览、入馆步骤、借书流程、电子资源使用、文献检索指导和常见问题。",
          url: "https://www.mcgill.ca/library/files/library/welcome_handbook_2024-2025.pdf",
        },
        {
          title: "宿舍手册 2025–2026 (市中心校区)",
          description:
            "介绍居住团队哲学、宿舍规则/行为准则、室友协议、安全与健康支持、纪律流程等。",
          url: "https://www.mcgill.ca/students/housing/files/students.housing/residence_handbook.pdf",
        },
        {
          title: "大一本科生住宿选项 2025–2026",
          description:
            "列出多种宿舍类型（传统、现代、公寓、共享住房），包括租金、设施（健身房、厨房）、入住时长与餐食计划参考。",
          url: "https://www.mcgill.ca/students/housing/files/students.housing/blng_print_firstyearchart_2025.pdf?utm_source",
        },
      ],
    },
  },
  {
    id: "finance_and_career",
    links: {
      en: [
        {
          title: "Tuition & Fees 2025‑26 – Undergraduate",
          description:
            "Detailed breakdown of tuition, service fees, and insurance costs by student status and program.",
          url: "https://www.mcgill.ca/student-accounts/tuition-fees/general-tuition-and-fees-information/tuition-fees-2025-26?utm_source",
        },
        {
          title: "CaPS Job Search Handbook",
          description:
            "Provided by McGill's Career Planning Service (CaPS), covering the entire job search process from self-assessment to post-hire management.",
          url: "https://www.mcgill.ca/caps/files/caps/handbook_jobsearchhandbook.pdf?utm_source",
        },
        {
          title: "The Complete Guide to Finding Your Ideal Job",
          description:
            "A comprehensive job search handbook for engineering students, including career exploration and resume tools.",
          url: "https://www.mcgill.ca/careers4engineers/files/careers4engineers/jobsearchhandbook-3rdextended.pdf?",
        },
      ],
      cn: [
        {
          title: "2025-26 学费与费用 - 本科生",
          description:
            "按学生身份（魁北克居民、加拿大其他省份、国际学生）与课程类型分类，详细展示每学分费用、服务费与保险等花费结构。",
          url: "https://www.mcgill.ca/student-accounts/tuition-fees/general-tuition-and-fees-information/tuition-fees-2025-26?utm_source",
        },
        {
          title: "CaPS 求职手册",
          description:
            "由 McGill Career Planning Service (CaPS) 提供，覆盖整个求职流程，包含自我评估、职位探索、 CV 与求职信写作、面试准备及入职后的管理。",
          url: "https://www.mcgill.ca/caps/files/caps/handbook_jobsearchhandbook.pdf?utm_source",
        },
        {
          title: "找到理想工作的完整指南",
          description:
            "由 McGill 为工程学生提供的综合求职手册，包含职业探索、企业调研、简历模板和工具资源。",
          url: "https://www.mcgill.ca/careers4engineers/files/careers4engineers/jobsearchhandbook-3rdextended.pdf?",
        },
      ],
    },
  },
  {
    id: "department_handbooks",
    links: {
      en: [
        {
          title: "Undergraduate Handbook 2025–2026 (Chemical Engineering)",
          description:
            "Details curriculum, academic requirements, program planning, and career paths for chemical engineering students.",
          url: "https://www.mcgill.ca/chemeng/undergrad?utm_source",
        },
        {
          title:
            "Undergraduate Student Handbook 2024–2025 (Mechanical Engineering)",
          description:
            "Includes academic integrity policies, regulations, advisor contacts, and award information for mechanical engineering students.",
          url: "https://www.mcgill.ca/mecheng/files/mecheng/studenthandbook2024.pdf?utm_source",
        },
      ],
      cn: [
        {
          title: "本科生手册 2025–2026 (化学工程)",
          description:
            "详尽介绍课程设置、学术要求、项目规划、学习资源、咨询服务与职业路径，适合化工专业新生了解必修流程与资源。",
          url: "https://www.mcgill.ca/chemeng/undergrad?utm_source",
        },
        {
          title: "本科生手册 2024–2025 (机械工程)",
          description:
            "包含学术诚信、规定制度、导师联系方式、跨学科选修指南、奖项与学术资源介绍，适合新生熟悉工程学院规范。",
          url: "https://www.mcgill.ca/mecheng/files/mecheng/studenthandbook2024.pdf?utm_source",
        },
      ],
    },
  },
];

// Centralized object for all translated UI text
const translations = {
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
      title: "McGill University",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🎓 About McGill University",
      aboutParagraph1:
        "Founded in 1821, McGill University is one of Canada's best-known institutions of higher learning and one of the leading universities in the world. With students coming to McGill from over 150 countries, its student body is the most internationally diverse of any research-intensive university in the country.",
      aboutParagraph2:
        "Located in vibrant Montreal, Quebec, McGill is a member of the U15 Group of Canadian Research Universities and is renowned for its programs in medicine, law, engineering, and the arts.",
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
      title: "麦吉尔大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🎓 关于麦吉尔大学",
      aboutParagraph1:
        "麦吉尔大学成立于1821年，是加拿大最著名的高等学府之一，也是世界领先的大学之一。麦吉尔大学的学生来自150多个国家，其学生群体的国际多样性在加拿大所有研究密集型大学中首屈一指。",
      aboutParagraph2:
        "麦吉尔大学位于充满活力的魁北克省蒙特利尔市，是加拿大U15研究型大学联盟的成员，以其在医学、法律、工程和文科领域的课程而闻名。",
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

const McGillUniversityPage = () => {
  const [showInfoPanel, setShowInfoPanel] = useState(true);
  const [activeView, setActiveView] = useState<
    "university" | "highschool" | "instructions" | "pdfView"
  >("university");
  const [language, setLanguage] = useState<"en" | "cn">("en");

  const t = translations[language]; // Shortcut for current language translations

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
            {universityViewData.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-[#247e9f] hover:underline font-medium"
                >
                  {t.sectionTitles[section.id]}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex min-h-screen px-4 md:px-12 py-8">
          <div className="flex-1 flex flex-col">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 md:px-12 py-4 border-b">
              <div className="flex items-center">
                <img
                  src="/logos/mcgill.png"
                  alt="McGill University Logo"
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
              {/* UNIVERSITY VIEW */}
              {activeView === "university" && (
                <div className="flex gap-8">
                  <div className="flex-1 space-y-10 text-gray-700">
                    {universityViewData.map((section) => (
                      <section key={section.id} id={section.id}>
                        {section.id === "overview" ? (
                          <>
                            <SectionHeaderWithArrow
                              title={t.sectionTitles[section.id]}
                              onClick={() => setShowInfoPanel(!showInfoPanel)}
                            />
                            <p className="mb-4">
                              📍 845 Sherbrooke St W, Montreal, Quebec H3A 0G4,
                              Canada
                              <br />
                              � (514) 398-4455
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.mcgill.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.mcgill.ca
                              </a>
                            </p>
                          </>
                        ) : (
                          <h2 className="text-2xl font-bold mb-2">
                            {t.sectionTitles[section.id]}
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
                        {t.sectionTitles[section.id]}
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

export default McGillUniversityPage;
