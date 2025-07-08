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
      <div className="absolute inset-0 gradient-mesh bg-grid opacity-20"></div>
      
      {/* Floating orbs */}
      <div className="floating-orb-blue top-1/4 left-1/4 animate-pulse-soft"></div>
      <div className="floating-orb-orange bottom-1/4 right-1/4 animate-float"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-futurity-orange/5 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      
      <div className={cn(
        "container-wide relative z-10",
        size === "sm" ? "py-16" : size === "md" ? "py-20" : "py-24",
        className
      )}>
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll text-center text-white">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-white/90 mb-8 animate-on-scroll stagger-delay-1 text-center max-w-4xl">
              {subtitle}
            </p>
          )}
          
          <div className="text-center w-full animate-on-scroll stagger-delay-2">
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
