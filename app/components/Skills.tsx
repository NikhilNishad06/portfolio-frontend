"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
    Database, 
    Layout, 
    GitBranch, 
    Layers, 
    Cpu, 
    Globe, 
    Palette, 
    Zap,
    Box,
    Cloud,
    RefreshCw,
    PenTool,
    CodeXml,
    Server,
    Terminal,
    Settings,
    Wind,
    Framer,
    Code2
} from "lucide-react";

interface Skill {
    name: string;
    level: number;
    items: string[];
}

const skillIcons: { [key: string]: any } = {
    // Frontend
    "react": CodeXml,
    "next.js": Zap,
    "typescript": Code2,
    "tailwind": Wind,
    "framer motion": Framer,
    
    // Backend
    "node.js": Server,
    "express": Terminal,
    "postgresql": Database,
    "mongoose": Cpu,
    "mongodb": Database,
    
    // Design
    "figma": Layout,
    "ui/ux": Layers,
    "adobe xd": PenTool,
    
    // Tools
    "git": GitBranch,
    "docker": Box,
    "aws": Cloud,
    "ci/cd": RefreshCw,
    "render": Globe,
    "vercel": Zap,
    "netlify": Cloud,
    "github": GitBranch
};

const Skills = () => {
    const [skills, setSkills] = useState<Skill[]>([
        { name: "Frontend", level: 90, items: ["React", "Next.js", "Typescript", "Tailwind"] },
        { name: "Backend", level: 85, items: ["Node.js", "Express", "PostgreSQL", "Mongoose"] },
        { name: "Design", level: 80, items: ["Figma", "UI/UX", "Adobe XD"] },
        { name: "Tools", level: 95, items: ["Git", "Docker", "AWS", "CI/CD"] }
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/skills`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch skills');
                return res.json();
            })
            .then(data => {
                setSkills(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching skills:", err);
                setLoading(false);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    if (loading) return (
        <section id="skills" className="py-24 bg-brand-bg text-center lg:ml-24">
             <div className="container mx-auto px-6 lg:px-12 animate-pulse">Loading Toolkit...</div>
        </section>
    );

    return (
        <section id="skills" className="py-24 bg-brand-bg lg:ml-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-white/5" />
            
            <div className="container mx-auto px-6 lg:px-24 space-y-16 lg:space-y-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-6 max-w-2xl mx-auto"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.5em] text-white/30">Toolkit</p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-brand-text">Expertise & Skills.</h2>
                    <p className="text-brand-text/20 text-lg leading-relaxed">
                        Crafting digital excellence with a specialized set of industry-leading tools.
                    </p>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group p-10 rounded-2xl bg-brand-text/5 border border-brand-text/5 transition-all duration-500 hover:bg-brand-text/10 hover:border-brand-text/10"
                        >
                             <div className="space-y-6">
                                 <div>
                                     <h3 className="text-xl font-bold text-brand-text mb-1">{skill.name}</h3>
                                     <div className="w-12 h-1 bg-brand-text/10 relative overflow-hidden">
                                         <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            className="absolute top-0 left-0 h-full bg-brand-text/50" 
                                         />
                                     </div>
                                 </div>
                                 
                                 <div className="flex flex-col space-y-3 pt-6 border-t border-brand-text/5 mt-6">
                                    {skill.items.map((item, idx) => {
                                        const Icon = skillIcons[item.toLowerCase()] || Settings;
                                        return (
                                            <div key={idx} className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-brand-text/30 group-hover:text-brand-text transition-colors">
                                                <Icon className="w-4 h-4 text-brand-text/50" />
                                                <span>{item}</span>
                                            </div>
                                        );
                                    })}
                                 </div>
                             </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
