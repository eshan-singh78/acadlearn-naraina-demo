import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "light" | "dark";
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "white",
}: SectionWrapperProps) {
  const bgMap = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-[#0A1F44]",
  };

  return (
    <section id={id} className={`py-16 sm:py-20 ${bgMap[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
