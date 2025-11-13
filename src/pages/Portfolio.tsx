import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Home, Droplet, Frame, Mountain } from "lucide-react";
import kitchenImage from "@/assets/kitchen-remodeling.jpg";
import bathroomImage from "@/assets/bathroom-remodeling.jpg";
import decksImage from "@/assets/decks.jpg";
import hardscapeImage from "@/assets/hardscape.jpg";

const projects = [
  {
    title: "Modern Kitchen Remodel",
    location: "Winchester, MA",
    service: "Kitchen Remodeling",
    image: kitchenImage,
    highlights: [
      "Custom cabinetry and quartz countertops",
      "Improved layout for better flow",
      "Under-cabinet lighting and upgraded appliances",
    ],
  },
  {
    title: "Spa-Inspired Bathroom",
    location: "Wellesley, MA",
    service: "Bathroom Remodeling",
    image: bathroomImage,
    highlights: [
      "Walk-in shower with glass enclosure",
      "Heated floors and premium tile",
      "Custom vanity and storage solutions",
    ],
  },
  {
    title: "Entertainer's Deck",
    location: "Newton, MA",
    service: "Decks",
    image: decksImage,
    highlights: [
      "Low-maintenance composite decking",
      "Integrated lighting and railing system",
      "Space planned for dining and lounging",
    ],
  },
  {
    title: "Outdoor Living Hardscape",
    location: "Lexington, MA",
    service: "Hardscape",
    image: hardscapeImage,
    highlights: [
      "Paver patio and seating wall",
      "Defined zones for fire pit and dining",
      "Drainage and grading improvements",
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl text-white/90">
              A sample of kitchens, baths, decks, and outdoor spaces we've completed for Massachusetts homeowners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-card border rounded-2xl overflow-hidden shadow-md flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.service}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">From concept to final walkthrough</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Every project is planned, scheduled, and executed with the same focus on organization,
                cleanliness, and communication that our clients love us for.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-accent" />
                  <span>Interior remodeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-accent" />
                  <span>Kitchen & bath upgrades</span>
                </div>
                <div className="flex items-center gap-2">
                  <Frame className="h-5 w-5 text-accent" />
                  <span>Decks & exterior enhancements</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="h-5 w-5 text-accent" />
                  <span>Outdoor living & hardscape</span>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl border shadow-md">
              <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
              <p className="text-muted-foreground mb-6">
                Share a bit about your ideas, and we'll follow up with a free, no-pressure estimate and timeline
                for your home.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">Request a Free Estimate</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
