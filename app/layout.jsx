import './globals.css';

export const metadata = {
  title: 'Hanni Bunny - UI/UX Designer Portfolio',
  description: 'I design interfaces that feel like day one, every day.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
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