import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider as NextThemesProvider } from "next-themes"

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "./ReactQueryProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lumin-Space",
    default : "Lumin-Space"
  },
  description: "The social media app for spreading Lumin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
    <ReactQueryProvider>
    
      <NextThemesProvider attribute="class"
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange>

        {children}
      </NextThemesProvider>
      <Toaster/>
      </ReactQueryProvider>
      </body>
    </html>
  );
}
