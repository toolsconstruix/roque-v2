import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Elena Mendez-Escobar",
    location: "",
    rating: 5,
    service: "General Review",
    text:
      "We had a great experience with Roque General Services! They were very responsive, put time and effort into understanding our needs, delivered on time and exactly as planned, communicated clearly throughout the process, and were very flexible as things came up. Overall, a very smooth process to complete a project we had been targeting for years.",
  },
  {
    name: "Aaron Forrest",
    location: "",
    rating: 5,
    service: "Bathroom Remodeling",
    text:
      "The team from Roque did an outstanding job on our bathroom renovation and we love the results. Strongly recommend using them for any future projects.",
  },
  {
    name: "Zamawa Arenas",
    location: "",
    rating: 5,
    service: "General Review",
    text:
      "Fábio and the Roque Services team are great to work with. We’ve hired them for several projects and they have always been responsive, easy to work with, and delivered high-quality services. Can’t recommend them highly enough!",
  },
  {
    name: "Laura Caballero",
    location: "",
    rating: 5,
    service: "General Review",
    text:
      "This company is exceptional! They consistently deliver high-quality work across a wide range of projects. I was impressed by their reasonable pricing and how well they tailored their services to my needs. I would definitely work with them again!",
  },
  {
    name: "James Luke",
    location: "",
    rating: 5,
    service: "General Carpentry / Repairs",
    text:
      "Roque General Services did a great job installing a range hood and repairing our portico. Fabios, both father and son, were easy to work with. Their price was very competitive. They went over and above the contract scope and performed additional work as needed. I would hire them again without any hesitation.",
  },
  {
    name: "J P",
    location: "",
    rating: 5,
    service: "General Review",
    text: "Great services! Affordable. Hard working. Would recommend.",
  },
  {
    name: "Sean Hogan",
    location: "",
    rating: 5,
    service: "General Review",
    text: "Best business, friendly, timely, great people. Highly recommend.",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero / Intro */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimonials</h1>
            <p className="text-xl text-white/90">
              Real feedback from homeowners who trusted Roque General Services with their projects.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel section */}
      <section className="py-20 bg-muted/30">
        <div className="container space-y-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground">
              Organized crews, clear communication, and results that continue to look great long after the job is done.
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.name}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full">
                      <TestimonialCard {...testimonial} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
