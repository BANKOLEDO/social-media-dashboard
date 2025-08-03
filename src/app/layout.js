// /app/layout.js
import './globals.css';

export const metadata = {
  title: 'Social Media Dashboard',
  description: 'Frontend Mentor Fullstack Challenge with Supabase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}
