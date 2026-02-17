'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminHeader() {
  const pathname = usePathname();

  const adminNavItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Voir le site', path: '/' },
  ];

  return (
    <header className="bg-white shadow-md py-3 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo et titre */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="font-bold text-gray-800">Admin Jordyno Auto</span>
            </div>

            {/* Navigation admin */}
            <nav className="hidden md:flex space-x-4 ml-8">
              {adminNavItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    pathname === item.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Le bouton de déconnexion sera géré dans la page, pas dans le header */}
          <div className="text-sm text-gray-500">
            Espace administration
          </div>
        </div>

        {/* Menu mobile simplifié */}
        <div className="md:hidden mt-3 flex space-x-2">
          {adminNavItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium transition ${
                pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}