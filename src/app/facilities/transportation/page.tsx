
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Transportation</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `<div    id="Transportation" ><h2   >Transportation</h2><div   data-gdlr-animation="fadeInLeft" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><p class="mb-4 text-gray-700 leading-relaxed" >College is providing transport facility to the students from various points in Hyderabad. College is running 40+ buses covering all points in Hyderabad.</p>
<div   data-gdlr-animation="fadeInRight" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto"  src="https://vignanits.ac.in/wp-content/uploads/2020/08/transport-popup.jpg"    alt="" /></div></div></div>` }} 
      />
    </div>
  );
}
