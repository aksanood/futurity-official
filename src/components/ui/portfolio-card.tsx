
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  href: string;
  className?: string;
}

const PortfolioCard = ({ 
  image, 
  title, 
  category, 
  href,
  className 
}: PortfolioCardProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "portfolio-card",
        className
      )}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-futurity-orange text-white text-sm font-medium px-2 py-1 rounded-md">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-futurity-blue mb-2">{title}</h3>
        <div className="flex items-center mt-4 text-futurity-blue font-medium">
          <span>View Case Study</span>
          <ExternalLink size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
