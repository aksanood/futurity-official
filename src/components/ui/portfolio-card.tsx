import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  href: string;
  description?: string;
  className?: string;
}

const PortfolioCard = ({ 
  image, 
  title, 
  category, 
  href,
  description,
  className 
}: PortfolioCardProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "portfolio-card flex flex-col h-full group overflow-hidden bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-[16/9] bg-gray-100 flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-t-lg border-b border-gray-200"
          style={{objectFit: 'cover'}}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-futurity-orange text-white text-sm font-medium px-2 py-1 rounded-md">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-futurity-blue mb-2 group-hover:text-futurity-orange transition-colors">{title}</h3>
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        )}
        <div className="flex-1"></div>
        <div className="flex items-center mt-4 text-futurity-blue font-medium group-hover:text-futurity-orange transition-colors">
          <span>View Case Study</span>
          <ExternalLink size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
