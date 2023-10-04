import type { Metadata } from "next"
import { Comfortaa, Rubik } from "next/font/google";
import { ReactNode } from "react";
import { AppProvider } from "./providers/AppProvider";

import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  children: ReactNode;
}

const comfortaa = Comfortaa({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POAP",
  description: "Ben Towler - Technical Test",
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} ${rubik.className}`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
