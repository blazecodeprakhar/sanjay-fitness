import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Contact from "./pages/Contact.tsx";

import { useEffect } from "react";

const queryClient = new QueryClient();

const TabActivityHandler = () => {
  useEffect(() => {
    let interval: number;
    let isFavicon1 = true;
    const originalTitle = document.title;
    
    // Attempt to grab existing favicon or default to /favicon.png
    const linkElement = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    const originalFavicon = linkElement ? linkElement.href : "/favicon.png";

    const updateFavicon = (url: string) => {
      let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = url;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "SS Fitness";
        
        interval = window.setInterval(() => {
          updateFavicon(isFavicon1 ? "/favicon2.png" : "/favicon.png");
          isFavicon1 = !isFavicon1;
        }, 500);
      } else {
        clearInterval(interval);
        document.title = originalTitle;
        updateFavicon(originalFavicon);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
};

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Need a slight delay to ensure DOM is ready on page transitions
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <TabActivityHandler />
      <BrowserRouter>
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
