import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBadges } from "@/components/TrustBadges";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TestimonialCard } from "@/components/TestimonialCard";
import { LeadForm } from "@/components/LeadForm";
import { 
  Home, 
  Droplet, 
  Hammer, 
  Frame, 
  Home as Siding, 
  ShieldCheck,
  Mountain,
  Snowflake,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import kitchenImage from "@/assets/kitchen-remodeling.jpg";
import bathroomImage from "@/assets/bathroom-remodeling.jpg";
import decksImage from "@/assets/decks.jpg";
import sidingImage from "@/assets/siding.jpg";
import roofingImage from "@/assets/roofing.jpg";
import hardscapeImage from "@/assets/hardscape.jpg";

const services = [
  {
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a stunning, functional space where memories are made.",
    icon: <Home className="h-8 w-8" />,
    href: "/kitchen-remodeling",
    image: kitchenImage,
  },
  {
    title: "Bathroom Remodeling",
    description: "Luxurious bathroom upgrades that combine style, comfort, and lasting value.",
    icon: <Droplet className="h-8 w-8" />,
    href: "/bathroom-remodeling",
    image: bathroomImage,
  },
  {
    title: "Decks",
    description: "Custom decks that extend your living space and enhance outdoor entertaining.",
    icon: <Frame className="h-8 w-8" />,
    href: "/decks",
    image: decksImage,
  },
  {
    title: "Siding",
    description: "Protect and beautify your home with premium siding solutions.",
    icon: <Siding className="h-8 w-8" />,
    href: "/siding",
    image: sidingImage,
  },
  {
    title: "Roofing",
    description: "Dependable roofing that safeguards your home and family.",
    icon: <ShieldCheck className="h-8 w-8" />,
    href: "/roofing",
    image: roofingImage,
  },
  {
    title: "Hardscape",
    description: "Elegant patios, walkways, and outdoor features that impress.",
    icon: <Mountain className="h-8 w-8" />,
    href: "/hardscape",
    image: hardscapeImage,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Winchester, MA",
    rating: 5,
    service: "Kitchen Remodeling",
    text: "Roque General Services transformed our dated kitchen into a modern masterpiece. They were on time every single day, kept the workspace immaculate, and the attention to detail was extraordinary. Highly recommend!",
  },
  {
    name: "Michael Chen",
    location: "Wellesley, MA",
    rating: 5,
    service: "Bathroom Remodeling",
    text: "From design to completion, the team was professional and organized. Our new bathroom is stunning, and they finished exactly when promised. Worth every penny.",
  },
  {
    name: "Jennifer Rodriguez",
    location: "Newton, MA",
    rating: 5,
    service: "Deck Construction",
    text: "We absolutely love our new deck! The craftsmanship is exceptional, and they made the entire process stress-free. Our backyard is now the neighborhood gathering spot.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "5.0", label: "Average Rating" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury home in Massachusetts" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
              Proudly Serving Massachusetts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              On-time. Organized. <br />Built to impress.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Premium kitchen & bath remodeling and exterior upgrades for discerning Massachusetts homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg">
                <Link to="/contact">Get a Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                <Link to="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <TrustBadges />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              From kitchen & bath craftsmanship to exterior upgrades and winter snow removal — done right.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              Schedules that stick. Sites that stay clean. Results that wow.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Massachusetts Homeowners Choose Roque
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Punctual & Reliable</h3>
                    <p className="text-muted-foreground">
                      We show up on time, every time. Your schedule matters to us.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Organized Job Sites</h3>
                    <p className="text-muted-foreground">
                      Clean, safe, and respectful of your home throughout the project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proactive Communication</h3>
                    <p className="text-muted-foreground">
                      You'll always know what's happening, when, and why.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
                    <p className="text-muted-foreground">
                      Premium materials, skilled workmanship, and attention to every detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-navy to-navy-light p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Hammer className="h-24 w-24 mx-auto mb-6 text-accent" />
                  <p className="text-2xl font-semibold">
                    "From first call to final walkthrough — <br />
                    organized, on time, and on your side."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from real Massachusetts homeowners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">
                Read More Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Home?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get a detailed, transparent estimate for your project. No pressure, no hidden fees — just honest pricing from experienced professionals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Free consultation & estimate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3" />
                  <span>Licensed & insured</span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <p className="font-semibold text-lg mb-2">Or call us directly:</p>
                <a href="tel:+15555555555" className="text-2xl font-bold text-accent hover:text-accent/80">
                  (555) 555-5555
                </a>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Estimate</h3>
              <LeadForm source="homepage" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
