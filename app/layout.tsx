import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Naraina College of Engineering and Technology",
  description:
    "NCET – Shaping Engineers, Building Futures. Premier engineering college offering B.Tech programs in Computer Science, Electronics, Mechanical, and Civil Engineering.",
  keywords: "NCET, Naraina College, Engineering, Technology, B.Tech, Computer Science",
  openGraph: {
    title: "Naraina College of Engineering and Technology",
    description: "Premier engineering institution committed to academic excellence and industry-ready graduates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
