"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium text-[#0A1F44] text-sm pr-4">{item.question}</span>
            <span
              className={`text-[#FF6B00] text-xl font-light transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-4 bg-white">
              <p className="text-gray-500 text-sm leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
