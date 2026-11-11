import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "رفيق | مكان لأفكارك وخطوة ليومك",
  description:
    "رفيق تطبيق يومي للناس اللي عندهم ADHD. حوّل تسجيلاتك لنص، احفظ أفكارك، وظبّط تذكيراتك وروتينك.",
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
