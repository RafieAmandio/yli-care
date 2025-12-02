"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Supporter {
    name: string
    logo: string
    className?: string
}

interface SupportersSectionProps {
    supporters: Supporter[]
    title?: string
}

export function SupportersSection({
    supporters,
    title = "Supported by Global Relief Organizations"
}: SupportersSectionProps) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif italic text-black mb-4">
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto opacity-10" />
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24">
                    {supporters.map((supporter, index) => (
                        <motion.div
                            key={supporter.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative grayscale hover:grayscale-0 transition-all duration-500 ${supporter.className || "w-32 h-16 md:w-48 md:h-24"}`}
                        >
                            <Image
                                src={supporter.logo}
                                alt={supporter.name}
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
