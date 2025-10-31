import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, AlertTriangle, Scale, CheckCircle, Building2 } from "lucide-react";

const ConstructionWorkers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Construction Worker Asbestos Exposure | Legal Rights & Compensation</title>
        <meta name="description" content="Construction workers face high risk of asbestos exposure. Learn about your legal rights, compensation options, and how to file a claim. Free consultation." />
        <meta name="keywords" content="construction worker asbestos exposure, construction asbestos lawsuit, construction mesothelioma, builder asbestos compensation" />
        <link rel="canonical" href="https://schillinglaw.net/construction-workers" />
        <meta property="og:title" content="Construction Worker Asbestos Exposure | Legal Rights" />
        <meta property="og:description" content="Legal help for construction workers exposed to asbestos" />
        <meta property="og:url" content="https://schillinglaw.net/construction-workers" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <HardHat className="h-12 w-12 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Construction Workers & Asbestos Exposure
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Construction workers face one of the highest risks of asbestos exposure. If you've been diagnosed 
              with mesothelioma or another asbestos-related disease, you have legal rights to compensation.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                Why Construction Workers Are at High Risk
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Construction workers represent one of the largest groups affected by asbestos-related diseases. 
                For decades, asbestos was widely used in construction materials due to its heat resistance, 
                durability, and insulating properties. Workers who installed, removed, or worked around these 
                materials were unknowingly exposed to deadly asbestos fibers.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                <strong>Even though asbestos use declined after the 1980s, construction workers remain at risk.</strong> 
                Many older buildings still contain asbestos materials, and renovation, demolition, or repair work 
                can release dangerous fibers into the air. Secondary exposure also occurs when workers carry asbestos 
                fibers home on their clothing, potentially exposing family members.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                The construction industry accounts for thousands of mesothelioma diagnoses and asbestos-related 
                deaths each year. If you worked in construction and have been diagnosed with an asbestos disease, 
                you may be entitled to significant compensation.
              </p>
            </div>
          </div>
        </section>

        {/* Common Exposure Sources */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              Common Sources of Asbestos in Construction
            </h2>
            <p className="text-lg text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
              Construction workers were exposed to asbestos through numerous building materials and products. 
              Understanding where exposure occurred is crucial for building a strong legal case.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Insulation Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pipe and boiler insulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Spray-on insulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Blown-in attic insulation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Roofing Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Asbestos cement shingles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Roofing felt and tar</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Roof coatings and sealants</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Flooring Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Vinyl floor tiles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Linoleum backing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Floor tile adhesives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Drywall & Plaster</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Joint compound</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Textured paints</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plaster and stucco</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Cement Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Asbestos cement pipes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cement siding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Concrete reinforcement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Other Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ceiling tiles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>HVAC duct insulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fire doors and blankets</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* High-Risk Jobs */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              High-Risk Construction Occupations
            </h2>
            <p className="text-lg text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
              Certain construction trades experienced higher levels of asbestos exposure due to the nature of their work:
            </p>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Insulation Workers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Regularly installed and removed asbestos insulation from pipes, boilers, and HVAC systems. 
                    Faced the highest exposure levels in the construction industry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Demolition Workers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Exposed when tearing down buildings containing asbestos materials. Demolition releases 
                    massive amounts of asbestos fibers into the air.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Plumbers & Pipefitters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Worked with asbestos-containing pipes, gaskets, and pipe insulation. Frequently disturbed 
                    existing asbestos during repairs and installations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Electricians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Encountered asbestos in wire insulation, electrical panels, and while drilling through 
                    asbestos-containing walls and ceilings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Drywall Installers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Used joint compounds and textured coatings containing asbestos. Sanding these materials 
                    released dangerous fibers throughout work sites.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Roofers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Worked with asbestos roofing materials, tar, and shingles. Removing old roofing materials 
                    exposed them to high concentrations of asbestos fibers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">HVAC Technicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Installed and serviced heating and cooling systems with asbestos insulation and duct 
                    wrapping. Often worked in confined spaces with poor ventilation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                    <AlertTriangle className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-primary">Floor Installers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Handled vinyl floor tiles, linoleum, and adhesives containing asbestos. Cutting and 
                    removing old flooring released asbestos dust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                Timeline of Asbestos Use in Construction
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary">1930s</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Widespread Adoption</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Asbestos becomes widely used in construction due to its fire resistance and durability. 
                      Virtually every commercial and residential building constructed during this era contains 
                      asbestos materials.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary">1940s-70s</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Peak Usage Period</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Construction industry reaches peak asbestos usage. Workers are exposed daily with little 
                      to no protective equipment. Companies are aware of dangers but fail to warn workers or 
                      provide protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary">1980s</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Regulation & Decline</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      EPA begins regulating asbestos use. New construction gradually phases out asbestos 
                      materials, but millions of existing buildings still contain asbestos products.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary">Present</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Ongoing Risk</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Construction workers continue facing exposure during renovation, demolition, and repair 
                      of older buildings. Proper abatement procedures are now required, but exposure still occurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Rights Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                Your Legal Rights and Compensation Options
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Construction workers diagnosed with mesothelioma or other asbestos diseases have multiple 
                avenues for seeking compensation:
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Scale className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Personal Injury Lawsuits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      Sue manufacturers of asbestos products, contractors, property owners, and other responsible 
                      parties. Construction workers often have claims against multiple defendants, increasing 
                      potential compensation.
                    </p>
                    <p className="text-sm font-semibold text-secondary">Average settlements: $1-2.4 million</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Scale className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Asbestos Trust Fund Claims</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      File claims with bankruptcy trusts established by companies that manufactured asbestos 
                      construction materials. Over 60 trusts hold more than $30 billion for victims. Construction 
                      workers may be eligible for multiple trust claims.
                    </p>
                    <p className="text-sm font-semibold text-secondary">Multiple claims possible</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Scale className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Workers' Compensation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      File for workers' compensation benefits if you were an employee when exposed. Benefits 
                      typically cover medical expenses and lost wages. You can usually pursue workers' compensation 
                      and lawsuits simultaneously.
                    </p>
                    <p className="text-sm font-semibold text-secondary">State-specific benefits</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why You Need an Attorney */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                Why Construction Workers Need Specialized Attorneys
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Construction cases are particularly complex due to:
              </p>

              <div className="bg-background rounded-lg p-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Multiple Exposure Sites</h3>
                    <p className="text-foreground/80">
                      Construction workers often worked for multiple contractors at various job sites, making it 
                      challenging to identify all responsible parties and exposure sources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Numerous Defendants</h3>
                    <p className="text-foreground/80">
                      Cases may involve product manufacturers, general contractors, subcontractors, property 
                      owners, and equipment suppliers—each with separate legal teams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Limited Documentation</h3>
                    <p className="text-foreground/80">
                      Construction workers may lack detailed employment records from decades ago. Attorneys know 
                      how to locate historical records and find witnesses to prove exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Coordinating Multiple Claims</h3>
                    <p className="text-foreground/80">
                      Attorneys manage simultaneous lawsuits, trust fund claims, and workers' compensation 
                      proceedings to maximize total recovery while ensuring claims don't conflict.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Industry-Specific Knowledge</h3>
                    <p className="text-foreground/80">
                      Experienced attorneys understand construction industry practices, typical asbestos-containing 
                      products used in different trades, and can effectively present technical evidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Info */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Get Help Today
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                If you worked in construction and have been diagnosed with mesothelioma, asbestosis, or lung 
                cancer, don't wait to explore your legal options. Statutes of limitations apply, and building 
                a strong case takes time. Our experienced attorneys have helped countless construction workers 
                recover millions in compensation.
              </p>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-xl font-semibold text-primary mb-4">
                  Free Case Evaluations • No Upfront Costs • Contingency Fee Basis
                </p>
                <p className="text-foreground/80">
                  You pay nothing unless we win your case. All consultations are confidential and completely free.
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

export default ConstructionWorkers;