import './globals.css';

export const metadata = {
  title: 'SS&EG Portfolio',
  description: 'I design interfaces that feel like day one, every day.',
  icons: { icon: '/assets/images/9fad891fec666c4c0e81ce9b00f539ab.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f4fafd] text-[#0f3d5c] antialiased min-h-screen m-0 p-0 font-['Nunito',sans-serif]">
        {children}
      </body>
    </html>
  );
}
