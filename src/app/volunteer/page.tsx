"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground.jsx";

const roles = [
  {
    title: "Volunteer Interviewer – International Student Insights",
    meta: "Openings: 2 | Commitment: 4–6 hrs/week | Duration: min. 8 weeks (renewable) | Location: Remote",
    mission:
      "Generate weekly, voice-of-student insights so we can build services that truly match international students’ needs throughout application, arrival, and career stages.",
    responsibilities: [
      "Interview 10 students/week in 15–30 min sessions (Zoom/phone).",
      "Execute outreach plan (email, IG, WeChat, student forums) to recruit participants.",
      "Follow company-supplied question script; probe for deeper context when needed.",
      "Capture verbatim quotes & pain-points in Notion template within 24 h.",
      "Submit Friday KPI report: # contacts, # interviews, key themes, next-week plan.",
    ],
    youWillBring: [
      "Empathetic conversation style; active listening + note-taking.",
      "Basic user-research or journalism skills (we train on our process).",
      "Reliable schedule management; hits numeric targets without hand-holding.",
      "English fluency; other languages (Mandarin, Hindi, Spanish, etc.) a plus.",
    ],
    weProvide: [
      "Outreach email/DM templates, interview guide, onboarding call.",
      "Slack channel with mentor researcher; weekly feedback on technique.",
      "Official reference letter + LinkedIn recommendation after successful term.",
    ],
    successMetrics:
      "≥ 40 completed interviews per month with ≥ 90 % data-quality score.",
  },
  {
    title: "Marketing Coordinator – Content & Social Media",
    meta: "Type: Part-time contractor (8–12 hrs/week) | Compensation: stipend + performance bonus | Location: Remote, global",
    mission:
      "Own the creation, packaging, and distribution of marketing assets (PDF guides, infographics, Reels) that position us as the go-to resource for study-abroad success in both Western and China markets.",
    responsibilities: [
      "Update & re-design our 10-page PDF offer pack every intake cycle.",
      "Maintain monthly content calendar across Instagram, LinkedIn, XHS (小红书), WeChat.",
      "Brief designers / motion editors; write or polish copy in English and coordinate CN translation.",
      "Track post reach, click-throughs, and lead conversions; present quick-insight deck each month.",
      "Collaborate with China Growth Team on hashtag tactics, KOL partnerships, and localized landing pages.",
    ],
    youWillBring: [
      "Portfolio showing Canva/Adobe or similar design work + persuasive copy.",
      "Social-media scheduling & metric tools (Later, Buffer, Meta Business Suite).",
      "Project-management chops (ClickUp/Trello/Notion) to juggle multiple assets.",
      "Cultural fluency in at least one China platform (WeChat articles, XHS posts, Bilibili shorts).",
    ],
    weProvide: [
      // Assuming standard provisions
      "Access to all necessary software and tools.",
      "A collaborative and supportive team environment.",
      "Regular feedback and growth opportunities.",
    ],
    successMetrics:
      "Consistent growth in engagement metrics and lead conversions month-over-month.",
  },
  {
    title: "B2B Partnerships & Sales Representative",
    meta: "Type: Part-time, outcome-based | Compensation: base stipend + tiered commission | Territory: North American & global universities (remote)",
    mission:
      "Secure institutional referrals, webinar slots, and bulk onboarding deals by building relationships with universities, international centres, student unions, and aligned edu-tech providers.",
    responsibilities: [
      "Prospecting & CRM: Map 50+ target contacts/month and maintain 100% data hygiene in HubSpot.",
      "Outreach & Pitching: Send personalized emails, DMs, and call scripts to book discovery calls and deliver value decks.",
      "Deal Management: Negotiate MoUs for referrals, workshops, and promotions.",
      "Reporting: Provide weekly pipeline snapshots and quarterly retrospectives.",
    ],
    youWillBring: [
      "1+ yr experience in B2B sales, partnership development, or university relations.",
      "Confident communicator—can demo via Zoom and charm at conferences.",
      "Hunter mindset: comfortable cold-calling, objection-handling, closing.",
      "Familiarity with higher-ed decision cycles and student-services ecosystem.",
    ],
    weProvide: [
      "A competitive commission structure and base stipend.",
      "Access to CRM and sales enablement tools.",
      "A clear territory and list of target accounts.",
    ],
    successMetrics:
      "First 90 days: 100 new qualified leads, 30 discovery calls held, 3 signed referral or pilot agreements.",
  },
];

export default function VolunteerPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>();
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      {/* Main Content */}
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* HERO SECTION */}
        <section
          className="relative h-[70vh] w-full bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `url('/volunteer4.jpg')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />

          <div
            className="relative z-10 px-6 ml-10 max-w-2xl text-white text-left"
            style={{
              fontFamily: "NokiaPureHeadline, Arial, Helvetica, sans-serif",
            }}
          >
            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold leading-snug tracking-tight">
                Join the GlobalWay Volunteer Team
              </h1>
              <p className="text-lg font-light">
                Contribute to a purpose-driven startup, gain experience, and
                grow with a mission-focused team.
              </p>
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li>Real-world skill development</li>
                <li>Certificate & LinkedIn endorsement</li>
                <li>Weekly Zoom updates</li>
                <li>Path to paid roles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROGRESSION ROADMAP */}
        <section className="bg-white py-10 px-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            Your Growth Path
          </h2>
          <div className="flex justify-center gap-4 items-center flex-wrap text-sm font-medium">
            {[
              "Stage 1",
              "Stage 2",
              "Stage 3",
              "Stage 4",
              "Stage 5",
              "Stage 6",
              "Stage 7",
            ].map((stage, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#247e9f] text-white">
                  {i + 1}
                </div>
                <p className="mt-1">{stage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Open Positions</h2>
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="border rounded-lg mb-4 shadow-md bg-white"
            >
              <button
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
                className="w-full flex justify-between items-center p-4 text-left font-semibold bg-[#f0f8f8] hover:bg-[#e8f5fa]"
              >
                <div>
                  <h3 className="text-lg text-gray-800">{role.title}</h3>
                  <p className="text-xs text-gray-500 font-normal mt-1">
                    {role.meta}
                  </p>
                </div>
                <span className="text-2xl text-gray-400">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-6 space-y-6 border-t border-gray-200">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Mission</h4>
                    <p className="text-gray-600">{role.mission}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">
                      Core Responsibilities
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {role.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">
                      You'll Bring
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {role.youWillBring.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">We Provide</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {role.weProvide.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">
                      Success Metrics
                    </h4>
                    <p className="text-gray-600">{role.successMetrics}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* APPLICATION SECTION */}
        <section id="apply" className="bg-[#f9fafb] py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
          <p className="mb-8 text-gray-600">
            We’d love to learn more about you.
          </p>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#247e9f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1e6d88] transition"
            >
              Apply here
            </button>
          ) : (
            <div className="max-w-3xl mx-auto">
              <iframe
                src="https://form.typeform.com/to/hLcyZa7k"
                className="w-full h-[600px] border-0 rounded-lg shadow-md mt-4"
                allow="camera; microphone; autoplay; encrypted-media;"
                loading="lazy"
              />
            </div>
          )}
        </section>
      </div>
    </>
  );
}
