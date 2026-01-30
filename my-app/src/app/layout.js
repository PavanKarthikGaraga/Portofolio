import localFont from "next/font/local";
import { Lexend } from "next/font/google"; // Import Poppins
import "./globals.css";
import Oneko from "./oneko";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const customFont = localFont({
  src: [
    {
      path: "../../public/fonts/HankenGrotesk-Variable.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export const metadata = {
  title: "Garaga Pavan Karthik",
  description: "Pavan Karthik's Portfolio",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="r4vcjdz2s3e3ofv234sxffggp4xqt2"
        />
        <link rel="icon" href="/me_filled.png" />
      </head>
      <body
        className={`${customFont.variable} ${lexend.variable} antialiased font-custom`}
      >
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <Oneko />
        </ThemeProvider>
      </body>
    </html>
  );
}
