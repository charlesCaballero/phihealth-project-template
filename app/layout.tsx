import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Theme from "./theme";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhilHealth Project Template",
  description:
    "Created by Charles Caballero as a pastime project(created outside office hours) to be used for future web-based system or projects in Philhealth. This version uses DaisyUI with Tailwind css. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
