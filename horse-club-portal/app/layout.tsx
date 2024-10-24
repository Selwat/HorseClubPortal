import type { Metadata } from "next";
import "./globals.css";
import 'rsuite/dist/rsuite.min.css';

export const metadata: Metadata = {
  title: "Horse Club Portal",
  description: "Horse Club Portal",
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
