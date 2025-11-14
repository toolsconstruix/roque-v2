import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How long does an interior & exterior painting project usually take?",
    answer:
      "Most painting projects are completed in a few days to two weeks depending on the size of the home, prep work needed, and weather conditions for exterior work.",
  },
  {
    question: "Do you handle all the preparation work?",
    answer:
      "Yes. We take care of surface preparation including washing, scraping, sanding, patching, priming, and protecting surrounding areas before any paint is applied.",
  },
  {
    question: "What type of paint do you use?",
    answer:
      "We use high-quality, professional-grade paints and coatings selected for durability, washability, and the specific needs of your interior or exterior surfaces.",
  },
  {
    question: "Can you help with color selection?",
    answer:
      "We provide guidance on color choices, finishes, and combinations that work well with your existing materials, lighting, and overall style.",
  },
  {
    question: "Which areas do you serve for painting projects?",
    answer:
      "We serve Winchester, Wellesley, Weston, Newton, Lexington, Brookline, Cambridge, Arlington, Belmont, Needham, and surrounding Massachusetts communities.",
  },
];

export default function InteriorExteriorPainting() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
              Interior & Exterior Painting
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flawless Interior & Exterior Painting for Your Home
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Refresh your home with professional painting that delivers smooth finishes, clean lines, and long-lasting protection inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Free Painting Estimate</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
              >
                <Link to="/portfolio">View Painting Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Invest in Professional Painting?</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  A fresh coat of paint is one of the fastest ways to transform your home. But getting clean, even, durable
                  results requires the right prep, products, and process.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Boost curb appeal and first impressions instantly</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Protect exterior surfaces from New England weather</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Brighten and modernize dated interior rooms</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Fix cracks, nail pops, and surface imperfections</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Roque Painting Approach</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  We treat every painting project like a full renovation: organized, protected, and handled with precise
                  attention to detail from prep to final walkthrough.
                </p>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">What You Can Expect:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Thorough prep work for long-lasting finishes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Neat, protected job sites with minimal disruption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Careful cut lines, even coverage, and clean edges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Premium paints and coatings suited to your surfaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Clear communication and on-time completion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Painting Process</h2>
            <p className="text-lg text-muted-foreground">
              A clear, organized process from first call to final walkthrough so you always know what to expect.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container">
          <div className="bg-card border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Interior & Exterior Painting Across Massachusetts
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              We proudly paint homes in Winchester, Wellesley, Weston, Newton, Lexington, Brookline, Cambridge,
              Arlington, Belmont, Needham, and surrounding communities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {["Winchester", "Wellesley", "Weston", "Newton", "Lexington", "Brookline", "Cambridge", "Arlington", "Belmont", "Needham"].map(
                (city) => (
                  <div key={city} className="py-2 px-4 bg-muted/50 rounded-lg">
                    {city}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Refresh Your Home with New Paint?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get a detailed estimate for your interior or exterior painting project. No pressure, no hidden fees — just
                clear pricing and a well-organized plan.
              </p>
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="font-semibold text-lg mb-2">Call for immediate assistance:</p>
                <a href="tel:+17815269534" className="text-2xl font-bold text-accent hover:text-accent/80">
                  (781) 526-9534
                </a>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Painting Estimate</h3>
              <LeadForm source="interior-exterior-painting" defaultService="interior-exterior-painting" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
