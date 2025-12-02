"use client";

import InfiniteGallery from "@/components/ui/3d-gallery-photography";

import { Home, User, Briefcase, FileText, ChartBar } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/ui/about-section"
import { SupportersSection } from "@/components/ui/supporters-section"
import { StatisticsSection } from "@/components/ui/statistics-section"
import { FAQSection } from "@/components/ui/faq-section"
import { Footer } from "@/components/ui/footer"

export default function DemoOne() {
    const sampleImages = [
        { src: '/pic1.jpg', alt: 'Image 1' },
        { src: '/pic2.jpg', alt: 'Image 2' },
        { src: '/pic3.jpg', alt: 'Image 3' },
        { src: '/pic4.jpeg', alt: 'Image 4' },
        { src: '/pic5.webp', alt: 'Image 5' },
        { src: '/pic6.jpg', alt: 'Image 6' },
        { src: '/pic7.jpeg', alt: 'Image 7' },
        { src: '/pic8.webp', alt: 'Image 8' },
    ];

    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Impact', url: '/#impact', icon: Briefcase },
        { name: 'About', url: '/#about', icon: User },
        { name: 'FAQ', url: '/#faq', icon: FileText },
        { name: 'Transparency', url: '/transparency', icon: ChartBar }
    ]

    const supporters = [
        { name: "ASAR Humanity", logo: "/ASAR_Logo.webp", className: "w-64 h-32", url: "https://asarhumanity.org/id" },
        { name: "YLI", logo: "/YLI_logo.png", url: "https://yli.or.id/" },
    ];

    return (
        <main className="min-h-screen w-full bg-black text-white">
            <NavBar items={navItems} scrollThreshold={3000} />

            {/* Scrollable container for the gallery */}
            <div className="h-[250vh] relative">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <InfiniteGallery
                        images={sampleImages}
                        visibleCount={12}
                        className="h-screen w-full"
                    />
                    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center px-3 mix-blend-exclusion text-white">
                        <h1 className="font-serif text-4xl md:text-7xl tracking-tight mb-4">
                            <span className="italic">YLI untuk Sumatra</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide mb-8">
                            Panggilanmu, Tangan Kami
                        </p>
                        <div className="flex gap-4 pointer-events-auto">
                            <Button variant="default" className="bg-white text-black hover:bg-white/90">
                                Donate
                            </Button>
                            <Button variant="default" className="text-white border-white hover:bg-white/10 hover:text-white">
                                About
                            </Button>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 text-center font-mono uppercase text-[11px] font-semibold pointer-events-none">
                        <p>Scroll to explore</p>
                    </div>
                </div>
            </div>

            {/* Normal content section */}
            <div className="bg-white text-black z-10 relative">
                <SupportersSection supporters={supporters} />

                <div id="impact">
                    <StatisticsSection />
                </div>

                <div id="about">
                    <AboutSection />
                </div>
            </div>

            <div id="faq">
                <FAQSection />
            </div>
            <Footer />
        </main >
    );
}
