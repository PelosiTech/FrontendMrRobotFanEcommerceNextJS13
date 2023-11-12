import type { Metadata } from "next";
import localFont from 'next/font/local'

import Footer from "@/components/footer";

import "./globals.css";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";

const myFont = localFont({ src: "../public/MR ROBOT.ttf" })

export const metadata: Metadata = {
  title: "MrRobot",
  description: "MrRobot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
