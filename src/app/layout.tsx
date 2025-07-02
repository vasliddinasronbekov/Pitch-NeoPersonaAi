"use-client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elevator Pitch",
  description: "NeoPersona is an AI-powered digital twin platform that replicates the user’s voice, appearance, and personality. It allows real-time interaction, voice cloning, and memory-based behavior, enabling the digital clone to represent the user in virtual settings, even when they are unavailable.The goal is to enable users to create and train a digital version of themselves that can think, speak, and behave like them. This clone acts as a real-time virtual assistant or representative in meetings, personal tasks, and memory simulation — powered by secure, multilingual AI technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.png" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
