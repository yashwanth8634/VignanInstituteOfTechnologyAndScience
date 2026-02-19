
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Other Facilities</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `<h2    >IT Maintainence</h2><div   data-gdlr-animation="fadeInLeft" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><h3   >Vignan IT Maintenance System</h3><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/wp-content/uploads/2020/07/4.4.2.pdf" target="_blank"    ><span  >download</span></a></div></div>` }} 
      />
    </div>
  );
}
