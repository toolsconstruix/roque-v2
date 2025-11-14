import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Sparkles, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Roque General Services</h1>
            <p className="text-xl text-white/90">
              Professional, well-organized, and committed to quality craftsmanship for Massachusetts homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Approach */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Roque General Services was founded with a simple approach: show up on time, stay organized, communicate
              clearly, and deliver work that stands the test of time. Since then, we&apos;ve grown through referrals from
              Massachusetts homeowners who appreciate dependable crews and consistent results.
            </p>
            <p className="text-lg text-muted-foreground">
              From small home improvements to full interior renovations, our team brings hands-on experience and a
              structured, professional process. Every project receives a clear plan, a realistic timeline, and a clean,
              orderly job site from start to finish.
            </p>
          </div>

          <div className="space-y-4 bg-card border rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-2">What you can expect working with us</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold">Clear scopes and timelines</p>
                  <p>Transparent estimates, realistic schedules, and no unexpected changes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold">Respect for your home</p>
                  <p>Protected surfaces, organized job sites, and crews who treat your space with care.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold">Quality in the details</p>
                  <p>Consistent finishes, clean lines, and craftsmanship designed to last.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why homeowners choose Roque</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Many of our projects come from returning clients and referrals — a direct result of communication that
              stays clear, schedules that stay on track, and results that continue looking great long after completion.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                <span>Fully licensed and insured across Massachusetts.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                <span>Committed to punctual, well-organized job sites.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                <span>Focused on long-term relationships, not one-and-done projects.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-card border p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-accent mb-1">15+</p>
              <p className="text-sm font-medium">Years of experience</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Decades of combined expertise in residential interior and exterior work.
              </p>
            </div>
            <div className="rounded-2xl bg-card border p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-accent mb-1">500+</p>
              <p className="text-sm font-medium">Projects completed</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Painting, carpentry, kitchens, baths, decks, and full renovations across Massachusetts.
              </p>
            </div>
            <div className="rounded-2xl bg-card border p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-accent mb-1">100%</p>
              <p className="text-sm font-medium">Commitment to satisfaction</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Every project gets our full attention — the details matter.
              </p>
            </div>
            <div className="rounded-2xl bg-card border p-6 text-center shadow-sm">
              <Users className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="text-sm font-medium">Built on referrals</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Most new clients come through a recommendation from someone we&apos;ve worked with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to talk about your project?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Share a bit about your home, and we&apos;ll follow up with a clear plan, timeline, and estimate — with no
            pressure.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
