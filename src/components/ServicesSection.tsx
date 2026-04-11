import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Dumbbell, Apple, Brain, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    icon: Dumbbell,
    title: "Body Recomposition",
    tagline: "Science-backed physique engineering",
    desc: "Lose fat and build muscle simultaneously through precision-calibrated training protocols. No guesswork — only structured, progressive overload systems designed around your unique physiology and lifestyle constraints.",
    tags: ["Fat Loss", "Muscle Building", "Progressive Overload", "Personalized Plans"],
    outcome: "A stronger, leaner physique — not just for 90 days, but for life.",
  },
  {
    id: "02",
    icon: Apple,
    title: "Nutrition Coaching",
    tagline: "Food as your most powerful tool",
    desc: "Sustainable, flexible nutrition strategies tailored to your goals, food preferences, and daily schedule. No crash diets. No starvation. Just a clear, practical system you can maintain long-term.",
    tags: ["Macro Planning", "Sustainable Dieting", "Flexible Approach", "No Crash Diets"],
    outcome: "Eat in a way that fuels performance, enjoyment, and real results.",
  },
  {
    id: "03",
    icon: Brain,
    title: "Lifestyle Transformation",
    tagline: "Rebuild your identity from the inside out",
    desc: "High-performance habits, mental frameworks, and daily routines that align your entire lifestyle with your goals. Because the gym is only 1 hour of your 24-hour day — the rest matters more.",
    tags: ["Habit Systems", "Mindset Coaching", "Routine Design", "Accountability"],
    outcome: "A life built on consistent, high-leverage daily actions.",
  },
];

const ServicesSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-36 border-t border-border relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/3 blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-5 md:px-8">

        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary rounded-full" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary font-semibold">
              Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight">
              WHAT I{" "}
              <span className="relative inline-block">
                <span className="text-primary">OFFER</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary origin-left rounded-full"
                />
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xs font-body leading-relaxed md:text-right">
              Every program is built around <span className="text-foreground/80">you</span> — no templates, no shortcuts.
            </p>
          </div>
        </AnimatedSection>

        {/* Service Rows — Expandable Accordion Style */}
        <div className="space-y-3">
          {services.map((svc, i) => {
            const isOpen = activeId === svc.id;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
                className={`group border rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isOpen
                    ? "border-primary/50 bg-secondary/40"
                    : "border-white/8 bg-secondary/15 hover:border-white/20 hover:bg-secondary/25"
                }`}
                onClick={() => setActiveId(isOpen ? null : svc.id)}
              >
                {/* Row Header — always visible */}
                <div className="flex items-center gap-5 md:gap-8 px-6 py-6 md:px-10 md:py-8">
                  {/* Number */}
                  <span className={`font-heading text-xl md:text-2xl transition-colors duration-300 flex-shrink-0 ${isOpen ? "text-primary" : "text-white/20 group-hover:text-white/40"}`}>
                    {svc.id}
                  </span>

                  {/* Icon */}
                  <div className={`w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    isOpen ? "bg-primary" : "bg-white/5 group-hover:bg-white/10 border border-white/10"
                  }`}>
                    <svc.icon className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${isOpen ? "text-black" : "text-primary"}`} strokeWidth={1.8} />
                  </div>

                  {/* Title & tagline */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-heading text-xl sm:text-2xl md:text-3xl transition-colors duration-300 ${isOpen ? "text-primary" : "text-foreground group-hover:text-foreground/90"}`}>
                      {svc.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground mt-0.5 hidden sm:block">
                      {svc.tagline}
                    </p>
                  </div>

                  {/* Tags — hidden on mobile, visible md+ */}
                  <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                    {svc.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="font-body text-[10px] tracking-wider uppercase text-muted-foreground border border-white/10 rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expand arrow */}
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-400 ${
                      isOpen ? "rotate-90 text-primary" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  />
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 md:px-10 md:pb-10 border-t border-white/8">
                        <div className="grid md:grid-cols-2 gap-8 pt-7">
                          {/* Left: Description + Outcome */}
                          <div>
                            <p className="text-foreground/70 text-base leading-relaxed font-body mb-6">
                              {svc.desc}
                            </p>
                            <div className="bg-primary/8 border border-primary/20 rounded-xl px-5 py-4">
                              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-1">Your Outcome</p>
                              <p className="font-body text-sm text-foreground/80 leading-relaxed italic">
                                "{svc.outcome}"
                              </p>
                            </div>
                          </div>

                          {/* Right: Full tags + CTA */}
                          <div className="flex flex-col justify-between gap-6">
                            <div>
                              <p className="font-body text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">What's Included</p>
                              <div className="flex flex-wrap gap-2">
                                {svc.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="font-body text-xs uppercase tracking-wider text-primary border border-primary/30 bg-primary/5 rounded-full px-4 py-2"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <Link
                              to="/contact"
                              onClick={(e) => e.stopPropagation()}
                              className="btn-premium inline-flex items-center gap-3 font-body font-bold text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground px-7 py-4 self-start group/btn"
                            >
                              Start This Program
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom disclaimer */}
        <AnimatedSection delay={0.5}>
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-5 md:px-8 border border-white/8 rounded-2xl bg-secondary/15">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground">
                All programs are <span className="text-foreground/80 font-semibold">100% personalized</span> — no generic templates
              </p>
            </div>
            <Link
              to="/contact"
              className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-300 flex items-center gap-2 flex-shrink-0"
            >
              Book Free Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default ServicesSection;
