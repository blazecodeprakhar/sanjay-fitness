import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { Heart, Target, Globe, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community Care",
    desc: "Every routine designed is a step towards building a more mindful, healthy, and conscious community.",
  },
  {
    icon: Target,
    title: "Pure Intention",
    desc: "Zero fluff. No temporary shortcuts. Just sustainable coaching designed to support lasting life shifts.",
  },
  {
    icon: Globe,
    title: "Organic Balance",
    desc: "Wellness that fits organically into your career and home — not a life that revolves around restrictions.",
  },
];

// Split the quote into two parts for dramatic line-by-line animation
const quoteLine1 = "WELLNESS IS NOT";
const quoteLine2 = "A TEMPORARY TREND.";
const quoteLine3 = "IT IS A LIFETIME";
const quoteLine4 = "RITUAL.";

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const MissionSection = () => {
  const lines = [quoteLine1, quoteLine2, quoteLine3, quoteLine4];
  let wordIndex = 0;

  return (
    <section
      id="mission"
      className="py-24 md:py-44 border-t border-border relative grid-bg noise-bg overflow-hidden bg-background"
    >
      {/* Top & bottom center gradient lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent to-primary/30" />

      {/* Large background text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[18vw] text-foreground/[0.012] leading-none whitespace-nowrap font-bold">
          PHILOSOPHY
        </span>
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">

        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-14 md:mb-20">
            <div className="flex-1 max-w-[80px] h-[1px] bg-gradient-to-r from-transparent to-primary/40" />
            <span className="font-body text-xs tracking-[0.5em] uppercase text-primary font-bold">
              The Philosophy
            </span>
            <div className="flex-1 max-w-[80px] h-[1px] bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </AnimatedSection>

        {/* Animated Quote — word by word */}
        <div className="text-center mb-10 md:mb-16">
          {lines.map((line, lineIdx) => {
            const words = line.split(" ");
            return (
              <div key={lineIdx} className="block">
                <span className={`inline font-heading leading-[1.1] font-bold ${
                  lineIdx >= 2
                    ? "text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-primary italic font-medium"
                    : "text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-foreground font-light"
                }`}>
                  {words.map((word) => {
                    const currentIndex = wordIndex++;
                    return (
                      <motion.span
                        key={`${lineIdx}-${word}`}
                        custom={currentIndex}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={wordVariants}
                        className="inline-block mr-[0.3em]"
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </span>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent max-w-xl mx-auto mb-10 md:mb-16 origin-center"
        />

        {/* Sub-text */}
        <AnimatedSection delay={0.3}>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed font-body mb-16 md:mb-24 px-2">
            Sanjay believes in guiding people back to their natural state of health, balanced movement, and mindful routines.
            Every path is a{" "}
            <span className="text-foreground/90 font-bold">life reclaimed</span>.
          </p>
        </AnimatedSection>

        {/* Three value pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-14 md:mb-20">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.55 }}
              className="group flex flex-col items-center text-center gap-4 border border-border/80 rounded-2xl p-6 md:p-8 bg-secondary/20 hover:border-primary/30 hover:bg-secondary/35 transition-all duration-500 cursor-default shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-400">
                <val.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300 font-bold">
                  {val.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="btn-premium font-body font-bold text-sm tracking-[0.15em] uppercase bg-primary text-white px-10 py-5 flex items-center gap-3 group"
          >
            Begin Your Shift
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase font-bold">
            Free · No Obligation
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;
