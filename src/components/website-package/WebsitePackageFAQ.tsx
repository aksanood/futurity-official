
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const WebsitePackageFAQ = () => {
  const faqs = [
    {
      question: 'Are there any hidden costs?',
      answer: 'No. The website build is a one-time fee of £250 + VAT. The only recurring cost is our optional maintenance plan if you choose to take it.'
    },
    {
      question: 'Is the design really bespoke?',
      answer: 'Yes. We do not use pre-built templates. We start with your brand and business goals to create a bespoke web design that is unique to you.'
    },
    {
      question: 'How fast is \'Fast Delivery\'?',
      answer: 'While every project is different, we pride ourselves on fast delivery. Once we complete the discovery phase, we will give you a clear and realistic timeline for launch.'
    },
    {
      question: 'What if I need more than 3 pages?',
      answer: 'No problem! This package is our starting point. We also offer Standard, Premium, and E-commerce packages and can create a custom quote for any project size.'
    },
    {
      question: 'Who owns the website once it\'s built?',
      answer: 'You do. Upon receipt of the final payment, all work products and deliverables created by us become your exclusive property.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-futurity-blue mb-6">
            Your Questions, Answered
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Get clarity on everything you need to know about our website package
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border border-gray-200"
              >
                <AccordionTrigger className="text-left font-semibold text-futurity-blue hover:text-futurity-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WebsitePackageFAQ;
