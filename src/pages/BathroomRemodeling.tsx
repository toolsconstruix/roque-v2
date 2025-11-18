import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { trackPhoneClick } from "@/lib/analytics";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How long does a typical bathroom remodel take?",
    answer:
      "Most bathroom remodels take 2-4 weeks depending on the size, layout changes, and tile or custom work involved. We provide a clear schedule before work starts.",
  },
  {
    question: "Do you handle plumbing and electrical work?",
    answer:
      "Yes. We coordinate licensed professionals for all necessary plumbing and electrical work so your bathroom is safe, functional, and up to code.",
  },
  {
    question: "Can you work within my existing bathroom layout?",
    answer:
      "We can either refresh your existing layout with new finishes or redesign the space for better flow, storage, and accessibility.",
  },
  {
    question: "Do you help with tile, fixtures, and finish selections?",
    answer:
      "We guide you through choosing tile, fixtures, vanities, lighting, and finishes that fit your style, budget, and maintenance preferences.",
  },
  {
    question: "Which areas do you serve for bathroom remodeling?",
    answer:
      "We serve Winchester, Wellesley, Weston, Newton, Lexington, Brookline, Cambridge, Arlington, Belmont, Needham, and surrounding Massachusetts communities.",
  },
];

export default function BathroomRemodeling() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
              Bathroom Remodeling
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bathrooms Designed for Comfort & Style
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transform your bathroom with modern fixtures, smart layouts, and durable finishes that look great and work
              hard every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Free Bathroom Estimate</Link>
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
              <h2 className="text-3xl font-bold mb-6">Why Remodel Your Bathroom?</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Bathrooms are some of the most-used rooms in your home. An outdated, cramped, or poorly ventilated
                  bathroom can be frustrating and lower your home's value.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Improve everyday comfort with better layouts and storage</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Upgrade to modern, water-efficient fixtures and lighting</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Eliminate leaks, moisture issues, and damaged finishes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Create a spa-like space with tile, glass, and custom details</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">The Roque Bathroom Remodeling Approach</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  We manage every detail of your bathroom remodel, from demolition and rough plumbing to tile work and
                  final fixtures — keeping the site clean and the process organized.
                </p>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">What You Can Expect:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Clear scope of work and timeline before we begin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Daily cleanup and protection of adjacent spaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Expert tile installation for floors, showers, and walls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Thoughtful lighting, ventilation, and storage solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Thorough final walkthrough to ensure you're thrilled</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Bathroom Remodeling Process</h2>
            <p className="text-lg text-muted-foreground">
              A structured, step-by-step process that keeps your bathroom project on track and your home as livable as
              possible during the work.
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
              Bathroom Remodeling Across Massachusetts
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              We remodel bathrooms in Winchester, Wellesley, Weston, Newton, Lexington, Brookline, Cambridge, Arlington,
              Belmont, Needham, and surrounding communities.
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
                Ready for a Better Bathroom?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get a detailed estimate for your bathroom remodel. No pressure, no hidden fees — just clear pricing and a
                well-organized plan.
              </p>
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="font-semibold text-lg mb-2">Call for immediate assistance:</p>
                <a
                  href="tel:+17815269534"
                  onClick={(e) => trackPhoneClick(e, "tel:+17815269534")}
                  className="text-2xl font-bold text-accent hover:text-accent/80"
                >
                  (781) 526-9534
                </a>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Bathroom Estimate</h3>
              <LeadForm source="bathroom-remodeling" defaultService="bathroom-remodeling" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
