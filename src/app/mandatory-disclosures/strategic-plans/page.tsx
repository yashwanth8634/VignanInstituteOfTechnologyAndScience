
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Strategic Plans</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `><h3   >Strategic Plan</h3><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="http://vignanits.ac.in/NAAC/ST/6.2.1%20PERSEPCTIVE%20PLAN%20HIGHLIGHTS.pdf" target="_blank"    ><span  >Download</span></a><h3   >Strategic Plan for 2014-2019</h3><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/NAAC/ST/Perspective-Strategic%20plan%202014-2019.pdf" target="_blank"    ><span  >Download</span></a><h3   >Strategic Plan for 2020-2024</h3><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/NAAC/ST/Perspective%20cum%20Strategic%20Plan%202020-2024.pdf" target="_blank"    ><span  >Download</span></a><h3   >Strategic Plan for 2025-2029</h3><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/NAAC/ST/Perspective-Strategic%20plan%202025-2029.pdf" target="_blank"    ><span  >Download</span></a></div></div>` }} 
      />
    </div>
  );
}
