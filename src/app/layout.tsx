import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

// SEO - Search engine optimization

export const metadata: Metadata = {
  title: 'Passaporte',
  description: 'Guia de países das Ámericas feito na aula de next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
