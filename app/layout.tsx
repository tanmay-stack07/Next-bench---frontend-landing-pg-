import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterOverlay from "@/components/FooterOverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Bench Dashboard",
  description: "Interactive dashboard for Next Bench",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FooterOverlay />
      </body>
    </html>
  );
}
