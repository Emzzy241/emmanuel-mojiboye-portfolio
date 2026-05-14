import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Emmanuel Mojiboye — Full-Stack Developer | Back-end Developer",
  description:
    "Full-stack software developer crafting reliable backend systems and modern frontend interfaces.",
  openGraph: {
    title: "Emmanuel Mojiboye — Full-Stack Developer | Back-end Developer",
    description:
      "Full-stack software developer crafting reliable backend systems and modern frontend interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
