import './globals.css';

export const metadata = {
  title: 'CORE Biblio',
  description: 'CORE Biblio funcionando correctamente',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
