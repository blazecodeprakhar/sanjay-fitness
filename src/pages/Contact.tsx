import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Instagram, MessageCircle, Youtube, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Responsive inputs: smaller padding/text on mobile
  const inputClasses =
    "w-full bg-secondary/30 border border-border rounded-xl px-4 py-3.5 md:px-7 md:py-5 font-body text-base md:text-lg font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-all duration-500 focus:bg-secondary/50";

  const labelClasses =
    "block text-xs md:text-sm font-body font-bold uppercase tracking-[0.25em] text-primary mb-2";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col noise-bg overflow-x-hidden">
      <Navbar />

      {/* Background glow — hidden on mobile for performance */}
      <div className="hidden md:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/4 blur-[160px] opacity-40 animate-pulse pointer-events-none z-0" />

      <main className="flex-1 pt-28 pb-16 md:pt-60 md:pb-40 relative z-10">
        <section className="container mx-auto px-5 md:px-8">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading mb-4 md:mb-6 tracking-normal font-bold">
                LET'S HAVE A{" "}<span className="text-primary italic font-medium">CHAT</span>
              </h1>
              <div className="w-14 md:w-20 h-0.5 bg-primary mx-auto mb-5 md:mb-8 rounded-full" />
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto font-body font-light px-2">
                Ready to begin your lifestyle shift? Tell us your story and let's design your rituals together.
              </p>
            </motion.div>
          </div>

          {/* Form / Success */}
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-primary/20 bg-secondary/40 rounded-3xl p-8 md:p-20 text-center shadow-sm"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                </div>
                <h3 className="font-heading text-3xl md:text-5xl text-primary mb-4 tracking-widest font-bold">
                  MESSAGE SENT!
                </h3>
                <p className="text-muted-foreground text-base md:text-xl font-body italic font-light">
                  Sanjay will reach out to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-5 md:space-y-8"
              >
                {/* Row 1: Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <label className={labelClasses}>First Name</label>
                    <input
                      type="text"
                      placeholder="Aarav"
                      required
                      className={inputClasses}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <label className={labelClasses}>Last Name</label>
                    <input
                      type="text"
                      placeholder="Sharma"
                      required
                      className={inputClasses}
                    />
                  </motion.div>
                </div>

                {/* Row 2: Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <label className={labelClasses}>Email Address</label>
                    <input
                      type="email"
                      placeholder="aarav@gmail.com"
                      required
                      className={inputClasses}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <label className={labelClasses}>Your Goal / Subject</label>
                    <input
                      type="text"
                      placeholder="Yoga & Mobility / Conscious Nutrition"
                      className={inputClasses}
                    />
                  </motion.div>
                </div>

                {/* Row 3: Message */}
                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                  <label className={labelClasses}>Your Message</label>
                  <textarea
                    placeholder="Describe your current lifestyle, daily challenges, and what you hope to achieve..."
                    rows={5}
                    className={`${inputClasses} resize-none leading-relaxed`}
                    required
                  />
                </motion.div>

                {/* Submit */}
                <motion.div variants={itemVariants} className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-premium font-body font-bold text-sm md:text-base tracking-[0.15em] uppercase bg-primary text-white py-4 md:py-6 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <div className="w-6 md:w-8 h-[1px] bg-white/50 group-hover:w-12 transition-all duration-500" />
                  </button>
                </motion.div>
              </motion.form>
            )}

            {/* Social / Email Footer */}
            <AnimatedSection delay={0.6}>
              <div className="mt-16 md:mt-32 pt-10 md:pt-16 border-t border-border/60 flex flex-col items-center gap-8">
                <div className="flex gap-8 md:gap-12">
                  {[
                    { icon: Instagram, label: "Instagram", href: "#" },
                    { icon: MessageCircle, label: "WhatsApp", href: "#" },
                    { icon: Youtube, label: "YouTube", href: "#" },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="text-muted-foreground hover:text-primary transition-all duration-500 transform hover:scale-125 p-2"
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </a>
                  ))}
                </div>
                <div className="text-center">
                  <p className="font-body text-[10px] tracking-[0.3em] text-primary font-bold mb-2 uppercase">
                    Connect Direct
                  </p>
                  <p className="text-foreground/75 text-sm font-body tracking-[0.2em] font-bold">
                    contact@sanjaysingh.in
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
