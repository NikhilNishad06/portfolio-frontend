"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, Palette, Type } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [theme, setTheme] = useState("default");
    const [textTheme, setTextTheme] = useState("default");

    const themes = ["default", "cyan", "green", "maroon", "teal", "sage", "night-green", "slate", "midnight", "charcoal"];
    const textThemes = ["default", "white", "yellow", "green", "pink", "black"];

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "default";
        const savedTextTheme = localStorage.getItem("textTheme") || "default";
        
        setTheme(savedTheme);
        setTextTheme(savedTextTheme);
        
        document.documentElement.setAttribute("data-theme", savedTheme);
        document.documentElement.setAttribute("data-text-theme", savedTextTheme);
    }, []);

    const toggleTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    };

    const toggleTextTheme = () => {
        const currentIndex = textThemes.indexOf(textTheme);
        const nextIndex = (currentIndex + 1) % textThemes.length;
        const nextTextTheme = textThemes[nextIndex];
        
        setTextTheme(nextTextTheme);
        document.documentElement.setAttribute("data-text-theme", nextTextTheme);
        localStorage.setItem("textTheme", nextTextTheme);
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Project", href: "#gallery" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 lg:left-24 right-0 z-50 py-6 lg:py-8 px-6 lg:px-12 flex justify-between items-center bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center space-x-12 lg:space-x-24">
                <Link href="/" className="text-2xl lg:text-3xl font-bold tracking-tight text-brand-text">
                    NIKHIL<span className="text-white/20"></span>
                </Link>
                
                <div className="hidden lg:flex space-x-8 lg:space-x-12 items-center">
                    <AnimatePresence mode="wait">
                        {!isSearching ? (
                            <motion.div 
                                key="links"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="flex space-x-8 lg:space-x-12 items-center"
                            >
                                {navLinks.map((link) => (
                                    <Link 
                                        key={link.name} 
                                        href={link.href}
                                        className="text-sm font-bold tracking-widest text-brand-text/40 uppercase hover:text-brand-text transition-colors relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-px bg-brand-text transition-all group-hover:w-full" />
                                    </Link>
                                ))}
                                <button 
                                    onClick={() => setIsSearching(true)}
                                    className="text-brand-text/30 hover:text-brand-text transition-colors"
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="search"
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                className="flex items-center space-x-4 bg-brand-text/5 rounded-full px-4 py-2 border border-brand-text/10"
                            >
                                <Search className="w-4 h-4 text-brand-text/30" />
                                <input 
                                    autoFocus
                                    type="text" 
                                    placeholder="Search projects..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-transparent border-none outline-none text-sm text-white/80 placeholder:text-white/20 w-48 lg:w-64"
                                />
                                <button 
                                    onClick={() => {
                                        setIsSearching(false);
                                        setSearchQuery("");
                                    }}
                                    className="text-white/20 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                <button 
                    onClick={toggleTextTheme}
                    className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-95"
                    aria-label="Toggle text color"
                >
                    <Type className={`w-5 h-5 transition-colors ${
                        textTheme === 'white' ? 'text-white' : 
                        textTheme === 'yellow' ? 'text-[#f1c40f]' : 
                        textTheme === 'green' ? 'text-[#2ecc71]' : 
                        textTheme === 'pink' ? 'text-[#e84393]' : 
                        textTheme === 'black' ? 'text-black' : 
                        'text-white/50'
                    }`} />
                </button>
                <button 
                    onClick={toggleTheme}
                    className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-95"
                    aria-label="Toggle theme"
                >
                    <Palette className={`w-5 h-5 transition-colors ${
                        theme === 'cyan' ? 'text-[#6dd5ed]' : 
                        theme === 'green' ? 'text-[#6A9113]' : 
                        theme === 'maroon' ? 'text-[#6f0000]' : 
                        theme === 'teal' ? 'text-[#44A08D]' : 
                        theme === 'sage' ? 'text-[#BBD2C5]' : 
                        theme === 'night-green' ? 'text-[#0f9b0f]' : 
                        theme === 'slate' ? 'text-[#203A43]' : 
                        theme === 'midnight' ? 'text-[#152331]' : 
                        theme === 'charcoal' ? 'text-[#414345]' : 
                        'text-white/50'
                    }`} />
                </button>
                <Link 
                    href="#contact"
                    className="hidden lg:block px-6 py-2.5 border border-white/10 bg-white/5 hover:bg-white/10 text-brand-text rounded-xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95"
                >
                    Start work
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
