import './globals.css'; // Fichier CSS global avec Tailwind inclus
import Header from './components/Header';

export const metadata = {
  title: 'Essentials Fifty',
  description: 'Posters métalliques personnalisables pour 50CC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-100">
        {/* Header commun à toutes les pages */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
