import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Next",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // en / fa
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
