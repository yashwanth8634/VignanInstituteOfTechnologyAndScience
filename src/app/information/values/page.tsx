import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import Link from "next/link";
import React from 'react';
import { Leaf, Droplets, Recycle, Accessibility, FileCheck, Star, ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Institutional Values and Best Practices | VITS",
    description: "Information about Institutional Values and Best Practices at VITS.",
};

// --- Data Structure ---

interface GalleryImage {
    title: string;
    src: string;
}

interface LinkItem {
    text: string;
    url: string;
}

interface SectionContent {
    subtitle?: string;
    description?: string;
    points?: string[];
    image?: string;
    gallery?: GalleryImage[];
    links?: LinkItem[];
}

interface Section {
    id: string;
    title: string;
    icon: React.ElementType;
    content: SectionContent[];
}

const sections: Section[] = [
    {
        id: "waste-management",
        title: "Waste Management",
        icon: Recycle,
        content: [
            {
                subtitle: "Solid Waste Management",
                description: "The institution implements a rigorous waste segregation policy:",
                points: [
                    "Waste is collected and segregated into blue (dry/recyclable) and green (wet/bio-degradable) bins daily.",
                    "Organic waste from trees, plants, vegetable peels, and fruits is converted into compost in dedicated pits.",
                    "Damaged wooden and metal furniture is repaired and refurbished by the maintenance department to extend its lifespan."
                ],
                image: "/InformationPage/ValuesPage/Images/1.jpeg"
            },
            {
                subtitle: "Liquid Waste Management",
                points: [
                    "Wastewater generated from the RO process (approx. 1500 liters/day) is directed to an overhead tank for washroom use.",
                    "Wastewater from sinks and bathrooms is collected in a separate tank and reused to meet 15% of the gardening water requirements.",
                    "Eco-friendly floor cleaners are used to minimize chemical pollution and water usage."
                ],
                image: "/InformationPage/ValuesPage/Images/2.jpeg"
            },
            {
                subtitle: "e-Waste Management",
                description: "Electronic waste is handled responsibly:",
                points: [
                    "Outdated systems and components are handed over to authorized e-waste collectors.",
                    "Functional components are salvaged for student projects or display models.",
                    "Solar panels with defects are returned to vendors via buy-back agreements."
                ],
                image: "/InformationPage/ValuesPage/Images/3.jpeg"
            },
            {
                subtitle: "Hazardous Chemicals & Radioactive Waste",
                points: [
                    "Hazardous chemicals are separated, appropriately labeled, and stored securely away from students.",
                    "Chemical waste is treated using scientific methods before disposal into dedicated basins."
                ],
                image: "/InformationPage/ValuesPage/Images/4.jpg"
            }
        ]
    },
    {
        id: "water-conservation",
        title: "Water Conservation",
        icon: Droplets,
        content: [
            {
                subtitle: "Rain Water Harvesting",
                description: "Rainwater harvesting is our first line of defense against water shortages.",
                points: [
                    "The campus features natural and artificial recharge structures to counter declining groundwater tables.",
                    "Four interlinked water ponds cover approx. 3 acres, collecting an average of 20,000 cubic meters annually.",
                    "Stored water recharges 3 bore wells and meets daily campus requirements.",
                    "Rooftop rainwater is diverted to ground level through a network of discharge pipes."
                ],
                image: "/InformationPage/ValuesPage/Images/5.jpg"
            },
            {
                subtitle: "Other Facilities",
                gallery: [
                    { title: "Bore/Open Well Recharge", src: "/InformationPage/ValuesPage/Images/6.jpg" },
                    { title: "Tanks and Bunds", src: "/InformationPage/ValuesPage/Images/7.jpeg" },
                    { title: "Waste Water Recycling", src: "/InformationPage/ValuesPage/Images/8.jpeg" },
                    { title: "Water Bodies Maintenance", src: "/InformationPage/ValuesPage/Images/9.jpeg" }
                ]
            }
        ]
    },
    {
        id: "green-campus",
        title: "Green Campus Initiatives",
        icon: Leaf,
        content: [
            {
                subtitle: "Eco-Friendly Transport & Pathways",
                points: [
                    "Restricted entry of automobiles to reduce pollution.",
                    "Encouragement of bicycles and battery-powered vehicles.",
                    "Pedestrian-friendly pathways throughout the campus."
                ],
                gallery: [
                    { title: "Restricted Entry", src: "/InformationPage/ValuesPage/Images/10.jpg" },
                    { title: "Battery Vehicle", src: "/InformationPage/ValuesPage/Images/11.jpg" },
                    { title: "Pathways", src: "/InformationPage/ValuesPage/Images/12.jpg" }
                ]
            },
            {
                subtitle: "Plastic Ban & Landscaping",
                points: [
                    "Strict ban on single-use plastics within the campus.",
                    "Extensive landscaping with diverse trees and plants to maintain a green environment."
                ],
                gallery: [
                    { title: "Plastic Ban Awareness", src: "/InformationPage/ValuesPage/Images/13.jpg" },
                    { title: "Green Landscaping", src: "/InformationPage/ValuesPage/Images/14.png" }
                ]
            }
        ]
    },
    {
        id: "divyangjan",
        title: "Facilities for Divyangjan",
        icon: Accessibility,
        content: [
            {
                subtitle: "Inclusive Infrastructure",
                points: [
                    "Ramps and lifts provided for easy access to all floors.",
                    "Disabled-friendly washrooms available.",
                    "Clear signboards for identifying classrooms and administrative offices."
                ],
                gallery: [
                    { title: "Friendly Washrooms", src: "/InformationPage/ValuesPage/Images/15.jpg" },
                    { title: "Sign Boards", src: "/InformationPage/ValuesPage/Images/16.jpg" }
                ],
                links: [
                    { text: "Assistive Technology used in VGNT (PDF)", url: "/Pdfs/ValuesPage/AssistiveTech.pdf" }
                ]
            }
        ]
    },
    {
        id: "audits",
        title: "Green Audits",
        icon: FileCheck,
        content: [
            {
                description: "We regularly conduct audits to monitor our environmental impact.",
                points: [
                    "Green Audits",
                    "Energy Audit",
                    "Environment Audit",
                    "Clean and Green Campus Awards",
                    "Environmental Promotional Activities"
                ],
                links: [
                    { text: "View Green Audit Report 2021", url: "/Pdfs/ValuesPage/green-audit2021.pdf" }
                ]
            }
        ]
    },
    {
        id: "practices",
        title: "Best Practices",
        icon: Star,
        content: [
            {
                description: "Our institution follows distinct best practices to ensure holistic development.",
                links: [
                    { text: "Best Practice - 1 (PDF)", url: "/Pdfs/ValuesPage/BestPractice-1.pdf" },
                    { text: "Best Practice - 2 (PDF)", url: "/Pdfs/ValuesPage/BestPractice-2.pdf" },
                    { text: "Institutional Distinctiveness (PDF)", url: "/Pdfs/ValuesPage/InstitutionalDistinstivness.pdf" }
                ]
            }
        ]
    }
];

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 scroll-smooth">
            <Navbar variant="solid" />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-600 backdrop-blur-md shadow-lg pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="text-sm text-purple-200 mb-6 flex items-center space-x-2">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/information" className="hover:text-white transition-colors">Information</Link>
                        <span>/</span>
                        <span className="text-white font-medium">Values</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Institutional Values & Best Practices</h1>
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        Commitment to sustainability, inclusivity, and excellence in every aspect of campus life.
                    </p>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex flex-col lg:flex-row gap-12">

                {/* Sidebar Navigation (Sticky) */}
                <aside className="lg:w-1/4 shrink-0">
                    <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-4 bg-gray-50 border-b border-gray-100 font-bold text-gray-900">
                            Quick Navigation
                        </div>
                        <nav className="flex flex-col">
                            {sections.map((section) => {
                                const Icon = section.icon;
                                return (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-vignan-purple transition-colors border-b border-gray-50 last:border-0"
                                    >
                                        <Icon className="w-4 h-4" />
                                        {section.title}
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                {/* Content Area */}
                <div className="flex-1 space-y-16">
                    {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <section key={section.id} id={section.id} className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-vignan-purple">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                                </div>

                                <div className="space-y-12">
                                    {section.content.map((block, idx) => (
                                        <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                                            {block.subtitle && (
                                                <h3 className="text-xl font-bold text-[#003666] mb-4">{block.subtitle}</h3>
                                            )}

                                            {block.description && (
                                                <p className="text-gray-700 mb-4 leading-relaxed">{block.description}</p>
                                            )}

                                            <div className="flex flex-col md:flex-row gap-8">
                                                {/* Text Content */}
                                                <div className="flex-1">
                                                    {block.points && (
                                                        <ul className="space-y-3">
                                                            {block.points.map((point, i) => (
                                                                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed text-sm md:text-base">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-vignan-purple mt-2 shrink-0" />
                                                                    {point}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {block.links && (
                                                        <div className="mt-6 flex flex-wrap gap-4">
                                                            {block.links.map((link, i) => (
                                                                <a
                                                                    key={i}
                                                                    href={link.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-[#003666] font-medium rounded-lg hover:bg-[#003666] hover:text-white transition-all text-sm shadow-sm border border-gray-200"
                                                                >
                                                                    {link.text} <ExternalLink className="w-3 h-3" />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Single Image */}
                                                {block.image && (
                                                    <div className="md:w-1/3 shrink-0">
                                                        <img
                                                            src={block.image}
                                                            alt={block.subtitle || section.title}
                                                            className="rounded-xl shadow-md w-full h-auto object-cover border border-gray-100"
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Gallery Grid (for sections with multiple images) */}
                                            {block.gallery && (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                                    {block.gallery.map((img, i) => (
                                                        <div key={i} className="group">
                                                            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50 h-48 mb-2">
                                                                <img
                                                                    src={img.src}
                                                                    alt={img.title}
                                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                                />
                                                            </div>
                                                            <p className="text-sm font-medium text-gray-600 text-center">{img.title}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </div>
    );
}