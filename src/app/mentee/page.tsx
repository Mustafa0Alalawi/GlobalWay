"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "../components/Navbar";

const ParticleBackground = dynamic(
  () => import("../components/ParticleBackground"),
  { ssr: false }
);

const allMentees = [
  {
    id: "derrick",
    profile: {
      Name: "Derrick",
      "Year of Graduation": 2028,
      School: "Binghamton University",
      "Background of High School": "Globe Cambridge High School",
      "Major / Program": "Sociology",
      "Key Words of the upcoming semester": [
        "Summer Intern",
        "Transfer to Business School",
        "Transfer Research",
        "Transfer Prep",
        "Career Develop",
      ],
    },
    resources: [
      {
        Field: "Academic Advisor",
        Detail: "Harpur College's Commitment to International Students",
        Website:
          "https://www.binghamton.edu/harpur/advising/student-population/international-students.html",
        Contact: null,
      },
      {
        Field: "OPT",
        Detail: "F1-OPT Information",
        Website:
          "https://www.binghamton.edu/international/student-scholar-services/employment/f1-opt.html",
        Contact: null,
      },
      {
        Field: "Career Advisor",
        Detail: "Meet with a Career Consultant",
        Website:
          "https://careertools.binghamton.edu/channels/meet-with-a-career-consultant/",
        Contact: null,
      },
      {
        Field: "Career Advisor",
        Detail: "Jen Carrieri's Profile",
        Website:
          "https://careertools.binghamton.edu/staff/student-engagement-and-career-readiness/#jen-carrieri",
        Contact: "Jen Carrieri",
      },
      {
        Field: "Career Advisor",
        Detail: "Tiffany Soto's Profile",
        Website:
          "https://careertools.binghamton.edu/staff/student-engagement-and-career-readiness/#tiffany-soto",
        Contact: "Tiffany Soto",
      },
      {
        Field: "SOM",
        Detail: "Career Services Index",
        Website:
          "https://www.binghamton.edu/som/student-resources/career-services/index.html",
        Contact: null,
      },
      {
        Field: "SOM",
        Detail: "About Career Services",
        Website:
          "https://www.binghamton.edu/som/student-resources/career-services/about.html",
        Contact: "SOM Career Contact",
      },
      {
        Field: "SOM",
        Detail: "Events Calendar",
        Website:
          "https://www.binghamton.edu/som/student-resources/career-services/students/calendar.html",
        Contact: null,
      },
      {
        Field: "SOM",
        Detail: "Student Clubs",
        Website: "https://www.binghamton.edu/som/student-resources/clubs.html",
        Contact: null,
      },
      {
        Field: "SOM",
        Detail: "Email Group Signup",
        Website: "https://bengaged.binghamton.edu/somcs/club_signup",
        Contact: null,
      },
      {
        Field: "Resume",
        Detail: "General Resume Guide",
        Website: "https://www.resume.com",
        Contact: null,
      },
      {
        Field: "ISSS",
        Detail: "International Student Services Main Page",
        Website:
          "https://www.binghamton.edu/international/student-scholar-services/index.html",
        Contact: "See topic-based emails",
      },
      {
        Field: "ISSS",
        Detail: "How to work as an International Student",
        Website:
          "https://www.binghamton.edu/international/student-scholar-services/employment/index.html",
        Contact: "intlwork@binghamton.edu",
      },
      {
        Field: "ISSS",
        Detail: "Health Insurance Inquiries",
        Website: "#",
        Contact: "intl.insure@binghamton.edu",
      },
      {
        Field: "ISSS",
        Detail: "Extensions of Stay Inquiries",
        Website: "#",
        Contact: "intl.extend@binghamton.edu",
      },
      {
        Field: "ISSS",
        Detail: "All other inquiries",
        Website: "#",
        Contact: "isss@binghamton.edu",
      },
      {
        Field: "ELP Mentor",
        Detail: "Applying to be a Mentor",
        Website:
          "https://www.binghamton.edu/offices/success/first-year-students/emerging-leaders/elp-mentors.html",
        Contact: null,
      },
      {
        Field: "ELP Mentor",
        Detail: "Meet the ELP Team",
        Website:
          "https://www.binghamton.edu/offices/success/first-year-students/emerging-leaders/leaders.html",
        Contact: "ELP Team",
      },
      {
        Field: "ELP Mentor",
        Detail: "Application Form",
        Website:
          "https://bengaged.binghamton.edu/survey?pdf=1&embed=1&deactivate_pages=1&answerer_uid=eac82059-da99-11ef-bc6e-025c6e3d0caf&s=qgK0BezkF4leo3j/La4GrPcm7GJhq5Zpdkx/sHRKLwE=&survey_uid=2192e542-d1ee-11ef-bc6e-025c6e3d0caf&param=eac82059-da99-11ef-bc6e-025c6e3d0caf&ts=210164618&auth=f410ee5b7ea9fadec97ac57c9a474b7b197b753953037806b323da30e088fa74",
        Contact: null,
      },
      {
        Field: "OA Advisor",
        Detail: "Handshake Job Posting",
        Website:
          "https://binghamton.joinhandshake.com/jobs/9509202/share_preview",
        Contact: null,
      },
      {
        Field: "Career Handbook",
        Detail: "Guide to Resumes, Cover Letters, etc.",
        Website:
          "https://cdn.uconnectlabs.com/wp-content/uploads/sites/60/2024/08/Career-Guide-Summer-2024-packaged.pdf",
        Contact: null,
      },
      {
        Field: "Online Resource",
        Detail: "CCPD Services & Resources",
        Website: "https://www.binghamton.edu/ccpd/services/resources.html",
        Contact: null,
      },
      {
        Field: "Career Consulting",
        Detail: "Service Information",
        Website:
          "https://www.binghamton.edu/ccpd/services/career-consulting.html",
        Contact: null,
      },
      {
        Field: "Career Advisor Appointment",
        Detail: "Laura O'Neill",
        Website:
          "https://careertools.binghamton.edu/staff/student-engagement-and-career-readiness/#laura-oneill",
        Contact: "Laura O'Neill",
      },
      {
        Field: "Student Success",
        Detail: "About Student Success and Transition",
        Website: "https://www.binghamton.edu/offices/success/about.html",
        Contact: null,
      },
    ],
  },
  {
    id: "hannah",
    profile: {
      Name: "Hannah",
      "Year of Graduation": 2029,
      School: "California College of the Arts (CCA)",
      "Background of High School": "Globe Cambridge High School",
      "Major / Program": "Animation, changing rn",
      "Key Words of the upcoming semester": [
        "Major Explore",
        "School Resource",
        "Art Projects",
        "Upper Year Project",
        "Career Develop",
      ],
    },
    resources: [
      {
        Field: "Campus Resource",
        Detail: "International Admin",
        Website: "https://www.cca.edu/admissions/international/",
        Contact: "internationaladmissions@cca.edu",
      },
      {
        Field: "Campus Resource",
        Detail: "WeChat Contacts",
        Website: "#",
        Contact: "Annie_CCA, ShirazCCA, Yuxi_CCA",
      },
      {
        Field: "Career",
        Detail: "Taxes Information",
        Website:
          "https://portal.cca.edu/thriving/international-student-services/taxes/",
        Contact: null,
      },
      {
        Field: "Career",
        Detail: "International Student Service (ISS)",
        Website:
          "https://portal.cca.edu/thriving/international-student-services/",
        Contact: "iss@cca.edu",
      },
      {
        Field: "Career",
        Detail: "ISS Appointment",
        Website:
          "https://portal.cca.edu/thriving/international-student-services/make-appointment/",
        Contact: null,
      },
      {
        Field: "Finance",
        Detail: "General Questions (Non-Immigration)",
        Website: "#",
        Contact: "ask@cca.edu",
      },
      {
        Field: "Finance",
        Detail: "Work Permit / Employment Options",
        Website:
          "https://portal.cca.edu/thriving/international-student-services/employment-options-international-students/",
        Contact: "F1 International Option",
      },
      {
        Field: "Finance",
        Detail: "Social Security Number (SSN)",
        Website:
          "https://portal.cca.edu/thriving/international-student-services/social-security-number-ssn/",
        Contact: null,
      },
      {
        Field: "(Culture)Organization",
        Detail: "Campus Resource Fair",
        Website: "https://portal.cca.edu/events-calendar/campus-resource-fair/",
        Contact: "meysok@cca.edu (2023 organizer)",
      },
      {
        Field: "Web",
        Detail: "Academic Learning Resources",
        Website: "https://portal.cca.edu/learning/learning-resources/",
        Contact: "Academic Appointment",
      },
      {
        Field: "Subject",
        Detail: "Student Coach",
        Website: "#",
        Contact: "Can ask for advice beyond academics",
      },
      {
        Field: "Subject",
        Detail: "Exchange Opportunity",
        Website:
          "https://portal.cca.edu/thriving/international-student-services/international-semester-exchange-study-abroad/",
        Contact: null,
      },
    ],
  },
  {
    id: "yoyo",
    profile: {
      Name: "YoYo",
      "Year of Graduation": 2026,
      School: "School of the Art Institute of Chicago",
      schoolSlug: null,
      "Background of High School": "Global Cambridge High School",
      "Major / Program": "Fashion Design",
      "Key Words of the upcoming semester": [
        "Art",
        "Fashion Design",
        "Clothing",
        "Manufacturing",
        "Social Media",
        "Brand Development",
        "Career Exploration",
      ],
    },
    resources: [
      {
        Field: "School Resource",
        Detail: "EDII / Minority Program",
        Website: "https://www.saic.edu/diversity-equity-inclusion",
        Contact: "saicdiversity@saic.edu",
      },
      {
        Field: "School Resource",
        Detail: "International Center or Advisor",
        Website: "https://www.saic.edu/international-affairs",
        Contact: null,
      },
      {
        Field: "School Resource",
        Detail: "Career Service (CAPX)",
        Website: "https://www.saic.edu/capx",
        Contact: null,
      },
      {
        Field: "School Resource",
        Detail: "Student Employment",
        Website: "https://www.saic.edu/cost-financial-aid/student-employment",
        Contact: null,
      },
      {
        Field: "Personal Connection",
        Detail: "Alumni & Seniors",
        Website: "LinkedIn, School Alumni Network",
        Contact: "Networking & Outreach",
      },
      {
        Field: "School Handshake",
        Detail: "Job & Internship Board",
        Website: "https://saic.joinhandshake.com/login",
        Contact: null,
      },
      {
        Field: "General Training",
        Detail: "LinkedIn Learning",
        Website:
          "https://www.saic.edu/crit/resources/linkedin-learning-online-training",
        Contact: null,
      },
      {
        Field: "General Training",
        Detail: "Student Employment Guide 2024-2025",
        Website:
          "https://www.saic.edu/sites/default/files/2024-08/2024-25-student-employment-guide-updated-final-08.17.24.pdf",
        Contact: null,
      },
      {
        Field: "LinkedIn",
        Detail: "Professional Networking Platform",
        Website: "https://www.linkedin.com",
        Contact: null,
      },
    ],
  },
  {
    id: "margaret",
    profile: {
      Name: "Margaret",
      "Year of Graduation": 2030,
      School: "Unassigned",
      schoolSlug: null,
      "Background of High School": "Globe Cambridge High School",
      "Major / Program": "Studio Arts",
      "Key Words of the upcoming semester": [
        "Uni Research",
        "Uni Application Prep",
        "Art Portfolio Wrap Up",
        "Projects Develop",
      ],
    },
    resources: [
      // Resource links and details to be added later
    ],
  },
  {
    id: "anna",
    profile: {
      Name: "Anna",
      "Year of Graduation": 2028,
      School: "Queen's University",
      schoolSlug: "/university/queens",
      "Background of High School": "Globe Cambridge High School",
      "Major / Program": "Coned (Art&Sci major about to decide)",
      "Key Words of the upcoming semester": [
        "Campus Resource",
        "Career Development",
        "Upper Years / Alumni Network",
        "Summer Internship",
      ],
    },
    resources: [
      // Resource links and details to be added later
    ],
  },
];

const ProfileDetail = ({
  label,
  value,
  children,
}: {
  label: string;
  value: string | number;
  children?: React.ReactNode;
}) => (
  <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border h-full min-h-[90px] flex flex-col justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-base font-semibold text-gray-800 break-words">
        {value}
      </p>
    </div>
    {children && <div className="flex justify-end mt-2">{children}</div>}
  </div>
);

export default function MenteeClientPage() {
  const [selectedStudent, setSelectedStudent] = useState(allMentees[0]);

  return (
    <>
      <ParticleBackground />
      <div className="relative">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* --- STUDENT SELECTOR --- */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
              Select a Mentee Profile
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {allMentees.map((mentee) => (
                <button
                  key={mentee.id}
                  onClick={() => setSelectedStudent(mentee)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-sm
                    ${
                      selectedStudent.id === mentee.id
                        ? "bg-[#247e9f] text-white ring-2 ring-offset-2 ring-[#247e9f]"
                        : "bg-white/80 backdrop-blur-sm border text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  {mentee.profile.Name}
                </button>
              ))}
            </div>
          </div>

          {/* --- Section 1: Profile Summary (Dynamically renders selected student) --- */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border p-6 md:p-8 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#247e9f] mb-6">
              {selectedStudent.profile.Name}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProfileDetail
                label="Year of Graduation"
                value={selectedStudent.profile["Year of Graduation"]}
              />
              <ProfileDetail
                label="School"
                value={selectedStudent.profile.School}
              >
                {selectedStudent.profile.schoolSlug && (
                  <Link href={selectedStudent.profile.schoolSlug} passHref>
                    <button className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-full transition">
                      See More
                    </button>
                  </Link>
                )}
              </ProfileDetail>
              <ProfileDetail
                label="Major / Program"
                value={selectedStudent.profile["Major / Program"]}
              />
              <ProfileDetail
                label="High School"
                value={selectedStudent.profile["Background of High School"]}
              />
              <div className="sm:col-span-2 lg:col-span-3">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedStudent.profile[
                    "Key Words of the upcoming semester"
                  ].map((keyword) => (
                    <span
                      key={keyword}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- Section 2: Resources List (Dynamically renders selected student) --- */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Key Resources for {selectedStudent.profile.Name}
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Field
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Detail
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Website
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedStudent.resources.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50/50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.Field}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {item.Detail || "—"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {item.Contact || "—"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        <a
                          href={item.Website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Link
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
