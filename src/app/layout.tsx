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
  preload: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={estedadFont.className}>
        <main className="bg-primary relative mx-auto w-full max-w-[800px]">
          <div className="h-screen w-[calc(100%-80px)] overflow-y-auto">
            {children}
          </div>
          <Sidebar />
        </main>
      </body>
    </html>
  );
}
