import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";
import { 
  Home as HomeIcon, 
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
      "High-quality painting services with smooth, long-lasting finishes for interior and exterior surfaces.",
    icon: <Siding className="h-8 w-8" />,
    href: "/interior-exterior-painting",
    image: interiorExteriorPaintingImage,
  },
  {
    title: "Decks, Fences & Carpentry",
    description:
      "Custom carpentry solutions including decks, wood fences, trim work, and structural repairs.",
    icon: <Frame className="h-8 w-8" />,
    href: "/decks",
    image: decksImage,
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Complete kitchen transformations with custom cabinetry, countertop upgrades, and optimized layouts.",
    icon: <HomeIcon className="h-8 w-8" />,
    href: "/kitchen-remodeling",
    image: kitchenImage,
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Modern bathroom renovations with new vanities, showers, lighting, and flooring.",
    icon: <Droplet className="h-8 w-8" />,
    href: "/bathroom-remodeling",
    image: bathroomImage,
  },
  {
    title: "Construction & Home Remodeling",
    description:
      "Full remodeling and construction services, including room upgrades and structural work.",
    icon: <Hammer className="h-8 w-8" />,
    href: "/roofing",
    image: roofingImage,
  },
  {
    title: "Drywall, Trim & Flooring Installation",
    description:
      "Professional drywall installation/repair, trim and molding upgrades, and flooring installation.",
    icon: <ShieldCheck className="h-8 w-8" />,
    href: "/hardscape",
    image: hardscapeImage,
  },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 404 Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <AlertCircle className="h-12 w-12 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-xl text-white/90 mb-8">
              Sorry, we couldn't find the page you're looking for. But don't worry, we have plenty of services to help with your home improvement needs!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Looking for something specific? Check out our comprehensive range of home improvement services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Popular Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                to="/" 
                className="p-6 bg-card border rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <Home className="h-8 w-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold">Home</h3>
              </Link>
              <Link 
                to="/portfolio" 
                className="p-6 bg-card border rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <Frame className="h-8 w-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold">Portfolio</h3>
              </Link>
              <Link 
                to="/about" 
                className="p-6 bg-card border rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <HomeIcon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold">About Us</h3>
              </Link>
              <Link 
                to="/testimonials" 
                className="p-6 bg-card border rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <ShieldCheck className="h-8 w-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold">Testimonials</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
