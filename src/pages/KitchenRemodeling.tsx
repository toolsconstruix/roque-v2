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
    question: "How long does a typical kitchen remodel take?",
    answer: "Most kitchen remodels take 4-8 weeks depending on the scope. We provide a detailed timeline upfront and keep you informed throughout the process.",
  },
  {
    question: "What's included in your kitchen remodeling service?",
    answer: "We handle everything: design consultation, cabinets, countertops, flooring, lighting, plumbing, electrical, and finishing touches. You get a complete, turnkey solution.",
  },
  {
    question: "Can I stay in my home during the renovation?",
    answer: "Yes! We work to minimize disruption and maintain a clean, safe workspace. Many clients continue living at home throughout the project.",
  },
  {
    question: "Do you help with design and material selection?",
    answer: "Absolutely. We provide expert guidance on layouts, materials, colors, and finishes to ensure your kitchen is both beautiful and functional.",
  },
  {
    question: "What areas do you serve for kitchen remodeling?",
    answer: "We serve Winchester, Wellesley, Weston, Newton, Lexington, Brookline, Cambridge, Arlington, Belmont, Needham, and surrounding Massachusetts communities.",
  },
];

export default function KitchenRemodeling() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
              Kitchen Remodeling
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kitchen Transformations That Inspire
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Create the heart of your home with custom kitchen remodeling that combines stunning design, superior craftsmanship, and exceptional value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                <Link to="/portfolio">View Kitchen Projects</Link>
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
              <h2 className="text-3xl font-bold mb-6">Why Remodel Your Kitchen?</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Your kitchen is more than just a place to cook — it's where families gather, memories are made, and guests are entertained. An outdated or inefficient kitchen can impact your daily life and your home's value.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Increase home value by up to 70% of project cost</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Improve functionality and workflow</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Enhance energy efficiency with modern appliances</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Create a space that reflects your style</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Roque Approach</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  We don't just renovate kitchens — we transform them. Our method combines punctuality, organization, and meticulous attention to detail to deliver results that exceed expectations.
                </p>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">What Sets Us Apart:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Detailed project planning to avoid surprises</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Daily cleanup and organized job sites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Clear communication at every phase</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Premium materials and skilled craftsmen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>On-time completion guarantee</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Kitchen Remodeling Process</h2>
            <p className="text-lg text-muted-foreground">
              A proven approach that ensures your project stays on schedule, on budget, and exceeds expectations.
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
              Kitchen Remodeling Throughout Massachusetts
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              We proudly serve homeowners in Winchester, Wellesley, Weston, Newton, Lexington, Brookline, Cambridge, Arlington, Belmont, Needham, and surrounding communities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {["Winchester", "Wellesley", "Weston", "Newton", "Lexington", "Brookline", "Cambridge", "Arlington", "Belmont", "Needham"].map((city) => (
                <div key={city} className="py-2 px-4 bg-muted/50 rounded-lg">
                  {city}
                </div>
              ))}
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
                Ready for Your Dream Kitchen?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get a detailed estimate for your kitchen remodeling project. No pressure, no hidden fees — just honest pricing from experienced professionals.
              </p>
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="font-semibold text-lg mb-2">Call for immediate assistance:</p>
                <a href="tel:+15555555555" className="text-2xl font-bold text-accent hover:text-accent/80">
                  (555) 555-5555
                </a>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Estimate</h3>
              <LeadForm source="kitchen-remodeling" defaultService="kitchen-remodeling" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
