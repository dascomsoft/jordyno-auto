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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Jordyno Auto Rent',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
  icons: {
    icon: [
      { url: '/images/jordynologo.jpg', type: 'image/jpeg' },
      { url: '/favicon/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/jordynologo.jpg' },
      { url: '/favicon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: { url: '/images/jordynologo.jpg', type: 'image/jpeg' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Métadonnées PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Favicons et icônes */}
        <link rel="shortcut icon" href="/images/jordynologo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/jordynologo.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        
        {/* Thème */}
        <meta name="theme-color" content="#1e3a8a" />
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