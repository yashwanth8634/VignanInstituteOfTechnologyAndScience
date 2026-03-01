import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Communication Soft Skills | VITS",
  description: "Information about Communication Soft Skills at VITS.",
};

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <nav className="text-sm text-purple-200 mb-3">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/facilities" className="hover:text-white transition-colors">
          Facilities
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white font-medium">Communication Soft Skills</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">
        Communication &amp; Soft Skills
      </h1>

      <div className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md">
        <p>
          The main aim of this lab is to improve Communication Skills in formal
          and informal situations. It is also to impart training to students
          through the syllabus in its theoretical aspects and practical
          components. The lab is equipped with high end configuration which also
          has high quality audio &amp; video capabilities.
        </p>
      </div>
    </div>
  );
}
