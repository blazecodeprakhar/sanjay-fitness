import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Clients Transformed" },
  { value: "5★", label: "Hospitality Background" },
  { value: "2", label: "Global Certifications" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="w-16 h-1 bg-primary mb-6" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-16">
            WHO IS <span className="text-primary">SANJAY SINGH?</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <AnimatedSection delay={0.2} direction="left">
            <div className="aspect-[3/4] bg-secondary border border-border overflow-hidden relative group">
              <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <span className="font-heading text-8xl text-primary/10">SS</span>
              </div>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="right">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Sanjay Singh is a certified Lifestyle and Body Recomposition Coach dedicated to
              transforming lives through structured fitness, nutrition, and sustainable habits.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With a strong foundation in hotel management and professional experience in leading
              five-star hospitality brands, he brings discipline, precision, and a people-first
              approach into his coaching practice.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Originally from Bhubaneswar, Odisha, Sanjay's journey into health and fitness was
              driven by a deeper purpose: to elevate not only himself but also those around him.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="border border-border p-4 text-center hover:border-primary hover:glow-accent transition-all duration-300 group cursor-default"
                >
                  <div className="font-heading text-2xl md:text-3xl text-primary mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
