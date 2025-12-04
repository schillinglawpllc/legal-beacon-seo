import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building2, Ship, Factory, Flame, AlertTriangle, CheckCircle } from "lucide-react";
import heroImage from "@/assets/mesothelioma-hero.jpg";

const Mississippi = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Mississippi Asbestos Exposure | Mesothelioma Lawyers Serving MS</title>
        <meta name="description" content="Mississippi asbestos exposure attorneys helping victims in Pascagoula, Jackson, Gulfport & statewide. Shipyards, refineries, paper mills caused exposure. Free consultation." />
        <meta name="keywords" content="Mississippi asbestos lawyer, Mississippi mesothelioma attorney, Pascagoula asbestos exposure, Jackson MS asbestos, Ingalls Shipyard asbestos" />
        <link rel="canonical" href="https://schillinglaw.net/mississippi" />
        <meta property="og:title" content="Mississippi Asbestos Exposure | Mesothelioma Lawyers Serving MS" />
        <meta property="og:description" content="Experienced attorneys helping Mississippi asbestos exposure victims recover compensation" />
        <meta property="og:url" content="https://schillinglaw.net/mississippi" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Mississippi asbestos exposure legal help"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-secondary/75"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-10 w-10 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                Asbestos Exposure in Mississippi
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl">
              Mississippi's shipyards, oil refineries, paper mills, and power plants exposed thousands of 
              workers to deadly asbestos. Our attorneys help victims across the Magnolia State recover 
              the compensation they deserve.
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
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Asbestos Exposure Throughout Mississippi
                  </h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Mississippi has a significant history of asbestos exposure connected to worksites 
                    throughout the state. Due to its location on the Gulf of Mexico, the state became 
                    home to numerous shipyards, oil refineries, and chemical plants—all industries that 
                    heavily used asbestos for its heat-resistant properties.
                  </p>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    The highest mesothelioma mortality rates in Mississippi occur in the southern part 
                    of the state along the Gulf Coast, where shipbuilding and oil refining industries 
                    concentrated. However, workers across the entire state faced exposure in power plants, 
                    paper mills, chemical facilities, and construction sites.
                  </p>
                  <div className="bg-muted rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-3 text-primary">Mississippi Asbestos Facts:</h3>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Mississippi ranks 24th in the U.S. for asbestos-related deaths</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Approximately 100 Mississippi residents die from asbestos-related conditions annually</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>From 1999-2015, 281 Mississippi residents died from mesothelioma</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Mississippi has no naturally occurring asbestos—all exposure came from industrial use</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>The three worst industries for asbestos exposure: oil, power plants, and shipbuilding</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Major Asbestos Exposure Sites in Mississippi
                  </h2>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Workers at the following types of facilities faced significant asbestos exposure 
                    throughout their careers, often without any warning of the dangers:
                  </p>

                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                            <Ship className="h-6 w-6 text-secondary" />
                          </div>
                          <CardTitle className="text-secondary">Shipyards</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-3">
                          Mississippi's Gulf Coast location made it a center for shipbuilding. Until safety 
                          guidelines were implemented in the 1970s and 1980s, shipyards used substantial 
                          amounts of asbestos in boilers, turbines, engines, pumps, valves, gaskets, and 
                          pipe insulation.
                        </p>
                        <p className="text-foreground/80 font-semibold">Key sites include:</p>
                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2">
                          <li><strong>Ingalls Shipbuilding (Pascagoula)</strong> - The largest private employer in Mississippi, employing over 12,000 workers. Now part of Huntington Ingalls Industries, it sprawls across 800 acres and is the leading producer of U.S. Navy ships.</li>
                          <li><strong>V.T. Halter Marine Shipyard</strong></li>
                          <li><strong>Naval Station Pascagoula</strong></li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                            <Flame className="h-6 w-6 text-secondary" />
                          </div>
                          <CardTitle className="text-secondary">Oil Refineries</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-3">
                          Oil refining requires heavy machinery and extremely high temperatures. Refineries 
                          used asbestos extensively in insulation for boilers and pipes, as well as in 
                          gaskets and valves to prevent overheating.
                        </p>
                        <p className="text-foreground/80 font-semibold">Key sites include:</p>
                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2">
                          <li><strong>Chevron Refinery (Pascagoula)</strong> - Built in 1963 on over 3,000 acres, this is Chevron's largest U.S. refinery, producing about 130,000 barrels of gasoline per day.</li>
                          <li><strong>Southland Oil</strong></li>
                          <li><strong>Ergon Refining</strong></li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                            <Factory className="h-6 w-6 text-secondary" />
                          </div>
                          <CardTitle className="text-secondary">Chemical Plants</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-3">
                          Asbestos was resistant to chemicals, heat, and electricity, making it commonly 
                          used in chemical processing facilities. Workers were exposed to asbestos in pipes, 
                          heat exchangers, furnaces, pumps, boilers, and ovens.
                        </p>
                        <p className="text-foreground/80 font-semibold">Key sites include:</p>
                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2">
                          <li><strong>Hooker Chemical</strong> - Later designated a Superfund Site by the EPA</li>
                          <li><strong>Mississippi Chemical</strong></li>
                          <li><strong>Spencer Chemical Company</strong></li>
                          <li><strong>Vicksburg Chemical Company</strong></li>
                          <li><strong>E.I. Du Pont De Nemours and Company</strong></li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-secondary" />
                          </div>
                          <CardTitle className="text-secondary">Power Plants</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-3">
                          Power plants used asbestos-containing materials extensively to insulate pipes, 
                          electrical conduits, and mechanical parts. Workers who maintained or repaired 
                          this equipment faced daily exposure.
                        </p>
                        <p className="text-foreground/80 font-semibold">Key sites include:</p>
                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2">
                          <li><strong>Jack Watson Generating Plant</strong> - Coal-fired power station operated by Mississippi Power</li>
                          <li><strong>R.D. Morrow Steam Plant</strong></li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                            <Factory className="h-6 w-6 text-secondary" />
                          </div>
                          <CardTitle className="text-secondary">Paper Mills & Manufacturing</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-3">
                          With more than 60% of Mississippi's land area covered in forests, the state has 
                          a significant lumber and paper industry. These industries used asbestos in 
                          production machinery, and vehicles used to transport products contained asbestos 
                          in brakes, gaskets, and other parts.
                        </p>
                        <p className="text-foreground/80 font-semibold">Key sites include:</p>
                        <ul className="list-disc list-inside space-y-1 text-foreground/80 mt-2">
                          <li><strong>Georgia Pacific Pulp & Paper</strong></li>
                          <li><strong>St. Regis Paper Company</strong></li>
                          <li><strong>Hudson Hardwood Flooring Company</strong></li>
                          <li><strong>Armstrong World Industries (Armstrong Cork Company)</strong> - Ceiling, flooring, and cabinet manufacturer linked to numerous mesothelioma cases</li>
                          <li><strong>U.S. Gypsum</strong></li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Mississippi Cities with Asbestos Exposure
                  </h2>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Asbestos exposure occurred throughout Mississippi, with concentrations in industrial 
                    areas. Cities like Pascagoula, Gulfport, and Jackson widely used asbestos insulation 
                    and machine parts.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-3 text-primary flex items-center">
                        <MapPin className="h-5 w-5 text-secondary mr-2" />
                        Pascagoula
                      </h3>
                      <p className="text-foreground/80 text-sm">
                        Home to Ingalls Shipbuilding and the Chevron Refinery, Pascagoula has the highest 
                        concentration of asbestos exposure sites in Mississippi. This town of 20,000 people 
                        has seen numerous mesothelioma cases from its industrial workforce.
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-3 text-primary flex items-center">
                        <MapPin className="h-5 w-5 text-secondary mr-2" />
                        Jackson
                      </h3>
                      <p className="text-foreground/80 text-sm">
                        The state capital has numerous older buildings containing asbestos. Maintenance 
                        workers, custodians, and construction crews faced exposure during routine repairs 
                        and renovations.
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-3 text-primary flex items-center">
                        <MapPin className="h-5 w-5 text-secondary mr-2" />
                        Gulfport
                      </h3>
                      <p className="text-foreground/80 text-sm">
                        As a major Gulf Coast city, Gulfport workers were exposed through shipyard work, 
                        port operations, and various industrial facilities that used asbestos materials.
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-3 text-primary flex items-center">
                        <MapPin className="h-5 w-5 text-secondary mr-2" />
                        Hattiesburg
                      </h3>
                      <p className="text-foreground/80 text-sm">
                        Schools, hospitals, office buildings, and industrial facilities in Hattiesburg 
                        contained asbestos in ceiling tiles, pipe insulation, and fireproofing compounds.
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-3 text-primary flex items-center">
                        <MapPin className="h-5 w-5 text-secondary mr-2" />
                        Vicksburg
                      </h3>
                      <p className="text-foreground/80 text-sm">
                        Home to chemical facilities and manufacturing plants including the Redwood plant 
                        and Vicksburg Chemical Company, where workers faced significant asbestos exposure.
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-3 text-primary flex items-center">
                        <MapPin className="h-5 w-5 text-secondary mr-2" />
                        Greenville
                      </h3>
                      <p className="text-foreground/80 text-sm">
                        Industrial facilities including Greenville Mills and various manufacturing plants 
                        exposed workers to asbestos throughout their operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Hurricane Katrina and Asbestos Exposure
                  </h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Mississippi was dramatically affected by Hurricane Katrina in 2005. The destruction 
                    of old and aging buildings left debris contaminated with asbestos products, potentially 
                    exposing residents, first responders, volunteers, and cleanup crews to toxic fibers.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    After the hurricane, the EPA and other organizations conducted evaluations to determine 
                    exposure risks, including sampling sediment, soil, water, and air. However, there 
                    remains ongoing risk for exposure around the Mississippi coast from damaged structures 
                    that have not been fully remediated.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    High-Risk Occupations in Mississippi
                  </h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Workers in the following occupations faced elevated asbestos exposure risks in Mississippi:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Shipyard workers and welders</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Oil refinery workers</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Power plant workers</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Chemical plant workers</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Paper mill workers</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Construction and demolition workers</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Insulation installers</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Plumbers and pipefitters</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Electricians</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Auto mechanics (brake work)</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Teachers, office workers, and maintenance staff who worked in older buildings are also 
                    at risk, as many pre-1980s structures contained asbestos in ceiling tiles, floor tiles, 
                    pipe insulation, and fireproofing materials.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Mississippi Asbestos Laws and Statute of Limitations
                  </h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Under Mississippi law, there are strict time limits for filing asbestos-related claims:
                  </p>
                  <div className="bg-muted rounded-lg p-6 mb-4">
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Personal Injury Claims:</strong> Generally 3 years from the date of diagnosis or when you reasonably should have known about your illness</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Wrongful Death Claims:</strong> Typically 3 years from the date of death</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    Because asbestos-related diseases have long latency periods—often 20-50 years—it's 
                    critical to contact an attorney as soon as you receive a diagnosis. Missing the 
                    statute of limitations deadline means you cannot pursue legal action or obtain 
                    compensation.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Compensation for Mississippi Asbestos Victims
                  </h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    If you or a loved one developed an asbestos-related disease after working in Mississippi, 
                    you may be entitled to compensation through:
                  </p>
                  <div className="space-y-4 mb-4">
                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-2 text-primary">Personal Injury Lawsuits</h3>
                      <p className="text-foreground/80 text-sm">
                        File claims against manufacturers of asbestos products, employers, and property 
                        owners who failed to protect workers from known asbestos hazards.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-2 text-primary">Asbestos Trust Fund Claims</h3>
                      <p className="text-foreground/80 text-sm">
                        Access over $30 billion available from bankrupt companies that manufactured or 
                        used asbestos products. Many Mississippi workers are eligible for multiple trust 
                        fund claims. <Link to="/trust-funds" className="text-secondary hover:underline">Learn more about trust funds →</Link>
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-2 text-primary">Veterans Benefits</h3>
                      <p className="text-foreground/80 text-sm">
                        Military veterans exposed to asbestos during service may qualify for VA disability 
                        benefits in addition to other compensation sources.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-5">
                      <h3 className="text-lg font-bold mb-2 text-primary">Wrongful Death Claims</h3>
                      <p className="text-foreground/80 text-sm">
                        Families who lost loved ones to asbestos-related diseases can file claims for 
                        funeral expenses, loss of income, and the family's loss.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    Why Choose Schilling Law Firm?
                  </h2>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Based in Starkville, Mississippi, Schilling Law Firm is dedicated to helping 
                    asbestos exposure victims throughout our state and nationwide. We understand the 
                    unique industrial history of Mississippi and the specific exposure sites that 
                    have affected our community.
                  </p>
                  <ul className="space-y-3 text-foreground/80 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Local Knowledge:</strong> We know Mississippi's asbestos exposure sites and industries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>No Upfront Costs:</strong> Free consultations and no fees unless we win your case</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Nationwide Representation:</strong> We represent clients across all 50 states</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Compassionate Service:</strong> We travel to you if you cannot come to our office</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Related Resources</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/mesothelioma" className="text-secondary hover:underline font-medium">
                        Mesothelioma Information
                      </Link> - Learn about this aggressive asbestos-caused cancer
                    </li>
                    <li>
                      <Link to="/lung-cancer" className="text-secondary hover:underline font-medium">
                        Asbestos Lung Cancer
                      </Link> - Understanding the connection between asbestos and lung cancer
                    </li>
                    <li>
                      <Link to="/asbestosis" className="text-secondary hover:underline font-medium">
                        Asbestosis
                      </Link> - Chronic lung disease from asbestos exposure
                    </li>
                    <li>
                      <Link to="/trust-funds" className="text-secondary hover:underline font-medium">
                        Asbestos Trust Funds
                      </Link> - Access over $30 billion in compensation
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Additional Resources</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>
                      <a 
                        href="https://www.msdh.ms.gov/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        Mississippi State Department of Health
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.deq.state.ms.us/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        Mississippi Department of Environmental Quality
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.osha.gov/asbestos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        OSHA Asbestos Safety Information
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.atsdr.cdc.gov/asbestos/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline"
                      >
                        CDC - Asbestos Health Information
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

export default Mississippi;
