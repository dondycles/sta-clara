import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
const poppins = Poppins({
  weight: ["400", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} h-screen bg-background font-poppins antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
