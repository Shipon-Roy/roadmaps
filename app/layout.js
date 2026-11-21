import "./globals.css";
import { Inter } from "next/font/google";
import MDXProviderWrapper from "./../components/blogs/MDXProviderWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Free Learning Path",
  description:
    "Structured roadmaps, curated free resources, and expert guidance to take you from your first line of code to a job-ready developer.",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: থিম class ব্রাউজারে যাচাই করা হয়, তাই React mismatch স্বাভাবিক
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <MDXProviderWrapper>
          <div>{children}</div>
        </MDXProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
