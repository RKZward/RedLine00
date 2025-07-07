import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RedLine - Tuning e Modificações Automotivas",
  description:
    "Especialistas em tuning, estética automotiva, reparos e modificações. Transforme seu veículo com a RedLine.",
  keywords: "tuning, modificações automotivas, estética automotiva, reparos, xenon, neon, helicoptero, remap",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
