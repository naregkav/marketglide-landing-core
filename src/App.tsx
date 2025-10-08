import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Membership from "./pages/Membership";
import BlogPage from "./pages/Blog";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import StartupsPage from "./pages/apply/Startups";
import FundManagersPage from "./pages/apply/FundManagers";
import PEVCPage from "./pages/apply/PEVC";
import FamilyOfficesPage from "./pages/apply/FamilyOffices";
import AdvisorsPage from "./pages/apply/Advisors";
import CuratedPlatform from "./pages/product/CuratedPlatform";
import SophiaAI from "./pages/product/SophiaAI";
import Academy from "./pages/product/Academy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/apply/startups" element={<StartupsPage />} />
          <Route path="/apply/fund-managers" element={<FundManagersPage />} />
          <Route path="/apply/pe-vc" element={<PEVCPage />} />
          <Route path="/apply/family-offices" element={<FamilyOfficesPage />} />
          <Route path="/apply/advisors" element={<AdvisorsPage />} />
          <Route path="/product/curated-platform" element={<CuratedPlatform />} />
          <Route path="/product/sophia-ai" element={<SophiaAI />} />
          <Route path="/product/academy" element={<Academy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
