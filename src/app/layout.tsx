import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/base.scss';
import '../styles/reset.scss';

import NextAuthSessionProvider from '../provider/NextAuthSessionProvider';

/** 기본 레이아웃  */

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="section">
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        </div>
      </body>
    </html>
  );
}
