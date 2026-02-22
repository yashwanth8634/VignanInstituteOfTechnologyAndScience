
import Link from "next/link";
import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <nav className="text-sm text-purple-200 mb-3">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <span className="mx-2">/</span>
      <Link href="/mandatory-disclosures" className="hover:text-white transition-colors">Mandatory Disclosures</Link>
      <span className="mx-2">/</span>
      <span className="text-white font-medium">Professional Bodies</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Professional Bodies</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `><h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >IEEE Student Branch</h3><p class="mb-4 text-gray-700 leading-relaxed">IEEE is the world’s largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.</p>
<p class="mb-4 text-gray-700 leading-relaxed"><strong>IEEE Committee</strong></p>
<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="min-w-full divide-y divide-gray-200" >
<tbody>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>S.No</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Name</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Designation</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Role</strong></p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">1</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"> Dr. N Dinesh Kumar</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Professor, Dean R &amp; D</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Branch Counselor</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">2</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Mr. Harsha Vardhan</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Student</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Chair Person</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">3</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Miss. Shivani</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Student</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Vice Chair Person</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">4</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Miss. Deekshitha</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Student</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Secretary</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">5</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Mr.Tarun</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Student</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Treasure</p>
</td>
</tr>
</tbody>
</table>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Indian Society for Technical Education</h3><p class="mb-4 text-gray-700 leading-relaxed"><b>The Indian Society for Technical Education (ISTE)</b> is the leading National Professional non-profit making Society for the Technical Education System in our country with the motto of Career Development of Teachers and Personality Development of Students and overall development of our Technical Education System.  Being the only national organisation of educators in the field of Engineering and Technology, ISTE effectively contributes in various missions of the Union Government. The strength of ISTE is the strong base it has in technical education institutions in the country.   </p>
<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="min-w-full divide-y divide-gray-200" >
<tbody>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>S.No</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Name</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Designation</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Role</strong></p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">1</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Mr. Anup Kumar Jana</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Assistant  Professor</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Co-ordinator</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">2</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Mr. Kastro Kiran</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Assistant Professor</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Co-ordinator, CIVIL</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">3</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Mr. K Vishnu</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Assistant Professor</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Co-ordinator, EEE</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">4</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Mr.  D Kiran Kumar</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Assistant Professor</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Co-ordinator, ECE</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">5</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Mrs. R Akshara</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Assistant Professor</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Co- ordinator, CSE</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">6</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Mrs. M Swathi</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Assistant Professor</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Co- ordinator, IT</p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">7</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Mr. K Prem Sagar</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Assistant Professor</p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed">Co- ordinator, EIE</p>
</td>
</tr>
</tbody>
</table>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Institution of Engineers </h3><p class="mb-4 text-gray-700 leading-relaxed">The Institution of Engineers (India) [IEI] is the largest multi-disciplinary professional body of engineers, established in 1920 with its Headquarters located in Kolkata and incorporated under Royal Charter on 9th September, 1935 by the then His Majesty of King George V. The Royal Charter endowed the Institution with the responsibility to promote the general advancement of engineering amongst its members and persons attached to the Institution. After Independence, the Institution is a “Body Corporate” protected under Article 372 of the Constitution of India. The Institution of Engineers (India) is administered by a National Council with the President as its Head.</p>
<p class="mb-4 text-gray-700 leading-relaxed">IEI Committee Members</p>
<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="min-w-full divide-y divide-gray-200" >
<tbody>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>S.No</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Name</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Designation</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Role</strong></p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >1</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Dr. P A Harsh Vardhini</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Professor</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Co-ordinator</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >2</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Miss. S Asritha</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >3</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Miss. Bhanu Sree</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >4</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Miss. V Pallavi</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >5</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. P Bhargav</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >6</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. B Anup Kumar Goud</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >7</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. A Vinod Kumar</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Member</td>
</tr>
</tbody>
</table>
</div><h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >American Society of Mechanical Engineers (ASME)</h3><p class="mb-4 text-gray-700 leading-relaxed">ASME helps the global engineering community develop solutions to real world challenges. Founded in 1880 as the American Society of Mechanical Engineers, ASME is a not-for-profit professional organization that enables collaboration, knowledge sharing and skill development across all engineering disciplines, while promoting the vital role of the engineer in society. ASME codes and standards, publications, conferences, continuing education, and professional development programs provide a foundation for advancing technical knowledge and a safer world. In 2020, ASME formed the International Society of Interdisciplinary Engineers (ISIE) LLC, a new for-profit subsidiary to house business ventures that will bring new and innovative products, services, and technologies to the engineering community, and later established the holding company, Global Knowledge Solutions LLC. In 2021, ASME launched a second for-profit subsidiary, Metrix Connect LLC, an industry events and content platform to accelerate digital transformation in the engineering community and the exclusive agent for the Mechanical Engineering® brand of media products.</p>
<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="min-w-full divide-y divide-gray-200" >
<tbody>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>S.No</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Name</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Designation</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Role</strong></p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >1</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Dr. K Chandra Shekar</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Professor &amp; Dean Academics</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Co-ordinator</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >2</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. Manideep</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >3</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Miss. Srija</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >4</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. Manish</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >5</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Miss. Srinidhi</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >6</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. Bala Subramayam</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >7</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Miss. Sai Chandana</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
</tbody>
</table>
</div></div><h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Society of Automotive Engineers</h3><p class="mb-4 text-gray-700 leading-relaxed"><strong>SAE International</strong>, formerly named the Society of Automotive Engineers, is a United States-based, globally active professional association and standards developing organization for engineering professionals in various industries</p>
<p class="mb-4 text-gray-700 leading-relaxed"><strong>SAE Committee</strong></p>
<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="min-w-full divide-y divide-gray-200" >
<tbody>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>S.No</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Name</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Designation</strong></p>
</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Role</strong></p>
</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >1</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Prof. Leela Prasad</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Professor</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Co-ordinator</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >2</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. P Sai Kiran</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >3</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. G Kaushik</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >4</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. G Sai Charan</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >5</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. D Vasanth Kumar</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >6</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. D Bharath</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >7</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Mr. Ajay Krishna</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" >Student</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0" > Member</td>
</tr>
</tbody>
</table>
<p class="mb-4 text-gray-700 leading-relaxed"> </p>
</div></div><h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Computer Society of India(CSI)</h3><p class="mb-4 text-gray-700 leading-relaxed"><strong>Objectives</strong></p>
<ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
<li class="pl-1">The main objective is to learninformation and share ideas in the field of Computer Engineering and Technology Systems.</li>
<li class="pl-1">To Facilitate Knowledge Sharing, Learning, Career Enhancement and Research.</li>
<li class="pl-1">To encourage the students to publish articles in CSI communications and journal.</li>
<li class="pl-1">The students can participateand technology updates through Conferences, Seminars, Tutorials and workshop at discounted rates.</li>
<li class="pl-1">A forum for activities like Paper Presentations, Quiz, Competitions and Exhibitions.</li>
<li class="pl-1">To encourage the students to access the CSI knowledge portal.</li>
</ul>
<p class="mb-4 text-gray-700 leading-relaxed"><strong>Co-Ordinators:</strong></p>
<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="min-w-full divide-y divide-gray-200" >
<tbody>
<tr>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong>S.No</strong></th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong>Name </strong></th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong>CSI MEMBERSHIP ID </strong></th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong>Mobile No</strong></th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong>EMAil id</strong></th>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"> 1</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">K.SRINIVAS</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">5023220128</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">9908274030</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="mailto:srinivas.kmt1@gmail.com">srinivas.kmt1@gmail.com</a></td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"> 2</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">R.AKSHARA</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">5023220129</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">9177841919</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="mailto:akshara.revelle@gmail.com">akshara.revelle@gmail.com</a></td>
</tr>
</tbody>
</table>
<p class="mb-4 text-gray-700 leading-relaxed"><strong>LIST OF ACTIVITIES CONDUCTED:</strong></p>
<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="min-w-full divide-y divide-gray-200" >
<tbody>
<tr>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong> S.NO</strong></th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong>DATE</strong></th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong>ACTIVITY</strong></th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0"><strong>LIST OF STUDENTS PARTICIPATED</strong></th>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">1</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">10/01/2023</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">CSI-STUDENT CHAPTER INAUGURATION</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">91</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">2</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">10/01/2023</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">C-CODE TRACE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">101</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">3</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">10/01/2023</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">GROUP DISCUSSION</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">91</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">4</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">17/03/2023</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">C*(C-STAR)</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">89</td>
</tr>
</tbody>
</table></div>
</div></div></div></div></div><h3   >MASTMO Club</h3><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://www.mastmovgnt.in/" target="_self"   >https://www.mastmovgnt.in/</a></div></div></div></div></div>` }} 
      />
    </div>
  );
}
