"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email address";
    if (!form.phone.match(/^[6-9]\d{9}$/))
      newErrors.phone = "Enter a valid 10-digit mobile number";
    if (!form.program) newErrors.program = "Please select a program";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-lg font-semibold text-green-800 mb-1">Application Received</h3>
        <p className="text-green-600 text-sm">
          Thank you for your interest in NCET. Our admissions team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0A1F44] mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Rahul Sharma"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
              errors.name ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#FF6B00]"
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0A1F44] mb-1">Email Address</label>
          <input
            type="email"
            placeholder="rahul@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
              errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#FF6B00]"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0A1F44] mb-1">Mobile Number</label>
          <input
            type="tel"
            placeholder="9876543210"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
              errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#FF6B00]"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0A1F44] mb-1">Program of Interest</label>
          <select
            value={form.program}
            onChange={(e) => setForm({ ...form, program: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors bg-white ${
              errors.program ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#FF6B00]"
            }`}
          >
            <option value="">Select a program</option>
            <option>B.Tech Computer Science</option>
            <option>B.Tech Electronics & Communication</option>
            <option>B.Tech Mechanical Engineering</option>
            <option>B.Tech Civil Engineering</option>
            <option>MBA (Technology Management)</option>
          </select>
          {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#0A1F44] mb-1">Message</label>
        <textarea
          rows={4}
          placeholder="Tell us about your academic background or any questions you have..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors resize-none ${
            errors.message ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#FF6B00]"
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-[#FF6B00] text-white py-3 rounded-xl font-semibold text-sm hover:bg-orange-600 transition-colors"
      >
        Submit Application
      </button>
    </form>
  );
}
