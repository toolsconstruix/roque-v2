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
import kitchenImage from "@/assets/kitchen-remodeling.jpg";
import bathroomImage from "@/assets/bathroom-remodeling.jpg";
import decksImage from "@/assets/decks.jpg";
import sidingImage from "@/assets/siding.jpg";
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
    href: "/services",
    image: hardscapeImage,
  },
  {
    title: "Snow Removal",
    description: "Winter snow clearing when needed.",
    icon: <Snowflake className="h-8 w-8" />,
    href: "/snow-removal",
    image: snowImage,
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
