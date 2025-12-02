"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
    scrollThreshold?: number
}

export function NavBar({ items, className, scrollThreshold = 50 }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const pathname = usePathname()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        const handleScroll = () => {
            const scrollY = window.scrollY
            // Check if scrolled past the threshold
            setIsScrolled(scrollY > scrollThreshold)

            // If we are not on the home page, don't run scroll spy for sections
            if (pathname !== '/') {
                const currentItem = items.find(item => item.url === pathname)
                if (currentItem) {
                    setActiveTab(currentItem.name)
                }
                return
            }

            // Scroll Spy Logic for Home Page
            let currentActive = items[0].name // Default to Home

            for (const item of items) {
                // Skip Home and external links
                if (item.url === '/' || item.url.startsWith('/transparency')) {
                    continue
                }

                // Handle section links (/#id)
                if (item.url.startsWith('/#')) {
                    const sectionId = item.url.replace('/#', '')
                    const element = document.getElementById(sectionId)

                    if (element) {
                        const rect = element.getBoundingClientRect()
                        // If the section top is at or above the threshold (scrolled into view)
                        // Using 150px as a threshold to trigger slightly before the section hits the top
                        if (rect.top <= 150) {
                            currentActive = item.name
                        }
                    }
                }
            }

            setActiveTab(currentActive)
        }

        handleResize()
        handleScroll()

        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [items, scrollThreshold, pathname])

    const isImpact = activeTab === 'Impact'

    return (
        <div
            className={cn(
                "fixed top-0 left-1/2 -translate-x-1/2 z-[100] pt-6 w-full sm:w-auto px-4 sm:px-0",
                className,
            )}
        >
            <div className={cn(
                "flex items-center gap-1 sm:gap-3 py-1 px-1 rounded-full transition-all duration-300 overflow-x-auto no-scrollbar max-w-[95vw] sm:max-w-none w-fit mx-auto",
                isScrolled && !isImpact
                    ? "bg-background/5 border border-border backdrop-blur-lg shadow-lg"
                    : "bg-transparent border-transparent"
            )}>
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name
                    const forceWhite = !isScrolled || isImpact

                    return (
                        <Link
                            key={item.name}
                            href={item.url}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-3 sm:px-6 py-2 rounded-full transition-colors whitespace-nowrap",
                                "text-foreground/80 hover:text-primary",
                                isActive && "bg-muted text-primary",
                                forceWhite && "text-white hover:text-white/80", // Force white text in hero and impact
                                forceWhite && isActive && "bg-white/20 text-white" // Different active state in hero and impact
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={2.5} />
                            </span>
                            {isActive && isScrolled && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                                        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                                        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
