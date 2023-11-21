import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { CombinedCartProvider } from '@/components/CombinedCartProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to Carro',
  description: 'Built by Musa Abdulmuqaddas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CombinedCartProvider>
        <Navbar />
        {children}
        <Footer />
        </CombinedCartProvider>
        </body>
    </html>
  )
}
