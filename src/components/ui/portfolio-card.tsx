
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
        "group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all",
        className
      )}
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-futurity-blue/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-opacity">
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-white/80">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
