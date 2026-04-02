"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([
        {
            id: 1,
            title: "Dairy Delight Website",
            description: "Modern landing page for a farm-fresh dairy business, showcasing healthy milk products, yogurt, and cheese.",
            image: "https://c8.alamy.com/comp/2D37XDB/dairy-products-landing-page-farm-milk-yogurt-cheese-vector-web-banner-2D37XDB.jpg",
            tags: ["React", "Tailwind", "Responsive"],
            github: "https://github.com/",
            demo: "https://demo.com/"
          },
          {
            id: 2,
            title: "Aura Commerce",
            description: "Premium minimalist e-commerce platform with stripe integration and seamless UI.",
            image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            tags: ["Next.js", "Stripe", "PostgreSQL"],
            github: "https://github.com/",
            demo: "https://demo.com/"
          },
          {
            id: 3,
            title: "Pulse Social",
            description: "Real-time collaborative social platform for creators to share ideas and projects.",
            image: "https://images.unsplash.com/photo-1519389950473-479a001639d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            tags: ["Socket.io", "React", "Express"],
            github: "https://github.com/",
            demo: "https://demo.com/"
          }
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch projects');
                return res.json();
            })
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
                setLoading(false);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "circOut" as const }
        }
    };

    if (loading) return (
        <section id="gallery" className="py-24 bg-[#3c4548] text-center lg:ml-24">
             <div className="container mx-auto px-6 lg:px-12 animate-pulse">Loading Collection...</div>
        </section>
    );

    return (
        <section id="gallery" className="py-24 bg-brand-bg lg:ml-24 border-t border-white/5 relative">
            <div className="container mx-auto px-6 lg:px-24 space-y-16">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end gap-8 pb-12"
                >
                    <div className="space-y-4 max-w-2xl">
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-text/40">Work Collection</p>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-text">Creative Showcase.</h2>
                        <p className="text-brand-text/30 text-lg leading-relaxed">
                            Discover Nikhil's stunning digital worlds created with passion and code.
                        </p>
                    </div>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {projects.map((project) => (
                        <motion.div 
                            key={project.id} 
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative bg-brand-bg rounded-2xl overflow-hidden matte-card border border-brand-text/5 transition-all hover:bg-brand-text/5"
                        >
                             <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                 <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill 
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700" 
                                 />
                             </div>
                             
                             <div className="p-10 space-y-4">
                                 <div className="flex flex-wrap gap-3">
                                     {project.tags.map((tag, idx) => (
                                         <span key={idx} className="text-[10px] uppercase font-bold tracking-widest text-brand-text/20 group-hover:text-brand-text transition-colors">{tag}</span>
                                     ))}
                                 </div>
                                 <h3 className="text-2xl font-bold text-brand-text mb-2">{project.title}</h3>
                                 <p className="text-brand-text/30 line-clamp-2 leading-relaxed text-sm">
                                     {project.description}
                                 </p>
                                 <div className="flex items-center justify-between pt-6">
                                     <Link 
                                        href={project.github} 
                                        target="_blank"
                                        className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-text/40 hover:text-brand-text transition-colors flex items-center gap-4 group/btn"
                                     >
                                         GITHUB
                                         <div className="w-6 h-px bg-brand-text/10 group-hover/btn:w-10 transition-all" />
                                     </Link>

                                     <Link 
                                        href={project.demo} 
                                        target="_blank"
                                        className="w-10 h-10 border border-brand-text/5 rounded-full flex items-center justify-center text-brand-text/20 hover:text-brand-text hover:bg-brand-text/5 transition-all group/link"
                                     >
                                         <ExternalLink className="w-4 h-4" />
                                     </Link>
                                 </div>
                             </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
            <div className="absolute -bottom-1 w-full h-[150px] bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
        </section>
    );
};

export default Projects;
