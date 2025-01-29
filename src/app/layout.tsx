import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SendMessage from "./components/sendMessage";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Nextjs portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-8">
        <Header/>
        {children}
        <SendMessage/>
        <Footer/>
      </body>
    </html>
  );
}
