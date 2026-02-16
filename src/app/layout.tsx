import type { Metadata } from "next";
import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "M3 Games ",
  description: "We don't just deliver code — we build scalable systems that grow with your business.",
  metadataBase: new URL("https://m3-games.com"), 
  openGraph: {
    title: "M3 Games - Solutions Built for Your Growth",
    description: "We don't just deliver code — we build scalable systems that grow with your business.",
    url: "https:/so",
    siteName: "M3 Games",
    images: [
      {
        url: "/Social_Preview.png",
        width: 1200,
        height: 630,
        alt: "M3 Games Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M3 Games - Solutions Built for Your Growth",
    description: "We don't just deliver code — we build scalable systems that grow with your business.",
    images: ["/Social_Preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
