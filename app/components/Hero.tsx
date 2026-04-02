"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen pt-32 lg:pt-0 flex items-center lg:ml-24 bg-brand-bg overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-0">
                
                {/* Left Text Detail */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/4 space-y-4 order-3 lg:order-1"
                >
                    <div className="text-sm font-bold tracking-widest text-white/40 uppercase"></div>
                    <div className="w-full h-px bg-white/5 relative">
                         <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "33%" }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="absolute top-0 left-0 h-px bg-white/20" 
                         />
                    </div>
                    <h3 className="text-lg font-bold text-brand-text/80">Work Collection</h3>
                    <ul className="text-xs font-semibold text-brand-text/30 space-y-1 tracking-wider uppercase">
                         <li className="text-brand-text/60">Active Collection</li>
                         <li>Travel Collection</li>
                    </ul>
                </motion.div>

                {/* Center 3D Character Container */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" as const }}
                    className="relative w-full lg:w-1/2 aspect-square max-w-[530px] flex items-center justify-center p-4 lg:p-6 order-1 lg:order-2"
                >
                   <div className="absolute inset-0 bg-brand-accent rounded-[50%] blur-[80px] lg:blur-[120px] opacity-40 shadow-inner" />
                   <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div 
                            animate={{ 
                                y: [-10, 10, -10],
                            }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity, 
                                ease: "easeInOut" as const
                            }}
                            className="relative w-full h-full"
                        >
                            <Image 
                                src="https://i.pinimg.com/736x/bc/db/47/bcdb470cea29bc28a17011e3fa5dbd54.jpg" 
                                alt="3D Hero Character" 
                                fill
                                priority
                                unoptimized
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                className="object-cover rounded-3xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" 
                            />
                        </motion.div>
                   </div>
                </motion.div>

                {/* Right Text Block */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full lg:w-1/3 space-y-8 lg:space-y-12 order-2 lg:order-3 text-center lg:text-left"
                >
                    <div className="flex items-center justify-center lg:justify-start space-x-3 group">
                        <div className="w-10 h-10 border border-brand-text/5 rounded-full flex items-center justify-center bg-brand-text/5 transition-all group-hover:scale-110">
                            <svg className="w-4 h-4 text-brand-text/40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-12h2v6h-2z" /></svg>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-text/30">Explore 3D Art Creations</span>
                    </div>
                    
                    <div className="space-y-6">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-4xl lg:text-7xl font-bold tracking-tight text-brand-text"
                        >
                    Nikhil Nishad
                        <br className="hidden lg:block"/>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-sm text-brand-text/30 leading-relaxed max-w-sm mx-auto lg:mx-0"
                        >
                        A Passionate Web Developer Crafting Modern Websites
                        </motion.p>
                    </div>

                    <Magnetic>
                        <motion.button 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 border border-brand-text/10 bg-brand-text/5 hover:bg-brand-text/10 text-brand-text rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative overflow-hidden group shadow-2xl shadow-blue-500/5 cursor-pointer"
                        >
                             <span className="relative z-10">Start your work</span>
                             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-brand-text/5 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.button>
                    </Magnetic>
                </motion.div>

            </div>
            
            {/* Background Accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-[200px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent rounded-[50%] blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2" />
        </section>
    );
};

export default Hero;
