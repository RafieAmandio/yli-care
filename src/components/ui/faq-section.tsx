"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: "How is my donation used?",
        answer: "100% of public donations go directly to funding our relief efforts. We cover our operating costs through private grants and separate fundraising initiatives, ensuring your contribution makes the maximum impact."
    },
    {
        question: "Is my donation tax-deductible?",
        answer: "Yes, YLI Sumatra is a registered non-profit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your records immediately after donating."
    },
    {
        question: "Can I volunteer for relief missions?",
        answer: "We are always looking for dedicated volunteers. While some roles require specialized training (medical, search & rescue), we also need support in logistics, administration, and community outreach."
    },
    {
        question: "Where do you currently operate?",
        answer: "Our primary focus is on the island of Sumatra, Indonesia. We have active operations in Aceh, North Sumatra, and West Sumatra, with rapid response teams ready to deploy across the region."
    }
]

export function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif italic mb-6 text-black">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-medium text-black pr-8">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 text-black/50">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-black/70 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
