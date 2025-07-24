import type { Metadata } from "next";
import { Archivo } from "next/font/google";

import "@/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Amoura - Relationship Connection App",
  description:
    "Deepen your connection with your partner through interactive cards, games, and activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased`}>{children}</body>
    </html>
  );
}
