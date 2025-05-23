import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { PageHeader } from "@/components/PageHeader";
import { PageContainer } from "@/components/PageContainer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Memorizer",
  description: "Memory game. Match all photos in pairs as fast as possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable}`}>
        <PageHeader />
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  );
}
