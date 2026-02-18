// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function VehicleCard({ vehicle, index = 0 }) {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   // Fonction pour ouvrir WhatsApp avec message pré-rempli
//   const handleWhatsAppReservation = () => {
//     const message = encodeURIComponent(
//       `Bonjour, je souhaite réserver une ${vehicle.marque} ${vehicle.modele} pour une location.`
//     );
//     window.open(`https://wa.me/237673342789?text=${message}`, '_blank');
//   };

//   return (
//     <motion.div
//       data-aos="fade-up"
//       data-aos-delay={index * 100}
//       whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
//       transition={{ type: 'spring', stiffness: 300 }}
//       className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
//     >
//       {/* Image du véhicule */}
//       <div className="relative h-48 w-full bg-gray-200">
//         <Image
//           src={vehicle.imageUrl || '/images/placeholder-car.jpg'}
//           alt={`${vehicle.marque} ${vehicle.modele}`}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//       </div>

//       {/* Détails du véhicule */}
//       <div className="p-5">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-xl font-bold text-gray-800">
//             {vehicle.marque} {vehicle.modele}
//           </h3>
//           <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//             {vehicle.prix.toLocaleString()} FCFA/jour
//           </span>
//         </div>

//         <p className="text-gray-600 mb-4 line-clamp-2">{vehicle.description}</p>

//         {/* Badge catégorie */}
//         <div className="mb-4">
//           <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
//             vehicle.categorie === 'prestige' ? 'bg-purple-100 text-purple-800' :
//             vehicle.categorie === 'suv' ? 'bg-green-100 text-green-800' :
//             'bg-blue-100 text-blue-800'
//           }`}>
//             {vehicle.categorie === 'prestige' ? 'Prestige' :
//              vehicle.categorie === 'suv' ? 'SUV' : 'Classique'}
//           </span>
//         </div>

//         {/* Bouton réservation */}
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={handleWhatsAppReservation}
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
//         >
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
//           </svg>
//           Réserver via WhatsApp
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }
























































// // Carte véhicule avec animations
// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function VehicleCard({ vehicle, index = 0 }) {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   // Déterminer la source de l'image (priorité à image_data, puis image_url)
//   const imageSrc = vehicle.image_data || vehicle.image_url || '/images/carjordyno.jpg';

//   // Fonction pour ouvrir WhatsApp avec message pré-rempli
//   const handleWhatsAppReservation = () => {
//     const message = encodeURIComponent(
//       `Bonjour, je souhaite réserver une ${vehicle.marque} ${vehicle.modele} pour une location.`
//     );
//     window.open(`https://wa.me/237673342789?text=${message}`, '_blank');
//   };

//   return (
//     <motion.div
//       data-aos="fade-up"
//       data-aos-delay={index * 100}
//       whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
//       transition={{ type: 'spring', stiffness: 300 }}
//       className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
//     >
//       {/* Image du véhicule */}
//       <div className="relative h-48 w-full bg-gray-200">
//         <Image
//           src={imageSrc}
//           alt={`${vehicle.marque} ${vehicle.modele}`}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           unoptimized={!!vehicle.image_data} // Nécessaire pour les images Base64
//         />
//       </div>

//       {/* Détails du véhicule */}
//       <div className="p-5">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-xl font-bold text-gray-800">
//             {vehicle.marque} {vehicle.modele}
//           </h3>
//           <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//             {vehicle.prix.toLocaleString()} FCFA/jour
//           </span>
//         </div>

//         <p className="text-gray-600 mb-4 line-clamp-2">{vehicle.description}</p>

//         {/* Badge catégorie */}
//         <div className="mb-4">
//           <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
//             vehicle.categorie === 'prestige' ? 'bg-purple-100 text-purple-800' :
//             vehicle.categorie === 'suv' ? 'bg-green-100 text-green-800' :
//             'bg-blue-100 text-blue-800'
//           }`}>
//             {vehicle.categorie === 'prestige' ? 'Prestige' :
//              vehicle.categorie === 'suv' ? 'SUV' : 'Classique'}
//           </span>
//         </div>

//         {/* Bouton réservation */}
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={handleWhatsAppReservation}
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
//         >
//           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
//           </svg>
//           Réserver via WhatsApp
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }













































'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function VehicleCard({ vehicle, index = 0 }) {
  const cardRef = useRef(null);

  useEffect(() => {
    // Animation simple avec Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const imageSrc = vehicle.image_data || vehicle.image_url || '/images/placeholder-car.jpg';

  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent(
      `Bonjour, je souhaite réserver une ${vehicle.marque} ${vehicle.modele} pour une location.`
    );
    window.open(`https://wa.me/237673342789?text=${message}`, '_blank');
  };

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 opacity-0 translate-y-10 transition-all duration-700"
    >
      {/* Image du véhicule */}
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={imageSrc}
          alt={`${vehicle.marque} ${vehicle.modele}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={!!vehicle.image_data}
        />
      </div>

      {/* Détails du véhicule */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">
            {vehicle.marque} {vehicle.modele}
          </h3>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {vehicle.prix.toLocaleString()} FCFA/jour
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{vehicle.description}</p>

        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            vehicle.categorie === 'prestige' ? 'bg-purple-100 text-purple-800' :
            vehicle.categorie === 'suv' ? 'bg-green-100 text-green-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {vehicle.categorie === 'prestige' ? 'Prestige' :
             vehicle.categorie === 'suv' ? 'SUV' : 'Classique'}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleWhatsAppReservation}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
          </svg>
          Réserver via WhatsApp
        </motion.button>
      </div>
    </motion.div>
  );
}