"use client";

import Link from "next/link";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import { Award, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Member {
  sno: number | string;
  name: string;
  designation: string;
  role: string;
}

interface Activity {
  sno: number;
  date: string;
  activity: string;
  participants: string | number;
}

interface Coordinator {
  sno: number;
  name: string;
  membershipId: string;
  mobile: string;
  email: string;
}

interface ProfessionalBody {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  members?: Member[];
  memberTableTitle?: string;
  objectives?: string[];
  coordinators?: Coordinator[];
  activities?: Activity[];
  externalLink?: string;
  externalLinkLabel?: string;
}

const profBodies: ProfessionalBody[] = [
  {
    id: "ieee",
    name: "IEEE Student Branch",
    shortName: "IEEE",
    description:
      "IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.",
    memberTableTitle: "IEEE Committee Members",
    members: [
      { sno: 1, name: "Dr. N Dinesh Kumar", designation: "Professor, Dean R & D", role: "Branch Counselor" },
      { sno: 2, name: "Mr. Harsha Vardhan", designation: "Student", role: "Chair Person" },
      { sno: 3, name: "Miss. Shivani", designation: "Student", role: "Vice Chair Person" },
      { sno: 4, name: "Miss. Deekshitha", designation: "Student", role: "Secretary" },
      { sno: 5, name: "Mr. Tarun", designation: "Student", role: "Treasurer" },
    ],
  },
  {
    id: "iste",
    name: "Indian Society for Technical Education",
    shortName: "ISTE",
    description:
      "The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System. Being the only national organisation of educators in the field of Engineering and Technology, ISTE effectively contributes in various missions of the Union Government.",
    memberTableTitle: "ISTE Committee Members",
    members: [
      { sno: 1, name: "Mr. Anup Kumar Jana", designation: "Assistant Professor", role: "Co-ordinator" },
      { sno: 2, name: "Mr. Kastro Kiran", designation: "Assistant Professor", role: "Co-ordinator, CIVIL" },
      { sno: 3, name: "Mr. K Vishnu", designation: "Assistant Professor", role: "Co-ordinator, EEE" },
      { sno: 4, name: "Mr. D Kiran Kumar", designation: "Assistant Professor", role: "Co-ordinator, ECE" },
      { sno: 5, name: "Mrs. R Akshara", designation: "Assistant Professor", role: "Co-ordinator, CSE" },
      { sno: 6, name: "Mrs. M Swathi", designation: "Assistant Professor", role: "Co-ordinator, IT" },
      { sno: 7, name: "Mr. K Prem Sagar", designation: "Assistant Professor", role: "Co-ordinator, EIE" },
    ],
  },
  {
    id: "iei",
    name: "Institution of Engineers India",
    shortName: "IEI",
    description:
      "The Institution of Engineers (India) [IEI] is the largest multi-disciplinary professional body of engineers, established in 1920 with its Headquarters located in Kolkata and incorporated under Royal Charter on 9th September, 1935 by the then His Majesty of King George V. The Royal Charter endowed the Institution with the responsibility to promote the general advancement of engineering amongst its members. The Institution of Engineers (India) is administered by a National Council with the President as its Head.",
    memberTableTitle: "IEI Committee Members",
    members: [
      { sno: 1, name: "Dr. P A Harsh Vardhini", designation: "Professor", role: "Co-ordinator" },
      { sno: 2, name: "Miss. S Asritha", designation: "Student", role: "Member" },
      { sno: 3, name: "Miss. Bhanu Sree", designation: "Student", role: "Member" },
      { sno: 4, name: "Miss. V Pallavi", designation: "Student", role: "Member" },
      { sno: 5, name: "Mr. P Bhargav", designation: "Student", role: "Member" },
      { sno: 6, name: "Mr. B Anup Kumar Goud", designation: "Student", role: "Member" },
      { sno: 7, name: "Mr. A Vinod Kumar", designation: "Student", role: "Member" },
    ],
  },
  {
    id: "asme",
    name: "American Society of Mechanical Engineers",
    shortName: "ASME",
    description:
      "ASME helps the global engineering community develop solutions to real world challenges. Founded in 1880, ASME is a not-for-profit professional organization that enables collaboration, knowledge sharing and skill development across all engineering disciplines, while promoting the vital role of the engineer in society. ASME codes and standards, publications, conferences, continuing education, and professional development programs provide a foundation for advancing technical knowledge and a safer world.",
    memberTableTitle: "ASME Committee Members",
    members: [
      { sno: 1, name: "Dr. K Chandra Shekar", designation: "Professor & Dean Academics", role: "Co-ordinator" },
      { sno: 2, name: "Mr. Manideep", designation: "Student", role: "Member" },
      { sno: 3, name: "Miss. Srija", designation: "Student", role: "Member" },
      { sno: 4, name: "Mr. Manish", designation: "Student", role: "Member" },
      { sno: 5, name: "Miss. Srinidhi", designation: "Student", role: "Member" },
      { sno: 6, name: "Mr. Bala Subramayam", designation: "Student", role: "Member" },
      { sno: 7, name: "Miss. Sai Chandana", designation: "Student", role: "Member" },
    ],
  },
  {
    id: "sae",
    name: "Society of Automotive Engineers",
    shortName: "SAE",
    description:
      "SAE International, formerly named the Society of Automotive Engineers, is a United States-based, globally active professional association and standards developing organization for engineering professionals in various industries.",
    memberTableTitle: "SAE Committee Members",
    members: [
      { sno: 1, name: "Prof. Leela Prasad", designation: "Professor", role: "Co-ordinator" },
      { sno: 2, name: "Mr. P Sai Kiran", designation: "Student", role: "Member" },
      { sno: 3, name: "Mr. G Kaushik", designation: "Student", role: "Member" },
      { sno: 4, name: "Mr. G Sai Charan", designation: "Student", role: "Member" },
      { sno: 5, name: "Mr. D Vasanth Kumar", designation: "Student", role: "Member" },
      { sno: 6, name: "Mr. D Bharath", designation: "Student", role: "Member" },
      { sno: 7, name: "Mr. Ajay Krishna", designation: "Student", role: "Member" },
    ],
  },
  {
    id: "csi",
    name: "Computer Society of India",
    shortName: "CSI",
    description:
      "CSI is a leading professional body for Computer Science professionals in India. The student chapter at VGNT aims to promote knowledge sharing, career enhancement, and research in the field of Computer Engineering and Technology.",
    objectives: [
      "Learn information and share ideas in the field of Computer Engineering and Technology Systems.",
      "Facilitate Knowledge Sharing, Learning, Career Enhancement and Research.",
      "Encourage students to publish articles in CSI communications and journal.",
      "Enable students to participate in technology updates through Conferences, Seminars, Tutorials and Workshops at discounted rates.",
      "Provide a forum for activities like Paper Presentations, Quiz, Competitions and Exhibitions.",
      "Encourage students to access the CSI knowledge portal.",
    ],
    coordinators: [
      { sno: 1, name: "K. SRINIVAS", membershipId: "5023220128", mobile: "9908274030", email: "srinivas.kmt1@gmail.com" },
      { sno: 2, name: "R. AKSHARA", membershipId: "5023220129", mobile: "9177841919", email: "akshara.revelle@gmail.com" },
    ],
    activities: [
      { sno: 1, date: "10/01/2023", activity: "CSI Student Chapter Inauguration", participants: 91 },
      { sno: 2, date: "10/01/2023", activity: "C-Code Trace", participants: 101 },
      { sno: 3, date: "10/01/2023", activity: "Group Discussion", participants: 91 },
      { sno: 4, date: "17/03/2023", activity: "C* (C-Star)", participants: 89 },
    ],
  },
  {
    id: "mastmo",
    name: "MASTMO Club",
    description:
      "MASTMO is the official technical and cultural club of VIGNAN ITS, fostering student innovation, collaboration, and all-round development beyond the classroom.",
    externalLink: "https://www.mastmovgnt.in/",
    externalLinkLabel: "Visit MASTMO Club Website",
  },
];

function MembersTable({ members, title }: { members: Member[]; title?: string }) {
  return (
    <div>
      {title && <h3 className="text-base font-semibold text-gray-700 mb-3">{title}</h3>}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead>
            <tr className="bg-vignan-purple">
              <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">S.No</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Designation</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Role</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {members.map((m, i) => (
              <tr key={i} className="hover:bg-purple-50 transition-colors">
                <td className="px-4 py-3 text-gray-700 font-medium">{m.sno}</td>
                <td className="px-4 py-3 text-gray-800 font-medium">{m.name}</td>
                <td className="px-4 py-3 text-gray-600">{m.designation}</td>
                <td className="px-4 py-3 text-gray-600">{m.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BodyCard({ body }: { body: ProfessionalBody }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {/* Accordion Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200 ${open
            ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white"
            : "bg-white hover:bg-purple-50 text-gray-800"
          }`}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <Award className={`w-5 h-5 shrink-0 ${open ? "text-white/80" : "text-vignan-purple"}`} />
          <span>
            <span className="font-semibold text-base block">{body.name}</span>
            {body.shortName && (
              <span className={`text-xs font-medium uppercase tracking-widest ${open ? "text-purple-200" : "text-gray-400"
                }`}>{body.shortName}</span>
            )}
          </span>
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-white" : "text-gray-400"
            }`}
        />
      </button>

      {/* Collapsible Body */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-gray-50 px-5 py-5 space-y-6 border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{body.description}</p>

          {/* External link (e.g. MASTMO) */}
          {body.externalLink && (
            <a
              href={body.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-700 text-white rounded-lg text-sm font-medium hover:bg-purple-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {body.externalLinkLabel ?? body.externalLink}
            </a>
          )}

          {/* Objectives */}
          {body.objectives && body.objectives.length > 0 && (
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-3">Objectives</h3>
              <ul className="space-y-2">
                {body.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Members table */}
          {body.members && body.members.length > 0 && (
            <MembersTable members={body.members} title={body.memberTableTitle} />
          )}

          {/* Coordinators table (CSI) */}
          {body.coordinators && body.coordinators.length > 0 && (
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-3">Co-ordinators</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-700 to-indigo-600">
                      <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">S.No</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Membership ID</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Mobile</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Email</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {body.coordinators.map((c, i) => (
                      <tr key={i} className="hover:bg-purple-50 transition-colors">
                        <td className="px-4 py-3 text-gray-700 font-medium">{c.sno}</td>
                        <td className="px-4 py-3 text-gray-800 font-medium">{c.name}</td>
                        <td className="px-4 py-3 text-gray-600">{c.membershipId}</td>
                        <td className="px-4 py-3 text-gray-600">{c.mobile}</td>
                        <td className="px-4 py-3 text-gray-600">
                          <a href={`mailto:${c.email}`} className="text-purple-700 hover:underline">
                            {c.email}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Activities table (CSI) */}
          {body.activities && body.activities.length > 0 && (
            <div>
              <h3 className="text-base font-semibold text-gray-700 mb-3">List of Activities Conducted</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-700 to-indigo-600">
                      <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">S.No</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Activity</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Students Participated</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {body.activities.map((a, i) => (
                      <tr key={i} className="hover:bg-purple-50 transition-colors">
                        <td className="px-4 py-3 text-gray-700 font-medium">{a.sno}</td>
                        <td className="px-4 py-3 text-gray-600">{a.date}</td>
                        <td className="px-4 py-3 text-gray-800 font-medium">{a.activity}</td>
                        <td className="px-4 py-3 text-gray-600">{a.participants}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProfessionalBodiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
      <Navbar variant="solid" />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-[120px] pb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-3 block">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/mandatory-disclosures" className="hover:text-white transition-colors">Mandatory Disclosures</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Professional Bodies</span>
          </nav>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Award className="w-8 h-8 opacity-90 shrink-0" />
              Professional Bodies
            </h1>
            <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed">
              VIGNAN ITS is affiliated with major national and international professional bodies, providing students and faculty access to global knowledge networks, certifications, and industry events.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">
        <div className="space-y-3">
          {profBodies.map((body) => (
            <BodyCard key={body.id} body={body} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}