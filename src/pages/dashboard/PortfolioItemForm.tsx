
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import PortfolioItemForm from '@/components/dashboard/PortfolioItemForm';
import { useToast } from '@/components/ui/use-toast';

// Mock data - would come from API/database in production
const portfolioItems = [
  {
    id: '1',
    title: 'Eco Solutions Website Redesign',
    slug: 'eco-solutions-website-redesign',
    client: 'Eco Solutions Inc.',
    category: 'Web Design',
    description: 'Complete redesign of an environmental consulting firm website.',
    challenge: '<p>The client needed a modern website that would better showcase their services while improving user experience and conversion rates.</p>',
    solution: '<p>We delivered a responsive website with improved navigation, clear service offerings, and impactful case studies.</p>',
    results: '<p>The new website increased user engagement by 65% and lead generation by 43% within the first three months.</p>',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    ],
    featured: true,
    date: '2025-03-15'
  },
  {
    id: '2',
    title: 'TechStart Mobile App',
    slug: 'techstart-mobile-app',
    client: 'TechStart',
    category: 'Mobile Development',
    description: 'Cross-platform mobile application for a tech startup incubator.',
    challenge: '<p>Create a platform for startup founders to connect with mentors and resources.</p>',
    solution: '<p>Built a React Native app with mentor matching, event scheduling, and resource library.</p>',
    results: '<p>The app has been downloaded by 3,000+ users and facilitated 500+ mentor connections.</p>',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    gallery: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
    ],
    featured: true,
    date: '2025-02-22'
  }
];

const DashboardPortfolioItemForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Find the item if we're editing
  const item = id ? portfolioItems.find(p => p.id === id) : undefined;
  
  const handleSave = (itemData: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      if (id) {
        // Update existing item
        const index = portfolioItems.findIndex(p => p.id === id);
        if (index !== -1) {
          portfolioItems[index] = itemData;
        }
        
        toast({
          title: "Project updated",
          description: "The portfolio project has been updated successfully.",
        });
      } else {
        // Add new item
        portfolioItems.unshift(itemData);
        
        toast({
          title: "Project created",
          description: "The portfolio project has been created successfully.",
        });
      }
      
      setIsSubmitting(false);
      navigate('/dashboard/portfolio');
    }, 800);
  };
  
  const title = item ? 'Edit Portfolio Project' : 'Create Portfolio Project';
  const subtitle = item 
    ? `Editing "${item.title}"` 
    : 'Create a new portfolio project to showcase your work';
  
  return (
    <DashboardLayout title={title} subtitle={subtitle}>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <PortfolioItemForm 
          item={item} 
          onSave={handleSave} 
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPortfolioItemForm;
