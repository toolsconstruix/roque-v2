import { Link, useLocation } from "react-router-dom";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { trackPhoneClick } from "@/lib/analytics";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Roque General Services"
            className="h-20 w-20 aspect-square object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center items-center space-x-6">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                to={item.href}
                className={[
                  "relative pb-1 text-base font-medium transition-all duration-200 border-b-2",
                  "hover:text-primary hover:border-accent",
                  isActive
                    ? "text-primary border-accent"
                    : "text-foreground/80 border-transparent",
                ].join(" ")}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+17815269534"
            onClick={(e) => trackPhoneClick(e, "tel:+17815269534")}
            className="flex items-center text-sm font-semibold text-primary hover:text-primary/90"
          >
            <Phone className="mr-2 h-4 w-4" />
            (781) 526-9534
          </a>
          <Button asChild>
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 lg:hidden">
          <a href="tel:+17815269534" onClick={(e) => trackPhoneClick(e, "tel:+17815269534")}>
            <Button size="icon" variant="ghost">
              <Phone className="h-5 w-5" />
            </Button>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={[
                        "text-base font-medium transition-colors",
                        "hover:text-primary",
                        isActive ? "text-accent" : "text-foreground",
                      ].join(" ")}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Button asChild className="mt-4">
                  <Link to="/contact">Get a Free Estimate</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
