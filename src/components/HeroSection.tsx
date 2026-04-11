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

      {/* ── Background image layer ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Image panel */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[58%] opacity-20 md:opacity-40">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src={heroImage}
            alt="Sanjay Singh - Certified Body Recomposition Coach"
            className="w-full h-full object-cover object-top"
          />
          {/* Left fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
          {/* Inner vignette */}
          <div className="absolute inset-0 bg-gradient-to-l from-background/40 to-transparent" />
        </div>

        {/* Large left golden radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_10%_65%,rgba(255,215,0,0.07),transparent)]" />
        {/* Smaller right accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_40%_at_75%_30%,rgba(255,215,0,0.04),transparent)]" />
      </motion.div>

      {/* ── Left vertical accent line ── */}
      <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block pointer-events-none" />

      {/* ── Right vertical branding text (desktop only) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 pointer-events-none"
      >
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-primary/30" />
        <span
          className="font-heading text-[10px] tracking-[0.5em] text-white/15 uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          SS FITNESS
        </span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-primary/30" />
      </motion.div>

      {/* ── Floating stat badge (desktop only) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute bottom-28 right-[8%] hidden lg:block pointer-events-none"
      >
        <div className="border border-white/10 bg-background/70 backdrop-blur-md rounded-2xl px-5 py-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Active Clients</span>
          </div>
          <div className="font-heading text-3xl text-primary leading-none">100+</div>
          <div className="font-body text-[10px] text-muted-foreground mt-1">Lives Transformed</div>
        </div>
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full container mx-auto px-5 md:px-8 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-3xl">

          {/* Animated golden line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="h-[3px] bg-primary rounded-full mb-10"
          />

          {/* ── Headline block 1 — white ── */}
          <div className="mb-1">
            {["TRANSFORM", "YOUR BODY."].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="block font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] text-foreground"
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>

          {/* ── Headline block 2 — primary yellow ── */}
          <div className="mb-8 md:mb-12">
            {["TRANSFORM", "YOUR LIFE."].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.span
                  custom={i + 2}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="block font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] text-primary"
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </div>

          {/* ── Sub copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex items-start gap-4 mb-9 max-w-md"
          >
            <div className="w-[2px] min-h-[2.75rem] bg-primary/80 rounded-full flex-shrink-0 mt-1" />
            <p className="text-sm md:text-[15px] text-foreground/60 font-body leading-relaxed">
              Certified Lifestyle &amp; Body Recomposition Coach.
              Helping you rebuild your body, rewire your habits, and reclaim your life.
            </p>
          </motion.div>

          {/* ── CTA Buttons ── */}
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
              className="btn-premium-outline font-body font-bold text-sm tracking-[0.12em] uppercase border border-white/15 text-foreground/70 px-7 py-4 hover:border-primary hover:text-primary transition-all duration-300"
            >
              My Story
            </a>
          </motion.div>

          {/* ── Credential badges — staggered per item ── */}
          <div className="flex flex-wrap gap-2">
            {badges.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                className="inline-flex items-center gap-2 border border-white/8 rounded-full px-3.5 py-1.5 bg-secondary/20 backdrop-blur-sm hover:border-primary/30 hover:bg-secondary/40 transition-all duration-300 cursor-default"
              >
                <Icon className="w-3 h-3 text-primary flex-shrink-0" strokeWidth={2} />
                <span className="font-body text-[11px] text-muted-foreground tracking-wide whitespace-nowrap">{label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Scroll indicator — desktop only ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-body text-[9px] tracking-[0.5em] text-white/20 uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>

      {/* ── Bottom edge fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

    </section>
  );
};

export default HeroSection;
