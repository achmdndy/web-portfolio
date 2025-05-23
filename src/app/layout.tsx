import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FramerMotionProvider } from './_providers/framer-motion-provider';
import { ThemeProvider } from './_providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Homepage - @achmdndy',
  description: 'Homepage - Web Portfolio Achmand Andy Dekanovy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <FramerMotionProvider>{children}</FramerMotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
