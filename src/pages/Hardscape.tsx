import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { trackPhoneClick } from "@/lib/analytics";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const hardscapeBenefits = [
  "Create outdoor spaces that feel like an extension of your home",
  "Add long-lasting value with premium stone and paver work",
  "Improve drainage and reduce muddy, unusable areas",
  "Design walkways and patios that are safe and easy to maintain",
];

const hardscapeServices = [
  "Custom patios and outdoor living areas",
  "Walkways and front entries",
  "Retaining walls and seating walls",
  "Driveway aprons and borders",
];

export default function Hardscape() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
              Hardscape & Outdoor Living
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hardscape Spaces Built for Everyday Enjoyment
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Patios, walkways, and outdoor living areas designed and built with the same organization and attention to
              detail we bring to our remodeling projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Hardscape Estimate</Link>
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
              <h2 className="text-3xl font-bold mb-6">Why Invest in Hardscape?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Well-planned hardscape brings structure and usability to your property. We design spaces that look
                timeless and function beautifully in all seasons.
              </p>
              <div className="space-y-3">
                {hardscapeBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Hardscape Services We Offer</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We handle design, layout, and installation with clear communication and organized job sites.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <ul className="space-y-2">
                  {hardscapeServices.map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Organized Installation Process</h2>
            <p className="text-lg text-muted-foreground">
              From excavation to final compaction, we follow a detailed process to ensure a durable, long-lasting
              hardscape installation.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Outdoor Space?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tell us about your project and we&apos;ll provide a detailed estimate and plan to bring your outdoor space
                to life.
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
              <h3 className="text-2xl font-bold mb-6">Get Your Hardscape Estimate</h3>
              <LeadForm source="hardscape" defaultService="hardscape" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
