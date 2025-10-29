import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, FileText, Scale } from "lucide-react";

const TrustFunds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Asbestos Trust Funds | Access $30+ Billion in Compensation</title>
        <meta name="description" content="Learn about asbestos trust funds and how to file claims. Over $30 billion available from bankrupt companies. Free consultation. Call 877-323-6376." />
        <meta name="keywords" content="asbestos trust funds, mesothelioma trust fund, asbestos bankruptcy trust, asbestos compensation fund" />
        <link rel="canonical" href="https://schillinglawfirm.com/trust-funds" />
        <meta property="og:title" content="Asbestos Trust Funds | Access $30+ Billion in Compensation" />
        <meta property="og:description" content="Access compensation from over $30 billion in asbestos trust funds" />
        <meta property="og:url" content="https://schillinglawfirm.com/trust-funds" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Asbestos Trust Funds
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Access compensation from over $30 billion in asbestos trust funds established by 
              bankrupt companies for victims of asbestos exposure.
            </p>
          </div>
        </section>

        {/* What Are Trust Funds Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                What Are Asbestos Trust Funds?
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Mesothelioma is an aggressive cancer caused by asbestos exposure. Treatment is extensive 
                and costly, and most patients can no longer work. For victims of asbestos, trust funds 
                are a crucial way to seek compensation from negligent companies.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                <strong>Asbestos trust funds are sources of compensation provided by companies that have 
                gone through bankruptcy.</strong> When companies face overwhelming asbestos lawsuits and 
                file for bankruptcy protection, they are required by law to establish trust funds to 
                compensate victims.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                If the business you worked for or that supplied asbestos to your workplace went bankrupt, 
                you cannot sue for compensation through traditional litigation. However, you may be able 
                to file a claim with one or more asbestos trust funds to receive the compensation you deserve.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                The History of Asbestos Trust Funds
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                The largest asbestos trust was also the first to be established. Johns Manville once led 
                the country in manufacturing asbestos products and accumulated enormous liabilities. The 
                company began bankruptcy proceedings in 1982 after facing thousands of costly asbestos lawsuits.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                <strong>In 1988, Johns Manville emerged reorganized with the first asbestos trust, the 
                Manville Personal Injury Settlement Trust.</strong> This represented a new strategy for 
                coping with asbestos liabilities. The company essentially shifted liability to a new entity—the trust.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Many companies followed Johns Manville's example, filing for bankruptcy to establish trusts. 
                Initially, the Manville trust attempted to pay claimants 100% of their claims, but insufficient 
                funds made this impossible. By 1995, the trust established new standards that other trusts now follow:
              </p>
              <ul className="mt-4 space-y-2 text-lg text-foreground/80">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Prioritizing people with severe illnesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Establishing guidelines for resolving disputes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>Creating administrative roles to protect future claimants</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Major Trust Funds Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              Major Active Asbestos Trust Funds
            </h2>
            <p className="text-lg text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
              More than 60 companies have established trust funds. Here are some of the largest and most important:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">U.S. Gypsum Trust</CardTitle>
                  <CardDescription>Established 2006</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-2">$3.96 Billion</p>
                  <p className="text-sm text-muted-foreground">Initial funding amount</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Owens Corning Trust</CardTitle>
                  <CardDescription>Established 2006</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-2">$3.42 Billion</p>
                  <p className="text-sm text-muted-foreground">Initial funding amount</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Manville Trust</CardTitle>
                  <CardDescription>Established 1988</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-2">$2.5 Billion</p>
                  <p className="text-sm text-muted-foreground">Initial funding amount</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">DII Industries Trust</CardTitle>
                  <CardDescription>Established 2005</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-2">$2.5 Billion</p>
                  <p className="text-sm text-muted-foreground">Initial funding amount</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Armstrong World Trust</CardTitle>
                  <CardDescription>Established 2006</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-2">$2.1 Billion</p>
                  <p className="text-sm text-muted-foreground">Initial funding amount</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Western Asbestos Trust</CardTitle>
                  <CardDescription>Established 2004</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-2">$2.0 Billion</p>
                  <p className="text-sm text-muted-foreground">Initial funding amount</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-foreground/80 mt-8 text-lg">
              <strong>Contact an experienced asbestos attorney to find out which trusts you may be eligible to file claims with.</strong>
            </p>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                Who Is Eligible to File a Trust Fund Claim?
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                To file a valid claim for compensation from an asbestos trust fund, you must meet and 
                provide proof of certain criteria:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <FileText className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Medical Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Documentation showing you have been diagnosed with an asbestos-related illness, 
                      along with a physician's statement confirming the diagnosis.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Scale className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Exposure Evidence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Evidence of the location and circumstances where you experienced asbestos exposure, 
                      including work history and product identification.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <FileText className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Medical Records</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Medical records demonstrating that your asbestos exposure led to your current illness, 
                      establishing a clear causal connection.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <DollarSign className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Financial Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Documentation of financial losses, including medical expenses, lost wages, and 
                      other damages resulting from your asbestos-related illness.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How Trust Funds Work Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                How Are Asbestos Trust Funds Set Up?
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-secondary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Company Files for Bankruptcy</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Setting up an asbestos trust begins when a company files for bankruptcy protection. 
                      While bankruptcy shields companies from new lawsuits, it does not exempt them from 
                      compensating victims. Bankruptcy courts require these companies to provide plans 
                      detailing how they will reorganize and establish trust funds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-secondary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Estimating Fund Amounts</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Asbestos trust funds must pay both current and future claims. Courts approve the 
                      initial funding amounts based on careful estimates. These estimates ensure adequate 
                      funds remain available for both current claimants and those who may develop 
                      asbestos-related diseases in the future.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-secondary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Court Approval Process</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Decisions about trust funds must be finalized before a bankruptcy plan receives approval. 
                      The court allows plaintiffs' representatives to participate and help make final decisions 
                      on funding amounts. Both sides work to estimate the total amount needed to pay all existing 
                      claims and anticipated future claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation Factors Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                How Are Trust Fund Compensation Amounts Determined?
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                The amount of compensation any asbestos victim can receive from trust funds varies significantly. 
                Unbiased third-party trustees administer the funds and weigh several factors when settling claims:
              </p>

              <div className="bg-background rounded-lg p-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Type and Severity of Illness</h3>
                    <p className="text-foreground/80">
                      The specific asbestos-related disease, its severity, and progression significantly 
                      impact compensation amounts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Medical Expenses</h3>
                    <p className="text-foreground/80">
                      Treatment costs, ongoing medical care requirements, and future medical needs are 
                      carefully considered.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Lost Wages and Earning Capacity</h3>
                    <p className="text-foreground/80">
                      Trustees account for income lost due to illness and diminished future earning capacity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Extent of Exposure</h3>
                    <p className="text-foreground/80">
                      The duration and intensity of asbestos exposure influence compensation decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Available Trust Funds</h3>
                    <p className="text-foreground/80">
                      The total amount of money in each specific trust affects payment percentages and amounts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Future Claimants</h3>
                    <p className="text-foreground/80">
                      Trustees must reserve sufficient funds for future victims who will develop symptoms 
                      years from now.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-secondary/10 rounded-lg p-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  <strong className="text-primary">Important Note:</strong> You may be eligible to file 
                  claims with multiple trust funds simultaneously. An experienced asbestos attorney can 
                  identify all applicable trusts and maximize your total compensation by filing with each 
                  eligible fund.
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

export default TrustFunds;
