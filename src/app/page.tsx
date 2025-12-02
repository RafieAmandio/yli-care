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
        { src: 'https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', alt: 'Image 1' },
        { src: 'https://images.unsplash.com/photo-1754769440490-2eb64d715775?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2' },
        { src: 'https://images.unsplash.com/photo-1758640920659-0bb864175983?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3' },
        { src: 'https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
        { src: 'https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 5' },
        { src: 'https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 6' },
        { src: 'https://images.unsplash.com/photo-1725878746053-407492aa4034?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 7' },
        { src: 'https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D', alt: 'Image 8' },
    ];

    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Impact', url: '/#impact', icon: Briefcase },
        { name: 'About', url: '/#about', icon: User },
        { name: 'FAQ', url: '/#faq', icon: FileText },
        { name: 'Transparency', url: '/transparency', icon: ChartBar }
    ]

    const supporters = [
        { name: "ASAR Humanity", logo: "/ASAR_Logo.webp", className: "w-64 h-32" },
        { name: "YLI", logo: "/YLI_logo.png" },
    ];

    return (
        <main className="min-h-screen w-full bg-black text-white">
            <NavBar items={navItems} scrollThreshold={3000} />

            {/* Scrollable container for the gallery */}
            <div className="h-[400vh] relative">
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
