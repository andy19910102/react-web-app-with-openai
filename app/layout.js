import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";

export const metadata = {
  title: "React App with OpenAI",
  description: "A simple React app that uses OpenAI's GPT-4o API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-lvh pt-[50px] bg-gradient-to-tr from-slate-100 to-slate-200">
          {children}
        </main>
      </body>
    </html>
  );
}
