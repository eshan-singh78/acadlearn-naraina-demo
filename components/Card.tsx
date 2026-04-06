import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: string | ReactNode;
  badge?: string;
  className?: string;
}

export default function Card({ title, description, icon, badge, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {badge && (
        <span className="inline-block text-xs font-semibold text-[#FF6B00] bg-orange-50 px-2 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      {icon && (
        <div className="text-3xl mb-3">{icon}</div>
      )}
      <h3 className="font-semibold text-[#0A1F44] text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
