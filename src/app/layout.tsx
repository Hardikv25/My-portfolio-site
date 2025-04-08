import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SendMessage from "./components/sendMessage";

export const metadata: Metadata = {
  title: "Hardik Viras | Full-Stack Developer",
  description: "Portfolio site of Hardik Viras, a full-stack developer specializing in React, Next.js, Laravel, and MySQL.",
  keywords: ["Next.js portfolio", "Full-Stack Developer", "React Developer", "Laravel", "MCA student", "Hardik Viras", "Hardik Viras Portfolio"],
  authors: [{ name: "Hardik Viras" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Hardik Viras | Portfolio" />
        <meta property="og:description" content="A showcase of my projects, blogs, and technical skills." />
        <meta property="og:image" content="https://hardik-viras-portfolio.vercel.app/myimg2.jpg" />
        <meta property="og:url" content="https://hardik-viras-portfolio.vercel.app/" />
      </head>
      <body className="p-4 sm:p-8">
        <Header />
        {children}
        <SendMessage />
        <Footer />
      </body>
    </html>
  );
}
