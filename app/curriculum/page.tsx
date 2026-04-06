import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Curriculum | Naraina College of Engineering and Technology",
  description:
    "Explore NCET's engineering curriculum — semester-wise breakdown, core and elective subjects, industry collaborations, and internship support.",
};

const semesters = [
  {
    sem: "Semester 1",
    subjects: ["Engineering Mathematics I", "Engineering Physics", "Basic Electrical Engineering", "Programming in C", "Engineering Drawing"],
    type: "Foundation",
  },
  {
    sem: "Semester 2",
    subjects: ["Engineering Mathematics II", "Engineering Chemistry", "Data Structures", "Digital Electronics", "Environmental Science"],
    type: "Foundation",
  },
  {
    sem: "Semester 3",
    subjects: ["Discrete Mathematics", "Object-Oriented Programming (Java)", "Computer Organization & Architecture", "Operating Systems", "Probability & Statistics"],
    type: "Core",
  },
  {
    sem: "Semester 4",
    subjects: ["Database Management Systems", "Theory of Computation", "Computer Networks", "Software Engineering", "Microprocessors & Interfacing"],
    type: "Core",
  },
  {
    sem: "Semester 5",
    subjects: ["Compiler Design", "Artificial Intelligence", "Web Technologies", "Elective I", "Minor Project"],
    type: "Advanced",
  },
  {
    sem: "Semester 6",
    subjects: ["Machine Learning", "Cloud Computing", "Information Security", "Elective II", "Industrial Training"],
    type: "Advanced",
  },
  {
    sem: "Semester 7",
    subjects: ["Deep Learning & NLP", "Distributed Systems", "Elective III", "Elective IV", "Major Project – Phase I"],
    type: "Specialization",
  },
  {
    sem: "Semester 8",
    subjects: ["Entrepreneurship & Innovation", "Elective V", "Major Project – Phase II", "Internship / Industry Project"],
    type: "Specialization",
  },
];

const electives = [
  { track: "AI & Data Science", subjects: ["Deep Learning", "Computer Vision", "Big Data Analytics", "Reinforcement Learning", "NLP & Text Mining"] },
  { track: "Cybersecurity", subjects: ["Network Security", "Ethical Hacking", "Cryptography", "Digital Forensics", "Secure Software Development"] },
  { track: "Cloud & DevOps", subjects: ["AWS Architecture", "Kubernetes & Docker", "CI/CD Pipelines", "Serverless Computing", "Site Reliability Engineering"] },
  { track: "Full-Stack Development", subjects: ["React & Next.js", "Node.js & Express", "GraphQL APIs", "Mobile App Development", "UI/UX Engineering"] },
];

const partners = [
  { name: "TCS", type: "Placement & Training", logo: "TCS" },
  { name: "Infosys", type: "Campus Connect Program", logo: "INF" },
  { name: "Wipro", type: "Talent Next Program", logo: "WIP" },
  { name: "Amazon", type: "AWS Academy Partner", logo: "AMZ" },
  { name: "Microsoft", type: "MSFT Learn Partner", logo: "MSF" },
  { name: "IBM", type: "SkillsBuild Partner", logo: "IBM" },
  { name: "Accenture", type: "Placement Partner", logo: "ACC" },
  { name: "HCL Technologies", type: "TechBee Program", logo: "HCL" },
];

const faqItems = [
  {
    question: "What is the minimum eligibility for B.Tech admission at NCET?",
    answer:
      "Candidates must have passed 10+2 (or equivalent) with Physics, Chemistry, and Mathematics as core subjects, securing a minimum of 45% aggregate marks (40% for SC/ST candidates). A valid JEE Main score or state-level entrance exam score is required for admission.",
  },
  {
    question: "Does NCET offer lateral entry admission for diploma holders?",
    answer:
      "Yes. Diploma holders in the relevant engineering discipline can apply for direct admission to the second year (Semester 3) through the lateral entry scheme, subject to availability of seats and qualifying marks in the state lateral entry exam.",
  },
  {
    question: "How are electives chosen and when?",
    answer:
      "Students choose their elective track at the beginning of Semester 5. The selection is based on academic performance, interest, and available seats. Counseling sessions with faculty advisors are conducted to help students make informed choices aligned with their career goals.",
  },
  {
    question: "Is the internship in Semester 6 mandatory?",
    answer:
      "Yes, the 6-week industrial training in Semester 6 is a mandatory component of the curriculum. The Training & Placement cell assists students in securing internships with partner companies. Students may also arrange their own internships, subject to faculty approval.",
  },
  {
    question: "What is the structure of the Major Project in Semesters 7 and 8?",
    answer:
      "The Major Project spans two semesters. In Semester 7, students submit a detailed project proposal, conduct a literature review, and complete the design phase. In Semester 8, they implement, test, and present the final project before an evaluation panel that includes industry experts.",
  },
  {
    question: "Does NCET offer any online or hybrid learning options?",
    answer:
      "NCET provides a blended learning model with recorded lectures, online assignments, and virtual lab simulations available on the college's LMS portal. However, physical attendance for labs, practicals, and examinations is mandatory as per AKTU guidelines.",
  },
];

const typeColors: Record<string, string> = {
  Foundation: "bg-blue-50 text-blue-700 border-blue-200",
  Core: "bg-green-50 text-green-700 border-green-200",
  Advanced: "bg-purple-50 text-purple-700 border-purple-200",
  Specialization: "bg-orange-50 text-[#FF6B00] border-orange-200",
};

export default function CurriculumPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0A1F44] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">
            Academic Structure
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Curriculum</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A rigorous, industry-aligned 4-year B.Tech program designed to build strong fundamentals and cutting-edge specializations.
          </p>
        </div>
      </section>

      {/* Overview */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              label="Program Overview"
              title="Engineering Curriculum at NCET"
              center={false}
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              NCET's B.Tech curriculum is designed in alignment with AKTU guidelines and enriched with industry inputs from our corporate partners. The 4-year, 8-semester program balances theoretical foundations with hands-on practical training.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The curriculum follows a progressive structure — starting with engineering fundamentals, building into core discipline subjects, and culminating in advanced specializations and a major industry project. Students earn 160+ credits across lectures, labs, seminars, and project work.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Total Credits", value: "160+" },
                { label: "Lab Hours/Week", value: "12" },
                { label: "Industry Projects", value: "4+" },
                { label: "Elective Tracks", value: "4" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-[#FF6B00]">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0A1F44] rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4 text-[#FF6B00]">Credit Distribution</h3>
            {[
              { label: "Core Theory Subjects", credits: 72, pct: 45 },
              { label: "Laboratory & Practicals", credits: 32, pct: 20 },
              { label: "Elective Subjects", credits: 24, pct: 15 },
              { label: "Project Work", credits: 20, pct: 12.5 },
              { label: "Seminars & Internship", credits: 12, pct: 7.5 },
            ].map((item) => (
              <div key={item.label} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{item.label}</span>
                  <span className="text-white font-medium">{item.credits} credits</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF6B00] rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Semester Breakdown */}
      <SectionWrapper bg="light">
        <SectionHeading
          label="Semester-wise Plan"
          title="8 Semesters, One Complete Engineer"
          subtitle="A structured progression from fundamentals to specialization across four years."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {semesters.map((sem) => (
            <div key={sem.sem} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-[#0A1F44] text-sm">{sem.sem}</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${typeColors[sem.type]}`}>
                  {sem.type}
                </span>
              </div>
              <ul className="space-y-1.5">
                {sem.subjects.map((s) => (
                  <li key={s} className="flex gap-2 text-xs text-gray-600">
                    <span className="text-[#FF6B00] flex-shrink-0">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Electives */}
      <SectionWrapper bg="white">
        <SectionHeading
          label="Specialization Tracks"
          title="Elective Tracks"
          subtitle="Choose a specialization that aligns with your career goals. Each track is designed with direct industry input."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {electives.map((track) => (
            <div key={track.track} className="border border-gray-100 rounded-2xl p-5 hover:border-[#FF6B00]/40 hover:shadow-sm transition-all">
              <h3 className="font-bold text-[#0A1F44] mb-3 text-sm">{track.track}</h3>
              <ul className="space-y-2">
                {track.subjects.map((s) => (
                  <li key={s} className="text-xs text-gray-500 flex gap-2">
                    <span className="text-[#FF6B00]">→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Industry Partners */}
      <SectionWrapper bg="light">
        <SectionHeading
          label="Industry Collaborations"
          title="Learning With the Best"
          subtitle="Our curriculum is co-designed and validated by leading technology companies."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0A1F44] rounded-xl flex items-center justify-center text-white font-bold text-xs mx-auto mb-3">
                {p.logo}
              </div>
              <p className="font-semibold text-[#0A1F44] text-sm">{p.name}</p>
              <p className="text-xs text-gray-400 mt-1">{p.type}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Internship & Placement */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <SectionHeading label="Career Support" title="Internship & Placement" center={false} />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              NCET's Training & Placement (T&P) cell operates year-round to prepare students for the job market and connect them with top recruiters. Our placement support begins from Semester 3 — well before most students start thinking about jobs.
            </p>
            <div className="space-y-4">
              {[
                { icon: "📋", title: "Resume & LinkedIn Workshops", desc: "Monthly workshops on building a strong professional profile, conducted by HR professionals from partner companies." },
                { icon: "🎤", title: "Mock Interview Program", desc: "Bi-weekly mock technical and HR interviews with feedback from industry mentors. 500+ students trained annually." },
                { icon: "💼", title: "Internship Placement Drive", desc: "Dedicated internship drives in Semester 5 with 40+ companies visiting campus for 6-month and summer internship roles." },
                { icon: "🏢", title: "Campus Recruitment", desc: "Annual placement season with 80+ companies visiting campus. Average package: ₹6.8 LPA. Highest: ₹42 LPA (2024)." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-[#0A1F44] text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0A1F44] rounded-2xl p-8 text-white">
            <h3 className="font-bold text-xl mb-6 text-[#FF6B00]">Placement Highlights 2024</h3>
            <div className="grid grid-cols-2 gap-5 mb-6">
              {[
                { val: "95%", label: "Overall Placement" },
                { val: "₹6.8L", label: "Average Package" },
                { val: "₹42L", label: "Highest Package" },
                { val: "80+", label: "Recruiting Companies" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-[#FF6B00]">{s.val}</p>
                  <p className="text-gray-300 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              * Data from the 2023–24 placement season. Package figures are CTC (Cost to Company) and include all components. Placement percentage calculated on eligible students who opted for campus placements.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="light">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="Common Questions"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about admissions, curriculum, and campus life."
          />
          <FAQ items={faqItems} />
        </div>
      </SectionWrapper>
    </>
  );
}
