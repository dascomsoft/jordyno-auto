// Layout principal avec police Nunito
import { Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'Jordyno Auto Rent - Location de voitures à Yaoundé',
  description: 'Location de voitures avec chauffeur à Yaoundé. Modèles récents et propres dès 20 000 FCFA/jour.',
  manifest: '/manifest.json',
  themeColor: '#1e3a8a',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Jordyno Auto Rent',
  },
  icons: {
    icon: '/images/jordynologo.jpg',
    apple: '/images/jordynologo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" href="/images/jordynologo.jpg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="shortcut icon" href="/images/jordynologo.jpg" type="image/jpeg" />
      </head>
      <body className={`${nunito.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}