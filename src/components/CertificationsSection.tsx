import AnimatedSection from "./AnimatedSection";
import { Award, Shield, Star } from "lucide-react";

const certs = [
  {
    icon: Award,
    title: "Gold's Gym International",
    desc: "Certified Lifestyle Coach with globally recognized credentials in fitness training and lifestyle management.",
  },
  {
    icon: Shield,
    title: "Natural Bodybuilding",
    desc: "Certified Coach specialized in drug-free bodybuilding and body recomposition techniques.",
  },
  {
    icon: Star,
    title: "Celebrity Coach Mentorship",
    desc: "Trained under renowned Coach Subhaham, who has worked with Ranbir Kapoor, Amitabh Bachchan, and Aamir Khan.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="w-16 h-1 bg-primary mb-6" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-4">
            CERTIFIED. PROVEN. <span className="text-primary">TRUSTED.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-16 max-w-xl">
            Backed by world-class credentials and mentorship from the best in the industry.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.15}>
              <div className="group relative border border-border rounded-3xl p-8 h-full hover:border-primary transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 border border-border rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300">
                    <cert.icon className="w-7 h-7 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl mb-3">{cert.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{cert.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
