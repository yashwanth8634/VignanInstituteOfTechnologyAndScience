
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
      <span className="text-white font-medium">Committees</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">College Level Committees</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `><p class="mb-4 text-gray-700 leading-relaxed">VGNT, formed Various committees in the College for the smooth and efficient management of activities. It also gives the opportunity to the faculty to grow and develop in their extracurricular activity/field and administrative skills. The committees are constituted by the Principal in consultation with Deans &amp; HODs.</p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Governing Body</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/new/GOB%20MEM.pdf">Governing Body Members</a><br /><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/new/GOB_MOM.pdf">Governing Body Members Minutes</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >IQAC Composition</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/iqac.pdf">IQAC Composition</a><br /><!--</p>
<div class="overflow-x-auto my-8 border border-gray-200 rounded-lg"><table class="min-w-full divide-y divide-gray-200" >
<tbody>
<tr>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0">S.No</th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0">Name</th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0">Designation</th>
<th class="px-6 py-3 bg-gray-50 text-left text-xs font-bold text-[#003666] uppercase tracking-wider border-b border-gray-200 border-r last:border-r-0">Position</th>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">1</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Dr. G. Durga Sukumar</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Principal</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Chairman</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">2</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Dr. M Rama Krishna</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Dean IQAC</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">3</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Prof. G. Narendar</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Dean Administration</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">4</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Prof. N. Leela Prasad</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Dean Faculty Affairs</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">5</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Dr.J.V.Rao</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Dean Evaluation</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">6</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr.N. Sri Anjaneya</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Assistant Professor, CSE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">7</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr. G.Srinivas</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Assistant Professor, EEE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">8</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr. S.Kranthi Reddy</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Assistant Professor, CSE</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">9</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr. Anup Kumar Jana</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Assistant Professor,ME</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">10</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr. Sarat Chandra Mohanty</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Assistant Professor, ME</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Member</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">11</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr.Aga Reddy</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Dean Placements</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Management Representative</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">16</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Dr. K. Naga Sujatha</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Professor, Electrical &#038; Electronics Engineering<br />JNTUH College of Engineering Jagtial</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">External Experts</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">17</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr. M Ashok</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Associate Software Engineer,CGI Technologies</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Alumni</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">18</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr. Vannaldesi Anand</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Relationship Manager SBI, Hyderabad</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Alumni</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">19</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr. N Aditya Bharadwaj</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Business Analyst, Express Scripts Inc, USA</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Alumni</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">20</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Ms. Buram Pranitha</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Technology Analyst, Infosys, Bangalore</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Alumni</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">21</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"> Mr. Aditya Nimmagadda</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Assistant Manager, Hyundai, Hyderabad</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Alumni</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">22</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr.N.Prudhvi</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Entrepreneur, Hyderabad</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Alumni</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">23</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr. K.Sudhakar</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Stakeholder</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Parent</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">24</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr.R.Anil Kumar</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Stakeholder</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Parent</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">25</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr.K.V.R.K. Sarma</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Stakeholder</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Parent</td>
</tr>
<tr>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">26</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Mr.Srinivas</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0">Office Assistant</td>
<td class="px-6 py-4 whitespace-normal text-sm text-gray-700 leading-relaxed border-r border-gray-200 last:border-r-0"></td>
</tr>
</tbody>
</table>
<p class="mb-4 text-gray-700 leading-relaxed">--></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Examination Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/Examination%20Committee_MoM_2022-23.pdf">Examination Committee </a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Training & Placements</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/T&amp;P%20Committee_MoM_2022-23.pdf">Training &amp; Placements Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Entrepreneurship & Development </h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/EDC%20Committee_MoM_2022-23.pdf">Entrepreneruship &amp; Development Committee&gt;</a></p>
<p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/EDC%20Committee_MoM_2022-23.pdf"> </a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Library Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/LIBRARAY_2022-23.pdf">Library Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Intellectual Property Rights</h3><p class="mb-4 text-gray-700 leading-relaxed"><a>Intellectual Property Rights Committee</a><br /><a>Intellectual Property Rights Minutes of Meeting</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Research & Development Committee</h3><ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1D3J6iuH-_nke5uK089rl6zKMPmL4MQAL/view?usp=share_link">Research &amp; Development Committee</a></li>
</ul>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Industry Institute Interaction Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/IIC%20Committee_MoM_2022-23.pdf">Industry Institute Interaction Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Minority Committee </h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/Minority%20Committee_MoM_2022-23.pdf">Minority Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >SC/ST Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/SC_ST_2022-23.pdf">SC/ST Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Internal Complaint Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/WPC%20Committee_MoM_2022-23.pdf">Internal Complaint Committee(Women Protection Cell) </a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Anti Ragging Committee</h3><ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
<li class="pl-1"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="http://Anti Ragging Committee_MoM_2022-23.pdf">Anti Ragging Committee</a></li>
</ul>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Canteen Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/Canteen%20Committee_MoM_2022-23.pdf">Canteen Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Sports Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/Sports%20Committee_MoM_2022-23.pdf">Sports Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Admission Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/admn_2022-23.pdf">Admission Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Cultural Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/Cultural%20Committee_MoM_2022-23.pdf">Cultural Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Finance Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/Finance%20Committee_MoM_2022-23.pdf">Finance Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >NSS</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/NSS_22-23.pdf">NSS Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Research & Development Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/R&amp;D%20Committee_MoM_2022-23.pdf">Research &amp; Development Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Transport Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/new/TRANSPORT.pdf">Transport Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Other Backward Class Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/new/OBC.pdf">Other Backward Class Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Hostel Committee</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/new/HOSTAL%20COMMITTEE.pdf">Hostel Committee</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Central Faculty Recruitment Committee(CFRC)</h3><p class="mb-4 text-gray-700 leading-relaxed"><a>Central Faculty Recruitment Committee(CFRC)</a></p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Grievance Redressal</h3><h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Academic Audit</h3><p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/Academic%20Audit%20I%20Sem.pdf">Academic Audit-I Sem</a></p>
<p class="mb-4 text-gray-700 leading-relaxed"><a class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" class="text-[#003666] font-medium hover:underline transition-colors" target="_blank" rel="noopener noreferrer" href="https://vignanits.ac.in/committee/Academic%20Audit%20II%20Sem.pdf">Academic Audit-II Sem</a></p>
</div></div></div></div>` }} 
      />
    </div>
  );
}
