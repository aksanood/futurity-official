
import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

interface AccordionServiceItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const AccordionServiceItem = ({ 
  icon, 
  title, 
  content 
}: AccordionServiceItemProps) => {
  return (
    <AccordionItem value={title.toLowerCase().replace(/\s+/g, '-')}>
      <AccordionTrigger className="hover:no-underline">
        <div className="flex items-center gap-2 text-left">
          <span className="text-futurity-orange">{icon}</span>
          <span>{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <p className="pl-8">{content}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionServiceItem;
