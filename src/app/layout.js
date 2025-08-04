// /app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Social Media Dashboard',
  description: 'Frontend Mentor Fullstack Challenge with Supabase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans ${inter.className} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
