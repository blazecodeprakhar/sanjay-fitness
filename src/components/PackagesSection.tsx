import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Check, Zap, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: "01",
    tier: "Starter",
    name: "FOUNDATION",
    tagline: "Begin your transformation",
    price: "₹4,999",
    period: "/ month",
    badge: null,
    desc: "Perfect for beginners who are ready to commit to a healthier lifestyle with expert guidance and a structured plan.",
    features: [
      "Custom Training Plan (3 days/week)",
      "Basic Nutrition Guidelines",
      "Weekly Check-in via WhatsApp",
      "Body Measurement Tracking",
      "Access to Exercise Library",
      "Monthly Progress Review",
    ],
    cta: "Start Foundation",
    highlight: false,
  },
  {
    id: "02",
    tier: "Most Popular",
    name: "ELITE",
    tagline: "The complete transformation system",
    price: "₹8,999",
    period: "/ month",
    badge: "MOST POPULAR",
    desc: "The complete body recomposition system. Ideal for those serious about achieving real, lasting results with full accountability.",
    features: [
      "Custom Training Plan (5 days/week)",
      "Personalized Macro Nutrition Plan",
      "Daily WhatsApp Support & Check-ins",
      "Weekly Video Form Review",
      "Bi-weekly Strategy Calls",
      "Supplement Guidance",
      "Mindset & Habit Coaching",
      "Full Progress Photo Reviews",
    ],
    cta: "Go Elite",
    highlight: true,
  },
  {
    id: "03",
    tier: "Premium",
    name: "CHAMPION",
    tagline: "VIP coaching experience",
    price: "₹14,999",
    period: "/ month",
    badge: null,
    desc: "The ultimate VIP coaching experience — for high performers who demand the best and refuse to settle for anything less.",
    features: [
      "Full Custom Plan (6 days/week)",
      "Advanced Nutrition Periodisation",
      "Unlimited Direct Coach Access",
      "Live Weekly Video Coaching Calls",
      "Priority 24/7 WhatsApp Support",
      "In-Person Session (if local)",
      "Comprehensive Blood Work Review",
      "Lifestyle & Stress Management",
      "Quarterly Body Transformation Report",
    ],
    cta: "Go Champion",
    highlight: false,
  },
];

const PackagesSection = () => {
  return (
    <section
      id="packages"
      className="py-20 md:py-36 border-t border-border relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/4 blur-[150px] rounded-full pointer-events-none" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[15vw] text-white/[0.015] leading-none whitespace-nowrap">
          INVEST
        </span>
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">

        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary rounded-full" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary font-semibold">
              Investment
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight">
              CHOOSE YOUR{" "}
              <span className="relative inline-block">
                <span className="text-primary">LEVEL</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary origin-left rounded-full"
                />
              </span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xs font-body leading-relaxed md:text-right">
              Every plan includes a <span className="text-foreground/80 font-medium">free consultation</span> before you commit to anything.
            </p>
          </div>
        </AnimatedSection>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-500 ${
                pkg.highlight
                  ? "border-2 border-primary bg-secondary/40 shadow-[0_0_60px_rgba(255,215,0,0.12)]"
                  : "border border-white/10 bg-secondary/15 hover:border-white/25 hover:bg-secondary/25"
              }`}
            >
              {/* Popular badge */}
              {pkg.badge && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="bg-primary text-black font-heading text-[10px] tracking-[0.4em] px-6 py-1.5 rounded-b-xl">
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div className={`flex flex-col flex-1 p-7 md:p-8 ${pkg.badge ? "pt-10" : ""}`}>

                {/* Tier label + number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                    {pkg.tier}
                  </span>
                  <span className={`font-heading text-2xl ${pkg.highlight ? "text-primary" : "text-white/15"}`}>
                    {pkg.id}
                  </span>
                </div>

                {/* Name + tagline */}
                <div className="mb-6">
                  <h3 className={`font-heading text-3xl md:text-4xl mb-1 ${pkg.highlight ? "text-primary" : "text-foreground"}`}>
                    {pkg.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground tracking-wider">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/8">
                  <div className="flex items-end gap-1.5">
                    <span className={`font-heading text-4xl md:text-5xl leading-none ${pkg.highlight ? "text-primary" : "text-foreground"}`}>
                      {pkg.price}
                    </span>
                    <span className="font-body text-sm text-muted-foreground mb-1.5">{pkg.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {pkg.desc}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        pkg.highlight ? "bg-primary" : "bg-white/10 border border-white/15"
                      }`}>
                        <Check className={`w-2.5 h-2.5 ${pkg.highlight ? "text-black" : "text-primary"}`} strokeWidth={3} />
                      </div>
                      <span className="font-body text-sm text-foreground/70 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`w-full font-body font-bold text-sm tracking-[0.15em] uppercase py-4 rounded-2xl flex items-center justify-center gap-3 group transition-all duration-400 ${
                    pkg.highlight
                      ? "bg-primary text-black hover:brightness-110"
                      : "border border-white/20 text-foreground hover:border-primary hover:text-primary bg-transparent"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.6}>
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 md:px-8 border border-white/8 rounded-2xl bg-secondary/10">
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground">
                All plans include a <span className="text-foreground/80 font-semibold">free 30-min consultation</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">
                No lock-in · Cancel anytime
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default PackagesSection;
