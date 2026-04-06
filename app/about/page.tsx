import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Us | Naraina College of Engineering and Technology",
  description:
    "Learn about NCET's history, vision, mission, world-class campus facilities, and the leadership team driving academic excellence since 2008.",
};

const facilities = [
  {
    icon: "🖥️",
    title: "Smart Classrooms",
    description:
      "60 fully digitized classrooms equipped with interactive smart boards, high-speed Wi-Fi, and live lecture recording systems for flexible learning.",
  },
  {
    icon: "📚",
    title: "Central Library",
    description:
      "A 3-floor library housing 80,000+ volumes, 200+ national and international journals, and 24/7 digital access to IEEE, Springer, and Elsevier databases.",
  },
  {
    icon: "🔬",
    title: "Advanced Research Labs",
    description:
      "12 specialized labs including an AI/ML Research Center, Embedded Systems Lab, Robotics Lab, and a Fabrication Studio for hardware prototyping.",
  },
  {
    icon: "🏠",
    title: "Hostel Facilities",
    description:
      "Separate, fully furnished hostels for boys and girls with 24/7 security, high-speed internet, mess facilities, and recreational areas.",
  },
  {
    icon: "⚽",
    title: "Sports Complex",
    description:
      "A 5-acre sports complex with cricket ground, football field, basketball and volleyball courts, a 400m athletics track, and an indoor gymnasium.",
  },
  {
    icon: "🍽️",
    title: "Campus Amenities",
    description:
      "Multi-cuisine cafeteria, medical center, ATM, stationery store, and a dedicated student activity center for clubs and events.",
  },
];

const leadership = [
  {
    name: "Dr. Rajendra Kumar Sharma",
    role: "Principal",
    qualification: "Ph.D. (IIT Delhi), M.Tech (NIT Allahabad)",
    bio: "Dr. Sharma brings over 28 years of academic and research experience. A former faculty member at IIT Delhi, he has published 45+ research papers in international journals and holds 3 patents in embedded systems design. Under his leadership, NCET achieved NBA accreditation and established research partnerships with 12 global universities.",
    initials: "RKS",
  },
  {
    name: "Dr. Anita Srivastava",
    role: "Dean of Academics",
    qualification: "Ph.D. (IIT Bombay), M.Tech (BITS Pilani)",
    bio: "Dr. Srivastava oversees curriculum design and academic quality across all departments. With 22 years of experience in engineering education, she spearheaded the integration of industry-aligned electives and the college's mentorship program that has benefited over 3,000 students.",
    initials: "AS",
  },
  {
    name: "Prof. Vikram Nair",
    role: "Dean of Research & Innovation",
    qualification: "Ph.D. (IISc Bangalore), B.Tech (NIT Trichy)",
    bio: "Prof. Nair leads NCET's research initiatives and the student innovation hub. He has guided 18 PhD scholars and secured ₹4.2 crore in research grants from DST and SERB. He is the driving force behind NCET's annual TechFest, which attracts 5,000+ participants from across India.",
    initials: "VN",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#0A1F44] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About NCET</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Sixteen years of shaping engineers, fostering innovation, and building careers that matter.
          </p>
        </div>
      </section>

      {/* History */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              label="Our History"
              title="From a Vision to a Legacy"
              center={false}
            />
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Naraina College of Engineering and Technology was founded in 2008 by the Naraina Educational Trust with a singular mission: to create a world-class engineering institution in the heart of Delhi that would make quality technical education accessible to every deserving student.
              </p>
              <p>
                Starting with just two departments and 240 students, NCET grew rapidly under the guidance of its founding faculty — many of whom were IIT and NIT alumni committed to building something different. By 2012, the college had expanded to four departments and received its first AICTE approval with commendation.
              </p>
              <p>
                The year 2015 marked a turning point when NCET signed its first industry MoU with Infosys, launching a campus-integrated training program that would become a model for other institutions. By 2018, the college had achieved NBA accreditation and established its AI/ML Research Center — one of the first at a private engineering college in Delhi NCR.
              </p>
              <p>
                Today, NCET stands as one of Delhi's most respected engineering institutions, with 10,000+ enrolled students, 50+ expert faculty, and a placement record that consistently outperforms the national average.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            {[
              { year: "2008", event: "Founded with 240 students across 2 departments" },
              { year: "2010", event: "AICTE approval received; campus expansion begins" },
              { year: "2012", event: "Expanded to 4 departments; first batch placed at TCS & Wipro" },
              { year: "2015", event: "Industry MoU signed with Infosys; T&P cell established" },
              { year: "2018", event: "NBA Accreditation achieved; AI/ML Research Center launched" },
              { year: "2021", event: "International partnerships with 3 global universities" },
              { year: "2024", event: "10,000+ students; 95% placement rate milestone" },
            ].map((item) => (
              <div key={item.year} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-14 h-7 bg-[#FF6B00] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{item.year}</span>
                </div>
                <p className="text-gray-600 text-sm pt-0.5">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper bg="light">
        <SectionHeading
          label="Our Purpose"
          title="Vision & Mission"
          subtitle="The principles that guide every decision we make at NCET."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0A1F44] rounded-2xl p-8 text-white">
            <div className="text-4xl mb-4">🔭</div>
            <h3 className="text-xl font-bold mb-3 text-[#FF6B00]">Our Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              To be a globally recognized center of engineering excellence that produces technically proficient, ethically grounded, and socially responsible engineers who drive innovation and contribute meaningfully to India's technological advancement.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-[#0A1F44]">Our Mission</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "Deliver industry-aligned education through experienced faculty and modern infrastructure",
                "Foster a culture of research, innovation, and entrepreneurship",
                "Build strong industry partnerships for real-world learning and placement",
                "Develop holistic engineers with strong communication and leadership skills",
                "Ensure inclusive access to quality technical education for all students",
              ].map((m) => (
                <li key={m} className="flex gap-2">
                  <span className="text-[#FF6B00] flex-shrink-0">→</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Facilities */}
      <SectionWrapper bg="white">
        <SectionHeading
          label="Campus Life"
          title="World-Class Facilities"
          subtitle="Every resource you need to learn, grow, and thrive — all on one campus."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-gray-100 hover:border-[#FF6B00]/30 hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl block mb-3">{f.icon}</span>
              <h3 className="font-semibold text-[#0A1F44] mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper bg="light">
        <SectionHeading
          label="Leadership"
          title="The Team Behind NCET"
          subtitle="Experienced educators and researchers committed to your success."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((person) => (
            <div
              key={person.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#0A1F44] rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4">
                {person.initials}
              </div>
              <h3 className="font-bold text-[#0A1F44] text-lg">{person.name}</h3>
              <p className="text-[#FF6B00] text-sm font-semibold mb-1">{person.role}</p>
              <p className="text-gray-400 text-xs mb-3">{person.qualification}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper bg="white" id="contact">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            label="Get In Touch"
            title="Apply or Enquire"
            subtitle="Fill out the form below and our admissions team will reach out within 24 hours."
          />
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
