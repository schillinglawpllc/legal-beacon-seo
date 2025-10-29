import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Users, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import heroImage from "@/assets/hero-medical.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Mesothelioma Law Firm | Asbestos Exposure Attorneys | Schilling Law Firm</title>
        <meta name="description" content="Experienced mesothelioma attorneys representing asbestos exposure victims nationwide. Free consultations. Call 877-323-6376 for legal help with asbestos-related diseases." />
        <meta name="keywords" content="mesothelioma lawyer, asbestos attorney, mesothelioma law firm, asbestos exposure lawyer, asbestos compensation" />
        <link rel="canonical" href="https://schillinglawfirm.com/" />
        <meta property="og:title" content="Mesothelioma Law Firm | Asbestos Exposure Attorneys" />
        <meta property="og:description" content="Experienced attorneys representing asbestos exposure victims nationwide. Free consultations available." />
        <meta property="og:url" content="https://schillinglawfirm.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mesothelioma Law Firm | Asbestos Exposure Attorneys" />
        <meta name="twitter:description" content="Experienced attorneys representing asbestos exposure victims nationwide. Free consultations available." />
      </Helmet>
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Experienced mesothelioma lawyers at Schilling Law Firm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
                Mesothelioma Law Firm<br />
                Asbestos Exposure Attorneys
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 leading-relaxed">
                Experienced attorneys representing asbestos exposure victims nationwide. 
                Free consultations available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg"
                >
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg border-2"
                >
                  <a href="tel:877-323-6376">Call 877-323-6376</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Asbestos-Related Diseases We Handle
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our experienced legal team specializes in helping victims of asbestos exposure 
                secure the compensation they deserve for their suffering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    <Link to="/mesothelioma" className="hover:text-secondary transition-colors">
                      Mesothelioma
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Aggressive cancer affecting lung, abdomen, or heart lining
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    A rare and aggressive cancer affecting the lining of the lungs, abdomen, or heart, 
                    almost exclusively caused by asbestos exposure. We have extensive experience securing 
                    compensation for mesothelioma victims and their families.
                  </p>
                  <Button asChild variant="link" className="text-secondary p-0">
                    <Link to="/mesothelioma">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    <Link to="/lung-cancer" className="hover:text-secondary transition-colors">
                      Asbestos Lung Cancer
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Increased lung cancer risk from asbestos exposure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Asbestos exposure significantly increases the risk of developing lung cancer. 
                    If you've been diagnosed with lung cancer and have a history of asbestos exposure, 
                    you may be entitled to substantial compensation.
                  </p>
                  <Button asChild variant="link" className="text-secondary p-0">
                    <Link to="/lung-cancer">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    <Link to="/asbestosis" className="hover:text-secondary transition-colors">
                      Asbestosis
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Chronic lung disease from asbestos fiber inhalation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    A chronic lung disease caused by inhaling asbestos fibers, leading to lung tissue 
                    scarring and breathing difficulties. Our attorneys help asbestosis victims recover 
                    compensation for medical expenses and lost wages.
                  </p>
                  <Button asChild variant="link" className="text-secondary p-0">
                    <Link to="/asbestosis">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Colon Cancer
                  </CardTitle>
                  <CardDescription className="text-base">
                    Asbestos-related colon and colorectal cancer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Studies have shown a link between asbestos exposure and increased risk of colon cancer. 
                    Workers who inhaled or ingested asbestos fibers may develop colorectal cancer years 
                    after exposure. Our team can help determine if your diagnosis qualifies for compensation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Esophageal Cancer
                  </CardTitle>
                  <CardDescription className="text-base">
                    Cancer of the esophagus linked to asbestos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Research indicates that asbestos exposure can increase the risk of esophageal cancer. 
                    When asbestos fibers are swallowed, they can damage the esophageal lining over time. 
                    If you've been diagnosed, you may be entitled to significant compensation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Stomach Cancer
                  </CardTitle>
                  <CardDescription className="text-base">
                    Gastric cancer from asbestos fiber ingestion
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Asbestos exposure has been linked to an increased risk of stomach cancer. Ingested 
                    asbestos fibers can lodge in the stomach lining, potentially leading to cancer development 
                    decades later. Our experienced attorneys can help you pursue compensation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                Why Choose Schilling Law Firm?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our commitment to asbestos victims has made us a trusted name in mesothelioma litigation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Proven Results</h3>
                <p className="text-muted-foreground">
                  Millions recovered for asbestos exposure victims and their families
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Experienced Team</h3>
                <p className="text-muted-foreground">
                  Dedicated attorneys specializing in mesothelioma and asbestos cases
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <CheckCircle className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">No Upfront Fees</h3>
                <p className="text-muted-foreground">
                  Free consultations and no fees unless we win your case
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Nationwide Service</h3>
                <p className="text-muted-foreground">
                  Representing clients across the United States in asbestos cases
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Asbestos Trust Funds Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  Asbestos Trust Funds
                </h2>
                <p className="text-xl text-muted-foreground">
                  Access to Over $30 Billion in Compensation
                </p>
              </div>

              <Card className="mb-8 border-2 border-secondary/20">
                <CardContent className="p-8">
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    Many companies that manufactured or used asbestos products have filed for bankruptcy due to 
                    the overwhelming number of lawsuits. However, these companies were required to establish 
                    asbestos trust funds to compensate current and future victims of asbestos exposure.
                  </p>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    There are currently over <span className="font-bold text-secondary">$30 billion available</span> in 
                    asbestos trust funds from more than 60 bankrupt companies. These funds ensure that victims can 
                    still receive compensation even when the responsible company no longer exists.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-muted rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4 text-primary">Key Benefits</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Access compensation from bankrupt companies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Faster resolution than traditional litigation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">File claims with multiple trusts simultaneously</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">Dedicated funds for asbestos victims</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-6 border-2 border-primary/10">
                      <h3 className="text-xl font-bold mb-4 text-primary">How We Help</h3>
                      <p className="text-foreground/80 mb-4">
                        Our experienced attorneys can help you:
                      </p>
                      <ul className="space-y-2 text-foreground/80">
                        <li>• Identify eligible trust funds</li>
                        <li>• Navigate the application process</li>
                        <li>• Maximize your compensation</li>
                        <li>• Handle all legal requirements</li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button asChild size="lg" className="font-semibold">
                      <Link to="/trust-funds">Learn More About Trust Funds</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Understanding Asbestos Exposure */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
                Understanding Asbestos Exposure
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  <a 
                    href="https://www.cancer.org/cancer/risk-prevention/chemicals/asbestos.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Asbestos
                  </a> is a group of naturally occurring minerals that were widely used in construction, 
                  manufacturing, and various industries throughout the 20th century. While valued for its 
                  heat resistance and durability, asbestos poses severe health risks when its fibers become 
                  airborne and are inhaled or ingested.
                </p>
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  According to the{" "}
                  <a 
                    href="https://www.atsdr.cdc.gov/asbestos/health-effects/?CDC_AAref_Val=https://www.atsdr.cdc.gov/asbestos/health_effects_asbestos.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Centers for Disease Control and Prevention (CDC)
                  </a>, exposure to asbestos can cause serious diseases that may not appear until years 
                  after exposure. These diseases include <Link to="/mesothelioma" className="text-secondary hover:underline">mesothelioma</Link>, 
                  {" "}<Link to="/lung-cancer" className="text-secondary hover:underline">lung cancer</Link>, and{" "}
                  <Link to="/asbestosis" className="text-secondary hover:underline">asbestosis</Link>.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Workers in industries such as construction, shipbuilding, automotive, and manufacturing 
                  were at particularly high risk of exposure. Family members of these workers could also 
                  be exposed through secondary contact with asbestos fibers brought home on clothing and 
                  equipment. If you or a loved one has been diagnosed with an asbestos-related disease, 
                  you may be entitled to compensation from responsible parties.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
