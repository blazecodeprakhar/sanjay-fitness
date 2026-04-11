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
    <footer className="relative bg-[#050505] overflow-hidden border-t border-white/5 pt-16 md:pt-24 mt-auto">
      
      {/* ── Background Watermark (Subtle) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none flex items-end justify-center">
        <span className="font-heading text-[20vw] text-white/[0.008] leading-none whitespace-nowrap translate-y-1/4">
          SS FITNESS
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-8">
        {/* Top grid section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 md:pb-20">
          
          {/* ── Brand & Bio ── */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col items-start">
            <AnimatedSection>
              <a href="/" onClick={handleLogoClick} className="block mb-8 w-fit group">
                <img
                  src="/logo_yellow_custom.png"
                  alt="SS Fitness"
                  className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>
              <p className="text-sm md:text-base text-white/50 leading-[1.8] font-body mb-10 max-w-sm font-light">
                Certified Lifestyle & Body Recomposition Coach. Transforming bodies, building
                confidence, and creating sustainable health systems for life.
              </p>
              
              {/* Social row */}
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-primary border-transparent hover:bg-primary/5 hover:-translate-y-1 group"
                  >
                    <Icon className="w-5 h-5 text-white/50 transition-colors duration-300 group-hover:text-primary" strokeWidth={1.5} />
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
              <h4 className="flex items-center gap-3 font-heading text-[12px] font-bold tracking-[0.3em] text-white mb-8">
                <span className="w-8 h-[2px] bg-primary" />
                NAVIGATION
              </h4>
              <nav className="flex flex-col gap-5">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group w-fit flex items-center gap-3 font-body text-[15px] font-medium text-white/60 transition-all duration-300 hover:text-white"
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
              <h4 className="flex items-center gap-3 font-heading text-[12px] font-bold tracking-[0.3em] text-white mb-8">
                <span className="w-8 h-[2px] bg-primary" />
                CONTACT
              </h4>
              
              <div className="space-y-7">
                <div>
                  <p className="font-heading text-[10px] font-semibold tracking-[0.25em] text-white/40 mb-2 uppercase">Email</p>
                  <a href="mailto:contact@ssfitness.com" className="text-[15px] text-white font-body font-medium hover:text-primary transition-colors">
                    contact@ssfitness.com
                  </a>
                </div>
                
                <div>
                  <p className="font-heading text-[10px] font-semibold tracking-[0.25em] text-white/40 mb-2 uppercase">Location</p>
                  <p className="text-[15px] text-white font-body font-medium">
                    Bhubaneswar, India
                  </p>
                </div>
                
                <div className="pt-3">
                  <Link 
                    to="/contact" 
                    className="inline-block font-body font-bold text-[11px] tracking-[0.25em] uppercase border border-white/10 bg-white/5 hover:border-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] rounded-lg px-6 py-3.5 transition-all duration-300 text-primary"
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
      <div className="relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-8 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <p className="font-heading text-[11px] md:text-sm tracking-[0.4em] text-white/50 text-center md:text-left uppercase">
            Transform. Elevate. <span className="text-primary font-bold">Dominate.</span>
          </p>
          
          <div className="flex items-center gap-4 text-[11px] md:text-xs text-white/40 font-body">
            <p className="tracking-wider">
              &copy; {new Date().getFullYear()} Sanjay Singh Fitness.
            </p>
            <span className="w-[3px] h-[3px] rounded-full bg-white/20" />
            <a href="#" className="tracking-wider hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

        </div>
      </div>

      {/* Floating Back to Top Button */}
      <a
        href="#"
        onClick={scrollToTop}
        className={`group fixed right-6 bottom-6 md:right-8 md:bottom-8 rounded-full w-12 h-12 flex items-center justify-center bg-secondary/80 backdrop-blur-md border border-white/10 hover:border-primary hover:bg-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-500 z-50 ${
          showScrollTop && !isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-white/50 group-hover:text-black transition-colors duration-400 group-hover:-translate-y-0.5" />
      </a>
    </footer>
  );
};

export default Footer;
