import { useState, useEffect } from "react";
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
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const Footer = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px (~past the hero section)
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    const handleMenuToggle = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsMenuOpen(customEvent.detail.mobileOpen);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("menuToggle", handleMenuToggle);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("menuToggle", handleMenuToggle);
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-secondary/30 overflow-hidden border-t border-border pt-16 md:pt-24 mt-auto">
      
      {/* ── Background Watermark (Subtle) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none flex items-end justify-center">
        <span className="font-heading text-[18vw] text-foreground/[0.008] leading-none whitespace-nowrap translate-y-1/4 font-bold">
          SANJAY SINGH
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-8">
        {/* Top grid section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 md:pb-20">
          
          {/* ── Brand & Bio ── */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col items-start">
            <AnimatedSection>
              <a href="/" onClick={handleLogoClick} className="block mb-8 w-fit group">
                <div className="flex items-center gap-1.5 transition-transform duration-500 group-hover:scale-[1.03]">
                  <span className="font-heading text-xl md:text-2xl font-bold tracking-[0.2em] text-foreground">
                    SANJAY
                  </span>
                  <span className="font-heading text-xl md:text-2xl font-light tracking-[0.2em] text-primary italic">
                    SINGH
                  </span>
                </div>
              </a>
              <p className="text-sm md:text-base text-muted-foreground leading-[1.8] font-body mb-10 max-w-sm font-light">
                Certified Lifestyle, Yoga & Wellness Mentor. Guiding individuals towards mindful movement, conscious nutrition, and sustainable daily habits.
              </p>
              
              {/* Social row */}
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-12 h-12 border border-border rounded-2xl flex items-center justify-center bg-background shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 group"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* ── Navigation Links ── */}
          <div className="md:col-span-3 lg:col-span-3">
            <AnimatedSection delay={0.1}>
              <h4 className="flex items-center gap-3 font-heading text-[12px] font-bold tracking-[0.3em] text-foreground mb-8 uppercase">
                <span className="w-8 h-[2px] bg-primary" />
                NAVIGATION
              </h4>
              <nav className="flex flex-col gap-5">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group w-fit flex items-center gap-3 font-body text-[15px] font-medium text-muted-foreground transition-all duration-300 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </AnimatedSection>
          </div>

          {/* ── Contact Info & CTA ── */}
          <div className="md:col-span-4 lg:col-span-3">
            <AnimatedSection delay={0.2}>
              <h4 className="flex items-center gap-3 font-heading text-[12px] font-bold tracking-[0.3em] text-foreground mb-8 uppercase">
                <span className="w-8 h-[2px] bg-primary" />
                CONTACT
              </h4>
              
              <div className="space-y-7">
                <div>
                  <p className="font-body text-[10px] font-bold tracking-[0.2em] text-muted-foreground/60 mb-2 uppercase">Email</p>
                  <a href="mailto:contact@sanjaysingh.in" className="text-[15px] text-foreground font-body font-bold hover:text-primary transition-colors">
                    contact@sanjaysingh.in
                  </a>
                </div>
                
                <div>
                  <p className="font-body text-[10px] font-bold tracking-[0.2em] text-muted-foreground/60 mb-2 uppercase">Location</p>
                  <p className="text-[15px] text-foreground font-body font-bold">
                    Bhubaneswar, India
                  </p>
                </div>
                
                <div className="pt-3">
                  <Link 
                    to="/contact" 
                    className="inline-block font-body font-bold text-[11px] tracking-[0.25em] uppercase border border-border bg-background hover:border-primary hover:bg-primary hover:text-white rounded-lg px-6 py-3.5 transition-all duration-300 text-primary shadow-sm"
                  >
                    Start Your Journey
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 border-t border-border">
        <div className="container mx-auto px-6 md:px-8 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <p className="font-heading text-[11px] md:text-sm tracking-[0.4em] text-muted-foreground/80 text-center md:text-left uppercase font-bold">
            Align. Breathe. <span className="text-primary font-bold">Transform.</span>
          </p>
          
          <div className="flex items-center gap-4 text-[11px] md:text-xs text-muted-foreground/60 font-body">
            <p className="tracking-wider">
              &copy; {new Date().getFullYear()} Sanjay Singh Wellness.
            </p>
            <span className="w-[3px] h-[3px] rounded-full bg-border" />
            <a href="#" className="tracking-wider hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>

        </div>
      </div>

      {/* Floating Back to Top Button */}
      <a
        href="#"
        onClick={scrollToTop}
        className={`group fixed right-6 bottom-6 md:right-8 md:bottom-8 rounded-full w-12 h-12 flex items-center justify-center bg-background border border-border hover:border-primary hover:bg-primary hover:text-white transition-all duration-500 z-50 shadow-md ${
          showScrollTop && !isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-400 group-hover:-translate-y-0.5" />
      </a>
    </footer>
  );
};

export default Footer;
