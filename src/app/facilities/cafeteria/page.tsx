
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
      <span className="text-white font-medium">Cafeteria</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Cafeteria</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `<div    id="Cafeteria" ><h2   >Canteen</h2></div><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto"  src="https://vignanits.ac.in/wp-content/uploads/2020/08/3.jpg"    alt="" /><div   data-gdlr-animation="fadeInRight" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><p class="mb-4 text-gray-700 leading-relaxed">VGNT has the facility of a spacious and clean canteen that caters to the taste of all students. Canteen can conveniently accommodate a 200 students at a time, functioning in the campus. The canteen is provided with modern furniture and electrical automatic cooking and storing facilities, which provides hot lunch, snacks and beverages both to the students and staff at reasonable rates. It is well maintained with efficient service and a take away counter. The College has a Canteen inside the campus in which variety of dishes are available at reasonable rates. The canteen remains open on all working days. Beverages ofdifferent flavors are served on different days according to different seasons</p>
</div>` }} 
      />
    </div>
  );
}
