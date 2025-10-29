import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Understanding Asbestos Exposure Claims: Qualifications and Process",
      description: "Learn about the qualifications required to file an asbestos exposure claim, including work history requirements and medical evidence needed.",
      category: "Asbestos Exposure",
      date: "March 20, 2024",
      readTime: "8 min read"
    },
    {
      title: "Introduction to Asbestos and Lung Cancer",
      description: "Asbestos, once widely used for its heat resistance, is now known to pose serious health risks. Learn how inhaling asbestos fibers can lead to lung cancer and the long-term effects.",
      category: "Asbestos Exposure",
      date: "March 15, 2025",
      readTime: "10 min read"
    },
    {
      title: "How Asbestos Exposure Leads to Lung Cancer",
      description: "Discover how asbestos fibers cause cellular damage in the lungs, the symptoms to watch for, and practical steps to reduce exposure and protect your health.",
      category: "Asbestos Exposure",
      date: "February 28, 2025",
      readTime: "9 min read"
    },
    {
      title: "The History of Asbestos Use in American Industry",
      description: "Explore how asbestos became widely used despite known health risks and the industries most affected.",
      category: "Asbestos Exposure",
      date: "February 10, 2025",
      readTime: "10 min read"
    },
    {
      title: "Latest Treatment Advances for Lung Cancer",
      description: "New immunotherapy and targeted treatments are offering hope to lung cancer patients with asbestos exposure history.",
      category: "Asbestos Exposure",
      date: "January 25, 2025",
      readTime: "7 min read"
    },
    {
      title: "How to Document Your Asbestos Exposure History",
      description: "Essential tips for building a strong case by properly documenting your work history and exposure sources.",
      category: "Asbestos Exposure",
      date: "January 15, 2025",
      readTime: "6 min read"
    },
    {
      title: "Asbestosis vs. Mesothelioma: Key Differences",
      description: "Understanding the distinctions between these two serious asbestos-related diseases and their legal implications.",
      category: "Asbestos Exposure",
      date: "January 2, 2025",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Asbestos Legal Blog & Resources
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Stay informed about asbestos-related diseases, legal developments, treatment options, 
              and your rights as a victim of asbestos exposure.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                        {article.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-secondary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      {article.description}
                    </p>
                    <span className="text-muted-foreground font-medium inline-block">
                      Coming soon
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              Helpful Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Medical Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-foreground/80">
                    <li>
                      <a 
                        href="https://www.cancer.org/cancer/risk-prevention/chemicals/asbestos.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        American Cancer Society - Asbestos
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.cancer.org/cancer/types/malignant-mesothelioma.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        ACS - Malignant Mesothelioma
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.cancer.gov/types/mesothelioma" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        National Cancer Institute
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.mayoclinic.org/diseases-conditions/mesothelioma" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        Mayo Clinic
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Safety & Regulations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-foreground/80">
                    <li>
                      <a 
                        href="https://www.osha.gov/asbestos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        OSHA Asbestos Standards
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.epa.gov/asbestos" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        EPA Asbestos Information
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.atsdr.cdc.gov/asbestos/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        CDC Asbestos Resources
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Support Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-foreground/80">
                    <li>
                      <a 
                        href="https://www.lung.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        American Lung Association
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.cancersupportcommunity.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        Cancer Support Community
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.caregiver.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-secondary transition-colors"
                      >
                        Family Caregiver Alliance
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">How long do I have to file an asbestos claim?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    The statute of limitations varies by state, typically ranging from 1-3 years from the date 
                    of diagnosis or discovery of the disease. It's crucial to contact an attorney as soon as 
                    possible after diagnosis to protect your legal rights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Can I file a claim if my exposure was decades ago?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Yes. Asbestos-related diseases have long latency periods, often appearing 20-50 years after 
                    exposure. The statute of limitations typically begins when you're diagnosed, not when you 
                    were exposed to asbestos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">What if the company I worked for is no longer in business?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    You may still be able to recover compensation. Many companies that used asbestos have 
                    established bankruptcy trust funds specifically to compensate victims. Additionally, 
                    multiple parties in the supply chain may be held liable.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Will I have to go to court?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Most asbestos cases are settled out of court. However, we are fully prepared to take 
                    your case to trial if necessary to secure the compensation you deserve. Your attorney 
                    will handle all legal proceedings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
