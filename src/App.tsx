import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Academy from "./pages/Academy";
import MediaCoverage from "./pages/MediaCoverage";
import GlobalInitiative from "./pages/GlobalInitiative";
import GlobalProfile from "./pages/GlobalPorfile";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import People from "./pages/People";
import ScrollToTop from "./components/ScrollToTop";
import TeamProfile from "./pages/TeamProfile";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/media-coverage" element={<MediaCoverage />} />
          <Route path="/global" element={<GlobalInitiative />} />
          <Route path="/global/profile/:id" element={<GlobalProfile />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<TeamProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
