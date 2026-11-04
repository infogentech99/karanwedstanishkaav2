import DisableInspect from "@/app/components/DisableInspect";
import type { Metadata, Viewport  } from "next";
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
  metadataBase: new URL("https://karanwedstanishkaaall2.invitearc.com/"),

  openGraph: {
    title: "Karan & Tanishkaa ",
    description: "Join as they begin their forever. 10 December, 2026",
    url: "https://karanwedstanishkaaall2.invitearc.com/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Karan & Tanishkaa ",
      }, 
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Karan & Tanishkaa",
    description: "Join as they begin their forever. 10 December, 2026",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://karanwedstanishkaaall2.invitearc.com/og.jpg",
    "og:image:type": "image/jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

       {/* <DisableInspect />  */}
        {children}
      </body>
    </html>
  );
}