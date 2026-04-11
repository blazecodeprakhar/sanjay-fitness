import AnimatedSection from "./AnimatedSection";
import { Link, useNavigate } from "react-router-dom";
import { Instagram, MessageCircle, Youtube, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/#about" },
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

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    // After navigating, scroll to top smoothly
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top section */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <AnimatedSection>
              <a href="/" onClick={handleLogoClick} className="block mb-6 w-fit">
                <img
                  src="/logo_yellow_custom.png"
                  alt="SS Fitness"
                  className="h-10 w-auto object-contain logo-hover"
                />
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-8">
                Certified Lifestyle & Body Recomposition Coach. Transforming bodies, building
                confidence, and creating sustainable health systems.
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group border border-border rounded-full w-10 h-10 flex items-center justify-center hover:border-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-7">
            <AnimatedSection delay={0.1}>
              <h4 className="font-heading text-xs tracking-[0.3em] text-primary mb-6">NAVIGATION</h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <AnimatedSection delay={0.2}>
              <h4 className="font-heading text-xs tracking-[0.3em] text-primary mb-6">CONTACT</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-heading text-[10px] tracking-[0.2em] text-muted-foreground mb-1">EMAIL</p>
                  <p className="text-sm text-foreground">contact@ssfitness.com</p>
                </div>
                <div>
                  <p className="font-heading text-[10px] tracking-[0.2em] text-muted-foreground mb-1">LOCATION</p>
                  <p className="text-sm text-foreground">Bhubaneswar, India</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading text-[10px] tracking-[0.3em] text-muted-foreground">
            TRANSFORM. ELEVATE. <span className="text-primary">DOMINATE.</span>
          </p>
          <p className="text-[10px] text-muted-foreground tracking-wider">
            &copy; 2025 Sanjay Singh Fitness. All Rights Reserved.
          </p>
          <a
            href="#"
            className="group border border-border rounded-full w-10 h-10 flex items-center justify-center hover:border-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
