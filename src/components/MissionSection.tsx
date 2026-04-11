import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section id="mission" className="py-32 md:py-44 border-t border-border relative grid-bg noise-bg overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-transparent to-primary/30" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <AnimatedSection>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-primary mx-auto mb-12"
          />
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading leading-[1] max-w-5xl mx-auto mb-8">
            "FITNESS IS NOT JUST MY PROFESSION.{" "}
            <span className="text-primary">IT IS MY MISSION."</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Sanjay believes in giving back to society through health, fitness, and sustainable
            living. Every client is a life transformed.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto"
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MissionSection;
