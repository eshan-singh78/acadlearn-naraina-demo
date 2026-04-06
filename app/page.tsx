import type { Metadata } from "next";
import Link from "next/link";
import Stats from "@/components/Stats";
import Card from "@/components/Card";
import TestimonialCard from "@/components/TestimonialCard";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Home | Naraina College of Engineering and Technology",
  description:
    "Welcome to NCET – Shaping Engineers, Building Futures. Explore our B.Tech programs, world-class facilities, and 95% placement record.",
};

const departments = [
  {
    icon: "💻",
    title: "Computer Science & Engineering",
    description:
      "Cutting-edge curriculum covering AI/ML, cloud computing, cybersecurity, and full-stack development. Consistently top placement record.",
    badge: "Highest Demand",
  },
  {
    icon: "⚡",
    title: "Electronics & Communication",
    description:
      "Hands-on training in VLSI design, embedded systems, IoT, and signal processing with state-of-the-art labs.",
    badge: "NBA Accredited",
  },
  {
    icon: "⚙️",
    title: "Mechanical Engineering",
    description:
      "From CAD/CAM to robotics and thermal engineering — our mechanical program prepares students for Industry 4.0.",
  },
  {
    icon: "🏗️",
    title: "Civil Engineering",
    description:
      "Comprehensive training in structural design, urban planning, and sustainable construction with real project exposure.",
  },
];

const whyUs = [
  {
    icon: "🏆",
    title: "AICTE Approved & NBA Accredited",
    description:
      "Fully recognized by AICTE and accredited by NBA, ensuring your degree holds national and international value.",
  },
  {
    icon: "🤝",
    title: "Industry-Integrated Learning",
    description:
      "Partnerships with 80+ companies including TCS, Infosys, Wipro, and Amazon for live projects and internships.",
  },
  {
    icon: "🔬",
    title: "Advanced Research Labs",
    description:
      "12 specialized labs including an AI/ML research center, IoT lab, and a dedicated innovation hub for student startups.",
  },
  {
    icon: "🌐",
    title: "Global Exposure",
    description:
      "Student exchange programs with partner universities in Germany, Singapore, and the USA for international learning.",
  },
  {
    icon: "📈",
    title: "95% Placement Rate",
    description:
      "Our dedicated Training & Placement cell has maintained a 95%+ placement rate for 8 consecutive years.",
  },
  {
    icon: "🎓",
    title: "Expert Faculty",
    description:
      "50+ faculty members with PhDs from IITs and NITs, bringing deep academic and industry expertise to every classroom.",
  },
];

const testimonials = [
  {
    name: "Priya Mehta",
    batch: "B.Tech CSE 2023",
    company: "Amazon SDE-I",
    quote:
      "NCET gave me the technical foundation and confidence to crack Amazon's interview process. The DSA workshops and mock interviews were game-changers for my preparation.",
    avatar: "PM",
  },
  {
    name: "Arjun Verma",
    batch: "B.Tech ECE 2022",
    company: "Qualcomm Engineer",
    quote:
      "The VLSI lab at NCET is genuinely world-class. I worked on real chip design projects as a second-year student, which made my Qualcomm interview stand out.",
    avatar: "AV",
  },
  {
    name: "Sneha Kapoor",
    batch: "B.Tech CSE 2024",
    company: "Microsoft SDET",
    quote:
      "From hackathons to industry mentorship sessions, NCET kept pushing us beyond the textbook. I landed my Microsoft offer before even graduating.",
    avatar: "SK",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0A1F44] min-h-screen flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B00] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-4 bg-orange-500/10 px-3 py-1 rounded-full">
              AICTE Approved · AKTU Affiliated · NBA Accredited
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Shaping Engineers,{" "}
              <span className="text-[#FF6B00]">Building Futures</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Naraina College of Engineering and Technology has been at the forefront of technical education since 2008. Join 10,000+ students who chose excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about#contact"
                className="px-8 py-3.5 bg-[#FF6B00] text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors text-sm"
              >
                Apply Now →
              </Link>
              <Link
                href="/curriculum"
                className="px-8 py-3.5 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                Explore Programs
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { val: "10,000+", label: "Students" },
                { val: "95%", label: "Placements" },
                { val: "80+", label: "Recruiters" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#FF6B00]">{s.val}</span>
                  <span className="text-gray-400 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Departments */}
      <SectionWrapper bg="light">
        <SectionHeading
          label="Academic Programs"
          title="Departments of Excellence"
          subtitle="Four engineering disciplines, one shared commitment to producing industry-ready graduates."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <Card key={dept.title} {...dept} />
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper bg="white">
        <SectionHeading
          label="Why NCET"
          title="More Than Just a Degree"
          subtitle="We combine rigorous academics with real-world exposure to give you a competitive edge from day one."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#FF6B00]/30 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-[#0A1F44] text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper bg="light">
        <SectionHeading
          label="Student Stories"
          title="Heard From Our Alumni"
          subtitle="Real experiences from students who turned their NCET education into successful careers."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <section className="bg-[#FF6B00] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Engineering Journey?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Admissions for the 2024–25 academic year are now open. Limited seats available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about#contact"
              className="px-8 py-3.5 bg-white text-[#FF6B00] rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 bg-transparent text-white rounded-xl font-semibold hover:bg-white/10 transition-colors text-sm border border-white/50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
