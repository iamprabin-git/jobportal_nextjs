// src/app/layout.jsx
'use client';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}