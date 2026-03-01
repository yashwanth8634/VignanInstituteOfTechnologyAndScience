import Link from "next/link";
import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import { Scale } from "lucide-react";
import React from 'react';


export const metadata = {
  title: "RTI | VITS",
  description: "Information about Rti at VITS.",
};

export default function RightToInformationPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
      <Navbar variant="solid" />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-[120px] pb-7">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-3 block">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/mandatory-disclosures" className="hover:text-white transition-colors">Mandatory Disclosures</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">RTI</span>
          </nav>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Scale className="w-8 h-8 opacity-90 shrink-0" />
              Right to Information (RTI)
            </h1>
            <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed">
              Information regarding the RTI Act and operations carried out by the Institution.
            </p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 w-full">

        {/* Institution Overview */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 mb-10">
          <div className="prose prose-lg text-gray-700 leading-relaxed text-justify max-w-none space-y-6">
            <p>
              Vignan Institute of Technology and Science is the brainchild of Dr L Rathaiah, Chairman, of Vignan Group of Institutions, and was founded in 1999 with four branches of Engineering.
            </p>
            <p>
              VGNT is an exemplary institution of higher learning with a mission of pursuing excellence in education and research. The institution, with its diverse and dynamic community of about 2500 students offers a distinctive combination of some of the finest facilities for MCA, MBA and M.Tech. with 5 different graduates, and undergraduate programs ECE, CSE, EEE, MECH, CIVIL, EIE accomplished faculty, world-class facilities with hostel set on a sprawling 350 acres of sylvan surroundings of valleys and watersheds, mango groves and greenery.
            </p>
            <p>
              While students at VGNT immerse themselves in academics, the college has a lot in store for them outside the classroom. Student life includes participation in sports, recreational &amp; co-curricular and cultural activities. In short, at VGNT, students will find an academic and social environment where everyone from faculty members to peers helps shape their future.
            </p>
            <p>
              VGNT is home to aesthetically designed buildings with state-of-the-art computer and internet facilities, modern laboratories, workshops, seminar halls, auditoriums and well-stocked libraries, sports and games fields.
            </p>
            <p>
              The Institution boasts of a strong alumni network with alumni events held every year serving as a platform for past students to give back to VGNT and share their experiences with its present fellow students.
            </p>
            <p>
              With so much to offer, it is only natural that students of VGNT get a unique opportunity to carve a niche for themselves in their chosen field of study that enables them to become well-rounded and discerning citizens, fully qualified for their chosen professions in the workplace.
            </p>
            <p>
              It is hoped that the information put under the public domain through www.vignanits.ac.in would facilitate the citizens to access information through electronic mode, thereby avoiding, to the extent possible, the inconvenience to ask formally for such information as may be already open to them. While compiling the information due care has been exercised. However, if any mistake has skulked into due to inadvertence, it is subject to correction.
            </p>
          </div>
        </section>

        {/* RTI Specific Information */}
        <section className="bg-blue-50/50 rounded-2xl border border-blue-100 p-8 md:p-10 mb-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">Publicity</h2>
            <h3 className="text-xl font-bold text-vignan-purple uppercase mt-2">VIGNAN INSTITUTE OF TECHNOLOGY AND SCIENCE</h3>
          </div>

          <div className="prose prose-lg text-gray-700 leading-relaxed text-justify max-w-none space-y-6">
            <p>
              Right to Information (RTI) is an Act of the Parliament of India to provide for setting out the practical regime of right to information for citizens and replaces the erstwhile Freedom of Information Act, of 2002. Under the provisions of the Act, any citizen of India may request information from a &quot;public authority&quot; (a body of Government or &quot;instrumentality of State&quot;) which is required to reply expeditiously or within thirty days. The Act also requires every public authority to computerise their records for wide dissemination and to proactively certain categories of information so that the citizens need minimum recourse to request information formally.
            </p>
            <p>
              This law was passed by Parliament on 15 June 2005 and came fully into force on 12 October 2005. The first application was given to a Pune police station. Information disclosure in India was restricted by the Official Secrets Act 1923 and various other special laws, which the new RTI Act relaxes. It codifies a fundamental right of citizens.
            </p>
            <p>
              Right to Information Act 2005 mandates timely response to citizen requests for government information. It is an initiative taken by the Department of Personnel and Training, Ministry of Personnel, Public Grievances and Pensions to provide an RTI Portal Gateway to the citizens for quick search of information on the details of first Appellateities, PIOs etc. amongst others, besides access to RTI related information/disclosures published on the web by various Publicities under the Government of India as well as the State Governments.
            </p>
            <p>
              The Act covers the whole of India except Jammu and Kashmir. It covers all constitutional authorities, including the executive, legislature and judiciary; any institution or body established or constituted by an act of Parliament or a state legislature. It is also defined in the Act that bodies or authorities established or constituted by order or notification of appropriate government including bodies &quot;owned, controlled or substantially financed&quot; by government, or non-Government organizations &quot;substantially financed, directly or indirectly by funds&quot;
            </p>
            <p>
              It is an initiative taken by the Department of Personnel and Training, Ministry of Personnel, Public Grievances and Pensions to provide an RTI Portal Gateway to the citizens for quick search of information on the details of first Appellateities, PIOs etc. amongst others, besides access to RTI related information/disclosures published on the web by various Publicities under the Government of India as well as the State Governments.
            </p>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-8 border-l-4 border-l-vignan-purple">
              <p className="m-0 font-medium text-gray-800">
                Any citizen of India seeking information related to the operations carried out by the Vignan Institute of Technology and Science can send an email to <a href="mailto:prasanna@vignanits.ac.in" className="text-vignan-purple hover:underline font-bold">prasanna@vignanits.ac.in</a> clearly stating the information needed. The information sought will be provided within the minimum period fixed by the RTI Act.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1uI8fDIFoAiIKAiXuYHk0tPX-y46D77qp/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 shadow-sm rounded-lg text-[#003666] font-semibold hover:shadow-md hover:border-vignan-purple transition-all"
              >
                <Scale className="w-5 h-5 text-vignan-purple" />
                Information Regarding the RTI Application received so Far
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
            Name and Address of the Publicity:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg font-bold text-vignan-purple mb-1">Dr J V Rao</h3>
              <p className="text-gray-600 font-medium mb-3">Professor &amp; Dean Evaluation</p>
              <address className="not-italic text-gray-600 leading-relaxed text-sm">
                Vignan Institute of Technology and Science,<br />
                Deshmukhi(V), Pochampally(M),<br />
                Yadadri-Bhuvanagiri District, Telangana-508284.
              </address>
            </div>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <span className="font-bold text-gray-900 block mb-1">Phone Number</span>
                08685-226128, 9866399776/861
              </div>
              <div>
                <span className="font-bold text-gray-900 block mb-1">EAMCET Code</span>
                VGNT
              </div>
              <div>
                <span className="font-bold text-gray-900 block mb-1">Email</span>
                <a href="mailto:principal.vgnt89.com" className="text-vignan-purple hover:underline block">principal.vgnt89.com</a>
                <a href="mailto:principal.vgnt@vignanits.ac.in" className="text-vignan-purple hover:underline block">principal.vgnt@vignanits.ac.in</a>
              </div>
              <div className="pt-2">
                <span className="font-bold text-gray-900 text-xs uppercase tracking-wide">For student verification contact:</span>
                <span className="block font-medium mt-1">9441045884</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
