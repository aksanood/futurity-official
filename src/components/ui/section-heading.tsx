
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, center = false, className }: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-10",
      center && "text-center",
      className
    )}>
      <h2 className={cn(
        "text-2xl md:text-3xl font-bold mb-4",
        center && "mx-auto"
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-lg text-futurity-gray",
          center && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
