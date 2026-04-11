import AnimatedSection from "./AnimatedSection";
import { Link, useNavigate } from "react-router-dom";
import { Instagram, MessageCircle, Youtube, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Story", href: "/#about" },
  { label: "Coaching", href: "/#services" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Mission", href: "/#mission" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-[#E1306C]" },
  { icon: MessageCircle, label: "WhatsApp", href: "#", color: "hover:text-[#25D366]" },
  { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-[#FF0000]" },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    // After navigating, scroll to top smoothly
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background overflow-hidden border-t border-border mt-auto">
      
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle top gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        {/* Massive watermark text */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-center">
          <span className="font-heading text-[22vw] text-white/[0.012] leading-none whitespace-nowrap">
            SS FITNESS
          </span>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-8">
        {/* Top grid section */}
        <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 lg:col-span-4">
            <AnimatedSection>
              <a href="/" onClick={handleLogoClick} className="block mb-8 w-fit group">
                <div className="relative">
                  <img
                    src="/logo_yellow_custom.png"
                    alt="SS Fitness"
                    className="h-9 md:h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </div>
              </a>
              <p className="text-sm md:text-[15px] text-muted-foreground/80 leading-relaxed font-body mb-8 max-w-sm">
                Certified Lifestyle & Body Recomposition Coach. Transforming bodies, building
                confidence, and creating sustainable health systems for life.
              </p>
              
              {/* Social row */}
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group relative w-11 h-11 border border-white/10 rounded-xl flex items-center justify-center bg-secondary/20 backdrop-blur-sm overflow-hidden transition-all duration-400 hover:border-white/20 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-400 ease-out" />
                    <Icon className={`w-4 h-4 text-muted-foreground/70 transition-colors duration-400 relative z-10 ${color}`} />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Spacer column */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <AnimatedSection delay={0.1}>
              <h4 className="flex items-center gap-3 font-heading text-[11px] tracking-[0.3em] text-foreground mb-8">
                <span className="w-6 h-[1px] bg-primary/50" />
                NAVIGATION
              </h4>
              <nav className="flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group w-fit flex items-center gap-2 font-body text-sm text-muted-foreground transition-all duration-300 hover:text-primary"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-3">
            <AnimatedSection delay={0.2}>
              <h4 className="flex items-center gap-3 font-heading text-[11px] tracking-[0.3em] text-foreground mb-8">
                <span className="w-6 h-[1px] bg-primary/50" />
                CONTACT
              </h4>
              <div className="space-y-6">
                <div className="group">
                  <p className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground/60 mb-1.5 transition-colors group-hover:text-primary/70">EMAIL</p>
                  <a href="mailto:contact@ssfitness.com" className="text-sm text-foreground/90 font-body hover:text-primary transition-colors">
                    contact@ssfitness.com
                  </a>
                </div>
                <div className="group">
                  <p className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground/60 mb-1.5 transition-colors group-hover:text-primary/70">LOCATION</p>
                  <p className="text-sm text-foreground/90 font-body">
                    Bhubaneswar, India
                  </p>
                </div>
                <div className="pt-2">
                  <a href="/contact" className="inline-flex items-center justify-center font-heading text-[10px] bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 tracking-[0.2em] uppercase rounded-lg px-4 py-2.5 transition-all duration-300 text-primary">
                    Start Your Journey
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-heading text-[11px] tracking-[0.4em] text-muted-foreground text-center md:text-left">
            TRANSFORM. ELEVATE. <span className="text-primary tracking-[0.5em]">DOMINATE.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-[11px] text-muted-foreground/60 tracking-wider font-body">
              &copy; {new Date().getFullYear()} Sanjay Singh Fitness.
            </p>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/10" />
            <p className="text-[11px] text-muted-foreground/60 tracking-wider font-body hover:text-foreground transition-colors cursor-pointer">
              Privacy Policy
            </p>
          </div>

          <a
            href="#"
            onClick={scrollToTop}
            className="group absolute right-6 md:right-8 bottom-[1.8rem] rounded-xl w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary hover:bg-primary hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-400 z-20"
            aria-label="Back to top"
          >
             <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-black transition-colors duration-400 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
