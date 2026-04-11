import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Coaching", href: "/#services" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Mission", href: "/#mission" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("menuToggle", { detail: { mobileOpen } }));
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          mobileOpen
            ? "bg-background border-b border-border py-3"
            : scrolled
            ? "glass-nav border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 relative">
          {/* Logo (Left, or naturally left flex item) */}
          <div className="flex-1 lg:flex-none z-10">
            <a href="/" onClick={handleLogoClick} className="block w-fit">
              <img
                src="/logo_yellow_custom.png"
                alt="SS Fitness"
                className="h-8 md:h-10 w-auto object-contain logo-hover"
              />
            </a>
          </div>

          {/* Desktop Links (Absolute Center) */}
          <div className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-body text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA (Right) */}
          <div className="hidden lg:flex flex-1 lg:flex-none justify-end z-10">
            <Link
              to="/contact"
              className="btn-premium font-body font-bold text-sm tracking-widest uppercase bg-primary text-primary-foreground px-8 py-3"
            >
              START YOUR TRANSFORMATION
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 w-full h-[2px] bg-foreground transition-all duration-500 ease-in-out ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-foreground transition-all duration-300 ${
                  mobileOpen ? "w-0 opacity-0" : "w-4 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[2px] bg-foreground transition-all duration-500 ease-in-out ${
                  mobileOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col"
          >
            {/* Spacer so nav links don't hide under the fixed navbar */}
            <div className="h-16" />

            {/* Nav Links — centered, full vertical space */}
            <nav className="flex-1 flex flex-col justify-center px-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                  className="border-b border-border/20 last:border-none"
                >
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between w-full py-5 font-heading text-3xl text-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    {link.label}
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="px-5 py-6 border-t border-border/30"
            >
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-premium w-full font-body font-bold text-sm tracking-[0.08em] uppercase bg-primary text-primary-foreground py-5 flex items-center justify-center rounded-2xl whitespace-nowrap"
              >
                Start Your Transformation
              </Link>
              <p className="text-center text-muted-foreground text-xs font-body mt-3 tracking-wider">
                Free consultation · No commitment
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
