"use client"

import { motion } from "framer-motion"

export function AboutSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 bg-white text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="space-y-6 md:space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-6xl font-serif italic leading-tight mb-4 md:mb-6">
                            More Than Just <span className="text-gray-400">Alumni</span>. <br />
                            A Movement for <span className="text-gray-400">Everyone</span>.
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-light mb-4 md:mb-6">
                            While initiated by Young Leaders Indonesia (YLI) alumni, this movement belongs to everyone who cares. We are uniting hearts and hands across the nation to bring hope where it's needed most.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-gray-500">
                            Whether you are an alumnus, a student, a professional, or simply someone who wants to help, your contribution matters. We mobilize resources to provide rapid, transparent, and effective relief to communities in Sumatra. Join us in rebuilding lives and restoring hope.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 translate-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=60"
                                alt="YLI Alumni volunteering"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=60"
                                alt="Community engagement"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=60"
                                alt="Aid distribution"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=60"
                                alt="Rebuilding Sumatra"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
