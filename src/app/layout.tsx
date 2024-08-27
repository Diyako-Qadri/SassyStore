

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/component/Header';
import '../global.scss';
import Navbar from '@/component/Navbar';
const inter = Inter({ subsets: ['latin'] });
import Footer from '@/component/Footer';
import { CardProvider } from '@/context/StateContext';


export const metadata: Metadata = {
  title: 'Online Bazaar',
  description: 'Your online bazaar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">
      <body className={inter.className}>
        <CardProvider>
          <Header />
          <Navbar />
      
          {children}
          <Footer />
        </CardProvider>
      </body>
    </html>
  );
}
