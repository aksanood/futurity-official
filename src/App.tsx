import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardPosts from "./pages/dashboard/DashboardPosts";
import DashboardPortfolio from "./pages/dashboard/DashboardPortfolio";
import DashboardInquiries from "./pages/dashboard/DashboardInquiries";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";

// Blog Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import BlogTag from "./pages/BlogTag";

// Add the new route imports 
import BlogPostForm from './pages/dashboard/BlogPostForm';
import PortfolioItemForm from './pages/dashboard/PortfolioItemForm';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/category/:slug" element={<BlogCategory />} />
          <Route path="/blog/tag/:slug" element={<BlogTag />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/posts" element={<DashboardPosts />} />
          <Route path="/dashboard/posts/new" element={<BlogPostForm />} />
          <Route path="/dashboard/posts/edit/:id" element={<BlogPostForm />} />
          <Route path="/dashboard/portfolio" element={<DashboardPortfolio />} />
          <Route path="/dashboard/portfolio/new" element={<PortfolioItemForm />} />
          <Route path="/dashboard/portfolio/edit/:id" element={<PortfolioItemForm />} />
          <Route path="/dashboard/inquiries" element={<DashboardInquiries />} />
          <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
