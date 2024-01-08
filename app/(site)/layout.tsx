import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sujit Gouda | Software Developer',
  description: 'A personal portfolio site built with Sanity and Next.js',
  openGraph: {
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1689893059/docs/og.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}