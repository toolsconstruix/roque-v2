import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const landscapingBenefits = [
  "Keep your property looking clean and well cared-for",
  "Improve curb appeal with simple, effective maintenance",
  "Protect lawns and plantings with consistent care",
  "Free up your time while we handle the outdoor work",
];

const landscapingServices = [
  "Basic lawn and yard maintenance",
  "Seasonal cleanups and debris removal",
  "Mulch refresh and bed edging",
  "Simple planting and small enhancements",
];

export default function Landscaping() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
              Landscaping Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Clean, Simple Landscaping for Everyday Curb Appeal
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Basic landscaping and outdoor maintenance to keep your property looking neat, tidy, and welcoming throughout
              the seasons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Landscaping Estimate</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
              >
                <Link to="/portfolio">View Outdoor Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Maintain Your Landscaping?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Consistent, basic landscaping helps your home feel well cared-for, supports property value, and makes a
                strong first impression.
              </p>
              <div className="space-y-3">
                {landscapingBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Landscaping Services We Offer</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Straightforward, reliable outdoor maintenance with the same organization and professionalism as our
                remodeling projects.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <ul className="space-y-2">
                  {landscapingServices.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Organized Service Process</h2>
            <p className="text-lg text-muted-foreground">
              On-time arrivals, clear communication, and tidy job sites — the same standards we bring to every project.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Yard Care?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tell us about your property and we&apos;ll provide a clear, no-pressure estimate for landscaping services.
              </p>
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="font-semibold text-lg mb-2">Call for immediate assistance:</p>
                <a
                  href="tel:+17815269534"
                  className="text-2xl font-bold text-accent hover:text-accent/80"
                >
                  (781) 526-9534
                </a>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-6">Get Your Landscaping Estimate</h3>
              <LeadForm source="landscaping" defaultService="landscaping" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
