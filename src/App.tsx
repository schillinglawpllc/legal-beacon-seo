import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Mesothelioma from "./pages/Mesothelioma";
import LungCancer from "./pages/LungCancer";
import Asbestosis from "./pages/Asbestosis";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TrustFunds from "./pages/TrustFunds";
import Compensation from "./pages/Compensation";
import ConstructionWorkers from "./pages/ConstructionWorkers";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mesothelioma" element={<Mesothelioma />} />
      <Route path="/lung-cancer" element={<LungCancer />} />
      <Route path="/asbestosis" element={<Asbestosis />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/trust-funds" element={<TrustFunds />} />
      <Route path="/compensation" element={<Compensation />} />
      <Route path="/construction-workers" element={<ConstructionWorkers />} />
      <Route path="/faq" element={<FAQ />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
