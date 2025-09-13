import type { Metadata } from "next";
import { Farro, PT_Serif, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const farro = Farro({
  weight: "500",
  variable: "--font-farro",
  subsets: ["latin"],
});

const pt_serif = PT_Serif({
  weight: "400",
  variable: "--font-pt-serif",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  weight: "300",
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jagmohan Homes - Premium PG Accommodation in Noida",
  description: "Comfortable and affordable PG accommodation for students and professionals in Noida. Modern amenities, safe environment, and prime location.",
  keywords: "PG accommodation, Noida, students, professionals, affordable, comfortable, safe",
  authors: [{ name: "Jagmohan Homes" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="512x512"/>
      </head>

      <body
        className={`${farro.variable} ${pt_serif.variable} ${open_sans.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
