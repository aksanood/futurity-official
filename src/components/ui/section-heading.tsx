import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  center?: boolean;
  className?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  center = false,
  className = "",
  subtitleClassName = "",
  descriptionClassName = ""
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        "mb-12",
        center ? "text-center" : "",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-sm md:text-base font-medium uppercase tracking-wider text-futurity-gray mb-2",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
      {description && (
        <p className={cn(
          "mt-4 text-lg text-futurity-gray",
          descriptionClassName
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
