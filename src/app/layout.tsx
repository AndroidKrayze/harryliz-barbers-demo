import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "opsz"],
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Harryliz Barbers | Lower Road, SE16",
  description:
    "Precision cuts, fades, and inclusive grooming at Harryliz Barbers on 134 Lower Road, Bermondsey SE16. Book on Fresha or call the shop.",
  openGraph: {
    title: "Harryliz Barbers | Lower Road, SE16",
    description:
      "Premium barbershop in Bermondsey SE16. Book online on Fresha.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
