import './globals.css';
import { Inter } from 'next/font/google';
import Provider from '@/components/Provider';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apploud Gitlab Access Checker',
  description: 'Jednoduchý nástroj pro kontrolu přístupu k skupinám a projektům v GitLabu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
