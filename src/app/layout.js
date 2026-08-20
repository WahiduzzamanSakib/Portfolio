import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL("https://waheduzzaman.vercel.app"),

  title: "Waheduzzaman | MERN Stack Developer",
  description:
    "Portfolio of Md. Waheduzzaman, a MERN Stack Developer building modern, responsive web applications with React, Next.js, and Node.js.",

  openGraph: {
    title: "Waheduzzaman | MERN Stack Developer",
    description:
      "Portfolio of Md. Waheduzzaman, a MERN Stack Developer building modern, responsive web applications with React, Next.js, and Node.js.",
    url: "https://waheduzzaman.vercel.app",
    siteName: "Waheduzzaman Portfolio",
    images: [
      {
        url: "/my-logo.png",
        width: 1200,
        height: 630,
        alt: "Waheduzzaman portfolio logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Waheduzzaman | MERN Stack Developer",
    description:
      "Portfolio of Md. Waheduzzaman, a MERN Stack Developer building modern, responsive web applications with React, Next.js, and Node.js.",
    images: ["/my-logo.png"],
  },
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}