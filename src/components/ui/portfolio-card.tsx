import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  className?: string;
}

const PortfolioCard = ({ title, category, image, href, className }: PortfolioCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
      className
    )}>
      <Link to={href} className="block">
        <div className="relative overflow-hidden aspect-[16/9] flex items-center justify-center bg-gray-50">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-md">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold text-blue-900 mb-2 hover:text-orange-500 transition-colors">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
