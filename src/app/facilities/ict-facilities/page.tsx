
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">ICT Facilities</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `<div    id="ICT-Facilities" ><div   data-gdlr-animation="fadeIn" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><h2   >Seminar Halls</h2><h2   >Seminar Halls-1</h2><div  data-type="slider" data-effect="default" data-nav="navigation"  ><ul class="slides" ><li class="pl-1"  ><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/wp-content/uploads/2020/08/DSC_0179.jpg" data-lightbox-group="gdlr-core-img-group-1"><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto"  src="https://vignanits.ac.in/wp-content/uploads/2020/08/DSC_0179-1050x580.jpg"    alt="" /></a></li></ul></div></div></div>` }} 
      />
    </div>
  );
}
