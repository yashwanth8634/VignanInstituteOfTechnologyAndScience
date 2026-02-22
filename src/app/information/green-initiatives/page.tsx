
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
      <span className="text-white font-medium">Green Initiatives</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Green Initiatives</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `><div    data-sync-  ><div    data-parallax-speed="0"   data-bg-image="url(https://vignanits.ac.in/wp-content/uploads/2020/07/greenI.jpg)"><div   data-gdlr-animation="fadeIn" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><div     data-sync-  data-sync-height-center ><div   data-gdlr-animation="fadeInUp" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><span   >Recognizing the quick expansion of the campus, the institute has initiated certain green practices in creating sustainable and eco-friendly environment by constituting a Green Audit team headed by, Dr.G.Durga Sukumar, Principal VITS Hyderabad. The other audit team members include: Mr.G.Narendar (Dean, Administration), Dr. T.Rama Subba Reddy (Prof.EEE), Dr.S.Deva Prasad (Prof. Mechanical Engineering), Dr.Narayan Sangam, Assoc. Prof. (Civil Engineering). The vital function of the team is to conduct annual energy and environmental audit.</span></div></div><div     data-sync-  ><div    data-parallax-speed="0.2"   data-bg-image="url(https://vignanits.ac.in/wp-content/uploads/2020/07/Surveying-II_2.jpg)"><div   data-gdlr-animation="fadeInRight" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><h3    >The other functions of the Green Audit team are:</h3><ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
<li class="pl-1">Closely monitoring the existing status of environment and energy management practices</li>
<li class="pl-1">Suggesting sustainable options for improving the quality of learning</li>
<li class="pl-1">Energy audit and management with ‘go green’ motive</li>
<li class="pl-1">Use of renewable energy like solar power</li>
<li class="pl-1">Solid, liquid and e-waste management</li>
<li class="pl-1">Water conservation and management</li>
</ul>
</div></div></div></div></div></div><div    data-parallax-speed="0.3"   data-bg-image="url(https://vignanits.ac.in/wp-content/uploads/2020/07/SolidWaste.jpg)"><div   data-gdlr-animation="fadeIn" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><div     data-decrease- data-sync-  data-sync-height-center ><div   data-gdlr-animation="fadeInRight" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto" src="https://vignanits.ac.in/wp-content/uploads/2018/08/about-icon-2.png" alt=""   title="about-icon-2" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload"  /><h3    >Solid Waste Management</h3><ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
<li class="pl-1">Waste is collected and segregated in bins of two different colors every day. The waste is segregated into a recyclable and bio-degradable waste. The dry and wet waste is collected separately. The dry waste is collected in blue coloured bins and the wet waste is collected in green coloured bins. These bins are provided by the recyclers.</li>
<li class="pl-1">The institution has a practice of preparing compost from the organic waste which is derived from the trees and plants in the surroundings. The vegetable peels and waste from fruits is disposed in compost pits and other solid waste like food waste produced is disposed</li>
<li class="pl-1">The damaged, wooden and metal furniture like chairs and tables are repaired and brought to re-usable condition to the maximum extent in the maintenance department of the institution.</li>
</ul>
</div></div></div></div><div     data-sync-  data-sync-height-center ><div   data-gdlr-animation="fadeInLeft" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ><img class="max-w-full h-auto rounded-lg shadow-md my-6 block mx-auto" src="https://vignanits.ac.in/wp-content/uploads/2018/08/about-icon-3.png" alt=""   title="about-icon-3" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload"  /><h3    >Liquid Waste Management</h3><p class="mb-4 text-gray-700 leading-relaxed">Vignan, a trusted name for quality education in Andhra Pradesh, has always been figuring among the top due to its commitment to student centric initiatives through out its existence of more than three decades even in the unprecedented proliferation of professional institutions in AP during the last decade.</p>
<div    data-parallax-speed="0.3"   data-bg-image="url(https://vignanits.ac.in/wp-content/uploads/2020/07/liqWas.jpg)"><div   data-gdlr-animation="fadeIn" data-gdlr-animation-duration="600ms" data-gdlr-animation-offset="0.8"  ></div></div></div></div></div></div>` }} 
      />
    </div>
  );
}
