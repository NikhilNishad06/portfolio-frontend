"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Menu, Github, Instagram, Linkedin, ExternalLink } from "lucide-react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuLinks = [
        { name: "Home", href: "#home", num: "01" },
        { name: "Gallery", href: "#gallery", num: "02" },
        { name: "About", href: "#about", num: "03" },
        { name: "Skills", href: "#skills", num: "04" },
        { name: "Contact", href: "#contact", num: "05" },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-24 border-r border-white/5 bg-brand-bg/50 z-[100] hidden lg:flex flex-col items-center justify-between py-12">
                <button 
                    onClick={() => setIsOpen(true)}
                    className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all cursor-pointer group bg-white/5 hover:bg-white/10 shadow-2xl"
                >
                    <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                

                
                <div className="w-px h-24 bg-white/5" />
            </aside>

            {/* Mobile Sidebar Toggle */}
            <div className="fixed top-6 right-6 z-[100] lg:hidden">
                <button 
                    onClick={() => setIsOpen(true)}
                    className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all bg-brand-bg/80 backdrop-blur-md"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-brand-bg/95 backdrop-blur-2xl flex items-center justify-center"
                    >
                        {/* Close button */}
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-12 right-12 w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all hover:bg-white/10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="container mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">Navigation Menu</p>
                                <nav className="space-y-8">
                                    {menuLinks.map((link, idx) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <Link 
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="group flex items-end space-x-6 hover:translate-x-4 transition-all"
                                            >
                                                <span className="text-xl font-bold text-white/10 group-hover:text-white/40 transition-colors mb-2">{link.num}</span>
                                                <span className="text-6xl lg:text-8xl font-black tracking-tighter text-white/40 group-hover:text-white transition-colors">
                                                    {link.name}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            <div className="hidden lg:block space-y-16 border-l border-white/5 pl-24 py-12">
                                <div className="space-y-6">
                                     <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">Connect With Me</p>
                                     <div className="flex flex-col space-y-6">
                                         {[
                                             { icon: Github, name: "Github", url: "https://github.com/NikhilNishad06" },
                                             { icon: Instagram, name: "Instagram", url: "#" },
                                             { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/nikhil-nishad-293176349" }
                                         ].map((social) => (
                                             <a key={social.name} href={social.url} target="_blank" className="text-2xl font-bold text-white/30 hover:text-white flex items-center gap-4 transition-all hover:translate-x-2 group">
                                                 <social.icon className="w-6 h-6" />
                                                 {social.name}
                                                 <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                             </a>
                                         ))}
                                     </div>
                                </div>

                                <div className="space-y-4">
                                     <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">Say Hello</p>
                                     <p className="text-xl font-medium text-white/60">nikhilnishad622@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
