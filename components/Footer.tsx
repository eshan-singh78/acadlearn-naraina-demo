import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#FF6B00] rounded-lg flex items-center justify-center font-bold text-white text-sm">
                NC
              </div>
              <div>
                <p className="font-bold text-sm">Naraina College</p>
                <p className="text-[#FF6B00] text-xs">of Engineering & Technology</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Shaping engineers and innovators since 2008. AICTE approved, affiliated to Dr. A.P.J. Abdul Kalam Technical University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#FF6B00] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/curriculum", label: "Curriculum" },
                { href: "/cs", label: "CS Department" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#FF6B00] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#FF6B00] uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "B.Tech Computer Science",
                "B.Tech Electronics & Comm.",
                "B.Tech Mechanical Engg.",
                "B.Tech Civil Engg.",
                "MBA (Technology Mgmt.)",
              ].map((p) => (
                <li key={p} className="hover:text-white transition-colors cursor-pointer">{p}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#FF6B00] uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <span>📍</span>
                <span>Naraina Industrial Area, Phase-I, New Delhi – 110028</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>+91-11-4567-8900</span>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <span>admissions@ncet.ac.in</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              {["𝕏", "in", "f", "▶"].map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs hover:bg-[#FF6B00] transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2024 Naraina College of Engineering and Technology. All rights reserved.</p>
          <p>AICTE Approved | AKTU Affiliated | NBA Accredited</p>
        </div>
      </div>
    </footer>
  );
}
