"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

// Data structure holding both English and Chinese links for the University of Toronto
const universityViewData = [
  {
    id: "overview",
    links: {
      en: [
        {
          title: "QS Ranking",
          url: "https://www.topuniversities.com/universities/university-toronto?utm_source=chatgpt.com",
        },
        {
          title: "Campus Map",
          url: "https://map.concept3d.com/?id=1809#!ct/45469?s/",
        },
      ],
      cn: [
        {
          title: "QS 排名",
          url: "https://www.topuniversities.com/universities/university-toronto?utm_source=chatgpt.com",
        },
        {
          title: "校区地图",
          url: "https://map.concept3d.com/?id=1809#!ct/45469?s/",
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
          url: "https://future.utoronto.ca/academics/programs-of-study/",
        },
        {
          title: "Faculty of Arts & Science",
          url: "https://www.artsci.utoronto.ca/",
        },
        {
          title: "Faculty of Applied Science & Engineering",
          url: "https://www.engineering.utoronto.ca/",
        },
        {
          title: "Rotman School of Management",
          url: "https://www.rotman.utoronto.ca/",
        },
        {
          title: "Daniels Faculty of Architecture, Landscape, and Design",
          url: "https://daniels.utoronto.ca/",
        },
        { title: "Faculty of Music", url: "https://music.utoronto.ca/" },
        {
          title: "Faculty of Information (iSchool)",
          url: "https://ischool.utoronto.ca/",
        },
        {
          title: "Temerty Faculty of Medicine",
          url: "https://medicine.utoronto.ca/",
        },
      ],
      cn: [
        {
          title: "专业列表 / 宣传册",
          url: "https://future.utoronto.ca/academics/programs-of-study/",
        },
        { title: "文理学院", url: "https://www.artsci.utoronto.ca/" },
        {
          title: "应用科学与工程学院",
          url: "https://www.engineering.utoronto.ca/",
        },
        { title: "罗特曼管理学院", url: "https://www.rotman.utoronto.ca/" },
        {
          title: "丹尼尔斯建筑、景观与设计学院",
          url: "https://daniels.utoronto.ca/",
        },
        { title: "音乐学院", url: "https://music.utoronto.ca/" },
        { title: "信息学院 (iSchool)", url: "https://ischool.utoronto.ca/" },
        { title: "泰默蒂医学院", url: "https://medicine.utoronto.ca/" },
      ],
    },
  },
  {
    id: "admissions",
    links: {
      en: [
        {
          title: "Undergraduate Admission Home",
          url: "https://future.utoronto.ca/apply/",
        },
        {
          title: "Entry Requirements",
          url: "https://future.utoronto.ca/apply/requirements/",
        },
        {
          title: "Important Dates",
          url: "https://future.utoronto.ca/apply/important-application-dates/",
        },
      ],
      cn: [
        { title: "本科申请主页", url: "https://future.utoronto.ca/apply/" },
        {
          title: "入学要求",
          url: "https://future.utoronto.ca/apply/requirements/",
        },
        {
          title: "重要日期",
          url: "https://future.utoronto.ca/apply/important-application-dates/",
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
          url: "https://www.ouac.on.ca/guide/undergrad-toronto/",
        },
        {
          title: "Direct Application (Exclusive)",
          url: "https://future.utoronto.ca/apply/applying/",
        },
      ],
      cn: [
        {
          title: "安省申请流程（OUAC）",
          url: "https://www.ouac.on.ca/guide/undergrad-toronto/",
        },
        {
          title: "直申通道（Exclusive）",
          url: "https://future.utoronto.ca/apply/applying/",
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
          url: "https://planningandbudget.utoronto.ca/tuition-fee-lookup-tool/",
        },
        {
          title: "Scholarship Search",
          url: "https://future.utoronto.ca/finances/awards/",
        },
        {
          title: "Work-Study / On-campus Job",
          url: "https://www.registrar.utoronto.ca/financial-aid-awards/work-study-program/",
        },
      ],
      cn: [
        {
          title: "学费表",
          url: "https://planningandbudget.utoronto.ca/tuition-fee-lookup-tool/",
        },
        {
          title: "奖学金查询",
          url: "https://future.utoronto.ca/finances/awards/",
        },
        {
          title: "勤工助学 / 校园兼职",
          url: "https://www.registrar.utoronto.ca/financial-aid-awards/work-study-program/",
        },
      ],
    },
  },
  {
    id: "campus-life",
    links: {
      en: [
        { title: "Clubs Directory", url: "https://sop.utoronto.ca/groups/" },
        {
          title: "Athletics & Recreation",
          url: "https://www.utsc.utoronto.ca/athletics/",
        },
        {
          title: "Dining & Meal Plan",
          url: "https://foodservices.utoronto.ca/chestnut-dining-commons/",
        },
      ],
      cn: [
        { title: "社团目录", url: "https://sop.utoronto.ca/groups/" },
        { title: "体育与运动", url: "https://www.utsc.utoronto.ca/athletics/" },
        {
          title: "校园餐饮计划",
          url: "https://foodservices.utoronto.ca/chestnut-dining-commons/",
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
          url: "https://www.utm.utoronto.ca/housing/welcome-home",
        },
        {
          title: "Room Types & Fees",
          url: "https://www.torontomu.ca/housing/future-students/fees/?utm_source=chatgpt.com",
        },
        {
          title: "Off-Campus Housing Office",
          url: "https://studentlife.utoronto.ca/department/housing/",
        },
      ],
      cn: [
        {
          title: "宿舍主页",
          url: "https://www.utm.utoronto.ca/housing/welcome-home",
        },
        {
          title: "房型与费用",
          url: "https://www.torontomu.ca/housing/future-students/fees/?utm_source=chatgpt.com",
        },
        {
          title: "校外住宿办公室",
          url: "https://studentlife.utoronto.ca/department/housing/",
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
          url: "https://internationalexperience.utoronto.ca/",
        },
        { title: "Study Permit / PGWP Guide", url: "#" },
        { title: "Health & Wellness", url: "#" },
      ],
      cn: [
        {
          title: "国际事务办公室",
          url: "https://internationalexperience.utoronto.ca/",
        },
        { title: "学签 / PGWP 指南", url: "#" },
        { title: "健康与心理支持", url: "#" },
      ],
    },
  },
  {
    id: "co-op-careers",
    links: {
      en: [
        {
          title: "Career Centre Home",
          url: "https://studentlife.utoronto.ca/department/career-exploration-education/",
        },
        {
          title: "Co-op / Internship Info",
          url: "https://utm.calendar.utoronto.ca/section/Co~op-Internship-Program",
        },
        { title: "Alumni Network", url: "https://alumni.utoronto.ca/" },
      ],
      cn: [
        {
          title: "职业中心主页",
          url: "https://studentlife.utoronto.ca/department/career-exploration-education/",
        },
        {
          title: "Co-op / 实习信息",
          url: "https://utm.calendar.utoronto.ca/section/Co~op-Internship-Program",
        },
        { title: "校友网络", url: "https://alumni.utoronto.ca/" },
      ],
    },
  },
  {
    id: "city-snapshot",
    links: {
      en: [
        {
          title: "Transportation & Housing Guide",
          url: "https://en.wikipedia.org/wiki/Public_transportation_in_Toronto",
        },
        { title: "Weather / Safety Report", url: "#" },
        { title: "Chinese Student Resources", url: "#" },
      ],
      cn: [
        {
          title: "交通 & 租房指南",
          url: "https://en.wikipedia.org/wiki/Public_transportation_in_Toronto",
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
          url: "https://apply.adm.utoronto.ca/portal/StGeorgeCampusTours",
        },
        {
          title: "Virtual Campus VR",
          url: "https://future.utoronto.ca/visit/campus-tours/virtual-tours/",
        },
        {
          title: "Official YouTube",
          url: "https://www.youtube.com/universitytoronto",
        },
        {
          title: "Official Instagram",
          url: "https://www.instagram.com/futureuoft/",
        },
      ],
      cn: [
        {
          title: "预约校园参观",
          url: "https://apply.adm.utoronto.ca/portal/StGeorgeCampusTours",
        },
        {
          title: "虚拟校园 VR",
          url: "https://future.utoronto.ca/visit/campus-tours/virtual-tours/",
        },
        {
          title: "官方 YouTube",
          url: "https://www.youtube.com/universitytoronto",
        },
        {
          title: "官方 Instagram",
          url: "https://www.instagram.com/futureuoft/",
        },
      ],
    },
  },
];

const pdfViewData = [
  {
    id: "housing_and_campus_life",
    links: {
      en: [
        {
          title: "UTSU Housing Guide (2022)",
          description:
            "Published by the U of T Student Union, this comprehensive guide covers housing options (on/off-campus), rental processes, contract tips, roommate advice, budget planning, safety measures, and dispute resolution.",
          url: "https://www.utsu.ca/wp-content/uploads/2022/08/UTSU-Housing-Guide-2022.pdf",
        },
      ],
      cn: [
        {
          title: "UTSU 住宿指南 (2022)",
          description:
            "由多大学生会发布，内容涵盖住宿选择（校内校外）、租房流程、签约要点、合租提示、预算规划、安全预防措施及常见纠纷处理建议，是实用性极强的综合住房资源指南。",
          url: "https://www.utsu.ca/wp-content/uploads/2022/08/UTSU-Housing-Guide-2022.pdf",
        },
      ],
    },
  },
  {
    id: "career_and_employment",
    links: {
      en: [
        {
          title:
            "Engineering Career Centre – Feedback & Recommendation Report (2017)",
          description:
            "An assessment report by the Engineering Society detailing the operations of the Engineering Career Centre (ECC) regarding PEY and eSIP programs, including student satisfaction, resource allocation, and recommendations for improvement.",
          url: "https://skule.ca/academics/files/final-engineering-career-centre-reccomenation-report.pdf",
        },
      ],
      cn: [
        {
          title: "工程职业中心 – 反馈与建议报告 (2017)",
          description:
            "由工程学会编写的评估报告，详细剖析工程职业中心（ECC）对 Professional Experience Year（PEY） 和 夏季实习项目(eSIP) 的运作方式、学生满意度（≈160份调查）、资源分配、财务结构及提供改进建议。",
          url: "https://skule.ca/academics/files/final-engineering-career-centre-reccomenation-report.pdf",
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
      title: "University of Toronto",
      helpText: "Need help? Book a meeting",
      bookButton: "Book Now",
    },
    universityView: {
      infoPanelTitle: "Overview:",
      aboutTitle: "🏰 About University of Toronto",
      aboutParagraph1:
        "Founded in 1827, the University of Toronto is Canada's largest university, recognized as a global leader in research and teaching. U of T operates on three campuses: St. George, Mississauga (UTM), and Scarborough (UTSC).",
      aboutParagraph2:
        "It is a member of the U15 Group of Canadian Research Universities and has produced numerous Nobel laureates, Turing Award winners, and world leaders. The university is known for its comprehensive programs, diverse student body, and vibrant city life.",
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
      housing_and_campus_life: "Housing / Campus Life",
      career_and_employment: "Career / Employment",
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
      title: "多伦多大学",
      helpText: "需要帮助？预约会议",
      bookButton: "立即预约",
    },
    universityView: {
      infoPanelTitle: "概览:",
      aboutTitle: "🏰 关于多伦多大学",
      aboutParagraph1:
        "多伦多大学成立于1827年，是加拿大规模最大的大学，被公认为研究和教学领域的全球领导者。多大拥有三个校区：圣乔治（St. George）、密西沙加（UTM）和士嘉堡（UTSC）。",
      aboutParagraph2:
        "该大学是加拿大U15研究型大学联盟的成员，培养了众多诺贝尔奖得主、图灵奖得主和世界领袖。多大以其全面的课程、多元化的学生群体和充满活力的城市生活而闻名。",
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
      housing_and_campus_life: "住宿 / 校园生活",
      career_and_employment: "职业 / 就业",
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

const TorontoUniversityPage = () => {
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
                  src="/logos/toronto.png"
                  alt="University of Toronto Logo"
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
                              📍 27 King's College Cir, Toronto, ON M5S, Canada
                              <br />
                              📞 (416) 978-2011
                              <br />
                              🌐{" "}
                              <a
                                href="https://www.utoronto.ca/"
                                target="_blank"
                                className="text-[#247e9f] underline"
                              >
                                www.utoronto.ca
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

export default TorontoUniversityPage;
