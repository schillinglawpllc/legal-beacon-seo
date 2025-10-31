import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Scale, Clock, TrendingUp, FileText, CheckCircle } from "lucide-react";

const Compensation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Mesothelioma Compensation & Settlement Amounts | Free Case Review</title>
        <meta name="description" content="Learn about mesothelioma compensation options, average settlement amounts, and how to maximize your claim. Free consultation. Call 877-323-6376." />
        <meta name="keywords" content="mesothelioma compensation, settlement amounts, asbestos lawsuit settlement, mesothelioma verdict" />
        <link rel="canonical" href="https://schillinglaw.net/compensation" />
        <meta property="og:title" content="Mesothelioma Compensation & Settlement Amounts" />
        <meta property="og:description" content="Understanding mesothelioma compensation options and settlement amounts" />
        <meta property="og:url" content="https://schillinglaw.net/compensation" />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Mesothelioma Compensation Guide
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Understanding your options for receiving compensation after a mesothelioma diagnosis. 
              Victims and their families may be entitled to millions in settlements and verdicts.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                Types of Mesothelioma Compensation
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Mesothelioma victims have several avenues to pursue compensation for their asbestos-related illness. 
                Each type of compensation serves different purposes and may be pursued simultaneously in many cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Scale className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Lawsuit Settlements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      Negotiated agreements with companies responsible for asbestos exposure. Most cases settle 
                      before trial, typically ranging from $1 million to $1.4 million.
                    </p>
                    <p className="text-sm font-semibold text-secondary">Average: $1-1.4M</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Trial Verdicts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      Jury-awarded compensation when cases go to trial. Verdicts tend to be higher than settlements 
                      but carry more risk and take longer to resolve.
                    </p>
                    <p className="text-sm font-semibold text-secondary">Average: $2.4M</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <DollarSign className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Trust Fund Claims</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      Compensation from bankruptcy trusts established by companies that filed for bankruptcy. 
                      Over $30 billion available across more than 60 trusts.
                    </p>
                    <p className="text-sm font-semibold text-secondary">Average: $50K-200K per trust</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <FileText className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">VA Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      Veterans exposed to asbestos during service may qualify for disability compensation, 
                      healthcare, and other benefits through the VA.
                    </p>
                    <p className="text-sm font-semibold text-secondary">Monthly payments available</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Average Settlement Amounts Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              Average Settlement Amounts by Case Type
            </h2>
            <p className="text-lg text-foreground/80 mb-12 text-center max-w-3xl mx-auto">
              Compensation amounts vary significantly based on the type of asbestos-related disease, 
              severity of illness, and individual case circumstances.
            </p>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-2xl">Mesothelioma Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground">Settlement Average</span>
                        <span className="text-2xl font-bold text-secondary">$1-1.4 Million</span>
                      </div>
                      <p className="text-sm text-foreground/70">
                        Most mesothelioma lawsuits settle before trial
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground">Trial Verdict Average</span>
                        <span className="text-2xl font-bold text-secondary">$2.4 Million</span>
                      </div>
                      <p className="text-sm text-foreground/70">
                        Cases that go to trial often result in higher awards
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-2xl">Asbestos Lung Cancer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Average Compensation</span>
                    <span className="text-2xl font-bold text-secondary">$500K-1M</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-2">
                    Requires clear evidence linking asbestos exposure to cancer diagnosis
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-2xl">Asbestosis Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Average Compensation</span>
                    <span className="text-2xl font-bold text-secondary">$250K-500K</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-2">
                    Non-cancer asbestos disease with varying severity levels
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-2xl">Wrongful Death Claims</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Average Compensation</span>
                    <span className="text-2xl font-bold text-secondary">$1-2.4 Million</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-2">
                    Filed by family members after a victim's death from asbestos disease
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Factors Affecting Compensation */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                Factors That Affect Compensation Amounts
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                No two mesothelioma cases are identical, and compensation amounts vary based on numerous factors. 
                Understanding these variables can help set realistic expectations for your case.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Type and Severity of Disease</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Mesothelioma cases typically receive higher compensation than asbestosis cases due to the 
                      aggressive nature of the cancer. Stage of diagnosis and prognosis also significantly impact awards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Age and Life Expectancy</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Younger victims with longer life expectancies may receive higher awards due to greater 
                      lifetime earnings losses and extended suffering. However, all ages can receive substantial compensation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Medical Expenses</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Past and future medical costs, including treatments, hospitalizations, medications, and 
                      experimental therapies, are fully compensable. Mesothelioma treatment can cost $400,000 or more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Lost Income and Earning Capacity</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Victims unable to work receive compensation for lost wages and diminished future earning 
                      capacity. High-income earners may receive larger awards due to greater financial losses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Strength of Evidence</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Clear documentation of asbestos exposure, work history, product identification, and medical 
                      records strengthen your case and can lead to higher settlements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Number of Defendants</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Cases involving multiple companies responsible for exposure typically result in higher 
                      compensation as liability is distributed across several defendants.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Geographic Location</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Certain jurisdictions have historically awarded higher verdicts in asbestos cases. Your 
                      attorney can advise on the best venue for filing your claim.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Pain and Suffering</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Non-economic damages for physical pain, emotional distress, loss of life enjoyment, and 
                      impact on family relationships are substantial components of compensation awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                How Long Does It Take to Receive Compensation?
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                The timeline for receiving compensation varies depending on the type of claim and case complexity. 
                Understanding typical timeframes can help you plan accordingly.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Settlement Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      Most settlements are reached within 6-12 months from filing. Expedited timelines are 
                      available for terminally ill plaintiffs, with some cases settling in as little as 90 days.
                    </p>
                    <p className="text-sm font-semibold text-secondary">Typical: 6-12 months | Expedited: 90 days</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Trial Verdict Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      Cases that proceed to trial typically take 1-2 years to resolve. However, verdicts often 
                      result in higher awards. Appeals can extend this timeline further.
                    </p>
                    <p className="text-sm font-semibold text-secondary">Typical: 1-2 years</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-2">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-primary">Trust Fund Claims Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">
                      Trust fund claims typically process faster than lawsuits, with many resolving within 
                      3-6 months. Multiple trust fund claims can be filed simultaneously.
                    </p>
                    <p className="text-sm font-semibold text-secondary">Typical: 3-6 months</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Maximizing Your Claim */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                How to Maximize Your Compensation Claim
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Taking the right steps early in your case can significantly impact your final compensation amount. 
                Here are key strategies for maximizing your claim:
              </p>

              <div className="bg-muted rounded-lg p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary font-bold">1</span>
                    </span>
                    Hire an Experienced Mesothelioma Attorney
                  </h3>
                  <p className="text-foreground/80 pl-11 leading-relaxed">
                    Specialized attorneys understand the complexities of asbestos litigation and know how to build 
                    strong cases. They have relationships with medical experts, access to historical records, and 
                    knowledge of all available compensation sources.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary font-bold">2</span>
                    </span>
                    Document Everything Thoroughly
                  </h3>
                  <p className="text-foreground/80 pl-11 leading-relaxed">
                    Keep detailed records of all medical treatments, expenses, lost wages, and how the disease 
                    affects your daily life. Maintain a journal documenting your pain levels, symptoms, and 
                    limitations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary font-bold">3</span>
                    </span>
                    Identify All Exposure Sources
                  </h3>
                  <p className="text-foreground/80 pl-11 leading-relaxed">
                    Work with your attorney to identify every company and product that may have exposed you to 
                    asbestos. The more defendants identified, the greater the potential compensation pool.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary font-bold">4</span>
                    </span>
                    File Claims With Multiple Trusts
                  </h3>
                  <p className="text-foreground/80 pl-11 leading-relaxed">
                    Many victims were exposed to products from multiple bankrupt companies. Filing claims with 
                    all eligible trust funds can significantly increase total compensation received.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary font-bold">5</span>
                    </span>
                    Act Quickly But Don't Rush Settlement
                  </h3>
                  <p className="text-foreground/80 pl-11 leading-relaxed">
                    File your claim promptly to meet statute of limitations deadlines, but don't accept the first 
                    settlement offer. Experienced attorneys know how to negotiate for maximum compensation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary font-bold">6</span>
                    </span>
                    Pursue All Available Compensation Sources
                  </h3>
                  <p className="text-foreground/80 pl-11 leading-relaxed">
                    Don't limit yourself to one type of claim. You may be eligible for lawsuit settlements, 
                    trust fund claims, VA benefits, and workers' compensation simultaneously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                Important Things to Know About Compensation
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">No Upfront Costs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Reputable mesothelioma attorneys work on contingency, meaning you pay nothing unless you 
                      receive compensation. All case costs are advanced by the law firm and deducted from your 
                      settlement or verdict.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Compensation Is Tax-Free</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      In most cases, compensation for physical injury or illness is not taxable under federal law. 
                      This includes settlements and verdicts for medical expenses, pain and suffering, and most 
                      other damages related to your mesothelioma diagnosis.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Compensation Doesn't Affect Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Receiving compensation typically does not impact eligibility for Social Security Disability, 
                      Medicare, or Medicaid benefits. However, specific circumstances may vary, so consult with 
                      your attorney about your situation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Time Limits Apply</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Statutes of limitations vary by state and type of claim. Don't wait to explore your legal 
                      options. Filing deadlines begin from the date of diagnosis or discovery of asbestos-related 
                      disease, and missing deadlines can bar you from recovery.
                    </p>
                  </CardContent>
                </Card>
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

export default Compensation;