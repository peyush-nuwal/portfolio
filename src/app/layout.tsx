import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "@/Context/ScrollContext";




const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Peyush nuwal ",
  description: "Peyush nuwal's personal website",
  icons: {
    icon: "/favicon.svg", // or /favicon.ico
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
