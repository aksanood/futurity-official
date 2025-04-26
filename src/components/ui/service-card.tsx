
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  className?: string;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  href,
  className 
}: ServiceCardProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "group block bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-futurity-orange hover:-translate-y-1",
        className
      )}
    >
      <div className="h-16 w-16 rounded-full bg-futurity-orange/10 flex items-center justify-center mb-6 text-futurity-orange group-hover:bg-futurity-orange group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-futurity-orange transition-colors">{title}</h3>
      <p className="text-futurity-gray text-base">{description}</p>
      <div className="mt-4 font-medium text-futurity-blue flex items-center">
        Learn more
        <svg 
          className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};

export default ServiceCard;
