import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vignan Institute of Technology and Science | VGNT",
  description:
    "Vignan Institute of Technology and Science (VGNT) — An Institution Nurturing Innovation and Excellence. AICTE Approved, JNTUK Affiliated, NAAC Accredited.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-[family-name:var(--font-outfit)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
