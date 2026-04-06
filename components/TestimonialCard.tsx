interface TestimonialCardProps {
  name: string;
  batch: string;
  company: string;
  quote: string;
  avatar: string;
}

export default function TestimonialCard({
  name,
  batch,
  company,
  quote,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#FF6B00] text-sm">★</span>
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#0A1F44] flex items-center justify-center text-white font-bold text-sm">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-[#0A1F44] text-sm">{name}</p>
          <p className="text-xs text-gray-400">
            {batch} · {company}
          </p>
        </div>
      </div>
    </div>
  );
}
