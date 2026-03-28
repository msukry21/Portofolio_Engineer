import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Muhammad Sukry | %s | EPCC Engineer",
    default: "Muhammad Sukry | EPCC Engineer — Electrical, Instrument, Control & Automation",
  },
  description:
    "Portfolio of Muhammad Sukry — EPCC Engineer specializing in Electrical, Instrumentation, Control, and Automation system design for oil & gas, power, and industrial facilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
