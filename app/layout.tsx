import Providers from "@/components/Providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";
import Footer from "@/components/Footer";
import Background from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Networth Tracker",
  description: "Networth tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Background />
          <Navbar />

          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
