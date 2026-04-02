"use client";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-24 bg-brand-bg text-brand-text border-t border-white/5 lg:ml-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-white/5" />
            
            <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-end py-12">
                <div className="space-y-16">
                    <h2 className="text-4xl lg:text-7xl font-bold tracking-tight text-brand-text leading-tight">
                         Let's build <br/> 
                         <span className="text-white/10 uppercase tracking-widest text-lg lg:text-4xl">together.</span>
                    </h2>
                    
                    <div className="flex flex-col space-y-10 items-start">
                        <Link href="mailto:nikhilnishad622@gmail.com" className="text-xl lg:text-3xl font-medium text-white/40 hover:text-white transition-colors relative group">
                            nikhilnishad622@gmail.com
                            <span className="absolute -bottom-4 left-0 w-1/3 h-px bg-white transition-all group-hover:w-full" />
                        </Link>
                        
                        <div className="flex flex-wrap gap-8 lg:gap-12 pt-8">
                             {[
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhil-nishad-293176349', icon: <svg className="w-5 h-5 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.071c1.398-2.586 7-2.777 7 2.476v7.453z"/></svg> },
                                { name: 'GitHub', url: 'https://github.com/NikhilNishad06', icon: <svg className="w-5 h-5 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
                                { name: 'Instagram', url: '#', icon: <svg className="w-5 h-5 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> }
                            ].map((social) => (
                                <Link key={social.name} href={social.url} target="_blank" className="flex flex-col items-center text-[10px] font-bold uppercase tracking-[0.5em] text-brand-text/20 hover:text-brand-text transition-all peer">
                                    {social.icon}
                                    <span>{social.name}</span>
                                </Link>
                             ))}
                        </div>
                    </div>
                </div>
                
                <div className="space-y-12 lg:text-right flex flex-col items-start lg:items-end">
                    <div className="space-y-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/10">Navigation</p>
                        <div className="flex flex-col space-y-6 lg:items-end">
                            {['Home', 'About', 'Projects', 'Skills','Contact'].map((item) => (
                                <Link key={item} href={`#${item.toLowerCase()}`} className="text-base lg:text-xl font-medium text-brand-text/40 hover:text-white transition-colors transition-all duration-300">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-12 lg:px-24 pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/10">
                    &copy; {new Date().getFullYear()} NIKHIL
                </div>
                <div className="flex flex-col items-center md:items-end space-y-2">
                    <p className="text-xs font-bold tracking-[0.4em] text-white/30">Powerd by Nikhil Nishad</p>
                    {/* <p className="text-[10px] font-semibold text-white/5 uppercase mt-1">Based in Singapore</p> */}
                </div>
            </div>
            
            {/* Background Accent */}
             <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-brand-accent blur-[150px] rounded-full opacity-30" />
        </footer>
    );
};

export default Footer;
