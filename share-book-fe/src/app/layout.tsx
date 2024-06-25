import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Share Book",
  description: "Find a Partner for your book",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
