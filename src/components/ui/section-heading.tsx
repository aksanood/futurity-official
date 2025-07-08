import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  center?: boolean;
  className?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  badge?: string;
  badgeVariant?: 'orange' | 'blue';
  icon?: React.ReactNode;
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  center = false,
  className = "",
  subtitleClassName = "",
  descriptionClassName = "",
  badge,
  badgeVariant = 'orange',
  icon
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        "mb-16 animate-on-scroll",
        center ? "text-center" : "",
        className
      )}
    >
      {badge && (
        <div className={cn(
          "section-badge justify-center mb-4",
          center ? "flex" : "inline-flex",
          badgeVariant === 'orange' ? "section-badge-orange" : "section-badge-blue"
        )}>
          <div className={cn(
            "section-badge-dot",
            badgeVariant === 'orange' ? "section-badge-dot-orange" : "section-badge-dot-blue"
          )}></div>
          {badge}
        </div>
      )}
      
      <h2 className={cn(
        "text-headline font-bold mb-6 text-primary-heading",
        center ? "text-center" : ""
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-sm md:text-base font-medium uppercase tracking-wider text-futurity-gray mb-2",
          center ? "text-center" : "",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
      
      {description && (
        <p className={cn(
          "text-body-large text-secondary max-w-3xl",
          center ? "text-center mx-auto" : "",
          descriptionClassName
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
