"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { motion } from "framer-motion"

const data = [
    { date: "Nov 01", amount: 45000000 },
    { date: "Nov 02", amount: 52000000 },
    { date: "Nov 03", amount: 48000000 },
    { date: "Nov 04", amount: 61000000 },
    { date: "Nov 05", amount: 55000000 },
    { date: "Nov 06", amount: 72000000 },
    { date: "Nov 07", amount: 85000000 },
    { date: "Nov 08", amount: 78000000 },
    { date: "Nov 09", amount: 92000000 },
    { date: "Nov 10", amount: 110000000 },
    { date: "Nov 11", amount: 98000000 },
    { date: "Nov 12", amount: 125000000 },
    { date: "Nov 13", amount: 140000000 },
    { date: "Nov 14", amount: 135000000 },
]

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(value).replace("Rp", "Rp ")
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-4 border border-gray-100 shadow-lg rounded-xl">
                <p className="text-sm text-gray-500 mb-1">{label}</p>
                <p className="text-lg font-semibold text-blue-600">
                    {formatCurrency(payload[0].value)}
                </p>
            </div>
        )
    }
    return null
}

export function DonationChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[300px] md:h-[400px] bg-white p-4 md:p-6 rounded-3xl border border-gray-100 shadow-sm"
        >
            <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-medium mb-1 md:mb-2">Daily Donation Inflow</h3>
                <p className="text-xs md:text-sm text-gray-500">Real-time tracking of incoming contributions over the last 14 days.</p>
            </div>
            <ResponsiveContainer width="100%" height="75%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                        tickFormatter={(value) => `Rp ${value / 1000000}M`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorAmount)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </motion.div>
    )
}
