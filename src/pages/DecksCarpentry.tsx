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
    question: "Do you build both wood and composite decks?",
    answer:
      "Yes. We build and repair both traditional wood decks and low-maintenance composite systems, and we can help you choose the best option for your home and budget.",
  },
  {
    question: "Can you match my existing railings or trim details?",
    answer:
      "We can match or upgrade existing railings, posts, and trim details so new work blends seamlessly with your home or creates a fresh, updated look.",
  },
  {
    question: "Do you handle permits for decks and exterior carpentry?",
    answer:
      "When permits are required, we can guide you through the process or coordinate with your local building department as part of the project.",
  },
  {
    question: "Can you repair an existing deck instead of replacing it?",
    answer:
      "Often, we can replace boards, railings, or structural elements without rebuilding the entire deck. We'll inspect the structure and recommend the safest, most cost-effective option.",
  },
  {
    question: "Which areas do you serve for deck and carpentry projects?",
    answer:
      "We serve Winchester, Wellesley, Weston, Newton, Lexington, Brookline, Cambridge, Arlington, Belmont, Needham, and nearby Massachusetts communities.",
  },
];

export default function DecksCarpentry() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
              Decks, Fences & Carpentry
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Outdoor Spaces Built to Last
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From custom decks and railings to exterior trim and repairs, we create outdoor structures that look great
              and stand up to New England weather.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Free Deck & Carpentry Estimate</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
              >
                <Link to="/portfolio">View Deck & Exterior Projects</Link>
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
              <h2 className="text-3xl font-bold mb-6">Why Upgrade Your Deck or Exterior Carpentry?</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  A well-built deck or exterior structure extends your living space and adds real value to your home.
                  But aging, loose, or poorly built carpentry can be unsafe and unattractive.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Create a safe, usable outdoor space for family and guests</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Replace rotting boards, loose railings, and wobbly stairs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Upgrade to low-maintenance materials for less upkeep</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Improve curb appeal with clean, detailed trim and finishes</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">How Roque Builds Better Outdoor Spaces</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  We combine careful planning, solid structure, and clean finishing details to deliver decks, fences, and
                  exterior carpentry that feel solid underfoot and look sharp from every angle.
                </p>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">What You Can Expect:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Attention to framing, footings, and structural details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Clean, consistent spacing on boards, railings, and pickets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Thoughtful layout for stairs, landings, and transitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Premium fasteners and materials designed to last</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>Respectful crews who keep your property organized</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Deck & Carpentry Process</h2>
            <p className="text-lg text-muted-foreground">
              From initial concept to final walkthrough, we keep your project organized, on schedule, and clearly
              communicated.
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
              Deck & Exterior Carpentry Throughout Massachusetts
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              We proudly build and repair decks, railings, fences, and exterior trim in Winchester, Wellesley, Weston,
              Newton, Lexington, Brookline, Cambridge, Arlington, Belmont, Needham, and surrounding communities.
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
                Ready to Upgrade Your Deck or Exterior Carpentry?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get a detailed estimate for your deck, fence, or exterior carpentry project. No pressure, no hidden fees —
                just clear pricing and a well-organized plan.
              </p>
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="font-semibold text-lg mb-2">Call for immediate assistance:</p>
                <a href="tel:+17815269534" className="text-2xl font-bold text-accent hover:text-accent/80">
                  (781) 526-9534
                </a>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Deck & Carpentry Estimate</h3>
              <LeadForm source="decks-carpentry" defaultService="decks-carpentry" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
