"use client"

import { motion, useSpring, useInView, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

interface Statistic {
    label: string
    value: number
    suffix?: string
    prefix?: string
}

function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [motionValue, isInView, value])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`
            }
        })
    }, [springValue, prefix, suffix])

    return <span ref={ref} className="tabular-nums" />
}

export function StatisticsSection() {
    const stats: Statistic[] = [
        { label: "Total Donations", value: 1, prefix: "Rp ", suffix: "XX B+" },
        { label: "Lives Impacted", value: 1, suffix: "XX+" },
        { label: "Communities Served", value: 1, suffix: "XX" },
        { label: "Volunteers", value: 1, suffix: "XX+" },
    ]

    return (
        <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-3xl md:text-6xl font-serif italic mb-4 md:mb-6">Our Impact</h2>
                    <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
                        Together, we are making a tangible difference in the lives of those affected by disasters across Sumatra.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-5xl font-light mb-2 md:mb-4 text-white">
                                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <div className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
