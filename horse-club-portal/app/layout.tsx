
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./components/Navbar/Navbar"
import "rsuite/dist/rsuite-no-reset.min.css"
import { CustomProvider } from "rsuite"

export const metadata: Metadata = {
  title: "HorseClubPortal",
  description: "HorseClubPortal",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomProvider>
          <Navbar />
          {children}
        </CustomProvider>
      </body>
    </html>
  )
}
