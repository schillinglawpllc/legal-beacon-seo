import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/lung-cancer-hero.jpg";

const LungCancer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Asbestos Lung Cancer Lawyers | Legal Help for Asbestos Exposure Victims</title>
        <meta name="description" content="Experienced attorneys for asbestos-related lung cancer. Learn about SCLC and NSCLC from asbestos exposure. Free consultation. Call 877-323-6376." />
        <meta name="keywords" content="asbestos lung cancer lawyer, asbestos exposure attorney, lung cancer compensation, asbestos cancer lawyer" />
        <link rel="canonical" href="https://schillinglaw.net/lung-cancer" />
        <meta property="og:title" content="Asbestos Lung Cancer Lawyers | Legal Help for Exposure Victims" />
        <meta property="og:description" content="Experienced attorneys fighting for lung cancer victims with asbestos exposure history" />
        <meta property="og:url" content="https://schillinglaw.net/lung-cancer" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Asbestos-related lung cancer legal help"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-secondary/75"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Asbestos Lung Cancer Lawyers
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl">
              Experienced attorneys fighting for lung cancer victims with asbestos exposure history
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Content Column */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Asbestos and Lung Cancer</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Asbestos exposure is a well-documented cause of lung cancer. According to the{" "}
                    <a 
                      href="https://www.cancer.org/cancer/risk-prevention/chemicals/asbestos.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline font-medium"
                    >
                      American Cancer Society
                    </a>, people who are exposed to asbestos on the job—such as workers in construction, 
                    shipbuilding, manufacturing, and mining—have a significantly higher risk of developing 
                    lung cancer compared to the general population.
                  </p>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    When asbestos fibers are inhaled, they can become lodged in the lung tissue, causing 
                    inflammation and scarring. Over time, this damage can lead to cancer. The{" "}
                    <a 
                      href="https://www.cancer.gov/about-cancer/causes-prevention/risk/substances/asbestos/asbestos-fact-sheet" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline font-medium"
                    >
                      National Cancer Institute
                    </a>{" "}
                    states that the risk of lung cancer increases with the intensity and duration of 
                    asbestos exposure. Smoking combined with asbestos exposure dramatically amplifies 
                    the risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Understanding the Connection</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Unlike <Link to="/mesothelioma" className="text-secondary hover:underline font-medium">mesothelioma</Link>, 
                    which affects the lining of organs, asbestos-related lung cancer develops within the 
                    lung tissue itself. The cancer typically forms in the airways (bronchi) or smaller 
                    air sacs (alveoli) of the lungs.
                  </p>
                  <div className="bg-muted rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-3 text-primary">Key Facts About Asbestos Lung Cancer:</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>Takes 15-35 years or more to develop after initial exposure</li>
                      <li>Risk increases with cumulative asbestos exposure</li>
                      <li>Smoking and asbestos exposure together multiply cancer risk by 50-90 times</li>
                      <li>Can occur even from relatively brief but intense exposure</li>
                      <li>May affect family members through secondary exposure</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Types of Asbestos-Related Lung Cancer</h2>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-secondary">Small Cell Lung Cancer (SCLC)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          This aggressive form accounts for about 10-15% of lung cancers and grows rapidly. 
                          It's strongly associated with smoking but can also result from asbestos exposure. 
                          SCLC typically starts in the bronchi and spreads quickly to other parts of the body.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-secondary">Non-Small Cell Lung Cancer (NSCLC)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-3">
                          The most common type, accounting for 85-90% of lung cancer cases. NSCLC has several 
                          subtypes, all of which can be caused by asbestos exposure:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-foreground/80">
                          <li><strong>Adenocarcinoma:</strong> Forms in mucus-secreting cells</li>
                          <li><strong>Squamous cell carcinoma:</strong> Develops in flat cells lining airways</li>
                          <li><strong>Large cell carcinoma:</strong> Can appear anywhere in the lung</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Occupational Exposure Risks</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    The{" "}
                    <a 
                      href="https://www.osha.gov/asbestos" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline font-medium"
                    >
                      Occupational Safety and Health Administration (OSHA)
                    </a>{" "}
                    has identified numerous occupations with high asbestos exposure risk. Workers in these 
                    fields may be entitled to compensation if they develop lung cancer:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>Shipyard workers and naval personnel</li>
                      <li>Construction and demolition workers</li>
                      <li>Insulation installers and removers</li>
                      <li>Power plant workers</li>
                      <li>Refinery and petrochemical workers</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>Auto mechanics (brake work)</li>
                      <li>Miners and mill workers</li>
                      <li>Firefighters</li>
                      <li>Boiler workers</li>
                      <li>Industrial plant workers</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Symptoms and Diagnosis</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Early-stage lung cancer often has no symptoms. As the disease progresses, symptoms may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                    <li>Persistent cough that worsens over time</li>
                    <li>Coughing up blood or rust-colored sputum</li>
                    <li>Chest pain that worsens with deep breathing or coughing</li>
                    <li>Hoarseness or voice changes</li>
                    <li>Shortness of breath and wheezing</li>
                    <li>Recurring infections like bronchitis or pneumonia</li>
                    <li>Unexplained weight loss and fatigue</li>
                  </ul>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    If you have a history of asbestos exposure, especially combined with smoking, regular 
                    screenings are crucial for early detection. Diagnostic procedures may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Chest X-rays and CT scans</li>
                    <li>Sputum cytology (examining mucus under microscope)</li>
                    <li>Bronchoscopy (examining airways with a thin tube)</li>
                    <li>Biopsy to confirm cancer diagnosis</li>
                    <li>PET scans to determine cancer spread</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Treatment Options</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Treatment for asbestos-related lung cancer depends on the cancer's type, stage, location, 
                    and your overall health. Options include:
                  </p>
                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-secondary">Surgical Treatments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li><strong>Wedge resection:</strong> Removing small tumor with surrounding tissue</li>
                        <li><strong>Lobectomy:</strong> Removing entire lobe of the lung</li>
                        <li><strong>Pneumonectomy:</strong> Removing entire lung if necessary</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-secondary">Non-Surgical Treatments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li><strong>Chemotherapy:</strong> Drugs to kill cancer cells throughout the body</li>
                        <li><strong>Radiation therapy:</strong> High-energy beams to target tumors</li>
                        <li><strong>Targeted therapy:</strong> Drugs targeting specific cancer cell mutations</li>
                        <li><strong>Immunotherapy:</strong> Boosting immune system to fight cancer</li>
                        <li><strong>Clinical trials:</strong> Access to experimental treatments</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <p className="text-foreground/80 leading-relaxed">
                    Many patients receive combination therapy for optimal results. Treatment can be expensive, 
                    but compensation from asbestos-related lawsuits can help cover medical costs and provide 
                    financial security.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Your Legal Rights</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    If you've been diagnosed with lung cancer and have a history of asbestos exposure, 
                    you may be entitled to significant compensation. Companies that manufactured, used, 
                    or distributed asbestos-containing products had a duty to protect workers and consumers 
                    from the known dangers of asbestos.
                  </p>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Compensation may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                    <li>Medical expenses (past, current, and future treatment)</li>
                    <li>Lost wages and diminished earning capacity</li>
                    <li>Pain and suffering</li>
                    <li>Loss of quality of life</li>
                    <li>Wrongful death damages for surviving family members</li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed">
                    At Schilling Law Firm, we understand the complexities of proving asbestos-related lung 
                    cancer claims. We work with medical experts who can establish the connection between your 
                    exposure and diagnosis. Our attorneys handle all legal aspects while you focus on your 
                    health and family.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Related Asbestos Diseases</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Asbestos exposure can cause multiple serious health conditions:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/mesothelioma" className="text-secondary hover:underline font-medium">
                        Mesothelioma
                      </Link> - A rare cancer affecting the lining of the lungs, abdomen, or heart
                    </li>
                    <li>
                      <Link to="/asbestosis" className="text-secondary hover:underline font-medium">
                        Asbestosis
                      </Link> - Chronic lung disease causing scarring and breathing difficulties
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Additional Resources</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>
                      <a 
                        href="https://www.cancer.org/cancer/types/lung-cancer.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        American Cancer Society - Lung Cancer Information
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.cancer.gov/types/lung" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        National Cancer Institute - Lung Cancer Overview
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/lung-cancer" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        American Lung Association - Lung Cancer Resources
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactInfo />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default LungCancer;
