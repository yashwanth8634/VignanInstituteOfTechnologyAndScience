"use client";

import Link from "next/link";
import React from 'react';
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Image from "next/image";
import { BookOpen, Library, Clock, Users, Monitor, BookMarked, Globe } from "lucide-react";

export default function VignanaDharaPage() {
  const booksData = [
    { type: "Under Graduate", sno: 1, department: "Civil Engineering", titles: 400, volumes: 2200 },
    { type: "Under Graduate", sno: 2, department: "Electrical & Electronics Engineering", titles: 1050, volumes: 5960 },
    { type: "Under Graduate", sno: 3, department: "Mechanical Engineering", titles: 1250, volumes: 7210 },
    { type: "Under Graduate", sno: 4, department: "Electronics & Communication Engineering", titles: 1250, volumes: 7515 },
    { type: "Under Graduate", sno: 5, department: "Computer Science & Engineering", titles: 1250, volumes: 7920 },
    { type: "Under Graduate", sno: 6, department: "Electronics & Instrumentation Engineering", titles: 700, volumes: 3700 },
    { type: "Post Graduate", sno: 1, department: "Embedded Systems", titles: 130, volumes: 1800 },
    { type: "Post Graduate", sno: 2, department: "PE & PD", titles: 100, volumes: 1200 },
    { type: "Post Graduate", sno: 3, department: "Computer Science & Engineering", titles: 90, volumes: 1000 },
  ];

  const journalsData = [
    { sno: 1, department: "Electrical & Electronics Engineering", national: 6, international: 25 },
    { sno: 2, department: "Mechanical Engineering", national: 18, international: 8 },
    { sno: 3, department: "Electronics & Communication Engineering", national: 18, international: 70 },
    { sno: 4, department: "Computer Science & Engineering", national: 18, international: 40 },
    { sno: 5, department: "Electronics & Instrumentation Engineering", national: 6, international: 10 },
    { sno: 6, department: "Civil Engineering", national: 6, international: 10 },
    { sno: 7, department: "Embedded Systems", national: 5, international: 15 },
    { sno: 8, department: "PE & ED", national: 5, international: 20 },
    { sno: 9, department: "Computer Science & Engineering", national: 5, international: 25 },
  ];

  const committeeData = [
    { sno: 1, name: "Dr. N Dinesh Kumar, Professor", designation: "Chairman" },
    { sno: 2, name: "Mr. Ch Srinivasa Rao", designation: "Librarian" },
    { sno: 3, name: "Mrs. N Bhaskara Chary", designation: "Librarian" },
  ];

  const eResourcesData = [
    { sno: 1, name: "ABI/Inform complete (Pro Quest)", link: "http://proquest.umi.com/login" },
    { sno: 2, name: "ACM (Association for Computing Machinery)", link: "http://www.acm.org/" },
    { sno: 3, name: "ASCE Journals (American Society of civil Engg.)", link: "http://scitation.aip.org/" },
    { sno: 4, name: "ASME Journals (American Society of Mechanical Engg.)", link: "http://scitation.aip.org/" },
    { sno: 5, name: "ASTM Journals", link: "http://journalsip.astm.org/" },
    { sno: 6, name: "ASTM Standards", link: "http://enterprise.astm.org/" },
    { sno: 7, name: "DELNET Databases", link: "http://www.delnet.nic.in/" },
    { sno: 8, name: "EBSCO HOST (Management Research Database)", link: "http://search.epnet.com/" },
    { sno: 9, name: "ELSEVIER", link: "http://www.sciencedirect.com/" },
    { sno: 10, name: "Emerald Management Extra 150", link: "http://www.emeraldinsight.com" },
    { sno: 11, name: "Engineering Village2 (E-Books)", link: "http://www.engineeringvillage2.com/" },
    { sno: 12, name: "IEL Online (IEEE & IET)", link: "http://www.ieeexplore.ieee.org/" },
    { sno: 13, name: "Indian Standards", link: "http://192.168.129.7/bis_asp" },
    { sno: 14, name: "Math SciNet", link: "http://ams.rice.edu/mathscinet/search.html" },
    { sno: 15, name: "SAE Tech. Papers", link: "http://www.elecpubs.sae.org/dl" },
    { sno: 16, name: "SCOPUS", link: "http://www.scopus.com/" },
    { sno: 17, name: "Springer (Non-medical)", link: "http://www.springerlink.com/" },
    { sno: 18, name: "WEB OPAC (Online Catalogue)", link: "http://192.168.129.20:8080/webopac" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
      <Navbar variant="solid" />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-[120px] pb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/facilities" className="hover:text-white transition-colors">Facilities</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Vignan Dhara</span>
          </nav>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Vignana Dhara Library
            </h1>
            <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl leading-relaxed">
              The Central Library built to International Standards.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8 w-full">

        {/* About Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative h-56 sm:h-72 lg:h-80 w-full overflow-hidden rounded-xl border border-gray-100 group">
            <Image
              src="/FacilitiesPage/VignanDhara.webp"
              alt="Vignana Dhara Library"
              fill
              className="object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Library className="w-5 h-5 sm:w-6 sm:h-6 text-vignan-purple" />
              About VIGNANA DHARA
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium mb-4">
              <strong>VIGNANA DHARA</strong>, the Central library, has been built to International Standards, Spreads over to two floors with an area of 1670 sq.m. It is centrally air-conditioned. Specialized collections of Books, Journals & Non-book materials are available in Basic Sciences, Engineering and Technology, Humanities and Social Sciences.
            </p>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 mt-2 sm:mt-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">First Floor</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Circulation Section – Issue Counter, Return / Renewal Counter, Study Room, Journal Section, Back Volumes Section, Copier Section, Periodical office & Library OPAC. Book Bank Section.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Softwares Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Monitor className="w-6 h-6 text-vignan-blue" />
              Library Softwares
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm text-gray-700">
              <p className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <span className="font-bold text-gray-900 shrink-0">Systems:</span>
                <span>The Library is Equipped with Ezlib software & Gate Keeper.</span>
              </p>
              <p className="flex flex-col sm:flex-row gap-1 sm:gap-2 bg-gray-50 p-3 rounded-lg">
                <span className="font-bold text-gray-900 shrink-0">Ezlib software:</span>
                <span>Used for the purpose of Circulation, Acquisition, Cataloguing, account maintenance, Reports, System administration and OPAC purpose.</span>
              </p>
              <p className="flex flex-col sm:flex-row gap-1 sm:gap-2 bg-gray-50 p-3 rounded-lg">
                <span className="font-bold text-gray-900 shrink-0">Gate Keeper:</span>
                <span>Used for student & staff login purposes.</span>
              </p>
            </div>
          </section>

          {/* Timings Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Clock className="w-6 h-6 text-vignan-purple" />
              Library Timings
            </h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-100 text-sm gap-1">
                <span className="font-bold text-gray-800">Working Hours</span>
                <span className="text-vignan-purple font-medium">7:30 AM to 8:00 PM</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm gap-1">
                <span className="font-bold text-gray-800">Transactions</span>
                <span className="text-gray-700 font-medium">7:30 AM to 5:30 PM</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-100 text-sm gap-1">
                <span className="font-bold text-gray-800">Digital Library</span>
                <span className="text-gray-700 font-medium">8:30 AM to 5:30 PM</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center p-3 sm:p-4 bg-red-50 rounded-lg border border-red-100 text-sm gap-1">
                <span className="font-bold text-gray-800">Holidays</span>
                <span className="text-red-700 font-medium">8:30 AM to 3:00 PM</span>
              </div>
            </div>
          </section>
        </div>

        {/* Committee Section (Purple Theme) */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-vignan-purple" />
            Library Committee
          </h2>
          <div className="w-full rounded-xl border border-purple-200 overflow-hidden bg-white">
            <table className="w-full border-collapse block md:table">
              <thead className="hidden md:table-header-group">
                <tr className="bg-vignan-purple text-white text-left">
                  <th className="px-4 py-3 text-sm font-semibold">S.No</th>
                  <th className="px-4 py-3 text-sm font-semibold">Name</th>
                  <th className="px-4 py-3 text-sm font-semibold">Designation</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group divide-y-4 md:divide-y md:divide-purple-200 divide-purple-100">
                {committeeData.map((item) => (
                  <tr key={item.sno} className="block md:table-row hover:bg-purple-50 p-2 md:p-0 transition-colors">
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm text-gray-600 border-b border-purple-50 md:border-none">
                      <span className="md:hidden font-bold text-gray-800">S.No</span>
                      <span className="text-right md:text-left">{item.sno}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-medium text-gray-900 border-b border-purple-50 md:border-none">
                      <span className="md:hidden font-bold text-gray-800">Name</span>
                      <span className="text-right md:text-left">{item.name}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm text-gray-600">
                      <span className="md:hidden font-bold text-gray-800">Designation</span>
                      <span className="text-right md:text-left">{item.designation}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Books Section (Blue Theme) */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-vignan-blue" />
            Books Collection
          </h2>
          <div className="w-full rounded-xl border border-blue-200 overflow-hidden bg-white">
            <table className="w-full border-collapse block md:table">
              <thead className="hidden md:table-header-group">
                <tr className="bg-vignan-blue text-white text-left">
                  <th className="px-4 py-3 text-sm font-semibold">Course</th>
                  <th className="px-4 py-3 text-sm font-semibold">S.No</th>
                  <th className="px-4 py-3 text-sm font-semibold">Department</th>
                  <th className="px-4 py-3 text-sm font-semibold text-right">Titles</th>
                  <th className="px-4 py-3 text-sm font-semibold text-right">Volumes</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group divide-y-4 md:divide-y md:divide-blue-200 divide-blue-100">
                {booksData.map((item, index) => (
                  <tr key={index} className="block md:table-row hover:bg-blue-50 p-2 md:p-0 transition-colors">
                    <td className={`flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-bold border-b border-blue-50 md:border-none ${index === 0 || index === 6 ? 'bg-blue-50/50 md:bg-blue-50/30 text-vignan-blue rounded-t-lg md:rounded-none' : 'text-gray-500'}`}>
                      <span className="md:hidden font-bold text-gray-800">Course</span>
                      <span className="text-right md:text-left">{index === 0 ? "Under Graduate" : index === 6 ? "Post Graduate" : ""}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm text-gray-600 border-b border-blue-50 md:border-none">
                      <span className="md:hidden font-bold text-gray-800">S.No</span>
                      <span className="text-right md:text-left">{item.sno}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-medium text-gray-900 border-b border-blue-50 md:border-none">
                      <span className="md:hidden font-bold text-gray-800">Department</span>
                      <span className="text-right md:text-left">{item.department}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-bold text-gray-700 border-b border-blue-50 md:border-none md:text-right">
                      <span className="md:hidden font-bold text-gray-800">Titles</span>
                      <span className="text-right">{item.titles}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-bold text-vignan-blue md:text-right">
                      <span className="md:hidden font-bold text-gray-800">Volumes</span>
                      <span className="text-right">{item.volumes}</span>
                    </td>
                  </tr>
                ))}
                <tr className="block md:table-row bg-blue-50/50 font-bold p-2 md:p-0 border-t border-blue-200">
                  <td className="hidden md:table-cell px-4 py-4 text-sm text-gray-800" colSpan={3}>Grand Total</td>
                  <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-4 text-sm text-vignan-blue border-b border-blue-100 md:border-none md:text-right">
                    <span className="md:hidden text-gray-800">Grand Total Titles</span>
                    <span className="text-right">6220</span>
                  </td>
                  <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-4 text-sm text-vignan-blue md:text-right">
                    <span className="md:hidden text-gray-800">Grand Total Volumes</span>
                    <span className="text-right">38505</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Journals Section (Purple Theme) */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <BookMarked className="w-6 h-6 text-vignan-purple" />
            Journals
          </h2>
          <div className="w-full rounded-xl border border-purple-200 overflow-hidden bg-white">
            <table className="w-full border-collapse block md:table">
              <thead className="hidden md:table-header-group">
                <tr className="bg-vignan-purple text-white text-left">
                  <th className="px-4 py-3 text-sm font-semibold">Type</th>
                  <th className="px-4 py-3 text-sm font-semibold">S.No</th>
                  <th className="px-4 py-3 text-sm font-semibold">Department</th>
                  <th className="px-4 py-3 text-sm font-semibold text-right">National</th>
                  <th className="px-4 py-3 text-sm font-semibold text-right">International</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group divide-y-4 md:divide-y md:divide-purple-200 divide-purple-100">
                {journalsData.map((item, index) => (
                  <tr key={item.sno} className="block md:table-row hover:bg-purple-50 p-2 md:p-0 transition-colors">
                    <td className={`flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-bold border-b border-purple-50 md:border-none ${index === 0 ? 'bg-purple-50/50 md:bg-purple-50/30 text-vignan-purple rounded-t-lg md:rounded-none' : 'text-gray-500'}`}>
                      <span className="md:hidden font-bold text-gray-800">Type</span>
                      <span className="text-right md:text-left">{index === 0 ? "Journal" : ""}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm text-gray-600 border-b border-purple-50 md:border-none">
                      <span className="md:hidden font-bold text-gray-800">S.No</span>
                      <span className="text-right md:text-left">{item.sno}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-medium text-gray-900 border-b border-purple-50 md:border-none">
                      <span className="md:hidden font-bold text-gray-800">Department</span>
                      <span className="text-right md:text-left">{item.department}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-bold text-gray-700 border-b border-purple-50 md:border-none md:text-right">
                      <span className="md:hidden font-bold text-gray-800">National</span>
                      <span className="text-right">{item.national}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-bold text-vignan-purple md:text-right">
                      <span className="md:hidden font-bold text-gray-800">International</span>
                      <span className="text-right">{item.international}</span>
                    </td>
                  </tr>
                ))}
                <tr className="block md:table-row bg-purple-50/50 font-bold p-2 md:p-0 border-t border-purple-200">
                  <td className="hidden md:table-cell px-4 py-4 text-sm text-gray-800" colSpan={3}>Grand Total</td>
                  <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-4 text-sm text-vignan-purple border-b border-purple-100 md:border-none md:text-right">
                    <span className="md:hidden text-gray-800">Grand Total National</span>
                    <span className="text-right">87</span>
                  </td>
                  <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-4 text-sm text-vignan-purple md:text-right">
                    <span className="md:hidden text-gray-800">Grand Total International</span>
                    <span className="text-right">223</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* E-Resources Section (Blue Theme) */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Globe className="w-6 h-6 text-vignan-blue" />
            Electronic Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {/* ... (E-resource cards remain same) ... */}
            <div className="bg-blue-50/50 p-4 sm:p-6 rounded-xl border border-blue-100 flex flex-col h-full">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">IEEE ASPP - Transactions & Magazines</h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
                IEEE ASPP - Transactions & Magazines (CSE, ECE, EEE, IT, MCA,BME,BT) 223 journals + back file to 2001. IEEE Provides full-text access to high quality technical literature in electrical engineering, computer science, electronics, and related disciplines.
              </p>
              <a href="#" className="text-xs sm:text-sm text-center sm:text-left text-vignan-blue font-semibold hover:underline bg-white px-3 py-2 rounded-md border border-blue-200 self-start shadow-sm w-full sm:w-auto">Details about IEEE</a>
            </div>

            <div className="bg-purple-50/50 p-4 sm:p-6 rounded-xl border border-purple-100 flex flex-col h-full">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">DELNET : Developing Library Network</h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
                DELNET has been established with the prime objective of promoting resource sharing among the libraries through the development of a network of libraries. It aims to collect, store, and disseminate information besides offering computerized services to users.
              </p>
              <a href="#" className="text-xs sm:text-sm text-center sm:text-left text-vignan-purple font-semibold hover:underline bg-white px-3 py-2 rounded-md border border-purple-200 self-start shadow-sm w-full sm:w-auto">Details about delnet</a>
            </div>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 bg-gray-50 p-2 rounded-lg inline-block border border-gray-100">Full Directory</h4>
          <div className="w-full rounded-xl border border-blue-200 overflow-hidden bg-white">
            <table className="w-full border-collapse block md:table">
              <thead className="hidden md:table-header-group">
                <tr className="bg-vignan-blue text-white text-left">
                  <th className="px-4 py-3 text-sm font-semibold">S.No</th>
                  <th className="px-4 py-3 text-sm font-semibold">Name</th>
                  <th className="px-4 py-3 text-sm font-semibold">Link</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group divide-y-4 md:divide-y md:divide-blue-200 divide-blue-100">
                {eResourcesData.map((item) => (
                  <tr key={item.sno} className="block md:table-row hover:bg-blue-50 p-2 md:p-0 transition-colors">
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm text-gray-600 border-b border-blue-50 md:border-none">
                      <span className="md:hidden font-bold text-gray-800">S.No</span>
                      <span className="text-right md:text-left">{item.sno}</span>
                    </td>
                    <td className="flex justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm font-medium text-gray-900 border-b border-blue-50 md:border-none">
                      <span className="md:hidden font-bold text-gray-800 text-left mr-4">Name</span>
                      <span className="text-right md:text-left">{item.name}</span>
                    </td>
                    <td className="flex flex-col sm:flex-row justify-between md:table-cell px-4 py-2.5 md:py-3 text-sm gap-1 md:gap-2">
                      <span className="md:hidden font-bold text-gray-800">Link</span>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-vignan-blue hover:underline hover:text-blue-800 font-medium break-all text-left sm:text-right md:text-left"
                      >
                        {item.link}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}