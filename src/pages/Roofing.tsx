import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { trackPhoneClick } from "@/lib/analytics";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const roofingBenefits = [
  "Protect your home with high-performance roofing systems",
  "Improve curb appeal with clean, modern lines",
  "Increase energy efficiency and comfort",
  "Prevent leaks and costly structural damage",
];

const roofingTypes = [
  "Asphalt shingle replacement",
  "Roof repairs and leak diagnostics",
  "Flashing and chimney details",
  "Gutters and drainage improvements",
];

export default function Roofing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
              Roofing Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Roofing Built to Withstand New England Weather
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From complete roof replacement to targeted repairs, we install durable, clean roofing systems that protect
              your home and elevate your curb appeal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Roofing Estimate</Link>
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
              <h2 className="text-3xl font-bold mb-6">Why Invest in a Quality Roof?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Your roof is your home&apos;s first line of defense. A tired or failing roof can lead to leaks, interior
                damage, and higher energy bills. We help you choose the right solution for your property and budget.
              </p>
              <div className="space-y-3">
                {roofingBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Roofing Services We Offer</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We focus on organized, well-planned roofing projects that respect your property and your time.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <ul className="space-y-2">
                  {roofingTypes.map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Predictable Roofing Process</h2>
            <p className="text-lg text-muted-foreground">
              Our structured process keeps your project on schedule and minimizes disruption to your daily life.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Home?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Request a detailed roofing estimate. You&apos;ll get clear pricing, a defined timeline, and a team that
                treats your property with respect.
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
              <h3 className="text-2xl font-bold mb-6">Get Your Roofing Estimate</h3>
              <LeadForm source="roofing" defaultService="roofing" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
