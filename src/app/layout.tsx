import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sundaycreativestudio.com"),
  title: {
    default: "Sunday Creative Studio — Premium Design & Digital Experiences",
    template: "%s | Sunday Creative Studio",
  },
  description:
    "Sunday Creative Studio crafts premium digital experiences — brand identities, web design, motion, and creative strategy that set ambitious brands apart.",
  keywords: [
    "creative studio",
    "web design",
    "brand identity",
    "digital experiences",
    "UI/UX design",
    "motion design",
    "Next.js",
    "Sunday Creative Studio",
  ],
  authors: [{ name: "Sunday Creative Studio" }],
  creator: "Sunday Creative Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sundaycreativestudio.com",
    siteName: "Sunday Creative Studio",
    title: "Sunday Creative Studio — Premium Design & Digital Experiences",
    description:
      "We craft premium digital experiences that set ambitious brands apart.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunday Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunday Creative Studio",
    description:
      "Premium design & digital experiences for ambitious brands.",
    images: ["/og-image.jpg"],
    creator: "@sundaycreative",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#060608] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
