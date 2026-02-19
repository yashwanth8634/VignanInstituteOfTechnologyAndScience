
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Communication & Soft Skills</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `<div    id="cs-s" ><h2   >Communication & Soft Skills</h2><div   data-gdlr-animation="fadeIn" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  >The main aim of this labs is to improve Communication Skills in formal and informal situations. It is also to impart training to students through the syllabus in its theoretical aspects and practical components. The lab is equipped with high end configuration which also has high quality audio & video capabilities.</div></div>` }} 
      />
    </div>
  );
}
