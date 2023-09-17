"use client";
import Header from "@/components/Header/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import LSidebar from "@/components/Left sidebar/LSidebar";
import RSidebar from "@/components/Right sidebar/RSidebar";
import { useState } from "react";
import LogIn from "@/components/LogIn";

const inter = Roboto({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoggedIn ? (
          <div className="w-full flex relative md:grid md:grid-cols-4">
            <LSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main className="md:col-span-3">
              <Header toggleSidebar={toggleSidebar} />
              {children}
            </main>
            {/* <RSidebar /> */}
          </div>
        ) : (
          <LogIn setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        )}
      </body>
    </html>
  );
}
