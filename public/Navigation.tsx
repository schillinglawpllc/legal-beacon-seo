import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/schilling-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Mesothelioma", path: "/mesothelioma" },
    { name: "Lung Cancer", path: "/lung-cancer" },
    { name: "Asbestosis", path: "/asbestosis" },
    { name: "Trust Funds", path: "/trust-funds" },
    { name: "Mississippi", path: "/mississippi" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Schilling Law Firm" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-secondary bg-secondary/10"
                    : "text-foreground hover:text-secondary hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:877-323-6376"
              className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold text-lg">877-323-6376</span>
            </a>
            <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-secondary bg-secondary/10"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:877-323-6376"
                className="flex items-center justify-center space-x-2 text-primary font-semibold text-lg"
              >
                <Phone className="h-5 w-5" />
                <span>877-323-6376</span>
              </a>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
