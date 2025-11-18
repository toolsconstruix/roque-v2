import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    
    // Initialize analytics/tracking here if needed
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("consent", "grant");
    }
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
    
    // Disable analytics/tracking here if needed
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("consent", "revoke");
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay for mobile */}
      <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6 animate-in slide-in-from-bottom duration-500">
        <div className="container max-w-6xl">
          <div className="bg-card border-2 border-border rounded-2xl shadow-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Icon and Content */}
              <div className="flex-1 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Cookie className="h-6 w-6 text-accent" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">We Value Your Privacy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                    You can manage your preferences or learn more in our{" "}
                    <Link to="/privacy-policy" className="text-accent hover:underline font-medium">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <Button
                  variant="outline"
                  onClick={declineCookies}
                  className="w-full sm:w-auto"
                >
                  Decline
                </Button>
                <Button
                  onClick={acceptCookies}
                  className="w-full sm:w-auto"
                >
                  Accept All
                </Button>
              </div>

              {/* Close button for desktop */}
              <button
                onClick={declineCookies}
                className="hidden lg:block absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
