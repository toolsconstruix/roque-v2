import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Mail, Home } from "lucide-react";
import { trackPhoneClick } from "@/lib/analytics";

export default function Thanks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl text-white/90 mb-4">
              We've received your message and appreciate you reaching out to Roque General Services.
            </p>
            <p className="text-lg text-white/80">
              Our team will review your project details and get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Happens Next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">We Review Your Request</h3>
                <p className="text-muted-foreground">
                  Our team carefully reviews your project details and requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">We Contact You</h3>
                <p className="text-muted-foreground">
                  We'll reach out within 24 hours to discuss your project and schedule a consultation.
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Estimate</h3>
                <p className="text-muted-foreground">
                  After our consultation, we'll provide a clear, no-pressure estimate for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-center mb-6">Need Immediate Assistance?</h2>
              <p className="text-center text-muted-foreground mb-8">
                If your project is urgent, feel free to contact us directly:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call or Text</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Call: <a href="tel:+17815269534" onClick={(e) => trackPhoneClick(e, "tel:+17815269534")} className="text-accent hover:underline">+1 (781) 526-9534</a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Text: <span className="text-foreground">+1 (339) 674-8936</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:roquegservices@gmail.com" className="text-accent hover:underline">
                        roquegservices@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">While You Wait</h2>
            <p className="text-muted-foreground mb-8">
              Explore more about our services and see examples of our work:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">See Our Portfolio</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/testimonials">Read Testimonials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
