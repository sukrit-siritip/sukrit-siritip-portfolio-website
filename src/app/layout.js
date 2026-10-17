import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Sukrit Siritip | Frontend Developer",
  description:
    "Frontend Developer in Bangkok building enterprise web platforms with Next.js and React.",
  openGraph: {
    title: "Sukrit Siritip | Frontend Developer",
    description:
      "Enterprise web platforms with Next.js and React: component libraries, dashboards, and content platforms.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#161c2a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
