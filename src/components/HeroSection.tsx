import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Star, Sun, Wind, Play, Square } from "lucide-react";

// Breathing cycle configuration for the interactive wellness widget
const BREATH_STEPS = [
  { state: "inhale", text: "Breathe In", duration: 4, scale: 1.4, color: "rgba(86,119,108,0.35)" },
  { state: "hold", text: "Hold", duration: 4, scale: 1.4, color: "rgba(179,106,91,0.3)" },
  { state: "exhale", text: "Breathe Out", duration: 4, scale: 1.0, color: "rgba(86,119,108,0.15)" },
  { state: "rest", text: "Hold / Rest", duration: 4, scale: 1.0, color: "rgba(30,30,30,0.05)" },
];

const textReveal = {
  hidden: { opacity: 0, y: 50, skewY: 2 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const HeroSection = () => {
  const heroImage = "/yoga_lifestyle_hero.png";

  // Breathing widget states
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(4);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      setTimeLeft(BREATH_STEPS[stepIndex].duration);
      
      const updateInterval = 1000;
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setStepIndex((curr) => (curr + 1) % BREATH_STEPS.length);
            return BREATH_STEPS[(stepIndex + 1) % BREATH_STEPS.length].duration;
          }
          return prev - 1;
        });
      }, updateInterval);
    } else {
      setStepIndex(0);
      setTimeLeft(4);
    }
    return () => clearInterval(timer);
  }, [isPlaying, stepIndex]);

  const currentStep = BREATH_STEPS[stepIndex];
  const currentStepText = isPlaying ? currentStep.text : "Breathe";

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-background pt-24 md:pt-32 pb-16 md:pb-24 grid-bg noise-bg">
      
      {/* ── Background Decorative Ambient Glows ── */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-primary/4 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-accent/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN: Premium Copy & CTA ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            


            {/* Typography composition */}
            <div className="space-y-1 mb-6 md:mb-8 w-full">
              <div className="overflow-hidden">
                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.05] text-foreground font-light tracking-tight"
                >
                  DESIGNING
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.05] text-primary italic font-medium tracking-tight"
                >
                  DAILY RITUALS
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={textReveal}
                  className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] leading-[1.05] text-foreground font-light tracking-tight"
                >
                  FOR VITALITY.
                </motion.h1>
              </div>
            </div>

            {/* Sub-description with accent bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-start gap-4 mb-10 max-w-lg"
            >
              <div className="w-[2px] min-h-[3rem] bg-primary/30 rounded-full flex-shrink-0 mt-1" />
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-body leading-relaxed">
                Unlock a balanced nervous system, conscious eating patterns, and structural mobility. We build sustainable daily habits customized to your high-performance schedule.
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap gap-4 mb-12 md:mb-16 w-full"
            >
              <Link
                to="/contact"
                className="btn-premium font-body font-bold text-xs sm:text-sm tracking-[0.15em] uppercase bg-primary text-white px-8 py-4 sm:py-5 flex items-center gap-3 group shadow-md"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/#about"
                className="btn-premium-outline font-body font-bold text-xs sm:text-sm tracking-[0.15em] uppercase border border-border text-foreground/80 px-8 py-4 sm:py-5 hover:border-primary hover:text-white transition-all duration-300 bg-background/50 shadow-sm"
              >
                Our Philosophy
              </Link>
            </motion.div>

            {/* Staggered features */}
            <div className="flex flex-wrap gap-3 w-full">
              {[
                { icon: Award, label: "Yoga Alliance USA" },
                { icon: Users, label: "100+ Lifestyles Reclaimed" },
                { icon: Star, label: "Habit & Breathwork Protocols" },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="inline-flex items-center gap-2 border border-border/80 rounded-full px-4 py-2 bg-secondary/15 shadow-sm hover:border-primary/20 transition-colors cursor-default"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                  <span className="font-body text-[11px] text-muted-foreground font-bold tracking-wider uppercase">{label}</span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* ── RIGHT COLUMN: Editorial Arch Image & Interactive Widget ── */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2">
            
            {/* Arched image container (Wellness temple window style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/5] max-w-[340px] sm:max-w-[380px] rounded-t-[180px] overflow-hidden border-[6px] border-white shadow-xl bg-secondary/10"
            >
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                src={heroImage}
                alt="Sanjay Singh - Mindfulness Alignment"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Soft overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Card: Morning Routine */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-[15%] -left-[10%] hidden sm:flex items-center gap-3 border border-border/85 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Sun className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="font-heading text-[10px] tracking-[0.2em] text-primary font-bold uppercase">Daily Practice</p>
                <p className="font-body text-xs text-foreground font-bold">07:00 AM Alignment</p>
              </div>
            </motion.div>

            {/* Floating Card: Interactive Breath Bubble */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute -bottom-6 -right-[5%] w-[190px] sm:w-[220px] border border-border/85 bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-md flex flex-col items-center text-center"
            >
              {/* Outer wave ring */}
              <div className="relative w-20 h-20 flex items-center justify-center mb-3">
                <motion.div
                  animate={{
                    scale: isPlaying ? currentStep.scale : 1.0,
                    backgroundColor: isPlaying ? currentStep.color : "rgba(86,119,108,0.1)"
                  }}
                  transition={{
                    duration: isPlaying ? currentStep.duration : 0.8,
                    ease: "easeInOut"
                  }}
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-colors"
                />
                
                {/* Center Core */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Wind className={`w-6 h-6 text-primary ${isPlaying && stepIndex === 0 ? "animate-bounce" : ""}`} />
                </div>

                {/* Ring Countdown Progress border */}
                {isPlaying && (
                  <svg className="absolute inset-0 w-20 h-20 -rotate-90">
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      className="text-primary/20"
                      strokeWidth="2.5"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      className="text-primary"
                      strokeWidth="2.5"
                      fill="transparent"
                      initial={{ strokeDasharray: "226 226", strokeDashoffset: 226 }}
                      animate={{ strokeDashoffset: (timeLeft / currentStep.duration) * 226 }}
                      transition={{ duration: 1, ease: "linear" }}
                    />
                  </svg>
                )}
              </div>

              {/* Status Label */}
              <p className="font-heading text-sm text-foreground font-bold tracking-wide min-h-[20px] mb-1">
                {currentStepText}
              </p>
              
              {/* Description */}
              <p className="font-body text-[10px] text-muted-foreground mb-4 leading-normal">
                {isPlaying ? `${timeLeft} seconds left` : "Align breath to restore nervous balance"}
              </p>

              {/* Play / Stop Action Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-full font-body font-bold text-[10px] tracking-widest uppercase py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  isPlaying
                    ? "bg-secondary text-foreground hover:bg-secondary/80"
                    : "bg-primary text-white hover:brightness-105"
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-2.5 h-2.5 fill-current" />
                    Stop Protocol
                  </>
                ) : (
                  <>
                    <Play className="w-2.5 h-2.5 fill-current" />
                    Breathe with Sanjay
                  </>
                )}
              </button>
            </motion.div>

          </div>

        </div>
      </div>

      {/* ── Scroll indicator — desktop only ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-body text-[9px] font-bold tracking-[0.35em] text-muted-foreground/50 uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>

      {/* ── Bottom Edge Vignette Fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

    </section>
  );
};

export default HeroSection;
