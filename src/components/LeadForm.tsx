import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface LeadFormProps {
  source?: string;
  defaultService?: string;
}

export function LeadForm({ source = "website", defaultService }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: defaultService || "",
    message: "",
    marketingConsent: false,
  });

  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",
    fbclid: "",
    url: "",
    referrer: "",
  });

  useEffect(() => {
    // Capture UTM parameters and tracking data
    const urlParams = new URLSearchParams(window.location.search);
    const trackingData = {
      utm_source: urlParams.get("utm_source") || sessionStorage.getItem("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || sessionStorage.getItem("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || sessionStorage.getItem("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || sessionStorage.getItem("utm_term") || "",
      utm_content: urlParams.get("utm_content") || sessionStorage.getItem("utm_content") || "",
      gclid: urlParams.get("gclid") || sessionStorage.getItem("gclid") || "",
      fbclid: urlParams.get("fbclid") || sessionStorage.getItem("fbclid") || "",
      url: window.location.href,
      referrer: document.referrer,
    };

    // Store in sessionStorage for future form submissions
    Object.entries(trackingData).forEach(([key, value]) => {
      if (value) sessionStorage.setItem(key, value);
    });

    setUtmParams(trackingData);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (add a hidden field in production)
    // Rate limiting should be handled server-side

    const submissionData = {
      ...formData,
      ...utmParams,
      source,
      timestamp: new Date().toISOString(),
    };

    try {
      // TODO: Replace with actual webhook endpoint
      // await fetch(process.env.WEBHOOK_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submissionData),
      // });

      console.log("Form submission:", submissionData);

      // Fire Meta Pixel Lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: formData.service || "General Inquiry",
          content_category: "Form Submission",
        });
      }

      // Fire Google Ads conversion
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        });
      }

      toast.success("Thank you! We'll be in touch soon.", {
        description: "A team member will contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        service: defaultService || "",
        message: "",
        marketingConsent: false,
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Smith"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="Winchester"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Interest *</Label>
        <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kitchen-remodeling">Kitchen Remodeling</SelectItem>
            <SelectItem value="bathroom-remodeling">Bathroom Remodeling</SelectItem>
            <SelectItem value="exterior-services">Exterior Services</SelectItem>
            <SelectItem value="decks">Decks</SelectItem>
            <SelectItem value="siding">Siding</SelectItem>
            <SelectItem value="roofing">Roofing</SelectItem>
            <SelectItem value="hardscape">Hardscape</SelectItem>
            <SelectItem value="snow-removal">Snow Removal</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe what you'd like to accomplish..."
          rows={4}
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="consent"
          checked={formData.marketingConsent}
          onCheckedChange={(checked) => setFormData({ ...formData, marketingConsent: checked as boolean })}
        />
        <Label htmlFor="consent" className="text-sm leading-relaxed">
          I agree to receive marketing communications. View our{" "}
          <a href="/privacy-policy" className="text-accent hover:underline">
            Privacy Policy
          </a>
          .
        </Label>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Get Your Free Estimate
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
