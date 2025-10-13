import { Lexend } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


const customFont = localFont({
  src: [
    {
      path: "../../public/fonts/Maison_Neue_Book.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});

export const metadata = {
  title: "Garaga Pavan Karthik",
  description: "Pavan Karthik's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="r4vcjdz2s3e3ofv234sxffggp4xqt2"
        />
      </head>
      <body
        className={`${customFont.variable} antialiased font-lexend`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
