import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SozdanieSaytov from "./pages/sections/SozdanieSaytov";
import RazrabotkaFunkcionala from "./pages/sections/RazrabotkaFunkcionala";
import Integracii from "./pages/sections/Integracii";
import Drugoe from "./pages/sections/Drugoe";
import DynamicServicePage from "./pages/DynamicServicePage";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Главная — собственный лейаут внутри */}
          <Route path="/" element={<Index />} />

          {/* Создание сайтов */}
          <Route path="/sozdanie-saytov" element={<Layout><SozdanieSaytov /></Layout>} />
          <Route path="/sozdanie-saytov/:slug" element={<Layout><DynamicServicePage categoryHref="/sozdanie-saytov" /></Layout>} />

          {/* Разработка функционала */}
          <Route path="/razrabotka-funkcionala" element={<Layout><RazrabotkaFunkcionala /></Layout>} />
          <Route path="/razrabotka-funkcionala/:slug" element={<Layout><DynamicServicePage categoryHref="/razrabotka-funkcionala" /></Layout>} />

          {/* Интеграции */}
          <Route path="/integracii" element={<Layout><Integracii /></Layout>} />
          <Route path="/integracii/:slug" element={<Layout><DynamicServicePage categoryHref="/integracii" /></Layout>} />

          {/* Другое */}
          <Route path="/drugoe" element={<Layout><Drugoe /></Layout>} />
          <Route path="/drugoe/:slug" element={<Layout><DynamicServicePage categoryHref="/drugoe" /></Layout>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
