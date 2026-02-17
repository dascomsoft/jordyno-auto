

'use client';

import { motion } from 'framer-motion';
import { getVehicles } from '@/lib/actions.js';
import VehicleCard from '@/components/VehicleCard.jsx';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// Composant de chargement amélioré
function FleetLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white/80 backdrop-blur-sm rounded-3xl h-[450px] animate-pulse shadow-xl">
          <div className="h-48 bg-gray-300 rounded-t-3xl"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-20 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Statistiques rapides
const stats = [
  { label: 'Véhicules disponibles', value: '50+', icon: '🚗' },
  { label: 'Modèles récents', value: '2024', icon: '✨' },
  { label: 'Livraison gratuite', value: 'Yaoundé', icon: '📍' },
  { label: 'Chauffeurs pros', value: '24/7', icon: '⭐' },
];

// Contenu de la flotte
async function FleetContent() {
  const vehicles = await getVehicles();

  return (
    <>
      {vehicles.length === 0 ? (
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
      ) : (
        <>
          {/* Filtres rapides (optionnel) */}
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
      )}
    </>
  );
}

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Hero section avec image de fond */}
      <div className="relative bg-gradient-to-r from-blue-900/90 to-green-800/90 text-white overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/carjordyno8.jpg"
            alt="Flotte Jordyno Auto Rent"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/90 mix-blend-multiply"></div>
        </div>

        {/* Motif décoratif */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Contenu du hero */}
        <div className="relative z-20 container mx-auto px-4 py-24 md:py-32">
          {/* Fil d'Ariane */}
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 justify-center">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <span>›</span>
            <span className="text-white">Notre flotte</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center drop-shadow-2xl">
            Notre Flotte
            <span className="block text-2xl md:text-3xl font-light text-blue-200 mt-4">
              Premium
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12 text-blue-100 drop-shadow-lg">
            Découvrez notre sélection de véhicules récents, propres et confortables, 
            soigneusement entretenus pour votre sécurité.
          </p>

          {/* Statistiques rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vague décorative en bas */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-gray-50">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/>
          </svg>
        </div>
      </div>

      {/* Section principale avec la liste des véhicules */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
            Sélectionnez votre véhicule
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
            Choisissez la voiture de vos rêves
          </h2>
          <p className="text-lg text-gray-600">
            Tous nos véhicules sont récents, propres et entretenus avec soin. 
            Chauffeur professionnel inclus dans chaque location.
          </p>
        </div>

        {/* Liste des véhicules avec Suspense */}
        <Suspense fallback={<FleetLoading />}>
          <FleetContent />
        </Suspense>
      </div>

      {/* Section CTA supplémentaire */}
      <div className="bg-gradient-to-r from-blue-900 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Vous ne trouvez pas votre bonheur ?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous directement, nous avons peut-être le véhicule qu'il vous faut hors catalogue.
          </p>
          <Link
            href="https://wa.me/237673342789"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
            </svg>
            Discuter sur WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}