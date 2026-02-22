
import Link from "next/link";
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <nav className="text-sm text-purple-200 mb-3">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">/</span>
      <Link href="/information" className="hover:text-white transition-colors">Information</Link>
      <span className="mx-2">/</span>
      <span className="text-white font-medium">Newsletters</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">News Letters</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `><h2   >College News Letters</h2><div class="accordion_pdf"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="/wp-content/uploads/2020/07/VITS-News-Letter-Sept-Nov-2019-a3-print-19.pdf"target="_blank"><i class="fa fa-download download_icon"></i>Vignan News Letter from January 2018 to December 2018</a>
<div class="accordion_pdf"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="/wp-content/uploads/2020/07/VITS-News-Letter-Jan-June-2019-a3-print-21.pdf"target="_blank"><i class="fa fa-download download_icon"></i>Vignan News Letter from January 2019 to June 2019</a>
<div class="accordion_pdf"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="/wp-content/uploads/2020/07/VITS-News-Letter-Jun-Aug-2019-a3-print-20.pdf"target="_blank"><i class="fa fa-download download_icon"></i>Vignan News Letter from June 2019 to August 2019</a>
<div class="accordion_pdf"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="/wp-content/uploads/2020/07/VITS-News-Letter-Sept-Nov-2019-a3-print-19.pdf"target="_blank"><i class="fa fa-download download_icon"></i>Vignan News Letter from Septemeber 2019 to November 2019</a>
</div></div></div></div></div></div>` }} 
      />
    </div>
  );
}
