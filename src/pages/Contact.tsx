import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Contact Schilling Law Firm
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Get a free, no-obligation consultation about your asbestos exposure case. 
              We're here to help 24/7.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h2>
                  <p className="text-foreground/80 mb-8 leading-relaxed">
                    Our experienced attorneys are ready to evaluate your case and answer your questions. 
                    Consultations are completely free, and you pay nothing unless we win your case.
                  </p>
                </div>

                <div className="space-y-4">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <Phone className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-primary">Phone</h3>
                          <a href="tel:877-323-6376" className="text-secondary hover:underline text-lg">
                            877-323-6376
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            Available 24/7 for urgent cases
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <Mail className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-primary">Email</h3>
                          <a href="mailto:claims@slfclaims.com" className="text-secondary hover:underline">
                            claims@slfclaims.com
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            We respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-primary">Service Area</h3>
                          <p className="text-foreground/80">
                            Representing clients nationwide in all 50 states
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Home consultations available
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <Clock className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-primary">Office Hours</h3>
                          <ul className="text-foreground/80 space-y-1">
                            <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                            <li>Saturday: 9:00 AM - 3:00 PM</li>
                            <li>Sunday: By appointment</li>
                          </ul>
                          <p className="text-sm text-muted-foreground mt-1">
                            Emergency cases accepted anytime
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">Why Contact Us?</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Free case evaluation with no obligation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>No fees unless we win your case</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Decades of experience in asbestos litigation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>Compassionate, personalized service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span>We handle all legal aspects while you focus on health</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              What to Expect When You Contact Us
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Initial Consultation</h3>
                  <p className="text-foreground/80">
                    We'll discuss your diagnosis, exposure history, and answer all your questions in a 
                    confidential conversation.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Case Evaluation</h3>
                  <p className="text-foreground/80">
                    Our team will investigate your case, identify responsible parties, and determine the 
                    best legal strategy.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">Fighting for You</h3>
                  <p className="text-foreground/80">
                    We handle all legal proceedings and negotiations to secure the maximum compensation 
                    you deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
