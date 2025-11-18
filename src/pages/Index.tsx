import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { trackPhoneClick } from "@/lib/analytics";
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
import roofingImage from "@/assets/roofing.jpg";
import hardscapeImage from "@/assets/hardscape.jpg";
import snowImage from "@/assets/snow-removal.jpg";
import interiorExteriorPaintingImage from "@/assets/interior_exterior_painting.jpg";

const services = [
  {
    title: "Interior & Exterior Painting",
    description:
      "High-quality painting services with smooth, long-lasting finishes for interior and exterior surfaces. Ideal for full home updates or single-room transformations.",
    icon: <Siding className="h-8 w-8" />,
    href: "/interior-exterior-painting",
    image: interiorExteriorPaintingImage,
  },
  {
    title: "Decks, Fences & Carpentry",
    description:
      "Custom carpentry solutions including decks, wood fences, trim work, structural repairs, and detailed craftsmanship for both interior and exterior projects.",
    icon: <Frame className="h-8 w-8" />,
    href: "/decks",
    image: decksImage,
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Complete kitchen transformations with custom cabinetry, countertop upgrades, lighting improvements, and optimized layouts designed for functionality and style.",
    icon: <Home className="h-8 w-8" />,
    href: "/kitchen-remodeling",
    image: kitchenImage,
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Modern bathroom renovations with new vanities, showers, lighting, flooring, and layout improvements for comfort, durability, and elegance.",
    icon: <Droplet className="h-8 w-8" />,
    href: "/bathroom-remodeling",
    image: bathroomImage,
  },
  {
    title: "Construction & Home Remodeling",
    description:
      "Full remodeling and construction services, including room upgrades, structural work, exterior builds, and interior improvements.",
    icon: <Hammer className="h-8 w-8" />,
    href: "/roofing",
    image: roofingImage,
  },
  {
    title: "Drywall, Trim & Flooring Installation",
    description:
      "Professional drywall installation/repair, trim and molding upgrades, and durable, stylish flooring installation.",
    icon: <ShieldCheck className="h-8 w-8" />,
    href: "/hardscape",
    image: hardscapeImage,
  },
  {
    title: "Home Upgrades & Improvements",
    description:
      "Practical aesthetic and functional improvements, from small repairs to interior updates that modernize and add comfort.",
    icon: <Home className="h-8 w-8" />,
    href: "/home-upgrades",
    image: roofingImage,
  },
  {
    title: "Landscaping Services",
    description: "Basic outdoor maintenance and garden care.",
    icon: <Mountain className="h-8 w-8" />,
    href: "/landscaping",
    image: hardscapeImage,
  },
  {
    title: "Snow Removal",
    description: "Winter snow clearing when needed.",
    icon: <Snowflake className="h-8 w-8" />,
    href: "/services",
    image: snowImage,
  },
];

const testimonials = [
  {
    name: "Elena Mendez-Escobar",
    location: "Massachusetts",
    rating: 5,
    service: "General Home Services",
    text: "We had a great experience with Roque General Services! They were very responsive, took the time to understand our needs, delivered on time exactly as planned, communicated clearly throughout the process, and were very flexible as things came up. Overall, it was a very smooth process to complete a project we had been wanting for years.",
  },
  {
    name: "Zamawa Arenas",
    location: "Massachusetts",
    rating: 5,
    service: "Multiple Projects",
    text: "Fábio and the Roque Services team are great to work with. We’ve hired them for several projects, and they have always been responsive, easy to work with, and delivered high-quality results. Can’t recommend them highly enough!",
  },
  {
    name: "Laura Caballero",
    location: "Massachusetts",
    rating: 5,
    service: "General Construction & Remodeling",
    text: "This company is exceptional! They consistently deliver high-quality work across a wide range of projects. I was impressed by their reasonable pricing and how well they tailored their services to my needs. I would definitely work with them again!",
  },
];

const stats = [
  {
    value: "15+",
    label: "Years Experience",
    description: "Decades of combined expertise you can rely on.",
  },
  {
    value: "500+",
    label: "Projects Completed",
    description: "Proven results across Massachusetts.",
  },
  {
    value: "100%",
    label: "Satisfaction Rate",
    description: "Committed to delivering excellence.",
  },
  {
    value: "5.0",
    label: "Average Rating",
    description: "Quality homeowners consistently recommend.",
  },
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
              On Time. Well-Organized. <br />Built to Impress.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Premium interior & exterior painting, carpentry, and full home remodeling services for Massachusetts homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button size="lg" asChild className="text-lg bg-white text-navy hover:bg-white/90">
                <Link to="/portfolio">View Our Projects</Link>
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
                <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                <p className="mt-1 text-xs md:text-sm text-white/70 max-w-xs mx-auto">
                  {stat.description}
                </p>
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
              High-quality painting, carpentry, remodeling, and home improvement services  done right from start to finish.
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
              On time. Well organized. Built with attention to every detail.
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
                      We show up on time and keep your project moving.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Organized Job Sites</h3>
                    <p className="text-muted-foreground">
                      Clean, safe, and respectful of your home at all times.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proactive Communication</h3>
                    <p className="text-muted-foreground">
                      You'll always know what's happening and when.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
                    <p className="text-muted-foreground">
                      Premium materials, skilled workmanship, and attention to detail.
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
                Get a transparent estimate from experienced professionals — no pressure, no hidden fees.
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
