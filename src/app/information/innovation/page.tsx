
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
      <span className="text-white font-medium">Innovation</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-[#003666] border-b-2 border-gray-200 pb-4">Innovation & Incubation Center</h1>
      <div 
        className="prose prose-lg max-w-none text-[#333333] leading-relaxed prose-headings:text-[#003666] prose-a:text-[#003666] prose-img:rounded-lg prose-img:shadow-md"
        dangerouslySetInnerHTML={{ __html: `><h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >IBM Center of Excellence</h3><p class="mb-4 text-gray-700 leading-relaxed">IBM &amp; VITS, acknowledge the need for IBM Software skills, in the IT Education and training sector. The Objective is to have a number of graduating professionals skilled on IBM Software. Both IBM and VITS are keen to cooperate in a way that shall benefit VITS students pursuing a career in the industry.</p>
<p class="mb-4 text-gray-700 leading-relaxed">         VITS shall rollout under/Post-graduate/Certificate/value added programs with specialization aligned with relevant IBM Software delivering all or any such programs to enrolled students and faculty members.</p>
<p class="mb-4 text-gray-700 leading-relaxed">      The Curriculum may be provided by IBM or Jointly developed by IBM and VITS designated subject matter experts. There may be additional specialized offerings and curriculum may be reviewed and updated by IBM and VITS from time to time with mutual aggreement.</p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >CISCO Networking Lab</h3><p class="mb-4 text-gray-700 leading-relaxed"><img class="size-full wp-image-12255 aligncenter lazyload" src="https://vignanits.ac.in/wp-content/uploads/2021/11/cisco-1.jpg" alt=""   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  /></p>
<p class="mb-4 text-gray-700 leading-relaxed">Cisco Networking Academy is an IT skills and career-building program for learning institutions and individuals worldwide.</p>
<p class="mb-4 text-gray-700 leading-relaxed">The Memorandum of Understanding (MoU) was signed between Vignan Institute of Technology and Science Cisco Inc. for implementing the Cisco Network Academy program at College Premises. College established separate laboratory for Cisco Networking Programs. The training programs will be organized in Networking and its related technologies for students which will be useful for career growth of students.</p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >LAB View</h3><p class="mb-4 text-gray-700 leading-relaxed">LabVIEW provides the state-of-the-art way to effectively teach and learn basic and advanced engineering concepts using a graphical programming platform. Nowadays engineers and scientists rely on LabVIEW for a variety of applications: test and measurement, process control and automation, monitoring and simulation.</p>
<p class="mb-4 text-gray-700 leading-relaxed">The objective to present theoretical and practical concepts and hands-on in LabVIEW, intended to teach students on  tools of LabVIEW with an emphasis on various applications.</p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >IOT Lab in Collaboration with Red Pine Signals</h3><p class="mb-4 text-gray-700 leading-relaxed"><strong>Vision</strong></p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8220;To evolve into a center of excellence in Science &amp; Technology through creative and innovative practices in teaching-learning, promoting academic achievement &amp; research excellence to produce internationally accepted competitive and world class professionals who are psychologically strong and emotionally balanced imbued with social consciousness and ethical values.&#8221;</p>
<p class="mb-4 text-gray-700 leading-relaxed"><strong> </strong><strong>Mission</strong></p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8220;To provide high quality academic programmes, training activities, research facilities and opportunies supported by continuous industry &#8211; institute interaction aimed at employability, entrepreneurship, leadership and research aptitude among students and contribute to the economic and technological development of the region, state and nation.&#8221;</p>
<p class="mb-4 text-gray-700 leading-relaxed">Objectives:</p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8211; To create a laboratory for IoT, equipping it with a minimum WyzBee boards procured from Redpine through its local sales channel</p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8211; To equip the lab with other essentials such as PCs, power supply, internet access via Wi-Fi, etc.</p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8211; To organize and execute training courses and sessions based on the designated IoT Platform, including pre-requisites.</p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8211; To assign faculty and staff to take up the assigned activity.</p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8211; To support students taking up of projects based on the platform.</p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8211; To purchase and equip laboratories with additional platforms and peripherals in accordance with the institution’s policies, sufficiently.</p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8211; To support the defined courses and lab work.</p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8211; To identify applications and research areas based on studies carried out, and the insight of, faculty and students.</p>
<p class="mb-4 text-gray-700 leading-relaxed">&#8211; To prepare to offer real world solutions to problems in areas identified as thrust areas by government of India and Government of Telangana policy.</p>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Composite Laboratory</h3><p class="mb-4 text-gray-700 leading-relaxed"><strong>Composite Manufacturing and Research Lab: </strong>Composites are new generation materials which are light-weight, corrosion- resistant and stronger than conventional engineering materials. The research and developmental activities of this lab have contributed to resolve certain technical problems encountered by researchers and students of engineering institutions. Students and faculty researchers of this institute actively involve themselves in the research activities. This has resulted in many successful and on-going student mini and major projects, funding projects and numerous research publications.</p>
<p class="mb-4 text-gray-700 leading-relaxed"><strong>The outcomes of the research activities of the lab include:</strong></p>
<ol>
<li class="pl-1">Decrease of bicycle frame weight by 4 kg which is achieved by replacing some parts of it by composite materials, without sacrificing the performance parameters. The durability of composite materials is better than steel.</li>
<li class="pl-1">The research work done by a faculty member has contributed to the analysis of propagation of de-lamination damage caused by flying debris and bird hits to aircraft structures.</li>
</ol>
<h3 class="text-xl font-bold text-[#003666] mt-8 mb-4 border-b pb-2"   >Innovative Project Laboratory</h3><p class="mb-4 text-gray-700 leading-relaxed" ><span lang="EN-IN">A young mind is the sharpest mind. It learns quick and acts quicker. The education system today focuses on books and rote-learning, but times are changing as these young geniuses, who chose to take a different path, have proved. They have picked machines over books and ideas over words.</span></p>
<p class="mb-4 text-gray-700 leading-relaxed" ><span lang="EN-IN">The Innovative projects are one such idea or platform that is giving these young minds a place to experiment and innovate, and come up with something extra ordinary. This platform will showcase how well these technologies are being applied to implement new and more innovative approaches of learning. It&#8217;s &#8220;technology in action&#8221;. For the students it offers a way of integrating ideas and materialise the course and exploring innovation.</span></p>
<p class="mb-4 text-gray-700 leading-relaxed" ><span lang="EN-IN">The aim of Innovative Projects is to involve all the students from all the departments to show their talents and come up with new ideas. The main focus is to involve student to learn the practical aspects of Engineering and Technology and how to solve real time problems using latest technologies. Few projects will be mainly concentrated on solving societal problems which will really benefit the mankind. </span></p>
<p class="mb-4 text-gray-700 leading-relaxed" ><span lang="EN-IN">The student involvement in innovative projects starts during the starting of the semester, 40 minutes during the lab time is allotted to work on these projects in a group of 3 to 5 students. The concerned faculty will guide the students to understand the concepts. Innovative Projects Expo is organized by the college to exhibit the projects done by students. The exhibition is open to school and intermediate students. The idea behind this is to provide a platform to students to overcome their fears and to build the confidence level among them to face the world. During project expo, students will be explaining the projects to school students, intermediate students and Judges. Eminent persons from Academics, Industry and Research are considered for judging these projects. The projects are judged on 50 points scale which includes presentation, demo, impact on society, innovative concept and project design. Based on results from judges top three projects will be considered as winners from each department and awarded with cash prize and appreciation certificates to students. </span></p>
</div></div>` }} 
      />
    </div>
  );
}
