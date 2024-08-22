import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider as NextThemesProvider } from "next-themes"

import "./globals.css";

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
    template: "%s | lumin",
    default : "lumin"
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
      <NextThemesProvider attribute="class"
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange>

        {children}
      </NextThemesProvider>
      </body>
    </html>
  );
}
