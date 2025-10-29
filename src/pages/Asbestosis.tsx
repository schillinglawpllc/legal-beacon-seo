import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/asbestosis-hero.jpg";

const Asbestosis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Asbestosis Attorneys | Legal Help for Chronic Lung Disease from Asbestos</title>
        <meta name="description" content="Experienced asbestosis lawyers helping victims secure compensation. Learn about symptoms, treatment & legal rights. Free consultation. Call 877-323-6376." />
        <meta name="keywords" content="asbestosis lawyer, asbestosis attorney, asbestos lung disease, asbestosis compensation, asbestos injury lawyer" />
        <link rel="canonical" href="https://schillinglawfirm.com/asbestosis" />
        <meta property="og:title" content="Asbestosis Attorneys | Legal Help for Chronic Lung Disease" />
        <meta property="og:description" content="Experienced attorneys helping asbestosis victims recover compensation" />
        <meta property="og:url" content="https://schillinglawfirm.com/asbestosis" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Asbestosis legal representation and compensation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-secondary/75"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Asbestosis Attorneys
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl">
              Dedicated legal representation for asbestosis victims seeking compensation
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
                  <h2 className="text-3xl font-bold mb-4 text-primary">What is Asbestosis?</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Asbestosis is a chronic, progressive lung disease caused by prolonged inhalation of 
                    asbestos fibers. According to the{" "}
                    <a 
                      href="https://www.atsdr.cdc.gov/asbestos/health_effects_asbestos.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline font-medium"
                    >
                      Centers for Disease Control and Prevention (CDC)
                    </a>, when asbestos fibers are inhaled, they can become embedded in lung tissue, 
                    causing inflammation and scarring (fibrosis) that makes breathing increasingly difficult.
                  </p>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Unlike <Link to="/mesothelioma" className="text-secondary hover:underline font-medium">mesothelioma</Link> and{" "}
                    <Link to="/lung-cancer" className="text-secondary hover:underline font-medium">lung cancer</Link>,
                    asbestosis is not a cancer but a serious respiratory condition that can severely impact 
                    quality of life. The disease typically develops after years of heavy exposure to asbestos 
                    and has a latency period of 10-40 years or more from initial exposure to symptom onset.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    There is no cure for asbestosis. Once lung tissue becomes scarred, the damage is permanent 
                    and irreversible. The{" "}
                    <a 
                      href="https://www.nhlbi.nih.gov/health/interstitial-lung-diseases"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline font-medium"
                    >
                      National Heart, Lung, and Blood Institute
                    </a>{" "}
                    notes that while treatments can help manage symptoms and slow disease progression, 
                    the scarring cannot be reversed.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">How Asbestosis Develops</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Understanding the progression of asbestosis helps explain why early detection and 
                    legal action are so important:
                  </p>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-secondary">Stage 1: Exposure and Fiber Accumulation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          Asbestos fibers are inhaled during occupational or environmental exposure. These 
                          microscopic fibers travel deep into the lungs, reaching the alveoli (tiny air sacs). 
                          The body's immune system cannot effectively remove these fibers, causing them to 
                          accumulate over time.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-secondary">Stage 2: Inflammation and Scarring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          The body attempts to isolate the foreign fibers, triggering chronic inflammation. 
                          This persistent inflammation leads to the formation of scar tissue (fibrosis) in 
                          and around the alveoli. The scarring thickens and stiffens lung tissue, reducing 
                          its elasticity and ability to transfer oxygen to the bloodstream.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-secondary">Stage 3: Progressive Respiratory Impairment</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">
                          As scarring spreads, breathing becomes increasingly difficult. The lungs lose their 
                          ability to expand and contract efficiently. Oxygen transfer to the blood decreases, 
                          leading to fatigue and other complications. In severe cases, the heart must work 
                          harder to pump blood through scarred lungs, potentially causing heart failure.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Symptoms and Warning Signs</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Asbestosis symptoms develop gradually and worsen over time. Early symptoms may be mild 
                    and easily overlooked, but they progressively become more severe:
                  </p>
                  <div className="bg-muted rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-3 text-primary">Common Symptoms Include:</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li><strong>Shortness of breath:</strong> Initially during physical activity, eventually even at rest</li>
                      <li><strong>Persistent dry cough:</strong> That doesn't produce mucus and doesn't go away</li>
                      <li><strong>Chest tightness or pain:</strong> Feeling of pressure in the chest area</li>
                      <li><strong>Crackling sound when breathing:</strong> Called "Velcro crackles" by doctors</li>
                      <li><strong>Clubbing of fingers:</strong> Tips of fingers and toes become wider and rounder</li>
                      <li><strong>Fatigue and weakness:</strong> Reduced ability to perform daily activities</li>
                      <li><strong>Weight loss:</strong> Unintentional loss of weight as disease progresses</li>
                    </ul>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    If you have a history of asbestos exposure and experience any of these symptoms, 
                    seek immediate medical evaluation from a physician experienced with occupational 
                    lung diseases.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">High-Risk Occupations</h2>
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
                    recognizes that certain occupations have particularly high asbestos exposure risks. 
                    Workers in these fields are at elevated risk for developing asbestosis:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">Industrial Occupations:</h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li>Asbestos miners and millers</li>
                        <li>Insulation installers and removers</li>
                        <li>Shipyard workers</li>
                        <li>Boiler workers and operators</li>
                        <li>Power plant workers</li>
                        <li>Refinery workers</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">Construction & Trades:</h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li>Construction and demolition crews</li>
                        <li>Plumbers and pipefitters</li>
                        <li>Electricians</li>
                        <li>HVAC technicians</li>
                        <li>Roofers and tile setters</li>
                        <li>Auto mechanics (brake work)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Family members of asbestos workers may also develop asbestosis through secondary exposure 
                    when asbestos fibers are brought home on work clothes, tools, or vehicles.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Diagnosis and Medical Tests</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Diagnosing asbestosis requires a comprehensive evaluation including medical history, 
                    physical examination, and specialized tests:
                  </p>
                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-secondary">Imaging Tests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li><strong>Chest X-ray:</strong> Can reveal scarring and abnormalities in lung tissue</li>
                        <li><strong>CT scan:</strong> Provides detailed images showing extent of fibrosis</li>
                        <li><strong>High-resolution CT (HRCT):</strong> Offers even more detailed views of lung tissue</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-secondary">Pulmonary Function Tests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li><strong>Spirometry:</strong> Measures how much air you can inhale and exhale</li>
                        <li><strong>Lung volume tests:</strong> Determine total lung capacity</li>
                        <li><strong>Diffusion capacity test:</strong> Measures oxygen transfer from lungs to blood</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-secondary">Additional Diagnostic Procedures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li><strong>Bronchoscopy:</strong> Visual examination of airways with thin tube and camera</li>
                        <li><strong>Lung biopsy:</strong> Tissue sample analysis to confirm diagnosis</li>
                        <li><strong>Oximetry:</strong> Measures blood oxygen levels during rest and activity</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Treatment and Management</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    While there is no cure for asbestosis, various treatments can help manage symptoms, 
                    improve quality of life, and slow disease progression:
                  </p>
                  
                  <div className="space-y-4 mb-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-primary">Oxygen Therapy</h3>
                      <p className="text-foreground/80">
                        Supplemental oxygen helps ensure adequate oxygen levels in the blood, reducing 
                        shortness of breath and enabling greater physical activity. Many patients use 
                        portable oxygen concentrators for mobility.
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-primary">Medications</h3>
                      <p className="text-foreground/80">
                        Bronchodilators help open airways, corticosteroids reduce inflammation, and other 
                        medications manage symptoms and prevent complications like respiratory infections.
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-primary">Pulmonary Rehabilitation</h3>
                      <p className="text-foreground/80">
                        Specialized programs including breathing exercises, physical conditioning, education, 
                        and counseling help patients maximize lung function and maintain independence.
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-2 text-primary">Lung Transplant</h3>
                      <p className="text-foreground/80">
                        In severe cases where other treatments fail, lung transplantation may be considered 
                        for eligible candidates. This is typically reserved for younger patients with advanced 
                        disease.
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    Treatment costs for asbestosis can be substantial and ongoing. Compensation from responsible 
                    parties can help cover medical expenses, rehabilitation, home modifications for oxygen 
                    equipment, and lost income.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Complications and Related Conditions</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Asbestosis can lead to several serious complications:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                    <li><strong>Pulmonary hypertension:</strong> High blood pressure in arteries to the lungs</li>
                    <li><strong>Cor pulmonale:</strong> Right-sided heart failure from lung disease</li>
                    <li><strong>Respiratory failure:</strong> Inability of lungs to provide adequate oxygen</li>
                    <li><strong>Lung cancer:</strong> Increased risk in asbestosis patients, especially smokers</li>
                    <li><strong>Pleural effusions:</strong> Fluid buildup around the lungs</li>
                    <li><strong>Pleural plaques:</strong> Calcified areas on lung lining</li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed">
                    Patients with asbestosis are also at increased risk of developing other asbestos-related 
                    diseases, including <Link to="/mesothelioma" className="text-secondary hover:underline font-medium">mesothelioma</Link> and{" "}
                    <Link to="/lung-cancer" className="text-secondary hover:underline font-medium">lung cancer</Link>.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Legal Rights and Compensation</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    If you've been diagnosed with asbestosis due to occupational or environmental asbestos 
                    exposure, you have legal rights to seek compensation. Companies that manufactured, 
                    distributed, or used asbestos-containing products knew—or should have known—about the 
                    health risks but often failed to adequately protect workers and consumers.
                  </p>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Compensation in asbestosis cases may cover:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                    <li>Medical expenses (past, current, and future treatment costs)</li>
                    <li>Pulmonary rehabilitation and oxygen therapy costs</li>
                    <li>Home modifications for medical equipment</li>
                    <li>Lost wages and reduced earning capacity</li>
                    <li>Pain and suffering from the disease</li>
                    <li>Loss of quality of life and enjoyment</li>
                    <li>Wrongful death damages if the disease proves fatal</li>
                  </ul>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    At Schilling Law Firm, we understand that asbestosis cases require detailed investigation 
                    of your work history and exposure sources. We work with occupational health experts and 
                    medical specialists to build strong cases proving liability and demonstrating the full 
                    extent of your damages.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    We operate on a contingency fee basis—you pay nothing unless we recover compensation 
                    for you. Time limits apply to filing asbestos claims, so contact us today for a free 
                    consultation.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Related Asbestos Diseases</h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Asbestos exposure causes multiple serious health conditions:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/mesothelioma" className="text-secondary hover:underline font-medium">
                        Mesothelioma
                      </Link> - Rare and aggressive cancer of organ linings
                    </li>
                    <li>
                      <Link to="/lung-cancer" className="text-secondary hover:underline font-medium">
                        Asbestos Lung Cancer
                      </Link> - Cancer developing within lung tissue from asbestos exposure
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Additional Resources</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>
                      <a 
                        href="https://www.atsdr.cdc.gov/asbestos/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        CDC - Asbestos Health Effects and Information
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.mayoclinic.org/diseases-conditions/asbestosis/symptoms-causes/syc-20354637" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        Mayo Clinic - Asbestosis
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.osha.gov/asbestos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        OSHA - Asbestos Safety Information
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

export default Asbestosis;
