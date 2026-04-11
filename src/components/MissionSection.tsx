import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { Heart, Target, Globe, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Give Back",
    desc: "Every transformation is Sanjay's contribution to a healthier, stronger society.",
  },
  {
    icon: Target,
    title: "Result-First",
    desc: "No fluff. No shortcuts. Just clear systems designed to deliver lasting change.",
  },
  {
    icon: Globe,
    title: "Sustainable Living",
    desc: "Fitness that fits into your life — not a life that revolves around fitness.",
  },
];

// Split the quote into two parts for dramatic line-by-line animation
const quoteLine1 = "FITNESS IS NOT JUST";
const quoteLine2 = "MY PROFESSION.";
const quoteLine3 = "IT IS MY";
const quoteLine4 = "MISSION.";

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
      className="py-24 md:py-44 border-t border-border relative grid-bg noise-bg overflow-hidden"
    >
      {/* Top & bottom center gradient lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent to-primary/40" />

      {/* Large background text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[18vw] text-white/[0.015] leading-none whitespace-nowrap">
          MISSION
        </span>
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">

        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-14 md:mb-20">
            <div className="flex-1 max-w-[80px] h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-body text-xs tracking-[0.5em] uppercase text-primary font-semibold">
              The Mission
            </span>
            <div className="flex-1 max-w-[80px] h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </AnimatedSection>

        {/* Animated Quote — word by word */}
        <div className="text-center mb-10 md:mb-16">
          {lines.map((line, lineIdx) => {
            const isLastLine = lineIdx === lines.length - 1;
            const words = line.split(" ");
            return (
              <div key={lineIdx} className="block">
                <span className={`inline font-heading leading-[1.1] ${
                  lineIdx >= 2
                    ? "text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-primary"
                    : "text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-foreground"
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
          className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent max-w-xl mx-auto mb-10 md:mb-16 origin-center"
        />

        {/* Sub-text */}
        <AnimatedSection delay={0.3}>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-center leading-relaxed font-body mb-16 md:mb-24 px-2">
            Sanjay believes in giving back to society through health, fitness, and sustainable living.
            Every client isn't just a transformation — it's a{" "}
            <span className="text-foreground/90 font-medium">life reclaimed</span>.
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
              className="group flex flex-col items-center text-center gap-4 border border-white/8 rounded-2xl p-6 md:p-8 bg-secondary/15 hover:border-primary/40 hover:bg-secondary/30 transition-all duration-500 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-400">
                <val.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
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
            className="btn-premium font-body font-bold text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground px-10 py-5 flex items-center gap-3 group"
          >
            Be Part Of The Mission
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            Free · No Obligation
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;
