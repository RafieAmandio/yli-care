"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-serif italic mb-4">YLI for Sumatra</h3>
                        <p className="text-white/60 max-w-md mb-6">
                            A movement by Young Leaders Indonesia alumni to provide rapid, transparent, and effective relief to communities in Sumatra.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Navigation</h4>
                        <ul className="space-y-2 text-white/60">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/#impact" className="hover:text-white transition-colors">Our Impact</Link></li>
                            <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/transparency" className="hover:text-white transition-colors">Transparency</Link></li>
                            <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Contact</h4>
                        <ul className="space-y-2 text-white/60">
                            <li>hello@ylisumatra.org</li>
                            <li>+62 812 3456 7890</li>
                            <li>Jakarta, Indonesia</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© {new Date().getFullYear()} YLI for Sumatra. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={12} className="text-red-500 fill-red-500" /> by YLI Alumni
                    </p>
                </div>
            </div>
        </footer>
    )
}
