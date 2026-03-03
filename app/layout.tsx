import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import ResponsiveNav from "@/components/Header/ResponsiveNav";

const font = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Agensite",
  description:
    "Web agency website built with Next.js and styled with Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider>
          <ResponsiveNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
