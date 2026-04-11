import AnimatedSection from "./AnimatedSection";
import { Dumbbell, Apple, Brain } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Body Recomposition",
    desc: "Lose fat, build muscle, and reshape your physique with science-backed training protocols.",
  },
  {
    icon: Apple,
    title: "Nutrition Coaching",
    desc: "Sustainable diet plans tailored to your goals. No crash diets, only lasting results.",
  },
  {
    icon: Brain,
    title: "Lifestyle Transformation",
    desc: "Habits, mindset, and long-term health systems for a balanced, high-performance life.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="w-16 h-1 bg-primary mb-6" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-16">
            WHAT I <span className="text-primary">OFFER</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((svc, i) => (
            <AnimatedSection key={svc.title} delay={i * 0.15}>
              <div className="group relative border border-border rounded-3xl p-8 h-full hover:border-primary transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 border border-border rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300">
                    <svc.icon className="w-7 h-7 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl mb-3">{svc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{svc.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-muted-foreground font-heading text-sm tracking-[0.2em]">
            ALL PROGRAMS ARE PERSONALIZED. <span className="text-primary">NO GENERIC PLANS.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
