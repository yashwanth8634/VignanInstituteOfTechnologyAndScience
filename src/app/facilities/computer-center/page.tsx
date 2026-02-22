
import Link from "next/link";
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <nav className="text-sm text-purple-200 mb-3">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">/</span>
      <Link href="/facilities" className="hover:text-white transition-colors">Facilities</Link>
      <span className="mx-2">/</span>
      <span className="text-white font-medium">Computer Center</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Computer Center</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `<div    id="Computer-Center" ><h2   >Computer Center</h2><p class="mb-4 text-gray-700 leading-relaxed"><span >The Computer Centre is a Central Facility of the College equipped with latest Configuration systems with 500 MBS internet speed. The Computer centre is for the students and faculty of the college with facilities for printing, scanning, and internet browsing.</span></p>
<p class="mb-4 text-gray-700 leading-relaxed"><img class="alignnone size-medium wp-image-13233 lazyload" src="https://vignanits.ac.in/wp-content/uploads/2022/05/IMG_20220524_192200-300x169.jpg" alt=""   /></p>
</div>` }} 
      />
    </div>
  );
}
