import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ACM Nexus - Tula's Institute",
  description: "Empowering the next generation of computing professionals through education, innovation, and community at Tula's Institute.",
  keywords: ["ACM", "Computer Science", "Tula's Institute", "Student Chapter", "Programming", "Technology"],
  authors: [{ name: "ACM Nexus Team" }],
  openGraph: {
    title: "ACM Nexus - Tula's Institute",
    description: "Empowering the next generation of computing professionals through education, innovation, and community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
