import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardPosts from "./pages/dashboard/DashboardPosts";
import DashboardPortfolio from "./pages/dashboard/DashboardPortfolio";
import DashboardInquiries from "./pages/dashboard/DashboardInquiries";
import DashboardReviews from "./pages/dashboard/DashboardReviews";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
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
            
            {/* Add new routes */}
            <Route path="/author/:id" element={<AuthorPage />} />
            <Route path="/reviews" element={<Reviews />} />
            
            {/* Keep catch-all route at the end */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
