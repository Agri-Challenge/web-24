import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgrI Challenge",
  description:
    "The AgrI Challenge is a data-centric competition framework for agricultural machine learning. 12 teams, 50,673 images, 6 tree species. Request dataset access, cite the work, and explore the Cross-Team Validation framework.",
  keywords: [
    "AgrI Challenge",
    "agricultural machine learning",
    "data-centric AI",
    "tree species classification",
    "cross-team validation",
    "benchmark dataset",
  ],
  icons: {
    icon: '/logo/agriChallenge-logo.svg',
  },
  openGraph: {
    title: "AgrI Challenge",
    description:
      "A Data-Centric Competition Framework for Agricultural Machine Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

