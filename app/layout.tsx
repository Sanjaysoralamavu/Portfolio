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
  metadataBase: new URL("https://sanjaysoralamavu.github.io"),
  title: "Sanjay S Dev | Data Analyst & Automation Specialist",
  description:
    "Portfolio of Sanjay S Dev — Data Analyst at ASU Social Embeddedness. I build ETL pipelines, executive dashboards, and automation workflows that help teams make faster, clearer decisions.",
  keywords: [
    "Sanjay S Dev",
    "Data Analyst",
    "Data Engineer",
    "ETL",
    "Tableau",
    "Power BI",
    "Python",
    "SQL",
    "Arizona State University",
    "Portfolio",
  ],
  authors: [{ name: "Sanjay S Dev", url: "https://sanjaysoralamavu.github.io/Portfolio" }],
  openGraph: {
    type: "website",
    url: "https://sanjaysoralamavu.github.io/Portfolio",
    title: "Sanjay S Dev | Data Analyst & Automation Specialist",
    description:
      "I build resilient data systems, executive dashboards, and automation workflows that help teams make faster, clearer decisions.",
    siteName: "Sanjay S Dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanjay S Dev — Data Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay S Dev | Data Analyst & Automation Specialist",
    description:
      "I build resilient data systems, executive dashboards, and automation workflows that help teams make faster, clearer decisions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
