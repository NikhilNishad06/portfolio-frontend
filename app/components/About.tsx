    "use client";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 bg-brand-bg lg:ml-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-white/5 rounded-3xl blur-[80px] opacity-20 pointer-events-none" />
                    <div className="relative bg-brand-bg p-12 lg:p-20 border border-white/5 rounded-3xl shadow-2xl transition-all hover:bg-white/2">
                        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-brand-text mb-12">The <br/> Vision<span className="text-white/10">.</span></h2>
                        <p className="text-lg text-brand-text/30 leading-relaxed mb-12 font-medium">
                            I approach every project with a problem-solving mindset and a focus on clean, scalable solutions. My goal is to build web applications that are not only visually appealing but also highly functional and efficient.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5 mt-12">
                             <div className="space-y-2">
                                 <h3 className="text-5xl font-bold text-brand-text">1+</h3>
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Years Exp.</p>
                             </div>
                             <div className="space-y-2">
                                 <h3 className="text-5xl font-bold text-brand-text">10+</h3>
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Projects Done</p>
                             </div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="space-y-6">
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xs font-bold uppercase tracking-[0.5em] text-white/30"
                        >
                            About Me
                        </motion.p>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-brand-text leading-tight">
                          Building powerful web experiences with logic and design.
                        </h2>
                    </div>
                    
                    <div className="space-y-8 text-brand-text/40 text-lg leading-relaxed font-light">
                        <p>
                            I’m Nikhil Nishad, a passionate Full Stack Web Developer focused on building modern, responsive, and high-performance web applications. With hands-on experience in Next.js, React.js, Node.js, and Express, I turn ideas into real-world digital solutions.
                        </p>
                        <p>
                            I enjoy solving complex problems, optimizing performance, and creating seamless user experiences. My goal is to develop scalable and impactful applications that deliver both functionality and great design.
                        </p>
                    </div>
                    
                    <button className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-text/40 hover:text-white transition-colors flex items-center gap-6 group">
                         LEARN MORE ABOUT ME
                         <div className="w-16 h-px bg-white/10 group-hover:w-24 transition-all" />
                    </button>
                </motion.div>
            </div>
            
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1 h-[200px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </section>
    );
};

export default About;
