import type { Metadata } from "next";
import "./globals.css";

import { FitLogProvider } from "@/context/FitLogContext";
import Navbar from "@/components/Navbar";

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library and Planning App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0b0c0e] text-white antialiased">
        <FitLogProvider>
          <Navbar />

          {children}

          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 2500,
              style: {
                background: "#15171c",
                color: "#ffffff",
                border: "1px solid #33363d",
              },
            }}
          />
        </FitLogProvider>
      </body>
    </html>
  );
}