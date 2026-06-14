import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahul M.",
    initials: "RM",
    location: "Mumbai",
    goal: "Energy & Breathwork",
    result: "Nervous System Restored",
    text: "Sanjay completely transformed my daily routine. By focusing on pranayama, joint mobility, and mindful movement, my daily focus doubled and my work-related stress simply dissolved.",
    stars: 5,
  },
  {
    name: "Priya S.",
    initials: "PS",
    location: "Delhi",
    goal: "Conscious Nutrition",
    result: "Sustainable Lifestyle Rhythm",
    text: "The whole-food nutrition and routine strategy was a revelation. No restrictive diets, just organic, mindful eating that optimized my digestion. Sanjay is incredibly empathetic and detailed.",
    stars: 5,
  },
  {
    name: "Arjun K.",
    initials: "AK",
    location: "Bangalore",
    goal: "Yoga & Core Stability",
    result: "Spacious Mobility & Alignment",
    text: "Sanjay brings a level of five-star hospitality attention to detail to physical coaching. My body feels spacious, light, and pain-free. He teaches movement as a form of meditation.",
    stars: 5,
  },
];

const stats = [
  { value: "100+", label: "Lives Reclaimed" },
  { value: "5★", label: "Average Rating" },
  { value: "3mo", label: "Avg. Habit Shift" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const t = testimonials[active];

  return (
    <section className="py-20 md:py-36 border-t border-border relative overflow-hidden bg-background">

      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/4 blur-[140px] rounded-full pointer-events-none -translate-y-1/2" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[16vw] text-foreground/[0.012] leading-none whitespace-nowrap font-bold">
          RITUALS
        </span>
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">

        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary rounded-full" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary font-bold">
              Testimonials
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight">
              MINDSETS{" "}
              <span className="relative inline-block">
                <span className="text-primary italic font-medium">REALIGNED</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary origin-left rounded-full"
                />
              </span>
            </h2>
            {/* Stat strip */}
            <div className="flex gap-6 sm:gap-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center animate-fade-in">
                  <div className="font-heading text-xl sm:text-2xl md:text-3xl text-primary font-bold">{s.value}</div>
                  <div className="font-body text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5 font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Featured testimonial — large format */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-stretch mb-10">

          {/* Quote card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="border border-border/80 bg-secondary/20 rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/25 mb-4" strokeWidth={1} />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-base md:text-xl text-foreground font-body italic mb-6 md:mb-10 leading-relaxed">
                  "{t.text}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="font-body text-sm text-white font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-heading text-sm tracking-wider text-foreground font-bold">{t.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-xl px-4 py-2 self-start sm:self-auto shadow-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    <span className="font-body text-xs text-primary font-bold tracking-wider">{t.result}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Navigation panel — simplified on mobile */}
          <div className="lg:col-span-4 flex flex-col gap-4">

            {/* Nav controls — always shown */}
            <div className="flex items-center gap-3">
              <button onClick={prev} className="w-10 h-10 border border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 group" aria-label="Previous">
                <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              <button onClick={next} className="w-10 h-10 border border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-300 group" aria-label="Next">
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              <span className="font-body text-xs text-muted-foreground ml-1 tracking-wider font-bold">
                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              {/* Progress dots on mobile (inline with controls) */}
              <div className="flex gap-2 ml-auto lg:hidden">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`h-[3px] rounded-full transition-all duration-400 ${ i === active ? "bg-primary w-8" : "bg-border w-3" }`}
                  />
                ))}
              </div>
            </div>

            {/* Mini selector cards — desktop only */}
            <div className="hidden lg:flex flex-col gap-3">
              {testimonials.map((item, i) => (
                <button key={item.name} onClick={() => setActive(i)}
                  className={`text-left border rounded-2xl px-5 py-4 transition-all duration-300 shadow-sm ${
                    i === active
                      ? "border-primary/45 bg-secondary/50"
                      : "border-border/80 bg-secondary/10 hover:border-border hover:bg-secondary/25"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${i === active ? "bg-primary" : "bg-secondary/40 border border-border/80"}`}>
                      <span className={`font-body text-[10px] font-bold ${i === active ? "text-white" : "text-primary"}`}>{item.initials}</span>
                    </div>
                    <span className="font-heading text-sm text-foreground font-bold">{item.name}</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-snug">{item.goal}</p>
                </button>
              ))}
            </div>

            {/* Progress dots — desktop only */}
            <div className="hidden lg:flex gap-2 mt-auto pt-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-[3px] rounded-full transition-all duration-400 ${ i === active ? "bg-primary w-8" : "bg-border w-3" }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Bottom social proof bar */}
        <AnimatedSection delay={0.5}>
          <div className="border border-border rounded-2xl px-6 py-5 bg-secondary/25 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-1.5 gap-y-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="font-body text-sm text-foreground/75 ml-2 font-medium">
                <span className="text-foreground font-bold">100+</span> verified client transformations
              </span>
            </div>
            <p className="font-body text-xs text-muted-foreground tracking-wider uppercase text-center sm:text-right font-bold">
              Real clients · Real results · Zero filters
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default TestimonialsSection;
