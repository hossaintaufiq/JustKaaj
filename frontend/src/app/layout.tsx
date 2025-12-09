import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justkaaj",
  description: "Justkaaj is a platform for finding and booking services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
