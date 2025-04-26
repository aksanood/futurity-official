
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
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container-tight text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </div>
      <div className="container-wide py-12">
        {children}
      </div>
    </Layout>
  );
};

export default BlogLayout;
