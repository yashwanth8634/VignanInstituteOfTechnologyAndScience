"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../components/HomePage/Navbar";
import Footer from "../../../components/HomePage/Footer";
import { Monitor, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "../../../lib/utils";




const Carousel_005 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_005 {
    width: 100%;
    height: 440px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_005 .swiper-slide {
    background-position: center;
    background-size: cover;
     border-radius: 25px;
  }

  .Carousal_005 .swiper-pagination-bullet {
    background-color: #000 !important;
  }
  `;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-4xl px-2", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                delay: 1500,
                disableOnInteraction: true,
              }
              : false
          }
          effect="creative"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          pagination={
            showPagination
              ? {
                clickable: true,
              }
              : false
          }
          navigation={
            showNavigation
              ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
              : false
          }
          className="Carousal_005"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Pagination, Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
              <img
                className="h-full w-full scale-105 rounded-3xl object-cover"
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default function ICTFacilitiesPage() {
  const images1 = [
    {
      src: "/FacilitiesPage/SeminarHall1/1.jpg",
      alt: "Seminar Hall 1 View",
    },
    {
      src: "/FacilitiesPage/SeminarHall1/2.jpg",
      alt: "Seminar Hall 1 Presentation",
    },
    {
      src: "/FacilitiesPage/SeminarHall1/3.jpg",
      alt: "Seminar Hall 1 Presentation",
    },
    {
      src: "/FacilitiesPage/SeminarHall1/4.jpg",
      alt: "Seminar Hall 1 Presentation",
    },
    {
      src: "/FacilitiesPage/SeminarHall1/5.jpg",
      alt: "Seminar Hall 1 Presentation",
    },
  ];

  const images2 = [
    {
      src: "/FacilitiesPage/SeminarHall2/1.jpg",
      alt: "Seminar Hall 2 Audience",
    },
    {
      src: "/FacilitiesPage/SeminarHall2/2.jpg",
      alt: "Seminar Hall 2 Stage",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
      <Navbar variant="solid" />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-[120px] pb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-3 block">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/facilities" className="hover:text-white transition-colors">Facilities</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">ICT Facilities</span>
          </nav>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
              <Monitor className="w-8 h-8 opacity-90 shrink-0" />
              ICT Facilities
            </h1>
            <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed">
              Modern infrastructure equipped with digital and presentation tools.
            </p>
          </div>
        </div>
      </div>

      {/* Content Range */}
      <div className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12 md:space-y-16 w-full">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-10">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10 tracking-tight uppercase">
            Seminar Halls
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
            {/* Seminar Hall 1 */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                Seminar Halls-1
              </h3>
              <div className="w-full flex justify-center bg-[#f5f4f3] rounded-3xl py-6">
                <Carousel_005 images={images1} autoplay showPagination loop showNavigation />
              </div>
            </div>

            {/* Seminar Hall 2 */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                Seminar Halls-2
              </h3>
              <div className="w-full flex justify-center bg-[#f5f4f3] rounded-3xl py-6">
                <Carousel_005 images={images2} autoplay showPagination loop showNavigation />
              </div>
            </div>
          </div>
        </div>

        {/* Additional IT Facilities */}
        <div className="mt-16 space-y-12 lg:space-y-16 w-full">

          {/* WIFI Facility */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
              {/* Image */}
              <div className="relative h-64 sm:h-80 md:h-100 w-full lg:h-auto min-h-[420px] overflow-hidden group">
                <Image
                  src="/FacilitiesPage/Images/WIFI.png"
                  alt="Student using Wi-Fi Campus"
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-start">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-vignan-purple rounded-full"></span>
                  Wi-Fi-enabled Campus
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed text-justify">
                  <p>
                    Our College has a dedicated 500 MBPS Broad band connectivity which allows Wi-Fi connectivity throughout the campus.
                    This facility allows students to access Internet connectivity anywhere within the campus. All the IT resources
                    and content should be available to the faculty and students.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Computer Center */}


        </div>

      </div>

      <Footer />
    </main>
  );
}
