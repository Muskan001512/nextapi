import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import AuthProvider from '@/Provider/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
        </body>
    </html>
    
  )
}
