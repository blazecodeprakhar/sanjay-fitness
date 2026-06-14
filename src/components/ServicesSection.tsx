import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Wind, Apple, Brain, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    icon: Wind,
    title: "Mindful Movement",
    tagline: "Cultivate strength, flow, and structural health",
    desc: "Develop balanced strength, structural alignment, and joint mobility through vinyasa flow, restorative mobility, and functional movement. Tailored to your physical condition, each protocol prioritizes safety, posture, and deep body awareness.",
    tags: ["Vinyasa Yoga", "Postural Alignment", "Joint Mobility", "Balanced Strength"],
    outcome: "A resilient, spacious body that moves with effortless fluidity.",
  },
  {
    id: "02",
    icon: Apple,
    title: "Conscious Nutrition",
    tagline: "Nourishment as an act of self-care",
    desc: "Move away from restrictive diets and embrace intuitive, whole-food nourishment. We build simple, customized meal philosophies centered around clean ingredients that optimize digestion, steady your energy, and fit your rhythm.",
    tags: ["Whole Foods", "Intuitive Eating", "Digestive Health", "Mindful Recipes"],
    outcome: "A peaceful relationship with food and clear, sustained vitality.",
  },
  {
    id: "03",
    icon: Brain,
    title: "Lifestyle Coaching",
    tagline: "Design your day, ground your energy",
    desc: "Establish nourishing morning and evening rituals, stress management protocols, and optimal sleep hygiene. We coach you to align your daily systems with your core values, building a life of presence and consistent focus.",
    tags: ["Morning Rituals", "Sleep Hygiene", "Stress Resilience", "Habit Building"],
    outcome: "A calm, organized mindset backed by stable, daily habits.",
  },
];

const ServicesSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-36 border-t border-border relative overflow-hidden bg-background">

      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/3 blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-5 md:px-8">

        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary rounded-full" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary font-bold">
              Offerings
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight">
              HOLISTIC{" "}
              <span className="relative inline-block">
                <span className="text-primary italic font-medium">COACHING</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary origin-left rounded-full"
                />
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xs font-body leading-relaxed md:text-right">
              Every system is built individually for <span className="text-foreground/90 font-medium">you</span> — no templates, no shortcuts.
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
                    ? "border-primary/45 bg-secondary/50"
                    : "border-border/80 bg-secondary/20 hover:border-border hover:bg-secondary/35"
                }`}
                onClick={() => setActiveId(isOpen ? null : svc.id)}
              >
                {/* Row Header — always visible */}
                <div className="flex items-center gap-5 md:gap-8 px-6 py-6 md:px-10 md:py-8">
                  {/* Number */}
                  <span className={`font-heading text-xl md:text-2xl transition-colors duration-300 flex-shrink-0 font-bold ${isOpen ? "text-primary" : "text-foreground/20 group-hover:text-foreground/40"}`}>
                    {svc.id}
                  </span>

                  {/* Icon */}
                  <div className={`w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    isOpen ? "bg-primary" : "bg-secondary/40 group-hover:bg-secondary/60 border border-border/80"
                  }`}>
                    <svc.icon className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${isOpen ? "text-white" : "text-primary"}`} strokeWidth={1.8} />
                  </div>

                  {/* Title & tagline */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-heading text-xl sm:text-2xl md:text-3xl transition-colors duration-300 font-bold ${isOpen ? "text-primary" : "text-foreground group-hover:text-foreground/90"}`}>
                      {svc.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-muted-foreground mt-0.5 hidden sm:block">
                      {svc.tagline}
                    </p>
                  </div>

                  {/* Tags — hidden on mobile, visible md+ */}
                  <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                    {svc.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="font-body text-[10px] tracking-wider uppercase text-muted-foreground border border-border rounded-full px-3 py-1 bg-background">
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
                      <div className="px-6 pb-8 md:px-10 md:pb-10 border-t border-border/50">
                        <div className="grid md:grid-cols-2 gap-8 pt-7">
                          {/* Left: Description + Outcome */}
                          <div>
                            <p className="text-foreground/75 text-base leading-relaxed font-body mb-6">
                              {svc.desc}
                            </p>
                            <div className="bg-primary/5 border border-primary/10 rounded-xl px-5 py-4">
                              <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-1 font-bold">Your Outcome</p>
                              <p className="font-body text-sm text-foreground/85 leading-relaxed italic">
                                "{svc.outcome}"
                              </p>
                            </div>
                          </div>

                          {/* Right: Full tags + CTA */}
                          <div className="flex flex-col justify-between gap-6">
                            <div>
                              <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4 font-bold">What We Focus On</p>
                              <div className="flex flex-wrap gap-2">
                                {svc.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="font-body text-xs uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 rounded-full px-4 py-2"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <Link
                              to="/contact"
                              onClick={(e) => e.stopPropagation()}
                              className="btn-premium inline-flex items-center gap-3 font-body font-bold text-sm tracking-[0.15em] uppercase bg-primary text-white px-7 py-4 self-start group/btn"
                            >
                              Begin Program
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
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-5 md:px-8 border border-border rounded-2xl bg-secondary/25">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="font-body text-xs tracking-[0.25em] uppercase text-muted-foreground">
                All routines are <span className="text-foreground/90 font-bold">100% personalized</span> — tailored to your life
              </p>
            </div>
            <Link
              to="/contact"
              className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-300 flex items-center gap-2 flex-shrink-0 font-bold"
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
