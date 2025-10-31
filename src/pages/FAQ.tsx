import Navigation from "@/components/Navigation";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is mesothelioma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mesothelioma is a rare and aggressive cancer caused by asbestos exposure. It develops in the lining of the lungs (pleural mesothelioma), abdomen (peritoneal mesothelioma), heart (pericardial mesothelioma), or testicles (testicular mesothelioma). The disease typically takes 20-50 years to develop after initial asbestos exposure."
        }
      },
      {
        "@type": "Question",
        "name": "How much compensation can I receive for mesothelioma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mesothelioma compensation varies by case but typically ranges from $1 million to $2.4 million. Settlements average $1-1.4 million, while trial verdicts average $2.4 million. Trust fund claims typically pay $50,000-$200,000 per trust, and victims often qualify for multiple trusts. Total compensation depends on factors including disease severity, exposure history, lost income, and medical expenses."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to file a mesothelioma lawsuit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Statutes of limitations vary by state, typically ranging from 1-6 years from the date of diagnosis or discovery of the disease. Some states calculate the deadline from the date of death for wrongful death claims. It's crucial to consult an attorney immediately after diagnosis to ensure you don't miss filing deadlines, which can bar you from recovering compensation."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to go to court for my mesothelioma case?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most mesothelioma cases settle out of court without requiring a trial. Approximately 95% of cases reach settlements through negotiations. If your case does go to trial, your attorney will guide you through the process. Many courts also accommodate ill plaintiffs through video depositions and expedited schedules."
        }
      },
      {
        "@type": "Question",
        "name": "Can family members file a claim if their loved one has passed away?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, family members can file wrongful death claims on behalf of deceased loved ones who died from mesothelioma or other asbestos-related diseases. Eligible family members typically include spouses, children, and sometimes parents or siblings. Wrongful death claims compensate families for loss of companionship, funeral expenses, and lost financial support."
        }
      },
      {
        "@type": "Question",
        "name": "What are asbestos trust funds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asbestos trust funds are compensation sources established by bankrupt companies that manufactured or used asbestos products. Over 60 trusts hold more than $30 billion for victims. When companies face overwhelming asbestos lawsuits and file for bankruptcy, they're required by law to establish these trusts to compensate current and future victims."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Mesothelioma & Asbestos FAQs | Common Questions Answered</title>
        <meta name="description" content="Find answers to common questions about mesothelioma, asbestos exposure, legal claims, compensation, and treatment options. Free consultation available." />
        <meta name="keywords" content="mesothelioma questions, asbestos lawsuit FAQ, mesothelioma compensation questions, asbestos exposure FAQ" />
        <link rel="canonical" href="https://schillinglaw.net/faq" />
        <meta property="og:title" content="Mesothelioma & Asbestos FAQs" />
        <meta property="og:description" content="Common questions about mesothelioma and asbestos lawsuits answered" />
        <meta property="og:url" content="https://schillinglaw.net/faq" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Find answers to the most common questions about mesothelioma, asbestos exposure, 
              legal rights, and compensation options.
            </p>
          </div>
        </section>

        {/* Legal Process FAQs */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">Legal Process Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        How long do I have to file a mesothelioma lawsuit?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Statutes of limitations vary by state, typically ranging from 1-6 years from the date of diagnosis 
                        or discovery of the disease. Some states calculate the deadline from the date of death for wrongful 
                        death claims. It's crucial to consult an attorney immediately after diagnosis to ensure you don't 
                        miss filing deadlines, which can bar you from recovering compensation.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        How much does it cost to hire a mesothelioma lawyer?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Reputable mesothelioma attorneys work on a contingency fee basis, meaning you pay nothing upfront 
                        and nothing unless you win your case. Attorney fees are typically 25-40% of the recovery amount and 
                        are deducted from your settlement or verdict. All case costs, including expert witnesses, court fees, 
                        and investigation expenses, are advanced by the law firm.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Do I need to go to court for my mesothelioma case?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Most mesothelioma cases settle out of court without requiring a trial. Approximately 95% of cases 
                        reach settlements through negotiations. If your case does go to trial, your attorney will guide you 
                        through the process. Many courts also accommodate ill plaintiffs through video depositions and 
                        expedited schedules.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        How long does a mesothelioma lawsuit take?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Settlement cases typically resolve within 6-12 months from filing. Many courts expedite mesothelioma 
                        cases due to the severity of the illness, with some settling in as little as 90 days. Cases that go 
                        to trial usually take 1-2 years. Trust fund claims often process faster, typically within 3-6 months.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Can I file a lawsuit if I don't know where I was exposed to asbestos?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Yes, you can still file a lawsuit even if you're uncertain about the exact source of exposure. 
                        Experienced mesothelioma attorneys have extensive resources to investigate your work history, identify 
                        potential exposure sources, and locate witnesses. They work with investigators and maintain databases 
                        of asbestos-containing products and worksites.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What if the company I worked for is out of business?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        You can still seek compensation even if the company no longer exists. Many companies that went bankrupt 
                        established asbestos trust funds specifically to compensate victims. Over 60 trusts hold more than $30 
                        billion for victims. Additionally, you may have claims against product manufacturers, distributors, or 
                        other companies involved in your asbestos exposure.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Compensation FAQs */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">Compensation Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-7">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        How much compensation can I receive for mesothelioma?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Mesothelioma compensation varies by case but typically ranges from $1 million to $2.4 million. 
                        Settlements average $1-1.4 million, while trial verdicts average $2.4 million. Trust fund claims 
                        typically pay $50,000-$200,000 per trust, and victims often qualify for multiple trusts. Total 
                        compensation depends on factors including disease severity, exposure history, lost income, and medical expenses.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What types of damages can I recover in a mesothelioma lawsuit?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Mesothelioma victims can recover both economic and non-economic damages. Economic damages include past 
                        and future medical expenses, lost wages, lost earning capacity, and out-of-pocket costs. Non-economic 
                        damages include pain and suffering, emotional distress, loss of life enjoyment, and loss of consortium 
                        for spouses. Some cases may also include punitive damages.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Is mesothelioma compensation taxable?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Generally, no. Compensation for physical injury or illness, including mesothelioma settlements and 
                        verdicts, is not taxable under federal law. This includes awards for medical expenses, pain and suffering, 
                        and most other damages related to your diagnosis. However, portions allocated to punitive damages or lost 
                        wages may be taxable. Consult a tax professional about your specific situation.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Can family members file a claim if their loved one has passed away?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Yes, family members can file wrongful death claims on behalf of deceased loved ones who died from 
                        mesothelioma or other asbestos-related diseases. Eligible family members typically include spouses, 
                        children, and sometimes parents or siblings. Wrongful death claims compensate families for loss of 
                        companionship, funeral expenses, and lost financial support.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Will my lawsuit affect my eligibility for Social Security or Medicare?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        In most cases, receiving mesothelioma compensation does not affect eligibility for Social Security 
                        Disability Insurance (SSDI) or Medicare benefits. However, large lump-sum settlements could potentially 
                        affect need-based programs like Supplemental Security Income (SSI) or Medicaid. Your attorney can advise 
                        on structuring settlements to protect benefit eligibility.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Can I file multiple types of claims simultaneously?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Yes, you can often pursue multiple types of compensation simultaneously. For example, you can file a 
                        personal injury lawsuit, trust fund claims, and workers' compensation claim at the same time. Veterans 
                        can seek VA benefits while also pursuing lawsuits and trust claims. An experienced attorney will manage 
                        all claims to maximize your total recovery.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Medical & Disease FAQs */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">Medical & Disease Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-13">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What is mesothelioma?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Mesothelioma is a rare and aggressive cancer caused by asbestos exposure. It develops in the lining 
                        of the lungs (pleural mesothelioma), abdomen (peritoneal mesothelioma), heart (pericardial mesothelioma), 
                        or testicles (testicular mesothelioma). The disease typically takes 20-50 years to develop after initial 
                        asbestos exposure.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-14">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        How is mesothelioma diagnosed?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Mesothelioma diagnosis typically involves imaging tests (X-rays, CT scans, PET scans), followed by a 
                        biopsy to confirm the presence of mesothelioma cells. Blood tests and pulmonary function tests may also 
                        be performed. Because symptoms resemble other conditions, diagnosis often requires specialists familiar 
                        with asbestos-related diseases.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-15">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What are the symptoms of mesothelioma?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Symptoms vary by type but commonly include shortness of breath, chest pain, persistent cough, fatigue, 
                        unexplained weight loss, and fluid buildup. Peritoneal mesothelioma causes abdominal pain, swelling, 
                        and digestive issues. Symptoms typically don't appear until decades after exposure, when the disease 
                        is already advanced.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-16">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What is the difference between mesothelioma and lung cancer?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        While both can be caused by asbestos exposure, they are different diseases. Mesothelioma develops in 
                        the lining (mesothelium) surrounding organs, while lung cancer develops in the lung tissue itself. 
                        Mesothelioma is always caused by asbestos exposure, whereas lung cancer has multiple causes including 
                        smoking. Treatment approaches and prognosis differ between the two diseases.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-17">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What is asbestosis?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Asbestosis is a chronic lung disease caused by inhaling asbestos fibers. Unlike mesothelioma, asbestosis 
                        is not cancer but involves scarring (fibrosis) of lung tissue that makes breathing difficult. While not 
                        as severe as mesothelioma, asbestosis can significantly impact quality of life and increase lung cancer 
                        risk. Victims can seek compensation for asbestosis diagnoses.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-18">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Can secondhand asbestos exposure cause disease?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Yes, secondhand (or "take-home") exposure can cause mesothelioma and other asbestos diseases. Family 
                        members of workers who handled asbestos can develop disease from breathing fibers carried home on clothing, 
                        hair, and skin. Spouses and children of asbestos workers have developed mesothelioma from this secondary 
                        exposure and have successfully recovered compensation.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Trust Fund FAQs */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">Trust Fund Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-19">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What are asbestos trust funds?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Asbestos trust funds are compensation sources established by bankrupt companies that manufactured or 
                        used asbestos products. Over 60 trusts hold more than $30 billion for victims. When companies face 
                        overwhelming asbestos lawsuits and file for bankruptcy, they're required by law to establish these trusts 
                        to compensate current and future victims.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-20">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        How do I file an asbestos trust fund claim?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Filing trust fund claims requires submitting documentation proving your diagnosis, exposure history, and 
                        connection to the bankrupt company's products. An experienced attorney will identify which trusts you're 
                        eligible for, gather required evidence, complete claim forms, and submit claims to all applicable trusts. 
                        Most victims qualify for claims with multiple trusts.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-21">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        How long does it take to receive trust fund payments?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Trust fund claims typically process within 3-6 months, which is faster than traditional lawsuits. Some 
                        trusts offer expedited review for terminally ill claimants. Payment timelines vary by trust, with some 
                        paying within weeks of approval while others may take several months. Your attorney will manage multiple 
                        trust claims simultaneously to expedite overall compensation.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-22">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Can I file trust fund claims and a lawsuit at the same time?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Yes, you can and should pursue both trust fund claims and lawsuits simultaneously when applicable. Trust 
                        fund claims apply to bankrupt companies, while lawsuits target companies still in business. An experienced 
                        attorney will identify all responsible parties—both bankrupt and solvent—and pursue maximum compensation 
                        from all sources.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-23">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What is a payment percentage and how does it affect my claim?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Payment percentages are adjustments trusts apply to ensure funds last for future claimants. For example, 
                        if a trust has a 25% payment percentage and your claim is valued at $100,000, you would receive $25,000. 
                        Payment percentages vary by trust and change over time based on fund solvency. Despite percentages, trust 
                        claims remain a valuable compensation source, especially when filing multiple claims.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Veterans FAQs */}
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">Veterans Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-24">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Can veterans with mesothelioma receive both VA benefits and lawsuit compensation?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Yes, veterans can receive both VA disability benefits and compensation from lawsuits or trust fund claims 
                        simultaneously. These are separate compensation sources—VA benefits come from the government for military 
                        service, while lawsuits target manufacturers and suppliers of asbestos products. One does not affect 
                        eligibility for the other.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-25">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Which branch of the military had the most asbestos exposure?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Navy veterans face the highest mesothelioma rates due to extensive asbestos use on ships. However, all 
                        branches used asbestos extensively from the 1930s-1980s. Army, Air Force, Marine Corps, and Coast Guard 
                        personnel were all exposed through buildings, vehicles, aircraft, and equipment. Veterans from any branch 
                        may qualify for compensation.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-26">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What VA benefits are available for veterans with mesothelioma?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Veterans with mesothelioma may qualify for VA disability compensation (monthly payments), healthcare through 
                        VA medical centers, Aid and Attendance benefits, Dependency and Indemnity Compensation for surviving spouses, 
                        and disability pensions. Many veterans qualify for 100% disability rating due to mesothelioma's severity. 
                        An attorney can help maximize VA benefits while pursuing additional compensation.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-27">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Can I sue the military for asbestos exposure?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        No, you cannot sue the military directly due to the Feres Doctrine, which bars service members from suing 
                        for injuries during military service. However, veterans can sue manufacturers and suppliers of asbestos 
                        products used by the military. These companies were not part of the military and can be held liable for 
                        their negligent products.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* General Questions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">General Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-28">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Where was asbestos commonly used?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Asbestos was used in thousands of products across multiple industries including construction (insulation, 
                        cement, roofing), shipbuilding (boilers, pipes, fireproofing), automotive (brakes, clutches, gaskets), 
                        manufacturing, power plants, refineries, and military equipment. Any worker in these industries from the 
                        1930s-1980s likely encountered asbestos.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-29">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Is asbestos still used today?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Asbestos is still legal in the United States but heavily regulated. While new construction rarely uses 
                        asbestos, millions of older buildings still contain asbestos materials. Workers performing renovation, 
                        demolition, or repair work on older buildings remain at risk. Proper abatement procedures are now required, 
                        but exposure still occurs.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-30">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Can smoking cause mesothelioma?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        No, smoking does not cause mesothelioma. Mesothelioma is caused exclusively by asbestos exposure. However, 
                        smoking combined with asbestos exposure dramatically increases the risk of developing lung cancer. Smokers 
                        exposed to asbestos have a 50-90 times greater risk of lung cancer than non-smokers without exposure.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-31">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        Why did companies use asbestos if they knew it was dangerous?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        Internal documents show many companies knew about asbestos dangers as early as the 1930s but continued using 
                        it for profit. Asbestos was inexpensive and effective for insulation and fireproofing. Companies hid evidence, 
                        suppressed research, and failed to warn workers or provide protective equipment. This corporate negligence 
                        forms the basis for most mesothelioma lawsuits.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-32">
                      <AccordionTrigger className="text-lg font-semibold text-left">
                        What should I do if I've been diagnosed with mesothelioma?
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed">
                        First, focus on your medical treatment with a mesothelioma specialist. Second, contact an experienced 
                        mesothelioma attorney immediately to protect your legal rights and discuss compensation options. Third, 
                        begin documenting your work history and potential exposure sources. Fourth, explore all available benefits 
                        including VA compensation, Social Security disability, and trust fund claims. Don't delay—time limits apply.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Still Have Questions?
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Every mesothelioma case is unique, and you likely have specific questions about your situation. 
                Our experienced attorneys are here to provide personalized answers and guidance at no cost to you.
              </p>
              <div className="bg-background rounded-lg p-6">
                <p className="text-xl font-semibold text-primary mb-4">
                  Free Consultations Available 24/7
                </p>
                <p className="text-foreground/80">
                  Call us today at 877-323-6376 or request a free consultation online. We'll review your case, 
                  answer all your questions, and explain your legal options with no obligation.
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

export default FAQ;