import type { Metadata } from "next";
import { Suspense } from 'react'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/layouts/Header/Header";
// import { AuthProvider } from './context/AuthContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
        <Header />
        </Suspense>
        {/* <AuthProvider> */}
        {children}
        {/* </AuthProvider> */}
        </body>
    </html>
  );
}
