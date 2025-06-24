import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import { ModalProvider } from './contexts/ModalContext';
import { Toaster } from '@/components/ui/sonner';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Page imports
import Index from './pages/Index';
import About from './pages/About';
import AboutFuturity from './pages/AboutFuturity';
import Services from './pages/Services';
import WebDevelopment from './pages/services/WebDevelopment';
import WebDesign from './pages/services/WebDesign';
import UiUxDesign from './pages/services/UiUxDesign';
import DigitalMarketing from './pages/services/DigitalMarketing';
import AiDevelopment from './pages/services/AiDevelopment';
import BrandingServices from './pages/services/BrandingServices';
import ContentWriting from './pages/services/ContentWriting';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Blog from './pages/Blog';
import BlogCategory from './pages/BlogCategory';
import BlogTag from './pages/BlogTag';
import BlogPost from './pages/BlogPost';
import AuthorPage from './pages/AuthorPage';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import WebsiteDesignPackage from './pages/WebsiteDesignPackage';
import AdminLogin from './pages/AdminLogin';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

// Dashboard imports
import Dashboard from './pages/dashboard/Dashboard';
import DashboardAnalytics from './pages/dashboard/DashboardAnalytics';
import DashboardPortfolio from './pages/dashboard/DashboardPortfolio';
import PortfolioItemForm from './pages/dashboard/PortfolioItemForm';
import DashboardPosts from './pages/dashboard/DashboardPosts';
import BlogPostForm from './pages/dashboard/BlogPostForm';
import DashboardReviews from './pages/dashboard/DashboardReviews';
import DashboardInquiries from './pages/dashboard/DashboardInquiries';
import DashboardStaff from './pages/dashboard/DashboardStaff';
import DashboardStyleGuide from './pages/dashboard/DashboardStyleGuide';
import CsvPortfolioReview from './pages/dashboard/CsvPortfolioReview';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <ModalProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/about-futurity" element={<AboutFuturity />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/web-design" element={<WebDesign />} />
                <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/services/ai-development" element={<AiDevelopment />} />
                <Route path="/services/branding-services" element={<BrandingServices />} />
                <Route path="/services/content-writing" element={<ContentWriting />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/category/:category" element={<BlogCategory />} />
                <Route path="/blog/tag/:tag" element={<BlogTag />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/author/:authorId" element={<AuthorPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/website-design-package" element={<WebsiteDesignPackage />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/auth" element={<Auth />} />
                
                {/* Dashboard Routes */}
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/dashboard/analytics" element={<ProtectedRoute><DashboardAnalytics /></ProtectedRoute>} />
                <Route path="/dashboard/portfolio" element={<ProtectedRoute><DashboardPortfolio /></ProtectedRoute>} />
                <Route path="/dashboard/portfolio/new" element={<ProtectedRoute><PortfolioItemForm /></ProtectedRoute>} />
                <Route path="/dashboard/portfolio/edit/:id" element={<ProtectedRoute><PortfolioItemForm /></ProtectedRoute>} />
                <Route path="/dashboard/posts" element={<ProtectedRoute><DashboardPosts /></ProtectedRoute>} />
                <Route path="/dashboard/posts/new" element={<ProtectedRoute><BlogPostForm /></ProtectedRoute>} />
                <Route path="/dashboard/posts/edit/:id" element={<ProtectedRoute><BlogPostForm /></ProtectedRoute>} />
                <Route path="/dashboard/reviews" element={<ProtectedRoute><DashboardReviews /></ProtectedRoute>} />
                <Route path="/dashboard/inquiries" element={<ProtectedRoute><DashboardInquiries /></ProtectedRoute>} />
                <Route path="/dashboard/staff" element={<ProtectedRoute><DashboardStaff /></ProtectedRoute>} />
                <Route path="/dashboard/style-guide" element={<ProtectedRoute><DashboardStyleGuide /></ProtectedRoute>} />
                <Route path="/dashboard/csv-portfolio-review" element={<ProtectedRoute><CsvPortfolioReview /></ProtectedRoute>} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </ModalProvider>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
