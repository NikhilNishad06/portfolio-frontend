"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      
      if (!backendUrl) {
         throw new Error("Backend URL is not configured in environment variables.");
      }

      const normalizedUrl = backendUrl.endsWith('/') ? backendUrl.slice(0, -1) : backendUrl;
      const apiEndpoint = `${normalizedUrl}/api/contact`;
      
      console.log("Submitting to:", apiEndpoint);

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage("Could not connect to the server. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Blobs for depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 -z-10 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px]"></div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-text/50">
              Contact
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-brand-text">
              Let's build <br />
              <span className="opacity-50 uppercase tracking-widest">
                something great.
              </span>
            </h2>
            <p className="text-brand-text/60 text-lg max-w-sm leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. If you have a question or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-text/30 transition-colors">
                  <Mail className="w-5 h-5 text-brand-text/50" />
                </div>
                <div>
                  <p className="text-xs text-brand-text/40 uppercase font-bold tracking-wider">Email Me</p>
                  <p className="text-brand-text/90 font-medium tracking-wide">nikhilnishad622@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="matte-card p-6 md:p-10 rounded-[2.5rem] relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-text/40 ml-1">
                      Full Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text/40 group-focus-within:text-blue-400 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent/50 transition-all font-sans text-brand-text placeholder:text-brand-text/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-text/40 ml-1">
                      Email Address
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text/40 group-focus-within:text-brand-accent transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="hello@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent/50 transition-all font-sans text-brand-text placeholder:text-brand-text/20"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-text/40 ml-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent/50 transition-all resize-none font-sans text-brand-text placeholder:text-brand-text/20"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-5 rounded-2xl font-bold text-lg transition-all transform flex items-center justify-center gap-3 active:scale-[0.98] ${
                    status === "sending"
                      ? "bg-brand-text/20 cursor-not-allowed text-brand-text/50"
                      : status === "success"
                      ? "bg-brand-accent text-white"
                      : "bg-brand-text/10 hover:bg-brand-text/20 text-brand-text border border-brand-text/10 shadow-xl"
                  }`}
                >
                  {status === "sending" ? (
                    "Sending Message..."
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-2xl border border-red-400/20"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
