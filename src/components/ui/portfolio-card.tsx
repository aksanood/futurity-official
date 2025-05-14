
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
      "portfolio-card overflow-hidden rounded-lg transition-all duration-300",
      className
    )}>
      <Link to={href} className="block">
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
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold text-futurity-blue mb-2">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
