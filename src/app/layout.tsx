import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "School Directory", description: "Add & list schools" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       
        {children}
      </body>
    </html>
  );
}