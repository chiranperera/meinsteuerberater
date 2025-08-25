import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AccessibilityWrapper from "./components/AccessibilityWrapper";
import PlaceholderPage from "./components/PlaceholderPage";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AccessibilityWrapper>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Service Routes */}
            <Route path="/steuerberatung" element={<PlaceholderPage title="Steuerberatung" description="Finden Sie den perfekten Steuerberater für Ihre individuelle Steuerberatung." />} />
            <Route path="/buchhaltung" element={<PlaceholderPage title="Buchhaltung" description="Professionelle Buchhaltungsservices von erfahrenen Steuerberatern." />} />
            <Route path="/jahresabschluss" element={<PlaceholderPage title="Jahresabschluss" description="Kompetente Hilfe bei Ihrem Jahresabschluss von zertifizierten Experten." />} />

            {/* Location Routes */}
            <Route path="/berlin" element={<PlaceholderPage title="Steuerberater Berlin" description="Finden Sie qualifizierte Steuerberater in Berlin und Umgebung." />} />
            <Route path="/muenchen" element={<PlaceholderPage title="Steuerberater München" description="Top-bewertete Steuerberater in München für Ihre Steuerberatung." />} />
            <Route path="/hamburg" element={<PlaceholderPage title="Steuerberater Hamburg" description="Erfahrene Steuerberater in Hamburg für alle Steuerangelegenheiten." />} />

            {/* Other Important Routes */}
            <Route path="/kontakt" element={<PlaceholderPage title="Kontakt" description="Nehmen Sie Kontakt mit unserem Team auf. Wir helfen Ihnen gerne weiter." />} />
            <Route path="/steuerberater-finden" element={<PlaceholderPage title="Steuerberater finden" description="Nutzen Sie unsere intelligente Suche, um den perfekten Steuerberater zu finden." />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AccessibilityWrapper>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
