import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Computer Science Batch | Naraina College of Engineering and Technology",
  description:
    "Explore NCET's B.Tech Computer Science program — subjects, labs, AI/ML projects, placement stats, and top recruiters like Amazon, TCS, and Microsoft.",
};

const coreSubjects = [
  {
    icon: "🌲",
    title: "Data Structures & Algorithms",
    description:
      "Arrays, linked lists, trees, graphs, sorting, and dynamic programming. Emphasis on problem-solving for competitive programming and technical interviews.",
    badge: "Semester 3",
  },
  {
    icon: "🖥️",
    title: "Operating Systems",
    description:
      "Process management, memory management, file systems, deadlock handling, and concurrency. Includes Linux kernel exploration labs.",
    badge: "Semester 4",
  },
  {
    icon: "🗄️",
    title: "Database Management Systems",
    description:
      "Relational algebra, SQL, normalization, transaction management, and NoSQL databases. Hands-on with MySQL, PostgreSQL, and MongoDB.",
    badge: "Semester 4",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "Search algorithms, knowledge representation, expert systems, and planning. Foundation for the ML and Deep Learning electives.",
    badge: "Semester 5",
  },
  {
    icon: "🧠",
    title: "Machine Learning",
    description:
      "Supervised and unsupervised learning, regression, classification, clustering, and model evaluation. Implemented in Python with scikit-learn and TensorFlow.",
    badge: "Semester 6",
  },
  {
    icon: "🌐",
    title: "Computer Networks",
    description:
      "OSI model, TCP/IP stack, routing protocols, network security, and socket programming. Includes Cisco Packet Tracer simulation labs.",
    badge: "Semester 4",
  },
];

const labs = [
  {
    name: "AI/ML Research Lab",
    specs: "40 workstations · NVIDIA RTX 4090 GPUs · TensorFlow, PyTorch, Keras",
    description:
      "Dedicated to deep learning research and student projects. Equipped with high-performance GPU clusters for training large models.",
    icon: "🧠",
  },
  {
    name: "Full-Stack Development Lab",
    specs: "50 workstations · Dual monitors · Node.js, React, Docker environments",
    description:
      "Industry-standard development environment for web and mobile application projects. Includes CI/CD pipeline setup for DevOps practice.",
    icon: "💻",
  },
  {
    name: "Cybersecurity Lab",
    specs: "30 workstations · Isolated network · Kali Linux, Metasploit, Wireshark",
    description:
      "Sandboxed environment for ethical hacking, penetration testing, and network forensics. Used for CEH certification preparation.",
    icon: "🔐",
  },
  {
    name: "IoT & Embedded Systems Lab",
    specs: "Arduino, Raspberry Pi, ESP32 kits · Sensors & actuators · PCB design tools",
    description:
      "Hands-on lab for building IoT prototypes, smart devices, and embedded systems. Students have built 50+ working prototypes here.",
    icon: "📡",
  },
];

const projects = [
  {
    title: "MediAssist – AI Diagnostic Chatbot",
    team: "Priya Mehta, Rohan Gupta, Ananya Singh",
    batch: "2023",
    tech: "Python · TensorFlow · FastAPI · React",
    description:
      "An AI-powered medical symptom checker that uses NLP to analyze patient inputs and suggest possible conditions with confidence scores. Achieved 87% accuracy on a dataset of 50,000 patient records.",
    award: "Best Project Award 2023",
  },
  {
    title: "SmartCampus – IoT Energy Monitor",
    team: "Arjun Verma, Kavya Nair, Siddharth Rao",
    batch: "2023",
    tech: "ESP32 · MQTT · Node.js · Grafana",
    description:
      "A real-time campus energy monitoring system using IoT sensors deployed across 12 buildings. Reduced campus energy consumption by 18% in a 3-month pilot.",
    award: "AKTU Innovation Award",
  },
  {
    title: "CodeCollab – Real-time IDE",
    team: "Sneha Kapoor, Vikash Kumar, Divya Sharma",
    batch: "2024",
    tech: "Next.js · WebSockets · Monaco Editor · Redis",
    description:
      "A collaborative online code editor supporting 10+ languages with real-time multi-user editing, video chat, and AI code suggestions. 2,000+ active users post-launch.",
    award: "TechFest 2024 Winner",
  },
  {
    title: "FarmSense – Precision Agriculture System",
    team: "Rahul Tiwari, Meera Joshi, Aditya Patel",
    batch: "2024",
    tech: "Python · OpenCV · Drone API · Firebase",
    description:
      "Drone-based crop health monitoring system using computer vision to detect diseases and nutrient deficiencies. Piloted with 3 farms in Haryana with 92% detection accuracy.",
    award: "Smart India Hackathon Finalist",
  },
];

const recruiters = [
  { name: "Amazon", role: "SDE, Data Engineer", avg: "₹18–42 LPA", logo: "AMZ" },
  { name: "Microsoft", role: "SDE, SDET", avg: "₹16–38 LPA", logo: "MSF" },
  { name: "Google", role: "SWE (via referral)", avg: "₹22–45 LPA", logo: "GGL" },
  { name: "TCS", role: "System Engineer, Digital", avg: "₹3.5–7 LPA", logo: "TCS" },
  { name: "Infosys", role: "Systems Engineer, DSE", avg: "₹3.6–8 LPA", logo: "INF" },
  { name: "Wipro", role: "Project Engineer", avg: "₹3.5–6.5 LPA", logo: "WIP" },
  { name: "Accenture", role: "ASE, Analyst", avg: "₹4.5–9 LPA", logo: "ACC" },
  { name: "Paytm", role: "SDE, Backend Engineer", avg: "₹8–18 LPA", logo: "PAY" },
];

export default function CSPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0A1F44] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">
            Department of Computer Science
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            B.Tech Computer Science & Engineering
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-6">
            The most sought-after program at NCET. Build the skills to work at top tech companies or launch your own startup.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { val: "98%", label: "CS Placement Rate" },
              { val: "₹8.4L", label: "Avg. CS Package" },
              { val: "240", label: "Seats per Batch" },
              { val: "4", label: "Specialization Tracks" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl px-5 py-3 text-center">
                <p className="text-xl font-bold text-[#FF6B00]">{s.val}</p>
                <p className="text-gray-300 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Program Overview" title="What You'll Learn" center={false} />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The B.Tech CSE program at NCET is a 4-year, 8-semester degree that takes you from programming fundamentals to advanced topics in AI, cloud computing, and distributed systems. The curriculum is reviewed annually with inputs from our industry advisory board.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Beyond academics, CS students at NCET participate in national hackathons, open-source contribution drives, and startup incubation programs. Our alumni have founded 12 startups that have collectively raised over ₹45 crore in funding.
            </p>
            <div className="space-y-3">
              {[
                "Strong DSA and competitive programming culture with weekly contests",
                "Dedicated placement preparation from Semester 3 onwards",
                "Access to GPU clusters for AI/ML research projects",
                "Active coding clubs: AlgoArena, WebCraft, and CyberCell",
                "Annual hackathon with ₹5 lakh prize pool",
              ].map((point) => (
                <div key={point} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-[#FF6B00] font-bold flex-shrink-0">✓</span>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-[#0A1F44] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-[#FF6B00] mb-4">Program Snapshot</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Duration", value: "4 Years (8 Semesters)" },
                  { label: "Total Credits", value: "160" },
                  { label: "Intake Capacity", value: "240 Students" },
                  { label: "Affiliation", value: "AKTU, Lucknow" },
                  { label: "Accreditation", value: "NBA Accredited" },
                  { label: "Annual Fee", value: "₹1,20,000 (approx.)" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Subjects */}
      <SectionWrapper bg="light">
        <SectionHeading
          label="Core Curriculum"
          title="Key Subjects"
          subtitle="The backbone of the CS program — subjects that build your technical depth and problem-solving ability."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSubjects.map((subject) => (
            <Card key={subject.title} {...subject} />
          ))}
        </div>
      </SectionWrapper>

      {/* Labs */}
      <SectionWrapper bg="white">
        <SectionHeading
          label="Infrastructure"
          title="Labs & Facilities"
          subtitle="Purpose-built labs that give you hands-on experience with industry-standard tools and technologies."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {labs.map((lab) => (
            <div
              key={lab.name}
              className="border border-gray-100 rounded-2xl p-6 hover:border-[#FF6B00]/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{lab.icon}</span>
                <div>
                  <h3 className="font-bold text-[#0A1F44] mb-1">{lab.name}</h3>
                  <p className="text-xs text-[#FF6B00] font-medium mb-2">{lab.specs}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{lab.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Student Projects */}
      <SectionWrapper bg="light">
        <SectionHeading
          label="Student Work"
          title="Project Showcase"
          subtitle="Real projects built by NCET CS students — from AI chatbots to IoT systems."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-[#0A1F44] text-base">{project.title}</h3>
                <span className="text-xs bg-orange-50 text-[#FF6B00] font-semibold px-2 py-1 rounded-full flex-shrink-0 ml-2">
                  {project.award}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.split(" · ").map((t) => (
                  <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400">
                {project.team} · Batch {project.batch}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Placement Stats */}
      <SectionWrapper bg="dark">
        <SectionHeading
          label="CS Placements"
          title="Where Our CS Grads Go"
          subtitle="NCET CS students are placed at some of the most competitive tech companies in India and abroad."
          light
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-12">
          {[
            { val: "98%", label: "Placement Rate" },
            { val: "₹8.4L", label: "Average CTC" },
            { val: "₹42L", label: "Highest CTC" },
            { val: "60+", label: "CS Recruiters" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-[#FF6B00]">{s.val}</p>
              <p className="text-gray-300 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h3 className="text-white font-bold text-xl mb-6 text-center">Top Recruiters</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {recruiters.map((r) => (
            <div key={r.name} className="bg-white/10 rounded-2xl p-4 text-center hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center text-white font-bold text-xs mx-auto mb-3">
                {r.logo}
              </div>
              <p className="text-white font-semibold text-sm">{r.name}</p>
              <p className="text-gray-400 text-xs mt-1">{r.role}</p>
              <p className="text-[#FF6B00] text-xs font-medium mt-1">{r.avg}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="white">
        <div className="text-center max-w-2xl mx-auto">
          <SectionHeading
            label="Join the CS Batch"
            title="Start Your Tech Career at NCET"
            subtitle="Applications for the 2024–25 B.Tech CSE batch are open. Seats fill up fast."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/about#contact"
              className="px-8 py-3.5 bg-[#FF6B00] text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors text-sm"
            >
              Apply for CSE →
            </a>
            <a
              href="/curriculum"
              className="px-8 py-3.5 bg-[#0A1F44] text-white rounded-xl font-semibold hover:bg-blue-900 transition-colors text-sm"
            >
              View Full Curriculum
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
