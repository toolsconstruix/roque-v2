import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import KitchenRemodeling from "./pages/KitchenRemodeling";
import DecksCarpentry from "./pages/DecksCarpentry";
import BathroomRemodeling from "./pages/BathroomRemodeling";
import InteriorExteriorPainting from "./pages/InteriorExteriorPainting";
import Roofing from "./pages/Roofing";
import Hardscape from "./pages/Hardscape";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize tracking pixels
    // Google Analytics 4
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "G-XXXXXXXXXX");
    }

    // Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("init", "YOUR_PIXEL_ID");
      (window as any).fbq("track", "PageView");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/interior-exterior-painting" element={<PageTransition><InteriorExteriorPainting /></PageTransition>} />
            <Route path="/decks" element={<PageTransition><DecksCarpentry /></PageTransition>} />
            <Route path="/bathroom-remodeling" element={<PageTransition><BathroomRemodeling /></PageTransition>} />
            <Route path="/roofing" element={<PageTransition><Roofing /></PageTransition>} />
            <Route path="/hardscape" element={<PageTransition><Hardscape /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/kitchen-remodeling" element={<PageTransition><KitchenRemodeling /></PageTransition>} />
            {/* Additional service pages would follow the same pattern */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
