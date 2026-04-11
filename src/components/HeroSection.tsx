import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-silhouette.jpg";

const textReveal = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg noise-bg">
      {/* Hero Image with parallax feel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-25 md:opacity-40"
      >
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroImage}
          alt="Fitness coach silhouette"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mb-8"
          />

          {["TRANSFORM", "YOUR BODY", "TRANSFORM", "YOUR LIFE"].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.div
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textReveal}
              >
                <span className={`block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading leading-[0.9] ${line.includes("BODY") || line.includes("LIFE") ? "text-primary" : "text-foreground"
                  }`}>
                  {line}
                </span>
              </motion.div>
            </div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base md:text-xl text-muted-foreground font-body max-w-lg mt-8 mb-10"
          >
            Certified Lifestyle & Body Recomposition Coach
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="btn-premium font-body font-bold text-sm tracking-widest uppercase bg-primary text-primary-foreground px-8 py-4"
            >
              WORK WITH ME
            </Link>
            <a
              href="/#about"
              className="btn-premium-outline font-body font-bold text-sm tracking-widest uppercase border border-foreground/30 text-foreground px-8 py-4 hover:border-foreground"
            >
              MY STORY
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-heading text-[10px] tracking-[0.4em] text-muted-foreground">SCROLL</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-primary"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
