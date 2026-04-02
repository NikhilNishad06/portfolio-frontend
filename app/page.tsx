import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg text-[#dfe6e9] font-sans selection:bg-white/10 selection:text-white overflow-x-hidden">
      <ScrollToTop />
      <BackToTop />
      <ScrollProgress />
      <CustomCursor />
      <Sidebar />
      <Navbar />
      <main className="flex-grow pl-0 lg:pl-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}