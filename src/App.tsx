import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import AdminServices from "./pages/admin/Services";
import Services from "./pages/Services";
import KitchenRemodeling from "./pages/KitchenRemodeling";
import DecksCarpentry from "./pages/DecksCarpentry";
import BathroomRemodeling from "./pages/BathroomRemodeling";
import InteriorExteriorPainting from "./pages/InteriorExteriorPainting";
import Roofing from "./pages/Roofing";
import Hardscape from "./pages/Hardscape";
import HomeUpgrades from "./pages/HomeUpgrades";
import Landscaping from "./pages/Landscaping";
import SnowRemoval from "./pages/SnowRemoval";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Thanks from "./pages/Thanks";
import NotFound from "./pages/NotFound";

import { AuthProvider } from "@/components/auth/AuthProvider";
import { trackVisit } from "@/lib/trackVisit";
import Login from "./pages/admin/Login";
import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import BlogPosts from "./pages/admin/BlogPosts";
import BlogPostEditor from "./pages/admin/BlogPostEditor";
import ServiceEditor from "./pages/admin/ServiceEditor";
import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient();



function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("init", "YOUR_PIXEL_ID");
      (window as any).fbq("track", "PageView");
    }
  }, []);

  useEffect(() => {
    // Track site visit on every route change
    if (typeof window !== "undefined") {
      trackVisit();
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blog" element={<BlogPosts />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="services/new" element={<ServiceEditor />} />
          <Route path="services/:id" element={<ServiceEditor />} />
          {/* Placeholder for other admin routes */}
          <Route path="*" element={<div>Página em construção</div>} />
        </Route>

        {/* Public Routes */}
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/interior-exterior-painting" element={<PageTransition><InteriorExteriorPainting /></PageTransition>} />
        <Route path="/decks" element={<PageTransition><DecksCarpentry /></PageTransition>} />
        <Route path="/bathroom-remodeling" element={<PageTransition><BathroomRemodeling /></PageTransition>} />
        <Route path="/roofing" element={<PageTransition><Roofing /></PageTransition>} />
        <Route path="/hardscape" element={<PageTransition><Hardscape /></PageTransition>} />
        <Route path="/home-upgrades" element={<PageTransition><HomeUpgrades /></PageTransition>} />
        <Route path="/landscaping" element={<PageTransition><Landscaping /></PageTransition>} />
        <Route path="/snow-removal" element={<PageTransition><SnowRemoval /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/kitchen-remodeling" element={<PageTransition><KitchenRemodeling /></PageTransition>} />
        <Route path="/thanks" element={<PageTransition><Thanks /></PageTransition>} />
        {/* Additional service pages would follow the same pattern */}
        <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Analytics />
          <SpeedInsights />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
