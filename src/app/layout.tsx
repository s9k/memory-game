import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { PageHeader, PageContainer } from "@/widgets";
import { TITLE } from "@/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: TITLE,
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
