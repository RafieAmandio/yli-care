"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, User, Briefcase, FileText, ChartBar } from 'lucide-react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DonationChart } from "@/components/ui/donation-chart"
import { Footer } from "@/components/ui/footer"

export default function TransparencyPage() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Impact', url: '/#impact', icon: Briefcase },
        { name: 'About', url: '/#about', icon: User },
        { name: 'FAQ', url: '/#faq', icon: FileText },
        { name: 'Transparency', url: '/transparency', icon: ChartBar }
    ]

    const financials = [
        { label: "Emergency Relief", amount: "Rp 5.2B", percentage: 45, color: "bg-red-500" },
        { label: "Reconstruction", amount: "Rp 3.5B", percentage: 30, color: "bg-blue-500" },
        { label: "Medical Aid", amount: "Rp 1.8B", percentage: 15, color: "bg-green-500" },
        { label: "Operations", amount: "Rp 1.1B", percentage: 10, color: "bg-gray-500" },
    ]

    const documents = [
        { title: "Q3 2024 Financial Report", date: "Oct 2024", size: "2.4 MB" },
        { title: "Aceh Relief Mission Audit", date: "Sep 2024", size: "1.8 MB" },
        { title: "Annual Impact Assessment", date: "Aug 2024", size: "5.1 MB" },
        { title: "Donor Transparency Statement", date: "July 2024", size: "0.5 MB" },
    ]

    return (
        <main className="min-h-screen bg-white text-black">
            <NavBar items={navItems} scrollThreshold={100} />

            <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h1 className="text-3xl md:text-6xl font-serif italic mb-4 md:mb-6">Transparency & Accountability</h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Trust is the foundation of our movement. We are committed to complete openness about how every rupiah is utilized to aid Sumatra.
                    </p>
                </motion.div>

                <div className="mb-16 md:mb-24">
                    <DonationChart />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
                    {/* Financial Overview */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100"
                    >
                        <h2 className="text-xl md:text-2xl font-medium mb-6 md:mb-8">Funds Allocation</h2>
                        <div className="space-y-6">
                            {financials.map((item, index) => (
                                <div key={item.label}>
                                    <div className="flex justify-between text-sm font-medium mb-2">
                                        <span>{item.label}</span>
                                        <span>{item.amount}</span>
                                    </div>
                                    <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                                            className={`h-full ${item.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Total Funds Raised</p>
                                    <p className="text-3xl md:text-4xl font-serif">Rp 11.6 Billion</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 mb-1">Donors</p>
                                    <p className="text-xl md:text-2xl font-medium">12,450+</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Documentation */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-medium mb-8">Documentation & Reports</h2>
                        <div className="grid gap-4">
                            {documents.map((doc, index) => (
                                <motion.div
                                    key={doc.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                                            <FileText size={24} className="text-gray-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{doc.title}</h3>
                                            <p className="text-sm text-gray-500">{doc.date} • {doc.size}</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                        Download
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                            <h3 className="font-medium text-blue-900 mb-2">Need detailed audit logs?</h3>
                            <p className="text-sm text-blue-700 mb-4">
                                We maintain a real-time ledger of all transactions. Verified partners and major donors can request access to the detailed audit portal.
                            </p>
                            <Button variant="outline" className="w-full bg-white border-blue-200 text-blue-700 hover:bg-blue-50">
                                Request Access
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
