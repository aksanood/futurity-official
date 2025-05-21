import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  bgColorClass?: string; // New prop for background color
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  href,
  onClick,
  className,
  bgColorClass // New prop
}: ServiceCardProps) => {
  // If both href and onClick are provided, prefer onClick
  const baseCardClass = cn(
    "group block text-center rounded-lg p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-futurity-orange hover:-translate-y-1 w-full",
    bgColorClass || "bg-white",
    className
  );

  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={baseCardClass}
      >
        <div className="h-16 w-16 rounded-full bg-futurity-orange/10 flex items-center justify-center mb-6 text-futurity-orange group-hover:bg-futurity-orange group-hover:text-white transition-all mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-futurity-orange transition-colors">{title}</h3>
        <p className="text-futurity-gray text-base truncate">{description}</p>
        <div className="mt-4 font-medium text-futurity-blue flex items-center justify-center">
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
      </button>
    );
  }

  if (href) {
    return (
      <Link 
        to={href}
        className={baseCardClass}
      >
        <div className="h-16 w-16 rounded-full bg-futurity-orange/10 flex items-center justify-center mb-6 text-futurity-orange group-hover:bg-futurity-orange group-hover:text-white transition-all mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-futurity-orange transition-colors">{title}</h3>
        <p className="text-futurity-gray text-base truncate">{description}</p>
        <div className="mt-4 font-medium text-futurity-blue flex items-center justify-center">
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
  }

  // Fallback to a div if neither onClick nor href is provided
  return (
    <div 
      className={baseCardClass}
    >
      <div className="h-16 w-16 rounded-full bg-futurity-orange/10 flex items-center justify-center mb-6 text-futurity-orange mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-futurity-gray text-base truncate">{description}</p>
    </div>
  );
};

export default ServiceCard;
