"use client";

import Link from "next/link";
import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import { Users, ChevronDown, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";




interface CommitteeLink {
  label: string;
  href: string;
}

interface CommitteeMember {
  sno: string | number;
  name: string;
  designation: string;
  position: string;
}

interface Committee {
  name: string;
  links?: CommitteeLink[];
  members?: CommitteeMember[];
  extraLinks?: CommitteeLink[];
}

const committees: Committee[] = [
  {
    name: "Governing Body",
    links: [
      { label: "Governing Body Members", href: "https://drive.google.com/file/d/1Xjw3NsF7kbfRt5hhWc1yekc1EBajcqMl/view" },
      { label: "Governing Body Minutes of Meeting", href: "https://drive.google.com/file/d/1mo5yk2naWTcevZVJCo904ML3WJfM6ukb/view" },
    ],
  },
  {
    name: "IQAC Composition",
    links: [
      { label: "IQAC Composition Document", href: "https://drive.google.com/file/d/1QZni8niJcgQRCxpc0BD9dLTTuDLyxJiv/view" },
    ],
    members: [
      { sno: 1, name: "Dr. G. Durga Sukumar", designation: "Principal", position: "Chairman" },
      { sno: 2, name: "Dr. M Rama Krishna", designation: "Dean IQAC", position: "Member" },
      { sno: 3, name: "Prof. G. Narendar", designation: "Dean Administration", position: "Member" },
      { sno: 4, name: "Prof. N. Leela Prasad", designation: "Dean Faculty Affairs", position: "Member" },
      { sno: 5, name: "Dr. J.V. Rao", designation: "Dean Evaluation", position: "Member" },
      { sno: 6, name: "Mr. N. Sri Anjaneya", designation: "Assistant Professor, CSE", position: "Member" },
      { sno: 7, name: "Mr. G. Srinivas", designation: "Assistant Professor, EEE", position: "Member" },
      { sno: 8, name: "Mr. S. Kranthi Reddy", designation: "Assistant Professor, CSE", position: "Member" },
      { sno: 9, name: "Mr. Anup Kumar Jana", designation: "Assistant Professor, ME", position: "Member" },
      { sno: 10, name: "Mr. Sarat Chandra Mohanty", designation: "Assistant Professor, ME", position: "Member" },
      { sno: 11, name: "Mr. Aga Reddy", designation: "Dean Placements", position: "Management Representative" },
      { sno: 16, name: "Dr. K. Naga Sujatha", designation: "Professor, EEE – JNTUH College of Engineering Jagtial", position: "External Expert" },
      { sno: 17, name: "Mr. M Ashok", designation: "Associate Software Engineer, CGI Technologies", position: "Alumni" },
      { sno: 18, name: "Mr. Vannaldesi Anand", designation: "Relationship Manager SBI, Hyderabad", position: "Alumni" },
      { sno: 19, name: "Mr. N Aditya Bharadwaj", designation: "Business Analyst, Express Scripts Inc, USA", position: "Alumni" },
      { sno: 20, name: "Ms. Buram Pranitha", designation: "Technology Analyst, Infosys, Bangalore", position: "Alumni" },
      { sno: 21, name: "Mr. Aditya Nimmagadda", designation: "Assistant Manager, Hyundai, Hyderabad", position: "Alumni" },
      { sno: 22, name: "Mr. N. Prudhvi", designation: "Entrepreneur, Hyderabad", position: "Alumni" },
      { sno: 23, name: "Mr. K. Sudhakar", designation: "Stakeholder", position: "Parent" },
      { sno: 24, name: "Mr. R. Anil Kumar", designation: "Stakeholder", position: "Parent" },
      { sno: 25, name: "Mr. K.V.R.K. Sarma", designation: "Stakeholder", position: "Parent" },
      { sno: 26, name: "Mr. Srinivas", designation: "Office Assistant", position: "" },
    ],
  },
  {
    name: "Examination Committee",
    links: [
      { label: "Examination Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/1lLd4EvtsDm5GiWuyTnu22htDJUH4wSTf/view" },
    ],
  },
  {
    name: "Training & Placements Committee",
    links: [
      { label: "Training & Placements Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/1-SbKq8c3R5BkyQFbqezC5H3cBVyBvuw2/view" },
    ],
  },
  {
    name: "Entrepreneurship & Development Committee",
    links: [
      { label: "Entrepreneurship & Development Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/1j4MiEhgNDbeovnC2UGmPCFuHQqnes3Nu/view" },
    ],
  },
  {
    name: "Library Committee",
    links: [
      { label: "Library Committee Document", href: "https://drive.google.com/file/d/1SSBBlJuFgpyNi3PiJIjnCR4183hf_NPb/view" },
    ],
  },
  {
    name: "Intellectual Property Rights Committee",
    links: [],
  },
  {
    name: "Research & Development Committee",
    links: [
      { label: "R&D Committee Document", href: "https://drive.google.com/file/d/1D3J6iuH-_nke5uK089rl6zKMPmL4MQAL/view?usp=share_link" },
      { label: "R&D Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/1bPG3OtivUW_LNcbVPclc18JggkRjW5mW/view" },
    ],
  },
  {
    name: "Industry Institute Interaction Committee",
    links: [
      { label: "Industry Institute Interaction Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/1q9GUB71mMgin-eSTVBfoGbWVOxhBeVB4/view" },
    ],
  },
  {
    name: "Minority Committee",
    links: [
      { label: "Minority Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/1xZtP_RhsAnUDTl9143E-tBdgeCqOBoP2/view" },
    ],
  },
  {
    name: "SC/ST Committee",
    links: [
      { label: "SC/ST Committee Document", href: "https://drive.google.com/file/d/1UQcUU_IbOlw2g56sUVOGwjLxBuaCuR41/view" },
    ],
  },
  {
    name: "Internal Complaint Committee (Women Protection Cell)",
    links: [
      { label: "Women Protection Cell – Minutes of Meeting", href: "https://drive.google.com/file/d/1HlHQObZU2a9jCJajydJroP4eIDob9ovC/view" },
    ],
  },
  {
    name: "Anti Ragging Committee",
    links: [],
  },
  {
    name: "Canteen Committee",
    links: [
      { label: "Canteen Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/1PbRfYmjc-fK3_jAowuKZRo0k47w3hYor/view" },
    ],
  },
  {
    name: "Sports Committee",
    links: [
      { label: "Sports Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/1rq0fJCvaxNbMOJ-hEeOtslznXK_w4o0-/view" },
    ],
  },
  {
    name: "Admission Committee",
    links: [
      { label: "Admission Committee Document", href: "https://drive.google.com/file/d/19HcBb6EVoMGE-ojuzd7uvNrbN8n-TSDV/view" },
    ],
  },
  {
    name: "Cultural Committee",
    links: [
      { label: "Cultural Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/15zTkkENJn4F65QRYSbAQhIv7lNaxIT0Z/view" },
    ],
  },
  {
    name: "Finance Committee",
    links: [
      { label: "Finance Committee – Minutes of Meeting", href: "https://drive.google.com/file/d/1KBt-cVB5wAoFGOFc95gFZmqxVVe2y9aD/view" },
    ],
  },
  {
    name: "NSS Committee",
    links: [
      { label: "NSS Committee Document", href: "https://drive.google.com/file/d/19_esDDZ4vh3dMNeDh2T20A0vPyLJBj4w/view" },
    ],
  },
  {
    name: "Transport Committee",
    links: [
      { label: "Transport Committee Document", href: "https://drive.google.com/file/d/1yYwFgrd1R4xRb2BvIJgynZdl60ygYTB_/view" },
    ],
  },
  {
    name: "Other Backward Class (OBC) Committee",
    links: [
      { label: "OBC Committee Document", href: "https://drive.google.com/file/d/1BhF29_9MOkGBXsz0EN0lLSRS_hzCemWU/view" },
    ],
  },
  {
    name: "Hostel Committee",
    links: [
      { label: "Hostel Committee Document", href: "https://drive.google.com/file/d/15NenEdEGVNJHbrqhgv6QzNkhtELkRSgf/view" },
    ],
  },
  {
    name: "Central Faculty Recruitment Committee (CFRC)",
    links: [],
  },
  {
    name: "Grievance Redressal Committee",
    links: [],
  },
  {
    name: "Academic Audit",
    links: [
      { label: "Academic Audit – I Semester", href: "https://drive.google.com/file/d/1vWeT5lifL893bQEqItrniTZaI1OuySFg/view" },
      { label: "Academic Audit – II Semester", href: "https://drive.google.com/file/d/1bVhnG2N917aPN_Yn7mvChZEzKnyuwm8e/view" },
    ],
  },
];

function AccordionItem({ committee }: { committee: Committee }) {
  const [open, setOpen] = useState(false);

  const hasContent =
    (committee.links && committee.links.length > 0) ||
    (committee.members && committee.members.length > 0);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200 ${open
          ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white"
          : "bg-white hover:bg-purple-50 text-gray-800"
          }`}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3 font-semibold text-base">
          <Users
            className={`w-5 h-5 shrink-0 ${open ? "text-white/80" : "text-vignan-purple"}`}
          />
          {committee.name}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-white" : "text-gray-400"
            }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-gray-50 px-5 py-5 space-y-4 border-t border-gray-200">
          {!hasContent && (
            <p className="text-sm text-gray-500 italic">
              Committee details will be updated soon.
            </p>
          )}

          {/* PDF Links */}
          {committee.links && committee.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {committee.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-purple-200 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-all duration-200 shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  {link.label}
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              ))}
            </div>
          )}

          {/* Members Table */}
          {committee.members && committee.members.length > 0 && (
            <div className="w-full rounded-xl border border-purple-200 overflow-hidden bg-white">
              <table className="w-full border-collapse block md:table">
                <thead className="hidden md:table-header-group">
                  <tr className="bg-vignan-purple text-white text-left">
                    <th className="px-4 py-3 text-sm font-semibold">S.No</th>
                    <th className="px-4 py-3 text-sm font-semibold">Name</th>
                    <th className="px-4 py-3 text-sm font-semibold">Designation</th>
                    <th className="px-4 py-3 text-sm font-semibold">Position</th>
                  </tr>
                </thead>
                <tbody className="block md:table-row-group divide-y-4 md:divide-y md:divide-purple-100 divide-purple-100">
                  {committee.members.map((m, i) => (
                    <tr key={i} className="block md:table-row hover:bg-purple-50 p-2 md:p-0 transition-colors">
                      <td className="flex justify-between md:table-cell px-4 py-2 md:py-3 text-sm text-gray-600 border-b border-purple-50 md:border-none">
                        <span className="md:hidden font-bold text-gray-800">S.No</span>
                        <span className="text-right md:text-left">{m.sno}</span>
                      </td>
                      <td className="flex justify-between md:table-cell px-4 py-2 md:py-3 text-sm font-medium text-gray-900 border-b border-purple-50 md:border-none">
                        <span className="md:hidden font-bold text-gray-800">Name</span>
                        <span className="text-right md:text-left">{m.name}</span>
                      </td>
                      <td className="flex justify-between md:table-cell px-4 py-2 md:py-3 text-sm text-gray-600 border-b border-purple-50 md:border-none">
                        <span className="md:hidden font-bold text-gray-800">Designation</span>
                        <span className="text-right md:text-left">{m.designation}</span>
                      </td>
                      <td className="flex justify-between md:table-cell px-4 py-2 md:py-3 text-sm text-gray-600">
                        <span className="md:hidden font-bold text-gray-800">Position</span>
                        <span className="text-right md:text-left">
                          {m.position && (
                            <span className="inline-block px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                              {m.position}
                            </span>
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default function CommitteesPage() {
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
            <span className="text-white font-medium">College Level Committees</span>
          </nav>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Users className="w-8 h-8 opacity-90 shrink-0" />
              College Level Committees
            </h1>
            <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed">
              VGNT has constituted various committees for the smooth and efficient management of activities, providing faculty opportunities to develop administrative and extracurricular skills.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">
        <div className="space-y-3">
          {committees.map((committee) => (
            <AccordionItem key={committee.name} committee={committee} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
