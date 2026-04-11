import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-silhouette.jpg";
import { ArrowRight, Award, Users, Star } from "lucide-react";

const textReveal = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.85,
      delay: 0.3 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const badges = [
  { icon: Award, label: "Gold's Gym Certified" },
  { icon: Users, label: "100+ Clients" },
  { icon: Star,  label: "Celebrity Mentorship" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden grid-bg noise-bg">

      {/* ── Background image ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] opacity-20 md:opacity-35">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src={heroImage}
            alt="Sanjay Singh — Certified Body Recomposition Coach"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        {/* Golden radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_60%,rgba(255,215,0,0.05),transparent)]" />
      </motion.div>

      {/* ── Vertical accent lines (desktop only) ── */}
      <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-white/4 to-transparent hidden xl:block pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full container mx-auto px-5 md:px-8 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-3xl">

          {/* Animated golden line — draws in on load */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="h-[3px] bg-primary rounded-full mb-10"
          />

          {/* ── Headline ── */}
          <div className="mb-2">
            {["TRANSFORM", "YOUR BODY."].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="block font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-foreground"
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>

          <div className="mb-8 md:mb-12">
            {["TRANSFORM", "YOUR LIFE."].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  custom={i + 2}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="block font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-primary"
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Sub copy with left accent bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-start gap-4 mb-8 max-w-lg"
          >
            <div className="w-[2px] min-h-[3rem] bg-primary rounded-full flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-foreground/70 font-body leading-relaxed">
              Certified Lifestyle & Body Recomposition Coach — helping you rebuild your body,
              rewire your habits, and reclaim your life.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="flex flex-wrap gap-3 mb-10 md:mb-14"
          >
            <Link
              to="/contact"
              className="btn-premium font-body font-bold text-sm tracking-[0.12em] uppercase bg-primary text-black px-7 py-4 flex items-center gap-2.5 group"
            >
              Work With Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="/#about"
              className="btn-premium-outline font-body font-bold text-sm tracking-[0.12em] uppercase border border-white/20 text-foreground/80 px-7 py-4 hover:border-primary hover:text-primary transition-all duration-300"
            >
              My Story
            </a>
          </motion.div>

          {/* Credential badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap gap-2"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 border border-white/8 rounded-full px-3.5 py-1.5 bg-secondary/30 backdrop-blur-sm"
              >
                <Icon className="w-3 h-3 text-primary flex-shrink-0" strokeWidth={2} />
                <span className="font-body text-[11px] text-muted-foreground tracking-wide whitespace-nowrap">{label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator — desktop only ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-body text-[9px] tracking-[0.5em] text-muted-foreground uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>

      {/* ── Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

    </section>
  );
};

export default HeroSection;
