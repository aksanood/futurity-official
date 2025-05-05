import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, center, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      <h2 className="relative font-bold mb-4">
        {title}
        <span className="absolute -bottom-2 left-0 w-20 h-1 bg-futurity-orange"
          style={{ left: center ? '50%' : '0', transform: center ? 'translateX(-50%)' : 'none' }}></span>
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-futurity-gray mt-6 max-w-3xl",
            center ? "mx-auto text-center" : "text-left"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
