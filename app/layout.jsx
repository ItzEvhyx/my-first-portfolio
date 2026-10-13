import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'My Portfolio', // EDIT THIS
  description: 'My first portfolio', // EDIT THIS
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
       
      </body>
    </html>
  );
}