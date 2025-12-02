import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { trackPhoneClick } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { ProcessSteps } from "@/components/ProcessSteps";
import { LeadForm } from "@/components/LeadForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceDetail() {
    const { slug } = useParams();

    const { data: service, isLoading } = useQuery({
        queryKey: ['service', slug],
        queryFn: async () => {
            const { data, error } = await supabase
                .from('services')
                .select('*')
                .eq('slug', slug)
                .single();

            if (error) throw error;
            return data;
        }
    });

    useEffect(() => {
        if (service?.title) {
            document.title = `${service.title} | Roque General Services`;
        }
    }, [service]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1 container py-20">
                    <Skeleton className="h-12 w-3/4 mb-4" />
                    <Skeleton className="h-6 w-1/2 mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Skeleton className="h-64 w-full" />
                        <Skeleton className="h-64 w-full" />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1 container py-20 text-center">
                    <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
                    <p className="mb-8">The service you are looking for does not exist.</p>
                    <Button asChild>
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }

    const serviceAreas = [
        "Winchester", "Wellesley", "Weston", "Newton", "Lexington",
        "Brookline", "Cambridge", "Arlington", "Belmont", "Needham"
    ];

    // Use dynamic FAQs or fallback to empty array
    const faqs = service.faqs && Array.isArray(service.faqs) && service.faqs.length > 0
        ? service.faqs
        : [
            {
                question: `How long does a typical ${service.title} project take?`,
                answer: "Timeline varies based on the scope of work. We provide a detailed schedule with our estimate."
            },
            {
                question: "Do you provide free estimates?",
                answer: "Yes, we offer free, no-obligation estimates for all our services."
            },
            {
                question: "Are you licensed and insured?",
                answer: "Yes, Roque General Services is fully licensed and insured in Massachusetts."
            },
            {
                question: "What materials do you use?",
                answer: "We use only high-quality materials from trusted manufacturers to ensure lasting results."
            }
        ];

    // Use dynamic benefits or fallback
    const benefits = service.benefits && Array.isArray(service.benefits) && service.benefits.length > 0
        ? service.benefits
        : [
            "Premium materials and lasting durability",
            "Expert craftsmanship and attention to detail",
            "Clean, organized, and safe job sites",
            "Timely completion within budget"
        ];

    // Use dynamic features or fallback
    const features = service.features && Array.isArray(service.features) && service.features.length > 0
        ? service.features
        : [
            "Thorough assessment and detailed planning",
            "Clear communication throughout the project",
            "Protection of your property and belongings",
            "Daily cleanup and organized workspace",
            "Final walkthrough to ensure satisfaction"
        ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="bg-navy text-white py-20 md:py-28">
                <div className="container">
                    <div className="max-w-3xl">
                        <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                            Service: {service.title}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            {service.seo_title || `Flawless ${service.title} for Your Home`}
                        </h1>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                            {service.short_desc || service.description?.substring(0, 150) + "..."}
                        </p>
                        <Button size="lg" asChild className="text-lg bg-accent text-white hover:bg-accent/90">
                            <Link to="/contact">Get a Free Estimate</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column: Why Invest */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Invest in Professional {service.title}?</h2>
                            <div className="prose prose-lg text-muted-foreground mb-8">
                                {service.description ? (
                                    <div dangerouslySetInnerHTML={{ __html: service.description }} />
                                ) : (
                                    <p>
                                        Enhance your home's beauty and value with our expert {service.title.toLowerCase()} services.
                                        We deliver high-quality craftsmanship and attention to detail in every project.
                                    </p>
                                )}
                            </div>

                            <div className="space-y-4 mt-8">
                                {benefits.map((item: string, i: number) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: The Approach */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Roque {service.title} Approach</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We treat every project like a full renovation—organized, protected, and executed with obsessive attention to detail from prep to final walkthrough.
                            </p>

                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                                <h3 className="text-xl font-bold mb-4 text-navy">What You Can Expect:</h3>
                                <ul className="space-y-3">
                                    {features.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start text-navy/80">
                                            <span className="mr-2 text-accent">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
                        <p className="text-lg text-muted-foreground">
                            From the first call to the final walkthrough, we ensure a smooth and stress-free experience.
                        </p>
                    </div>
                    <ProcessSteps />
                </div>
            </section>

            {/* Service Area Section */}
            <section className="py-20">
                <div className="container">
                    <div className="bg-white rounded-2xl shadow-sm border p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            {service.title} Across Massachusetts
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We proudly serve homeowners in Winchester, Wellesley, Weston, Newton, Lexington, Brookline, Cambridge, Arlington, Belmont, Needham, and surrounding communities.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {serviceAreas.map((area) => (
                                <span key={area} className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-muted/30">
                <div className="container max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq: any, index: number) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Refresh Your Home with {service.title}?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Get a transparent estimate from experienced professionals — no pressure, no hidden fees. We're here to help you transform your space.
                            </p>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 inline-block">
                                <p className="font-semibold text-navy mb-1">Call for an immediate answer:</p>
                                <a
                                    href="tel:+17815269534"
                                    className="text-2xl font-bold text-accent hover:text-accent/80"
                                    onClick={(e) => trackPhoneClick(e, "tel:+17815269534")}
                                >
                                    (781) 526-9534
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border">
                            <h3 className="text-2xl font-bold mb-6">Get Your Free Estimate</h3>
                            <LeadForm source={`service-${slug}`} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
