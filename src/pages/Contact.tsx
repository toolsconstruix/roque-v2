import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Roque General Services</h1>
            <p className="text-lg md:text-xl text-white/85">
              Tell us a bit about your project and we&apos;ll follow up with a clear, no-pressure estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            {/* Contact info */}
            <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Get in touch</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Reach out by phone, email, or the form. We&apos;ll respond as soon as possible to talk through your project.
              </p>

              <div className="space-y-5 text-sm md:text-base text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p>
                      Call: <a href="tel:+17815269534" className="text-accent hover:underline">+1 (781) 526 9534</a>
                    </p>
                    <p>
                      Text: <span className="text-foreground">+1 (339) 674 8936</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p>
                      <a href="mailto:roquegservices@gmail.com" className="text-accent hover:underline">
                        roquegservices@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p>138 N Union St #01</p>
                    <p>Arlington, MA 02474</p>
                    <p className="mt-1 font-medium">Serving all of Massachusetts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Tell us about your project</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Share a few details about your home, and we&apos;ll follow up with next steps, timing, and a clear estimate.
              </p>
              <LeadForm source="contact-page" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
