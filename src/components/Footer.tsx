import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { trackPhoneClick } from "@/lib/analytics";
import logo from "@/assets/logo.png";

const services = [
  { name: "Kitchen Remodeling", href: "/kitchen-remodeling" },
  { name: "Bathroom Remodeling", href: "/bathroom-remodeling" },
  { name: "Exterior Services", href: "/exterior-services" },
  { name: "Decks", href: "/decks" },
  { name: "Siding", href: "/siding" },
  { name: "Roofing", href: "/roofing" },
  { name: "Hardscape", href: "/hardscape" },
  { name: "Snow Removal", href: "/snow-removal" },
];

const servicedCities = [
  "Winchester", "Wellesley", "Weston", "Newton", "Lexington",
  "Brookline", "Cambridge", "Arlington", "Belmont", "Needham"
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Roque General Services"
              className="h-20 w-20 rounded-full object-contain"
            />
            <h3 className="text-lg font-semibold">Roque General Services</h3>
            <p className="text-sm text-primary-foreground/80">
              Premium remodeling and exterior services for Massachusetts homeowners.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+17815269534"
                onClick={(e) => trackPhoneClick(e, "tel:+17815269534")}
                className="flex items-center text-sm hover:text-accent transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                (781) 526-9534
              </a>
              <a href="mailto:info@roquegeneralservices.com" className="flex items-center text-sm hover:text-accent transition-colors">
                <Mail className="mr-2 h-4 w-4" />
                info@roquegeneralservices.com
              </a>
              <div className="flex items-start text-sm">
                <MapPin className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Serving Massachusetts</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <p className="text-sm text-primary-foreground/80 mb-3">
              Proudly serving affluent Massachusetts communities:
            </p>
            <ul className="text-sm text-primary-foreground/80 space-y-1">
              {servicedCities.slice(0, 6).map((city) => (
                <li key={city}>{city}</li>
              ))}
              <li className="text-accent">and more...</li>
            </ul>
          </div>

          {/* Quick Links & Trust */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p className="font-semibold text-primary-foreground">Licensed & Insured</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/share/1D5wZ3cknr/"
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/roque_services/"
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Roque General Services. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
