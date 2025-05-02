import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistem Pemilihan Bidang Minat",
  description: "Created by Dept.PPm",
  icons: {
    icon: "/assets/logo/logo.png",
    shortcut: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/assets/logo/logo.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
