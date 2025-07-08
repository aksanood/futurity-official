import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  showBottomLine?: boolean;
}

const PageHero = ({ 
  title, 
  subtitle, 
  className,
  children,
  size = "md",
  showBottomLine = true
}: PageHeroProps) => {
  return (
    <div className="hero-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh bg-grid opacity-20"></div>
      
      <div className={cn(
        "container-wide relative z-10",
        size === "sm" ? "py-16" : size === "md" ? "py-20" : "py-24",
        className
      )}>
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll text-center">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1 text-center max-w-4xl">
              {subtitle}
            </p>
          )}
          
          <div className="text-center w-full">
            {children}
          </div>
        </div>
      </div>
      
      {/* Straight line instead of wave */}
      {showBottomLine && (
        // Removed the white bar for cleaner section spacing
        null
      )}
    </div>
  );
};

export default PageHero;
