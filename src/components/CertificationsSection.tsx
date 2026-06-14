import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Award, Shield, Star, CheckCircle } from "lucide-react";

const certs = [
  {
    icon: Award,
    badge: "CERTIFICATION 01",
    title: "Gold's Gym International",
    subtitle: "Certified Lifestyle Coach",
    desc: "Globally recognized credentials in fitness training and lifestyle management — specializing in posture, habit design, and sustainable movement patterns.",
    highlights: ["Postural Alignment", "Energy Systems", "International Standards"],
  },
  {
    icon: Shield,
    badge: "CERTIFICATION 02",
    title: "Yoga & Breathwork",
    subtitle: "Vinyasa Flow Specialist",
    desc: "Specialized certification in mindfulness, vinyasa alignment, and restorative pranayama breathwork techniques to steady the nervous system.",
    highlights: ["Vinyasa Movement", "Pranayama Breathwork", "Nervous System Regulation"],
  },
  {
    icon: Star,
    badge: "MENTORSHIP",
    title: "Celebrity Care Lineage",
    subtitle: "Trained Under Coach Subhaham",
    desc: "Direct mentorship under Coach Subhaham — celebrity coach for A-list actors — bringing five-star standard dedication and detail-oriented coaching to wellness.",
    highlights: ["Premium Standards", "Elite Attention to Detail", "Hospitality-Grade Care"],
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-36 border-t border-border relative overflow-hidden bg-background">

      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8">

        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary rounded-full" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary font-bold">
              Credentials
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight">
              CERTIFIED.{" "}
              <br className="hidden sm:block" />
              PROVEN.{" "}
              <span className="text-primary italic font-medium">TRUSTED.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xs font-body leading-relaxed">
              Backed by world-class credentials and mentorship from the very best in the wellness industry.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group relative bg-secondary/20 border border-border/80 rounded-3xl p-7 md:p-8 flex flex-col gap-6 hover:border-primary/30 hover:bg-secondary/35 transition-all duration-500 cursor-default overflow-hidden shadow-sm"
            >
              {/* Top glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              {/* Bottom line sweep */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary font-bold">
                  {cert.badge}
                </span>
                <div className="w-10 h-10 border border-border rounded-xl flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-400">
                  <cert.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300 font-bold">
                  {cert.title}
                </h3>
                <p className="font-body text-xs text-primary/70 uppercase tracking-[0.2em] font-bold">
                  {cert.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed font-body flex-1">
                {cert.desc}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                {cert.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3">
                    <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2} />
                    <span className="font-body text-xs text-muted-foreground tracking-wide font-medium">{h}</span>
                  </div>
                ))}
              </div>

              {/* Card number watermark */}
              <div className="absolute bottom-6 right-7 font-heading text-6xl text-foreground/3 leading-none select-none pointer-events-none font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <AnimatedSection delay={0.5}>
          <div className="mt-14 md:mt-20 border border-border rounded-2xl px-6 py-5 md:px-10 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-secondary/25">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-8 gap-y-3">
              {["100+ Lives Reclaimed", "Zero Compromise on Standards", "Ritual-First Philosophy"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="font-body text-xs text-muted-foreground tracking-wider font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="font-heading text-sm tracking-[0.25em] text-primary whitespace-nowrap font-bold">
              EST. BHUBANESWAR
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default CertificationsSection;
