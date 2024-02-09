import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arik - Portfolio (clone)",
  description: "Inspired of https://arik-template.framer.website/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-satoshi">{children}</body>
    </html>
  );
}
