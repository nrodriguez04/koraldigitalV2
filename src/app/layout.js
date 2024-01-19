import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Koral Digital',
  description: 'Helping businesses grow with digital marketing.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Navigation />  
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
