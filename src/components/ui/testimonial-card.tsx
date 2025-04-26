
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  position, 
  company, 
  image, 
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md flex flex-col", 
      className
    )}>
      <div className="mb-4">
        <svg className="h-8 w-8 text-futurity-orange opacity-70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391C14.017 10.645 15.995 7.5 20 7.5v3.482c-1.792 0-3.001.913-3.001 2.733v1.649h3.001V21h-6.001zm-8 0v-7.391C6.017 10.645 7.995 7.5 12 7.5v3.482c-1.792 0-3.001.913-3.001 2.733v1.649h3.001V21h-6z" />
        </svg>
      </div>
      <p className="text-futurity-blue font-medium mb-6">{quote}</p>
      <div className="mt-auto flex items-center">
        {image && (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <h4 className="font-montserrat font-semibold text-base">{name}</h4>
          <p className="text-futurity-gray text-sm">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
