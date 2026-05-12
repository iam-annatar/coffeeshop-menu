import type { Metadata } from "next";

import localFont from "next/font/local";

import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Next",
  description: "",
};

const estedadFont = localFont({
  src: "../assets/fonts/Variable/Estedad-FD[KSHD,wght].ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className={estedadFont.className}>
      <body className="">
        <main>
          <div className="bg-primary min-h-screen w-full">
            {children}
            <Sidebar />
          </div>
        </main>
      </body>
    </html>
  );
}
