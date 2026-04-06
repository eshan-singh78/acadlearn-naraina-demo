interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-[#0A1F44]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
