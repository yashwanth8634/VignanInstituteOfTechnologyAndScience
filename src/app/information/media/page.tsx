import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Media | VITS",
  description: "Information about Media at VITS.",
};

// ─── Data ───────────────────────────────────────────────────────────────────
const BASE = "https://vignanits.ac.in/wp-content/uploads/2020/07/";

type MediaItem = { title: string; href: string; thumb: string };
type YearGroup = { year: string; items: MediaItem[] };

const mediaData: YearGroup[] = [
  {
    year: "2018",
    items: [
      {
        title: "Bharatha Jyothi Award — Andhra Jyothi Hyderabad 08-02-2018",
        href: BASE + "andhra-jyothi-hyderabad-08-02-2018-2.jpg",
        thumb: BASE + "andhra-jyothi-hyderabad-08-02-2018-2-150x150.jpg",
      },
      {
        title: "Bharatha Jyothi Award — Andhra Jyothi Yadadri 08-02-2018",
        href: BASE + "andhra-jyothi-yadadri-08-02-2018-1.jpg",
        thumb: BASE + "andhra-jyothi-yadadri-08-02-2018-1-150x150.jpg",
      },
      {
        title: "Bharatha Jyothi Award — Eenadu Yadadri 08-02-2018",
        href: BASE + "eenadu-yadadri-08-02-2018-1.jpg",
        thumb: BASE + "eenadu-yadadri-08-02-2018-1-150x150.jpg",
      },
      {
        title: "Bharatha Jyothi Award — Sakshi 08-02-2018",
        href: BASE + "sakshi-08-02-2018-1.jpg",
        thumb: BASE + "sakshi-08-02-2018-1-150x150.jpg",
      },
      {
        title: "ECE Student Vibrant Award — Andhra Jyothi Hyderabad 07-02-2018",
        href: BASE + "andhra-jyothi-hyderabad-07-02-2018-2.jpg",
        thumb: BASE + "andhra-jyothi-hyderabad-07-02-2018-2-150x150.jpg",
      },
      {
        title: "ECE Student Vibrant Award — Andhra Jyothi Yadadri 07-02-2018",
        href: BASE + "andhra-jyothi-yadadri-07-02-2018.jpg",
        thumb: BASE + "andhra-jyothi-yadadri-07-02-2018-150x150.jpg",
      },
      {
        title: "ECE Student Vibrant Award — Sakshi 07-02-2018",
        href: BASE + "sakshi-07-02-2018-yadadri.jpg",
        thumb: BASE + "sakshi-07-02-2018-yadadri-150x150.jpg",
      },
      {
        title: "Guest Lecture — Andhra Jyothi Hyderabad 03-02-2018",
        href: BASE + "andhra-jyothi-03-02-2018-hyderabad.jpg",
        thumb: BASE + "andhra-jyothi-03-02-2018-hyderabad-150x150.jpg",
      },
      {
        title: "Guest Lecture — Andhra Jyothi Yadadri 03-02-2018",
        href: BASE + "andhra-jyothi-03-02-2018-yadadri.jpg",
        thumb: BASE + "andhra-jyothi-03-02-2018-yadadri-150x150.jpg",
      },
      {
        title: "Sankranthi Celebrations — Andhra Jyothi Hyderabad 14-01-2018",
        href: BASE + "andhra-jyothi-14-01-18-hyderabad.jpg",
        thumb: BASE + "andhra-jyothi-14-01-18-hyderabad-150x150.jpg",
      },
      {
        title: "Sankranthi Celebrations — Andhra Jyothi Yadadri 14-01-2018",
        href: BASE + "andhra-jyothi-14-01-18-yadadri.jpg",
        thumb: BASE + "andhra-jyothi-14-01-18-yadadri-150x150.jpg",
      },
      {
        title: "Workshop on Python — Andhra Jyothi 13-01-2014",
        href: BASE + "andhtra-jyothi-13-01-2014.jpg",
        thumb: BASE + "andhtra-jyothi-13-01-2014-150x150.jpg",
      },
      {
        title: "Guest Lecture on Machine Learning — Andhra Jyothi Hyderabad 11-01-2018",
        href: BASE + "cse-machine-learnig-adithya-11-01-2018-andhra-jtoyhi-hyderabad.jpg",
        thumb: BASE + "cse-machine-learnig-adithya-11-01-2018-andhra-jtoyhi-hyderabad-150x150.jpg",
      },
    ],
  },
  {
    year: "2017",
    items: [
      {
        title: "Workshop on Machine Learning — Andhra Jyothi Yadadri 13-12-2017",
        href: BASE + "cse-fdp-andhra-jyothi-13-12-17-yadadri.jpg",
        thumb: BASE + "cse-fdp-andhra-jyothi-13-12-17-yadadri-150x150.jpg",
      },
      {
        title: "Workshop on Machine Learning — Namasthe Hyderabad 13-12-2017",
        href: BASE + "namasthe-13-12-17-hyderabad.jpg",
        thumb: BASE + "namasthe-13-12-17-hyderabad-150x150.jpg",
      },
      {
        title: "Seminar on Python — Andhra Jyothi Yadadri main 30-10-2017",
        href: BASE + "ANDHRA-JYOTHI-30-10-17-YADADRI-MAIN.jpg",
        thumb: BASE + "ANDHRA-JYOTHI-30-10-17-YADADRI-MAIN-150x150.jpg",
      },
      {
        title: "Guest Lecture on Tall Building — Andhra Jyothi 27-10-2017",
        href: BASE + "andhra-jyothi-27-10-17-yadadri.jpg",
        thumb: BASE + "andhra-jyothi-27-10-17-yadadri-150x150.jpg",
      },
      {
        title: "Guest Lecture on Low Power Embedded — Andhra Jyothi 02-09-2017",
        href: BASE + "andhra-jyothi-02-09-2017-yadadri.jpg",
        thumb: BASE + "andhra-jyothi-02-09-2017-yadadri-150x150.jpg",
      },
      {
        title: "Guest Lecture on Micro Grid — Andhra Jyothi 12-09-2017",
        href: BASE + "andhra-jyothi-12-09-2017-hyderabad-1.jpg",
        thumb: BASE + "andhra-jyothi-12-09-2017-hyderabad-1-150x150.jpg",
      },
      {
        title: "Engineers Day — Andhra Jyothi Hyderabad 16-09-2017",
        href: BASE + "andhra-jyothi-16-09-2017-hyderabad-1.jpg",
        thumb: BASE + "andhra-jyothi-16-09-2017-hyderabad-1-150x150.jpg",
      },
      {
        title: "State Level Adventures Camp — Andhra Jyothi Hyderabad 23-09-2017",
        href: BASE + "andhra-jyothi-23-09-2017-hyd.jpg",
        thumb: BASE + "andhra-jyothi-23-09-2017-hyd-150x150.jpg",
      },
      {
        title: "State Level Adventures Camp — Andhra Jyothi Yadadri 23-09-2017",
        href: BASE + "andhra-jyothi-23-09-2017-yadadri.jpg",
        thumb: BASE + "andhra-jyothi-23-09-2017-yadadri-150x150.jpg",
      },
    ],
  },
  {
    year: "2016",
    items: [
      {
        title: "VIGNAN TARANG 2K16 — Namasthe Nalgonda 13-04-2016",
        href: BASE + "13-04-16-namasthe-nalgonda.jpg",
        thumb: BASE + "13-04-16-namasthe-nalgonda-150x150.jpg",
      },
      {
        title: "VIGNAN TARANG 2K16 — Namasthe Nalgonda main 14-04-2016",
        href: BASE + "14-04-16-namasthe-nalgonda-main.jpg",
        thumb: BASE + "14-04-16-namasthe-nalgonda-main-150x150.jpg",
      },
      {
        title: "VIGNAN TARANG 2K16 — Andhra Jyothi main 14-04-2016",
        href: BASE + "andhra-jyothi-main-14-04-16.jpg",
        thumb: BASE + "andhra-jyothi-main-14-04-16-150x150.jpg",
      },
      {
        title: "VIGNAN TARANG 2K16 — Sakshi Nalgonda main 14-04-2016",
        href: BASE + "sakshi-nalgonda-main-page-14-04-16.jpg",
        thumb: BASE + "sakshi-nalgonda-main-page-14-04-16-150x150.jpg",
      },
    ],
  },
  {
    year: "2015",
    items: [
      {
        title: "Anti-Ragging Committee — Eenadu 18-08-2015",
        href: BASE + "eenadu_anti_ragging_18-08-15-scaled.jpg",
        thumb: BASE + "eenadu_anti_ragging_18-08-15-150x150.jpg",
      },
      {
        title: "Blood Donation Camp — Andhra Jyothi Hyderabad 30-07-2015",
        href: BASE + "blood_bank_andhra_jyothi30-07-15hyd.jpg",
        thumb: BASE + "blood_bank_andhra_jyothi30-07-15hyd-150x150.jpg",
      },
      {
        title: "Blood Donation Camp — Andhra Jyothi Nalgonda 30-07-2015",
        href: BASE + "blood_bank_andhra_jyothi30-07-15nalgonda.jpg",
        thumb: BASE + "blood_bank_andhra_jyothi30-07-15nalgonda-150x150.jpg",
      },
      {
        title: "Blood Donation Camp — Sakshi Hyderabad 30-07-2015",
        href: BASE + "blood_bank_sakshi_30-07-15_hyd.jpg",
        thumb: BASE + "blood_bank_sakshi_30-07-15_hyd-150x150.jpg",
      },
      {
        title: "Graduation Day — Andhra Jyothi Hyderabad 16-07-2015",
        href: BASE + "andhrajyothi-hyd16-07-15.jpg",
        thumb: BASE + "andhrajyothi-hyd16-07-15-150x150.jpg",
      },
      {
        title: "Graduation Day — Andhra Jyothi Nalgonda 15-07-2015",
        href: BASE + "andhrajyothi-nalgonda-15-07-15.jpg",
        thumb: BASE + "andhrajyothi-nalgonda-15-07-15-150x150.jpg",
      },
      {
        title: "Graduation Day — Eenadu Nalgonda 15-07-2015",
        href: BASE + "eenadu-nalgonda15-7-15.jpg",
        thumb: BASE + "eenadu-nalgonda15-7-15-150x150.jpg",
      },
      {
        title: "Telangana Haritha Haram at VITS 2015",
        href: BASE + "1-1.jpg",
        thumb: BASE + "1-1-150x150.jpg",
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/information"
              className="hover:text-white transition-colors"
            >
              Information
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Media</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            VGNT In Media
          </h1>
          <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
            News and press coverage of Vignan Institute of Technology and
            Science across various print media outlets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">
        {mediaData.map((yearGroup) => (
          <section key={yearGroup.year}>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-vignan-purple text-white text-sm font-bold px-4 py-1.5 rounded-full">
                {yearGroup.year}
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {yearGroup.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                  aria-label={item.title}
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      unoptimized
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-xs text-gray-600 leading-snug line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
