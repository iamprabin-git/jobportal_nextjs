// src/app/layout.jsx
'use client';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}