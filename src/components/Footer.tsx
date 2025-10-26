import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Schilling Law Firm
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Experienced mesothelioma and asbestos exposure attorneys representing victims nationwide. Free consultations available.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/mesothelioma" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Mesothelioma
                </Link>
              </li>
              <li>
                <Link to="/lung-cancer" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Lung Cancer
                </Link>
              </li>
              <li>
                <Link to="/asbestosis" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Asbestosis
                </Link>
              </li>
              <li>
                <Link to="/trust-funds" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Trust Funds
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.cancer.org/cancer/risk-prevention/chemicals/asbestos.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  American Cancer Society - Asbestos
                </a>
              </li>
              <li>
                <a
                  href="https://www.cancer.org/cancer/types/malignant-mesothelioma.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  ACS - Malignant Mesothelioma
                </a>
              </li>
              <li>
                <a
                  href="https://www.cancer.gov/types/mesothelioma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  National Cancer Institute
                </a>
              </li>
              <li>
                <a
                  href="https://www.atsdr.cdc.gov/asbestos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  CDC Asbestos Information
                </a>
              </li>
              <li>
                <a
                  href="https://www.osha.gov/asbestos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  OSHA Asbestos Standards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:877-323-6376" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  877-323-6376
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:claims@slfclaims.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  claims@slfclaims.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Serving Clients Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Schilling Law Firm. All rights reserved.</p>
          <p className="mt-2">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
