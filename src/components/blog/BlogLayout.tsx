
import { ReactNode } from 'react';
import Layout from '@/components/layout/Layout';

interface BlogLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const BlogLayout = ({ children, title = "Our Blog", subtitle = "Insights, guides & news from our team" }: BlogLayoutProps) => {
  return (
    <Layout>
      <div className="hero-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">{title}</h1>
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1">{subtitle}</p>
          </div>
        </div>
        
        {/* Wave effect at bottom */}
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" fill="white">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div className="container-wide py-12">
        {children}
      </div>
    </Layout>
  );
};

export default BlogLayout;
