import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Contact Schilling Law Firm
          </h2>
          <p className="text-muted-foreground">
            Free consultations for asbestos exposure cases
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Call Us</h3>
              <a href="tel:877-323-6376" className="text-secondary hover:underline text-lg font-semibold">
                877-323-6376
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Email Us</h3>
              <a href="mailto:claims@slfclaims.com" className="text-secondary hover:underline">
                claims@slfclaims.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">Visit Us</h3>
              <p className="text-foreground/80">
                100 Starr Ave, Suite C<br />
                Starkville, MS 39759
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
