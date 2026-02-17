'use client';

import { motion } from 'framer-motion';
import VehicleCard from './VehicleCard.jsx';
import Link from 'next/link';

export default function FleetContent({ vehicles }) {
  if (vehicles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl"
      >
        <p className="text-2xl text-gray-600">Aucun véhicule disponible pour le moment.</p>
        <p className="text-gray-500 mt-2">Revenez bientôt ou contactez-nous directement.</p>
        <Link
          href="https://wa.me/237673342789"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full mt-6 hover:bg-green-700 transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
          </svg>
          Contactez-nous sur WhatsApp
        </Link>
      </motion.div>
    );
  }

  return (
    <>
      {/* Filtres rapides */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {['Tous', 'Classique', 'SUV', 'Prestige'].map((filter) => (
          <button
            key={filter}
            className="px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grille des véhicules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
        ))}
      </div>

      {/* Message de disponibilité */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>⋆ Tous nos véhicules sont livrés avec chauffeur professionnel ⋆</p>
      </div>
    </>
  );
}