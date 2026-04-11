import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Award, Users, Star, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "100+", label: "Lives Transformed", icon: Users },
  { value: "5★", label: "Hospitality Expertise", icon: Star },
  { value: "2", label: "Global Certifications", icon: Award },
];

const pillars = [
  { title: "BODY", desc: "Scientific recomposition through structured training protocols tailored to your unique physiology." },
  { title: "MIND", desc: "Building unshakable discipline, mental clarity, and consistency that outlasts motivation." },
  { title: "LIFE", desc: "Sustainable systems that integrate seamlessly into your lifestyle — not just for 90 days, but forever." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-36 relative overflow-hidden">

      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8">

        {/* Section Header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary rounded-full" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary font-semibold">About The Coach</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading mb-16 md:mb-24 leading-tight">
            WHO IS{" "}
            <span className="relative inline-block">
              <span className="text-primary">SANJAY SINGH?</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary origin-left rounded-full"
              />
            </span>
          </h2>
        </AnimatedSection>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Left — Visual Column */}
          <AnimatedSection delay={0.2} direction="left" className="lg:col-span-5">
            <div className="relative">
              {/* Main card */}
              <div className="relative aspect-[4/5] bg-secondary/40 border border-white/8 rounded-3xl overflow-hidden group">
                {/* Inner gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background to-primary/5" />

                {/* Large monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-[160px] md:text-[200px] text-primary/6 leading-none select-none">
                    SS
                  </span>
                </div>

                {/* Corner accent lines */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />

                {/* Hover border */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-3xl transition-all duration-700" />

                {/* Bottom info chip */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-background/80 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-3. h-3.5 text-primary flex-shrink-0" />
                      <span className="font-body text-xs text-muted-foreground tracking-wider">Bhubaneswar, Odisha, India</span>
                    </div>
                    <p className="font-heading text-sm text-foreground tracking-widest">CERTIFIED LIFESTYLE COACH</p>
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="absolute -right-4 top-12 md:-right-8 bg-primary rounded-2xl px-5 py-4 shadow-[0_0_40px_rgba(255,215,0,0.3)]"
              >
                <div className="font-heading text-2xl text-black leading-none">100+</div>
                <div className="font-body text-[10px] text-black/70 uppercase tracking-wider mt-1">Clients</div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right — Content Column */}
          <AnimatedSection delay={0.35} direction="right" className="lg:col-span-7">
            <div className="space-y-8">

              {/* Bio paragraphs */}
              <div className="space-y-5">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-body">
                  Sanjay Singh is a <span className="text-primary font-semibold">certified Lifestyle & Body Recomposition Coach</span> dedicated to transforming lives through structured fitness, precision nutrition, and sustainable habit systems.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
                  With a prestigious foundation in hotel management and professional experience across leading <span className="text-foreground/80">five-star hospitality brands</span>, Sanjay brings a rare combination — the precision of a world-class professional and the empathy of a life coach.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
                  Rooted in Bhubaneswar, Odisha, his journey into fitness was fueled by a deeper mission: to help people reclaim their bodies, rebuild their confidence, and design a life they're proud of.
                </p>
              </div>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {pillars.map((pillar, i) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                    className="group bg-secondary/30 border border-white/8 rounded-2xl p-5 hover:border-primary/40 hover:bg-secondary/50 transition-all duration-400 cursor-default"
                  >
                    <div className="font-heading text-2xl text-primary mb-2 group-hover:tracking-widest transition-all duration-300">
                      {pillar.title}
                    </div>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                    className="border border-border rounded-2xl p-4 text-center hover:border-primary/50 hover:glow-accent transition-all duration-300 group cursor-default"
                  >
                    <stat.icon className="w-4 h-4 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="font-heading text-xl md:text-2xl text-primary mb-1">{stat.value}</div>
                    <div className="font-body text-[10px] text-muted-foreground uppercase tracking-wider leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
              >
                <Link
                  to="/contact"
                  className="btn-premium font-body font-bold text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground px-8 py-4 flex items-center gap-2 group"
                >
                  Work With Sanjay
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <span className="text-xs text-muted-foreground font-body tracking-wider">Free consultation · No commitment required</span>
              </motion.div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
