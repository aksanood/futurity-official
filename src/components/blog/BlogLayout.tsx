
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
        
        {/* Straight line instead of wave */}
        <div className="hero-straight-line">
          <div className="h-16 bg-white absolute bottom-0 left-0 right-0"></div>
        </div>
      </div>
      <div className="container-wide py-12">
        {children}
      </div>
    </Layout>
  );
};

export default BlogLayout;
