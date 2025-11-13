import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Droplet, 
  Hammer, 
  Frame, 
  Home as Siding, 
  ShieldCheck,
  Mountain,
  Snowflake
} from "lucide-react";

const services = [
  {
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a stunning, functional space where memories are made. Custom cabinets, countertops, and layouts.",
    icon: <Home className="h-8 w-8" />,
    href: "/kitchen-remodeling",
  },
  {
    title: "Bathroom Remodeling",
    description: "Luxurious bathroom upgrades that combine style, comfort, and lasting value. From spa-like retreats to functional family baths.",
    icon: <Droplet className="h-8 w-8" />,
    href: "/bathroom-remodeling",
  },
  {
    title: "Exterior Services",
    description: "Comprehensive exterior solutions to protect and enhance your home's curb appeal and structural integrity.",
    icon: <Hammer className="h-8 w-8" />,
    href: "/exterior-services",
  },
  {
    title: "Decks",
    description: "Custom decks that extend your living space and enhance outdoor entertaining. Quality materials and expert craftsmanship.",
    icon: <Frame className="h-8 w-8" />,
    href: "/decks",
  },
  {
    title: "Siding",
    description: "Protect and beautify your home with premium siding solutions. Energy-efficient, durable, and maintenance-free options.",
    icon: <Siding className="h-8 w-8" />,
    href: "/siding",
  },
  {
    title: "Roofing",
    description: "Dependable roofing that safeguards your home and family. Expert installation and repairs for all roof types.",
    icon: <ShieldCheck className="h-8 w-8" />,
    href: "/roofing",
  },
  {
    title: "Hardscape",
    description: "Elegant patios, walkways, retaining walls, and outdoor features that impress. Transform your outdoor living spaces.",
    icon: <Mountain className="h-8 w-8" />,
    href: "/hardscape",
  },
  {
    title: "Snow Removal",
    description: "Reliable winter snow removal services to keep your property safe and accessible throughout the season.",
    icon: <Snowflake className="h-8 w-8" />,
    href: "/snow-removal",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive remodeling and exterior services for Massachusetts homeowners who demand excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Not sure which service you need?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contact us for a free consultation. We'll assess your project and recommend the best approach.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
