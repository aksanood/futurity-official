
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PriceCardProps {
  title: string;
  price: string | "POA";
  features: string[];
  variant?: "primary" | "secondary";
  className?: string;
}

const PriceCard = ({
  title,
  price,
  features,
  variant = "primary",
  className,
}: PriceCardProps) => {
  return (
    <div className={cn("border rounded-lg overflow-hidden bg-white", className)}>
      <div className="p-6">
        <h3 className="text-futurity-blue/70 text-lg mb-4">{title}</h3>
        <div className="mb-8">
          {typeof price === "string" && price === "POA" ? (
            <div className="text-5xl font-bold text-[#292f45]">POA</div>
          ) : (
            <div className="flex items-baseline">
              <span className="text-5xl font-bold text-[#292f45]">£{price}</span>
              <span className="text-sm text-gray-500 ml-1">+ vat</span>
            </div>
          )}
        </div>
        <hr className="my-6" />
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <CheckCircle
                size={20}
                className="text-futurity-blue/60 mr-3 mt-1 flex-shrink-0"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pb-6">
        <Button
          asChild
          variant={variant === "primary" ? "default" : "outline"}
          className={cn(
            "w-full",
            variant === "primary"
              ? "bg-[#96d0db] hover:bg-[#7bbecb] text-white"
              : "bg-[#1c2436] hover:bg-[#111827] text-white"
          )}
        >
          <Link to="/contact">VIEW DETAILS</Link>
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
