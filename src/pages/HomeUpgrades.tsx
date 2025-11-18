import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { trackPhoneClick } from "@/lib/analytics";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const upgradeBenefits = [
  "Modernize tired rooms with updated finishes and details",
  "Improve comfort and functionality with thoughtful upgrades",
  "Address small issues before they become expensive repairs",
  "Refresh your home without a full-scale renovation",
];

const upgradeExamples = [
  "Drywall repair and smooth wall finishes",
  "Trim, doors, and interior carpentry updates",
  "Lighting, fixtures, and hardware replacements",
  "Small layout tweaks that make daily life easier",
];

export default function HomeUpgrades() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
              Home Upgrades & Improvements
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Practical Upgrades That Make Your Home Feel New Again
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From minor repairs to thoughtful interior updates, we help you refresh and improve your home without the
              stress of a major renovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Home Upgrades Estimate</Link>
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
              <h2 className="text-3xl font-bold mb-6">Why Plan Home Upgrades?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Small, well-planned improvements can dramatically change how your home looks and feels — without the
                cost and disruption of a full remodel.
              </p>
              <div className="space-y-3">
                {upgradeBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Types of Improvements We Handle</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We combine organization, clear communication, and quality craftsmanship to complete upgrades with
                minimal disruption.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <ul className="space-y-2">
                  {upgradeExamples.map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Organized Project Process</h2>
            <p className="text-lg text-muted-foreground">
              The same on-time, well-organized approach we use on large remodels — applied to your home upgrades.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Home?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Share your ideas and we&apos;ll provide a clear, detailed estimate for your home upgrades.
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
              <h3 className="text-2xl font-bold mb-6">Get Your Home Upgrades Estimate</h3>
              <LeadForm source="home-upgrades" defaultService="home-upgrades" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
