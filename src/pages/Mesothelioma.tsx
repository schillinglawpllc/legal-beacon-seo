import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/mesothelioma-hero.jpg";

const Mesothelioma = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Mesothelioma legal representation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-secondary/75"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Mesothelioma Attorneys
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl">
              Fighting for justice and compensation for mesothelioma victims nationwide
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
                  <h2 className="text-3xl font-bold mb-4 text-primary">What is Mesothelioma?</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Mesothelioma is a rare and aggressive form of cancer that develops in the mesothelium, 
                    the protective lining covering most of the body's internal organs. According to the{" "}
                    <a 
                      href="https://www.cancer.org/cancer/types/malignant-mesothelioma.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline font-medium"
                    >
                      American Cancer Society
                    </a>, mesothelioma is almost exclusively caused by exposure to asbestos, a toxic mineral 
                    once widely used in construction, manufacturing, and various industries.
                  </p>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    The disease has a long latency period, often not manifesting until 20-50 years after 
                    initial asbestos exposure. This delayed onset makes early detection challenging and 
                    underscores the importance of monitoring health if you have a history of asbestos exposure.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Types of Mesothelioma</h2>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-secondary">Pleural Mesothelioma</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          The most common form, affecting the lining of the lungs (pleura). Symptoms include 
                          chest pain, persistent cough, shortness of breath, and fluid buildup around the lungs. 
                          Accounts for approximately 75% of all mesothelioma cases.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-secondary">Peritoneal Mesothelioma</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          Affects the lining of the abdomen (peritoneum). Symptoms may include abdominal pain, 
                          swelling, nausea, and unexplained weight loss. Represents about 20% of mesothelioma cases 
                          and may result from swallowing asbestos fibers.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-secondary">Pericardial Mesothelioma</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          A rare form affecting the lining around the heart (pericardium). Symptoms include 
                          chest pain, irregular heartbeat, and difficulty breathing. This type accounts for 
                          less than 1% of all mesothelioma cases.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Common Causes and Risk Factors</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    According to the{" "}
                    <a 
                      href="https://www.cancer.gov/types/mesothelioma/patient/mesothelioma-treatment-pdq" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline font-medium"
                    >
                      National Cancer Institute
                    </a>, asbestos exposure is the primary cause of mesothelioma. 
                    Occupations with high exposure risk include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                    <li>Construction workers and demolition crews</li>
                    <li>Shipyard workers and naval personnel</li>
                    <li>Automotive mechanics (brake and clutch work)</li>
                    <li>Industrial workers in plants using asbestos</li>
                    <li>Electricians and plumbers</li>
                    <li>Firefighters exposed to asbestos in older buildings</li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed">
                    Secondary exposure is also a concern. Family members of workers in these industries may 
                    have been exposed to asbestos fibers carried home on clothing, hair, or skin. This form 
                    of exposure has led to mesothelioma diagnoses in spouses and children of asbestos workers.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Symptoms and Diagnosis</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Mesothelioma symptoms often don't appear until the disease has progressed significantly. 
                    Common symptoms include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                    <li>Persistent chest or abdominal pain</li>
                    <li>Shortness of breath and difficulty breathing</li>
                    <li>Persistent dry or raspy cough</li>
                    <li>Unexplained weight loss and fatigue</li>
                    <li>Fluid buildup in the chest or abdomen</li>
                    <li>Lumps under the skin on the chest or abdomen</li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed">
                    If you have a history of asbestos exposure and experience any of these symptoms, 
                    it's crucial to consult with a medical professional experienced in asbestos-related diseases. 
                    Early diagnosis can improve treatment outcomes and quality of life.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Treatment Options</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Treatment for mesothelioma depends on the cancer's stage, location, and the patient's 
                    overall health. Options may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                    <li><strong>Surgery:</strong> Removal of tumors and affected tissue</li>
                    <li><strong>Chemotherapy:</strong> Medications to kill cancer cells</li>
                    <li><strong>Radiation therapy:</strong> High-energy rays to target cancer cells</li>
                    <li><strong>Immunotherapy:</strong> Boosting the body's immune response</li>
                    <li><strong>Clinical trials:</strong> Access to experimental treatments</li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed">
                    Comprehensive care often involves a multidisciplinary team of oncologists, surgeons, 
                    and palliative care specialists. The cost of mesothelioma treatment can be substantial, 
                    but compensation from responsible parties can help cover medical expenses and provide 
                    financial security for families.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Legal Rights and Compensation</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    If you or a loved one has been diagnosed with mesothelioma due to asbestos exposure, 
                    you have legal rights to seek compensation. Companies that manufactured, distributed, 
                    or used asbestos-containing products can be held liable for failing to warn workers 
                    and consumers about the dangers of asbestos.
                  </p>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Compensation may cover:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                    <li>Medical expenses (current and future treatment costs)</li>
                    <li>Lost wages and loss of earning capacity</li>
                    <li>Pain and suffering</li>
                    <li>Loss of consortium for family members</li>
                    <li>Funeral and burial expenses in wrongful death cases</li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed">
                    At Schilling Law Firm, we have extensive experience representing mesothelioma victims 
                    and their families. Our attorneys understand the complexities of asbestos litigation 
                    and are committed to securing the maximum compensation you deserve. We work on a 
                    contingency fee basis, meaning you pay nothing unless we win your case.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Related Conditions</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Asbestos exposure can cause several other serious health conditions beyond mesothelioma:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/lung-cancer" className="text-secondary hover:underline font-medium">
                        Asbestos-Related Lung Cancer
                      </Link> - Learn about the connection between asbestos exposure and lung cancer
                    </li>
                    <li>
                      <Link to="/asbestosis" className="text-secondary hover:underline font-medium">
                        Asbestosis
                      </Link> - Understand this chronic lung disease caused by asbestos fiber inhalation
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Additional Resources</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>
                      <a 
                        href="https://www.cancer.org/cancer/types/malignant-mesothelioma.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        American Cancer Society - Mesothelioma Information
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.cancer.gov/types/mesothelioma" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        National Cancer Institute - Mesothelioma Overview
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.atsdr.cdc.gov/asbestos/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        CDC - Asbestos Health Effects
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

export default Mesothelioma;
