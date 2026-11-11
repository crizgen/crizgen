import type { Metadata } from "next";
import { Instrument_Serif, Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crizgen.com"),
  title: "Crizgen | Web & Mobile App Studio in Chennai",
  description:
    "Crizgen is a Chennai studio building fast websites, web apps and mobile apps for ambitious businesses.",
  openGraph: {
    type: "website",
    url: "https://crizgen.com/",
    title: "Crizgen | Web & Mobile App Studio",
    description:
      "We design and build websites, web apps and mobile apps. Based in Chennai, India.",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${bricolage.variable} ${mono.variable} antialiased`}
    >
      <body className="grain">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
