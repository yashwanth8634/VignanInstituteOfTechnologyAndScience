
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
      <span className="text-white font-medium">Student Startups</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Student Start-Ups & Careers</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `><div   data-gdlr-animation="fadeInUp" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><h2    >Entrepreneurship Development Cell</h2><h5>Mission statement</h5>
<p class="mb-4 text-gray-700 leading-relaxed">“To promote knowledge based and technology-driven start-ups by harnessing young minds and their innovation potential in an academic environment”</p>
<h5>Institutional Mechanism</h5>
<h5>NewGen Innovation and Entrepreneurship Development Centre (NewGen IEDC)</h5>
<p class="mb-4 text-gray-700 leading-relaxed">The NewGen Innovation and Entrepreneurship Development Centre (NewGen IEDC) is being promoted in educational institutions to develop institutional mechanism to create entrepreneurial culture in S&amp;T academic institutions and to foster techno-entrepreneurship for generation of wealth and employment by S&amp;T persons. The NewGen IEDCs are established in academic institutions (science colleges, engineering colleges, universities, management institutes) having requisite expertise and infrastructure.</p>
<h5>Objectives of the NewGen IEDCs: </h5>
<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
<li class="pl-1">To channelize the knowledge and the energy of youth towards becoming active partners in the economic development process.</li>
<li class="pl-1">To catalyze and promote development of knowledge-based and innovation- driven enterprises and promote employment opportunities amongst youth specially students.</li>
<li class="pl-1">To inculcate a culture of innovation driven entrepreneurship.</li>
<li class="pl-1">To act as an institutional mechanism for providing various services including information on all aspects of enterprise building to budding S&amp;T entrepreneurs.</li>
</ul>
<h5>Advisory Board</h5>
<p class="mb-4 text-gray-700 leading-relaxed">For the effective implementation of the programmes, the Host Institution would constitute an Advisory Board immediately after the sanction of the NewGen IEDCs by the DST. The Advisory Board will lay down policy guidelines, fix up physical and financial targets, suggest measures for raising funds, effective utilization of facilities and expertise available in the parent Institute and sourcing of expertise and facilities from other institutions in the region. The Advisory Board should meet at least twice a year and should hold its first meeting within four months of receipt of grants-in- aid. The student projects should be approved by the Advisory Board.</p>
<p class="mb-4 text-gray-700 leading-relaxed">The Advisory Board composition:</p>
<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
<li class="pl-1">Head of the Host Institution &#8211; Chairman : Dr. G.Durga Sukumar</li>
<li class="pl-1">Coordinator of NewGen IEDC &#8211; Member Secretary : Dr. Narayan Sangam</li>
<li class="pl-1">One Member from Industry Associations : Dr. Bhagwati Rao:</li>
<li class="pl-1">Alumni Entrepreneurs from the Host Institutions : Mr. Sai Srinivas. Mech. 2007-2011 Batch</li>
<li class="pl-1">Members: All H.O.Ds and Dean Academics</li>
</ul>
<h3    >Entrepreneurship Development Centre - List of Activities</h3>
<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="list-group" >
<tbody>
<tr>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong>Sr.No.</strong></th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0">
<p class="mb-4 text-gray-700 leading-relaxed" ><strong>Event Name</strong></p>
</th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0">
<p class="mb-4 text-gray-700 leading-relaxed" ><strong>Organized By</strong></p>
</th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0">
<p class="mb-4 text-gray-700 leading-relaxed" ><strong>Date</strong></p>
</th>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">1</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Inauguration of EDC Cell</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">20-09-2013</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">2</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Internal Hackthon (SIH 2020)</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; CSE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">5<sup>th</sup> &amp; 6<sup>th</sup> FEB 2020</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">3</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">TIE GRAD Kick off Session</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; CSE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">22<sup>nd</sup> OCT 2019</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">4</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">ENTREPREUNERSHIP AWARENESS CAMP</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; OU</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">23<sup>RD</sup> -25<sup>TH</sup> JULY 2019</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">5</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">E-TALKS</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">15<sup>TH</sup> APR 2019</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">6</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Guest Lecture on Self Analysis and Career Enhancement</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; ECE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">23<sup>rd</sup> MAR 2019</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">7</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Guest Lecture on Life Skills and Money Management</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; CSE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">23<sup>rd</sup> FEB 2019</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">8</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Guest Lecture on Career Growth</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; ECE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">05<sup>th</sup> JAN 2019</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">9</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Talk on Career Opportunities</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; ECE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">5<sup>th</sup> OCT 2018</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">10</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Workshop on IOT and Embedded Systems</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; ECE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">5<sup>th</sup> OCT 2018</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">11</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Guest Lecture on How to be the best among the rest</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; CSE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">28<sup>th</sup> JULY 2018</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">12</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Talk on Personality Development Traits</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; CSE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">24<sup>th</sup> MAR 2018</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">13</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Guest Lecture on Usage and Development of Sales Force</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; CSE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">17<sup>th</sup> FEB 2018</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">14</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Talk on Career Guidance and Motivation towards Competitive World</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC &amp; EEE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">25<sup>th</sup> Jan 2018</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">15</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Talk on Business Opportunities</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">20<sup>th </sup> DEC 2017</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">16</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">One day workshop on Motivation Towards Entrepreneurship</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">21<sup>ST</sup> OCT 2017</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">17</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Guest Lecture on Financial Awareness Program</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">EDC</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">20<sup>th</sup> Sep 2017</td>
</tr>
</tbody>
</table>
<a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="/wp-content/uploads/2020/07/training_details.pdf" target="_blank"    ><span  >Training details</span></a></div><div   data-gdlr-animation="fadeInUp" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><h2    >Student Start-Ups</h2></div></div></div><div   data-gdlr-animation="fadeInRight" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><p class="mb-4 text-gray-700 leading-relaxed" >The management is happy to encourage student community to become entrepreneurs by providing funding for start-ups up to 50 lakhs. Students can come up with different ideas which will be helpful for the society. These ideas will be scrutinized by the experts and the top five ideas will be provided with financial assistance to develop their products as start-ups.</p>
<p class="mb-4 text-gray-700 leading-relaxed" >Students can utilize the resources available in the institute after their regular class work ie, from 3.40 pm onwards. Every start-up team consists of Technical, Development and Marketing team members and should complete the product development in specified time period.</p>
<p class="mb-4 text-gray-700 leading-relaxed" ><b>Chief Coordinators for Student Start-ups</b></p>
<p class="mb-4 text-gray-700 leading-relaxed" >Dr. S. Deva Prasad,<br />Professor, Department of Mechanical Engineering.</p>
</div><div   data-gdlr-animation="fadeInUp" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><h2    >Innovations</h2><h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >ELEMENTS OF INNOVATION</h3><div class="modal-body" >
<ol>
<li class="pl-1">Line Balancing</li>
<li class="pl-1">Work Study</li>
<li class="pl-1">Time Study</li>
<li class="pl-1">Partial Automation</li>
<li class="pl-1">Semi Automation</li>
<li class="pl-1">Automation of material handling with least disturbance to the existing setup</li>
<li class="pl-1">Innovative changes/ retro fitting of existing Machines to improve productivity.</li>
<li class="pl-1">Heat recovery systems for optimum power management</li>
<li class="pl-1">Deployment of solar energy, wherever possible</li>
<li class="pl-1">Value engineering concepts</li>
<li class="pl-1">Concurrent engineering practices</li>
<li class="pl-1">Automated online quality checks</li>
<li class="pl-1">Automatic loading and unloading of components in the machines</li>
<li class="pl-1">Solutions to quality problems</li>
<li class="pl-1">Pre and post operations technology at affordable cost</li>
<li class="pl-1">New Products Design and development</li>
<li class="pl-1">Finding solutions to provide value for your scrap</li>
<li class="pl-1">Finding new products to match the current processing capabilities</li>
<li class="pl-1">Simple robotic processing operations for painting and welding</li>
<li class="pl-1">Automatic assembling and Disassembling</li>
<li class="pl-1">Bending &amp; cutting solutions for mass produce items</li>
<li class="pl-1">Break even financial analysis</li>
</ol>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >AREAS OF EXPERTISE</h3><div class="modal-body" >
<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/new_website/new/indcon.php#">Special Purpose Machine Tools.</a></li>
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/new_website/new/indcon.php#">Design &amp; Development of Production Dies.</a></li>
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/new_website/new/indcon.php#">PLC Controlled Production Machines.</a></li>
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/new_website/new/indcon.php#">Innovative Solutions to Home Appliance Products.</a></li>
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/new_website/new/indcon.php#">Innovative Solutions to Automobile Products.</a></li>
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/new_website/new/indcon.php#">Innovative Solutions to Thermal Power Plant Products.</a></li>
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/new_website/new/indcon.php#">Innovative Solutions to General Purpose Products.</a></li>
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/new_website/new/indcon.php#">Automated Quality Checking &amp; Material Handling Systems.</a></li>
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/new_website/new/indcon.php#">Consultancy on Composite Products</a></li>
</ul>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >SOME OF THE INVENTIONS PROTOTYPES & MODELS</h3><div class="modal-body" >
<p class="mb-4 text-gray-700 leading-relaxed"><b >Practical Isothermal compression and Isothermal expansion system using Reciprocating piston mechanism.</b></p>
<p class="mb-4 text-gray-700 leading-relaxed"><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto" src="https://vignanits.ac.in/new/images/industrial-consultancy/ic1.jpg"   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload"  /></p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Salient Features:</b></p>
<p class="mb-4 text-gray-700 leading-relaxed">1. The temperature at the end of compression or expansion is increased/ reduced only 10-200c in the practical isothermal Compression/expansion system due to more than 100 times increased heat transfer rate than conventional Reciprocating system.<br />2. With this Invention the Engine efficiency can be increased to 60% i.e. (90% of Carnot efficiency for given Temperature limits) and the all the energy needs can be fulfilled using solar energy economically and efficiently.<br />3. With this Invention the energy can be stored economically and efficiently in the form of compressed air as an alternate to rechargeable Batteries.<br />4. The power consumption of Refrigerators and Air conditioners will be reduced to around half.</p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Twin Engine Automobile.</b></p>
<p class="mb-4 text-gray-700 leading-relaxed"><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto" src="https://vignanits.ac.in/new/images/industrial-consultancy/ic2.jpg"   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload"  /></p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Salient Features:</b></p>
<p class="mb-4 text-gray-700 leading-relaxed">Driver gets option to select 1/3capacity engine for low speeds around 40 KMPH) and 2/3 capacity engine for Moderate speeds (80 KMPH) and both engines for high speed (around 120 KMPH) operation. Thereby the mileage of the vehicle will be Improved 100% at low speeds, 50% in moderate speeds and same mileage in high speed like conventional vehicle</p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Efficient Counter flow Heat Exchanger.</b></p>
<p class="mb-4 text-gray-700 leading-relaxed"><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto" src="https://vignanits.ac.in/new/images/industrial%20consultancy/ic3.jpg"   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload"  /></p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Salient Features:</b></p>
<p class="mb-4 text-gray-700 leading-relaxed">The efficient counter flow heat exchanger decreases the temperature difference between inlet and outlet on both sides of the heat exchanger to around 10-200c, because of increased heat transfer coefficient and surface area for the given volume and weight of heat exchanger. This heat exchanger is 30 times more efficient than conventional Shell and tube Heat exchanger.<br />With this invention the exhaust gas heat recovery will be very efficient. The efficient Ericson cycle engine can be developed practically with 90% of Carnot efficiency for the given temperature limits.</p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Energy Saving Fan.</b></p>
<p class="mb-4 text-gray-700 leading-relaxed"><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto" src="https://vignanits.ac.in/new/images/industrial%20consultancy/ic4.jpg"   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload"  /></p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Salient Features:</b></p>
<p class="mb-4 text-gray-700 leading-relaxed">The Energy saving fan reduces the power consumption to 1/3rd compared to the conventional fan of same capacity of air blow/ min. The fan blades angle and size are increased 4 times and speed reduced 3 times with the help of speed reduction drive, thereby the quantity of air blow is same, but power consumption reduces drastically because the power is proportional to the v3 of fan blade velocity.</p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Some of the Vehicle Design Models:.</b></p>
<p class="mb-4 text-gray-700 leading-relaxed"><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto" src="https://vignanits.ac.in/new/images/industrial%20consultancy/ic5.jpg"   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload"  /></p>
<p class="mb-4 text-gray-700 leading-relaxed">&nbsp;</p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Salient Features:</b></p>
<p class="mb-4 text-gray-700 leading-relaxed">It is designed for travelling 4 to 5 members with protection from atmosphere. It gives a mileage like a Big Bike. It is economical for middle class families to travel in the cities.</p>
<p class="mb-4 text-gray-700 leading-relaxed">&nbsp;</p>
<p class="mb-4 text-gray-700 leading-relaxed"><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto" src="https://vignanits.ac.in/new/images/industrial%20consultancy/ic6.jpg"   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload"  /></p>
<p class="mb-4 text-gray-700 leading-relaxed">&nbsp;</p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >Salient Features:</b></p>
<p class="mb-4 text-gray-700 leading-relaxed">The Bus is redesigned to reduce the frontal area and coefficient of wind friction. The collapsible wind friction reduction attachments helps to overcome all the problems related to the increase of length of vehicle. Thereby the mileage of Bus will be doubled at highways at high speed.</p>
<p class="mb-4 text-gray-700 leading-relaxed"><b >We have created many more prototypes and 3D models of Innovative products.</b></p>
</div></div></div></div></div></div>` }} 
      />
    </div>
  );
}
