
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
      <span className="text-white font-medium">Route Map</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Route Map</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `<img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto" src='https://vignanits.ac.in/old_website/new/images/index/Route/Route%20Map%20web.jpg' alt='Route Map' class='w-full h-auto' />` }} 
      />
    </div>
  );
}
