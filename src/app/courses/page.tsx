"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";

type VideoLink = {
  title: string;
  url: string;
  bg: string;
};

type CourseData = {
  [category: string]: {
    [section: string]: VideoLink[];
  };
};

const mockData: CourseData = {
  "Outside from school": {
    Leadership: [
      {
        title: "填表！申请基本法：美本申请的活动列表到底怎么填",
        url: "https://www.bilibili.com/video/BV1xu4y1p7RY/?spm_id_from=333.337.search-card.all.click&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "vid-bg/leadership/pic1.png",
      },
    ],
    "Build your own project": [
      {
        title:
          "【活动回顾】高中生如何参加联合国认证的独家创新型课外活动领导力项目",
        url: "https://www.bilibili.com/video/BV1oS4y1h7pu/?spm_id_from=333.337.search-card.all.click&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/build-your-own-project/pic1.png",
      },
      {
        title: "【留学申请背景提升】想去留学要先参加公益和实习",
        url: "https://www.bilibili.com/video/BV1b54y1y77x/?spm_id_from=333.337.search-card.all.click&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/build-your-own-project/pic2.png",
      },
    ],
  },
  Admission: {
    "Admission timeline": [
      {
        title: "加拿大本科申请时间线",
        url: "https://www.bilibili.com/video/BV114m8YXEcE/?spm_id_from=333.999.0.0&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/admission-timeline/pic1.png",
      },
    ],
    Interview: [
      {
        title: "中国申请者常见面试错误大揭秘！留学申请面试坑你中了几个？",
        url: "https://www.bilibili.com/video/BV1Qb4y1t78a/?spm_id_from=333.999.0.0&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/interview/pic1.png",
      },
      {
        title:
          "手把手教你准备留学面试中“自我介绍”！大大增加录取几率，让你你脱颖而出！",
        url: "https://www.bilibili.com/video/BV1bT41157nT/?spm_id_from=333.999.0.0&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/interview/pic2.png",
      },
    ],
  },
  Social: {
    Socialization: [
      {
        title: "超干货！留学生network全攻略，分分钟拥有社交牛逼症",
        url: "https://www.bilibili.com/video/BV1N44y1h7c6/?spm_id_from=333.337.search-card.all.click&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/socialization/pic1.png",
      },
      {
        title: "【全英Chat】开学社牛Tips：留学生如何多结交国际朋友？",
        url: "https://www.bilibili.com/video/BV1E24y1Z7q4/?spm_id_from=333.337.search-card.all.click&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/socialization/pic2.png",
      },
    ],
  },
  Finance: {
    "Financial Management": [
      {
        title: "🇨🇦 加拿大一年40W如何花的？💰干货必收藏 - 小红书",
        url: "https://www.xiaohongshu.com/explore/676811b9000000000b020ace?xsec_token=ABN2wSZm71awTpT-68HW3w0BY6QQ1D3dQgxDV_OCSY40Q=&xsec_source=pc_collect",
        bg: "/vid-bg/financial-management/pic1.png",
      },
      {
        title: "预算22万被打脸！加拿大留学到底要花多少？ - 小红书",
        url: "https://www.xiaohongshu.com/explore/676e751e000000000900c6d6?xsec_token=ABqM57CsWP8JO4FTkB69EaRPKqTfcXz8ZHlWvHhVtqwnE=&xsec_source=pc_collect",
        bg: "/vid-bg/financial-management/pic2.png",
      },
      {
        title: "在加拿大留学生应该怎样管理自己的财务呢？ - 小红书",
        url: "https://www.xiaohongshu.com/explore/6716fb8a000000002100395d?xsec_token=AB5TD2FRnpH15LdEtp_OywDxjnUePDYtYwURyRtLm07Cc=&xsec_source=pc_collect",
        bg: "/vid-bg/financial-management/pic3.png",
      },
      {
        title: "在加拿大一个好的财务规划要怎么做？ - 小红书",
        url: "https://www.xiaohongshu.com/explore/671aeea0000000002100452b?xsec_token=ABX57NRuFPBWwkNxlbQfliQ7rZHhGQzt3e1A_e7B6EjLI=&xsec_source=pc_collect",
        bg: "/vid-bg/financial-management/pic4.png",
      },
    ],
  },
  "Mental health & mindset": {
    "Growth mindset": [
      {
        title: "如何培养强大的成长型思维？",
        url: "https://www.bilibili.com/video/BV1Pi4y1Q7QT/?spm_id_from=333.337.search-card.all.click&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/growth-mindset/pic1.png",
      },
    ],
    "Facing uncertainty": [
      {
        title: "TED演讲：面对不确定的未来，我们该怎么办？",
        url: "https://www.bilibili.com/video/BV1r4411q7JT/?spm_id_from=333.337.search-card.all.click",
        bg: "/vid-bg/facing-uncertainty/pic1.png",
      },
    ],
    "Conquer prograsination": [
      {
        title: "你为什么总拖延？如何引导大脑自律？",
        url: "https://www.bilibili.com/video/BV1jf4y1u7oh/?spm_id_from=333.337.search-card.all.click&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/conquer-prograsination/pic1.png",
      },
      {
        title: "【TED科普】如何培养自律并克服拖延？",
        url: "https://www.bilibili.com/video/BV18gH4eqEcB/?spm_id_from=333.337.search-card.all.click&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/conquer-prograsination/pic2.png",
      },
    ],
  },
  "Tool / Platform": {
    ChatGPT: [
      {
        title: "ChatGPT最全教程！",
        url: "https://www.bilibili.com/video/BV1Cb48eSEY6/?spm_id_from=333.337.search-card.all.click&vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/chatgpt/pic1.png",
      },
    ],
    Email: [
      {
        title:
          "【牛津博士】英文邮件应该这么写！五封邮件 留学主题 细致分析 | 续集",
        url: "https://www.bilibili.com/video/BV14v411s7VN/?spm_id_from=333.788.player.switch&vd_source=1484e786a26a1f6d657fbfd5ad4ef723&p=2",
        bg: "/vid-bg/email/pic1.png",
      },
      {
        title:
          "【牛津博士】英文邮件应该这么写！构思、结构、内容、技巧、工具 | 五方面介绍",
        url: "https://www.bilibili.com/video/BV1ny4y1H71r/?vd_source=1484e786a26a1f6d657fbfd5ad4ef723",
        bg: "/vid-bg/email/pic2.png",
      },
    ],
  },
} as const;

export default function CoursePage() {
  const [selectedCategory, setSelectedCategory] = useState<
    keyof CourseData | null
  >(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const categories = Object.keys(mockData);

  const sections = selectedCategory
    ? Object.keys(mockData[selectedCategory])
    : [];

  const links =
    selectedCategory && selectedSection
      ? mockData[selectedCategory][selectedSection] ?? []
      : [];

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <div className="flex">
        {/* Main Content */}

        <div className="flex min-h-[calc(100vh-64px)]">
          {/* Sidebar 1: Categories */}
          <aside className="w-56   p-6 shadow-md">
            <h2 className="font-bold text-xl text-[#247e9f] mb-4">
              Categories
            </h2>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSection(null);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                    selectedCategory === cat
                      ? "bg-[#247e9f] text-white"
                      : "hover:bg-[#e5f5f9] text-gray-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Sidebar 2: Sections */}
          <aside className="w-64  p-6 shadow-md">
            <h2 className="font-bold text-xl text-[#247e9f] mb-4">Sections</h2>
            <div className="space-y-2">
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSection(sec)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                    selectedSection === sec
                      ? "bg-[#1e6d88] text-white"
                      : "hover:bg-[#e6f3f7] text-gray-800"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </aside>

          {/* Sidebar 3: Links */}
          <main className="flex-1 p-6 shadow-inner">
            <h2 className="font-bold text-xl text-[#247e9f] mb-4">Links</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {links.length > 0 ? (
                links.map((link, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-lg overflow-hidden shadow-md border bg-cover bg-center group"
                    style={{
                      backgroundImage: `url(${link.bg || "/course-bg.jpg"})`,
                      minHeight: "200px",
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

                    {/* Content */}
                    <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        {link.title}
                      </h3>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#247e9f] hover:bg-[#1e6d88] text-white px-4 py-2 rounded-md font-medium transition w-fit self-start inline-block"
                      >
                        ▶ Play Video
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 italic">
                  Select a section to see links.
                </p>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
