import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Simple Bank",
    template: "%s | Simple Bank",
  },
  description: "Simple Bank is a web application that allows users to manage their bank accounts, view transactions, and perform basic banking operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
