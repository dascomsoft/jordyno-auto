// En-tête du site avec logo
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ne pas afficher le header sur les pages d'administration
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // Déterminer si on est sur une page avec fond blanc
  const isWhiteBgPage = pathname === '/pricing' || pathname === '/fleet';
  
  // Le header doit avoir un fond si :
  // - on a défilé (isScrolled) OU
  // - on est sur une page à fond blanc (isWhiteBgPage)
  const shouldHaveBg = isScrolled || isWhiteBgPage;

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Flotte', path: '/fleet' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'Admin', path: '/admin/login' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldHaveBg 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Logo avec image */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-20 h-10 overflow-hidden rounded-lg border-2 border-white/20 group-hover:border-blue-400 transition-all duration-300">
              <Image
                src="/images/jordynologo.jpg"
                alt="Jordyno Auto Rent"
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </div>
            <span className={`font-bold text-xl tracking-tight ${
              shouldHaveBg ? 'text-gray-800' : 'text-white'
            } group-hover:text-blue-400 transition-colors duration-300`}>
              Jordyno Auto
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? shouldHaveBg
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/20 text-white backdrop-blur-sm'
                    : shouldHaveBg
                    ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bouton WhatsApp desktop */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/237673342789"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                shouldHaveBg
                  ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-xl'
                  : 'bg-green-600/90 hover:bg-green-600 text-white backdrop-blur-sm border border-white/20'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
              </svg>
              <span>Contact</span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">24/7</span>
            </motion.a>
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              shouldHaveBg
                ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                      pathname === item.path
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <a
                    href="https://wa.me/237673342789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-300 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}