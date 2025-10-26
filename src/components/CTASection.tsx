import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-foreground">
          Get Your Free Case Evaluation Today
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Our experienced attorneys are ready to help you seek the compensation you deserve. 
          Consultations are completely free with no obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6"
          >
            <Link to="/contact">Request Free Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8 py-6 border-2"
          >
            <a href="tel:877-323-6376" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call 877-323-6376
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
