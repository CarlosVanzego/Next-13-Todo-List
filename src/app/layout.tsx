// Importing necessary modules and types from Next.js, Google Fonts, and the global CSS file
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Initializing the Inter font with the Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the application
export const metadata: Metadata = {
  title: "Todo App",
};

// Default export function for the root layout component
export default function RootLayout({
  children, // Children components to be rendered within the layout
}: Readonly<{
  children: React.ReactNode; // Type definition for the children prop
}>) {
  return (
    // Root HTML structure with lang attribute set to "en"
    <html lang="en">
      {/* Body section with Inter font class and background/text color classes */}
      <body className={`${inter.className} bg-slate-800 text-slate-100 mx-auto p-4`}>
        {/* Rendering children components within the body */}
        {children}
      </body>
    </html>
  );
}