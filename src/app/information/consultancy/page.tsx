
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
      <span className="text-white font-medium">Consultancy</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Industrial Consultancy Bureau</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `><h3    >Bureau</h3><p class="mb-4 text-gray-700 leading-relaxed">The main objective of our industrial Consultancy bureau is to provide more profits to our customers by reducing their inputs costs and increasing their quality and quantity of production at low cost by using the innovative and advanced technologies. Our technologies payback period will be as low as three months and may extend to one year depending on the complexity of the problem. We provide all types of technological consultancy services for Mechanical Engineering related industries.</p>
For Details Contact:<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Panel Of Consutants</h3><ol>
<li class="pl-1">Dr. S Dev Prasad</li>
<li class="pl-1">Prof. G.V.Rao</li>
<li class="pl-1">Assoc. Prof. N.Leela Prasad</li>
<li class="pl-1">Dr. K.Chandra sekhar Rao</li>
<li class="pl-1">Assoc. Prof. P.Mangapathi Rao</li>
</ol>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Elements Of Innovation</h3><ol>
<li class="pl-1">Line Balancing</li>
<li class="pl-1">Work Study</li>
<li class="pl-1"> Time Study</li>
<li class="pl-1">Partial Automation</li>
<li class="pl-1">Semi Automation</li>
<li class="pl-1"> Automation of material handling with least disturbance to the existing setup</li>
<li class="pl-1">Innovative changes/ retro fitting of existing Machines to improve productivity.</li>
<li class="pl-1"> Heat recovery systems for optimum power management</li>
<li class="pl-1"> Deployment of solar energy, wherever possible</li>
<li class="pl-1"> Value engineering concepts</li>
<li class="pl-1">Concurrent engineering practices</li>
<li class="pl-1"> Automated online quality checks</li>
<li class="pl-1"> Automatic loading and unloading of components in the machines</li>
<li class="pl-1"> Solutions to quality problems</li>
<li class="pl-1"> Pre and post operations technology at affordable cost</li>
<li class="pl-1"> New Products Design and development</li>
<li class="pl-1"> Finding solutions to provide value for your scrap</li>
<li class="pl-1"> Finding new products to match the current processing capabilities</li>
<li class="pl-1"> Simple robotic processing operations for painting and welding</li>
<li class="pl-1"> Automatic assembling and Disassembling</li>
<li class="pl-1"> Bending &amp; cutting solutions for mass produce items</li>
<li class="pl-1"> Break even financial analysis</li>
</ol>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Area Of Expertise</h3><ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
<li class="pl-1">Special Purpose Machine Tools.</li>
<li class="pl-1">Design &amp; Development of Production Dies.</li>
<li class="pl-1">PLC Controlled Production Machines.</li>
<li class="pl-1">Innovative Solutions to Home Appliance Products.</li>
<li class="pl-1">Innovative Solutions to Automobile Products.</li>
<li class="pl-1">Innovative Solutions to Thermal Power Plant Products.</li>
<li class="pl-1">Innovative Solutions to General Purpose Products.</li>
<li class="pl-1">Automated Quality Checking &amp; Material Handling Systems.</li>
<li class="pl-1">Consultancy on Composite Products.</li>
</ul>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Methodology</h3><ol>
<li class="pl-1"> Expression of Interest for consultancy in a written form</li>
<li class="pl-1"> Visit by VIGNAN consultants and submission of a commercial offer</li>
<li class="pl-1"> Placement of order by Industry</li>
<li class="pl-1"> Order acceptance by Vignan</li>
<li class="pl-1"> Non Disclosure agreement between the parties</li>
<li class="pl-1"> Laying down the approach to solution by mutual agreement</li>
<li class="pl-1"> Documentation of consultancy details</li>
<li class="pl-1"> Prototype fabrication wherever necessary</li>
<li class="pl-1"> Protection of IPR</li>
<li class="pl-1"> Submission of final Consultancy report, and commissioning of equipment wherever necessary</li>
</ol>
</div></div>` }} 
      />
    </div>
  );
}
