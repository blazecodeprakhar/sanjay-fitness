import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul M.",
    text: "Sanjay completely transformed my approach to fitness. I lost 15kg and gained confidence I never knew I had.",
    stars: 5,
  },
  {
    name: "Priya S.",
    text: "The nutrition plan was a game-changer. No crash diets, just sustainable habits that stuck. Highly recommend!",
    stars: 5,
  },
  {
    name: "Arjun K.",
    text: "Working with Sanjay felt like having a world-class coach in my corner. His discipline and precision are unmatched.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="w-16 h-1 bg-primary mb-6" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-16">
            LIVES <span className="text-primary">TRANSFORMED</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <div className="group relative border border-border rounded-3xl p-8 h-full hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] bg-card/10 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <span className="font-heading text-xs text-primary group-hover:text-primary-foreground">{t.name.charAt(0)}</span>
                  </div>
                  <p className="font-heading text-xs tracking-[0.2em] text-foreground">{t.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
