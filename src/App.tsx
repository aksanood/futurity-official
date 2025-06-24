import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { ModalProvider } from "@/contexts/ModalContext";

// Pages
import Index from "./pages/Index";
import AboutFuturity from "./pages/AboutFuturity";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardPosts from "./pages/dashboard/DashboardPosts";
import DashboardPortfolio from "./pages/dashboard/DashboardPortfolio";
import DashboardInquiries from "./pages/dashboard/DashboardInquiries";
import DashboardReviews from "./pages/dashboard/DashboardReviews";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";
import DashboardStyleGuide from "./pages/dashboard/DashboardStyleGuide";
import DashboardStaff from "./pages/dashboard/DashboardStaff";

// Service Pages
import WebDesignPage from "./pages/services/WebDesign";
import WebDevelopmentPage from "./pages/services/WebDevelopment";
import UiUxDesignPage from "./pages/services/UiUxDesign";
import DigitalMarketingPage from "./pages/services/DigitalMarketing";
import BrandingServicesPage from "./pages/services/BrandingServices"; 
import ContentWritingPage from "./pages/services/ContentWriting";
import AiDevelopmentPage from "./pages/services/AiDevelopment";

// Blog Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import BlogTag from "./pages/BlogTag";

// Add the new route imports 
import BlogPostForm from './pages/dashboard/BlogPostForm';
import PortfolioItemForm from './pages/dashboard/PortfolioItemForm';
import AuthorPage from "./pages/AuthorPage";
import Reviews from "./pages/Reviews";
import CsvPortfolioReview from './pages/dashboard/CsvPortfolioReview';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-futurity" element={<AboutFuturity />} />
              {/* Redirect legacy /about to /about-futurity for SEO */}
              <Route path="/about" element={<Navigate to="/about-futurity" replace />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Auth Route */}
              <Route path="/auth" element={<Auth />} />
              
              {/* Service Detail Pages */}
              <Route path="/services/web-design" element={<WebDesignPage />} />
              <Route path="/services/web-development" element={<WebDevelopmentPage />} />
              <Route path="/services/ui-ux-design" element={<UiUxDesignPage />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/services/branding-services" element={<BrandingServicesPage />} />
              <Route path="/services/content-writing" element={<ContentWritingPage />} />
              <Route path="/services/ai-development" element={<AiDevelopmentPage />} />
              
              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blog/category/:slug" element={<BlogCategory />} />
              <Route path="/blog/tag/:slug" element={<BlogTag />} />
              
              {/* Admin Login */}
              <Route path="/admin-login" element={<AdminLogin />} />
              
              {/* Protected Dashboard Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/posts" element={
                <ProtectedRoute>
                  <DashboardPosts />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/posts/new" element={
                <ProtectedRoute>
                  <BlogPostForm />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/posts/edit/:id" element={
                <ProtectedRoute>
                  <BlogPostForm />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/portfolio" element={
                <ProtectedRoute>
                  <DashboardPortfolio />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/portfolio/new" element={
                <ProtectedRoute>
                  <PortfolioItemForm />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/portfolio/edit/:id" element={
                <ProtectedRoute>
                  <PortfolioItemForm />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/portfolio/csv-review" element={
                <ProtectedRoute>
                  <CsvPortfolioReview />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/inquiries" element={
                <ProtectedRoute>
                  <DashboardInquiries />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/reviews" element={
                <ProtectedRoute>
                  <DashboardReviews />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/analytics" element={
                <ProtectedRoute>
                  <DashboardAnalytics />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/style-guide" element={
                <ProtectedRoute>
                  <DashboardStyleGuide />
                </ProtectedRoute>
              } />
              <Route path="/dashboard/staff" element={
                <ProtectedRoute>
                  <DashboardStaff />
                </ProtectedRoute>
              } />
              
              {/* Add new routes */}
              <Route path="/author/:id" element={<AuthorPage />} />
              <Route path="/reviews" element={<Reviews />} />
              
              {/* Keep catch-all route at the end */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
