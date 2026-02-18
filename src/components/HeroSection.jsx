// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function HeroSection() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     AOS.init({ 
//       duration: 800,
//       once: true,
//       mirror: false
//     });
//   }, []);

//   const handleWhatsAppClick = () => {
//     const message = encodeURIComponent(
//       "Bonjour, je souhaite réserver un véhicule chez Jordyno Auto Rent."
//     );
//     window.open(`https://wa.me/237673342789?text=${message}`, '_blank');
//   };

//   // Variantes d'animation
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   return (
//     <div ref={containerRef} className="relative bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-900/90 text-white min-h-screen flex items-center overflow-hidden">
//       {/* Image de fond */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/carjordyno.jpg"
//           alt="Véhicule Jordyno Auto Rent"
//           fill
//           className="object-cover"
//           priority
//           quality={90}
//           sizes="100vw"
//         />
//         {/* Overlay sombre pour meilleure lisibilité du texte */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-900/80"></div>
//       </div>

//       {/* Overlay pattern subtil */}
//       <div className="absolute inset-0 opacity-10 z-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       {/* Cercles décoratifs flous */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.1, 0.15, 0.1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute -top-20 -right-20 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-10 z-20"
//       />
//       <motion.div
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.1, 0.2, 0.1],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//         className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-400 rounded-full filter blur-3xl opacity-10 z-20"
//       />

//       {/* Contenu principal */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="max-w-4xl mx-auto text-center"
//         >
//           {/* Badge de confiance */}
//           <motion.div
//             variants={fadeInUp}
//             className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10"
//           >
//             <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//             <span className="text-sm font-medium tracking-wide">
//               🇨🇲 Location de voitures à Yaoundé
//             </span>
//           </motion.div>

//           {/* Titre principal */}
//           <motion.h1 
//             variants={fadeInUp}
//             className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
//           >
//             <span className="block">Jordyno</span>
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300 drop-shadow-lg">
//               Auto Rent
//             </span>
//           </motion.h1>

//           {/* Sous-titre */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto drop-shadow"
//           >
//             Vos déplacements en toute sécurité avec chauffeur
//           </motion.p>

//           {/* Prix mis en avant */}
//           <motion.div
//             variants={fadeInUp}
//             className="bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-10 inline-block border border-white/20 shadow-2xl"
//           >
//             <p className="text-2xl sm:text-3xl">
//               À partir de{' '}
//               <span className="font-bold text-4xl sm:text-5xl text-yellow-300">
//                 20 000 FCFA
//               </span>
//               <span className="text-lg sm:text-xl text-blue-200">/jour</span>
//             </p>
//             <p className="text-base sm:text-lg mt-2 text-blue-200">
//               Modèles récents et propres • Chauffeur inclus
//             </p>
//           </motion.div>

//           {/* Boutons d'action */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={handleWhatsAppClick}
//               className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
//               </svg>
//               Réserver sur WhatsApp
//               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </motion.button>

//             <Link
//               href="/fleet"
//               className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
//             >
//               Voir nos véhicules
//             </Link>
//           </motion.div>

//           {/* Indicateurs de confiance */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-wrap justify-center gap-6 mt-12"
//           >
//             {[
//               { icon: '🛡️', text: 'Sécurité garantie' },
//               { icon: '⭐', text: 'Chauffeurs pros' },
//               { icon: '📍', text: 'Livraison gratuite' },
//               { icon: '🔧', text: 'Véhicules récents' },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -2 }}
//                 className="flex items-center gap-2 text-sm text-blue-200 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
//               >
//                 <span>{item.icon}</span>
//                 <span>{item.text}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Vague décorative simple */}
//       <div className="absolute bottom-0 left-0 right-0 z-20">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white opacity-90">
//           <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/>
//         </svg>
//       </div>
//     </div>
//   );
// }
















































'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      mirror: false
    });
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Bonjour, je souhaite réserver un véhicule chez Jordyno Auto Rent."
    );
    window.open(`https://wa.me/237673342789?text=${message}`, '_blank');
  };

  // Variantes d'animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div ref={containerRef} className="relative bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-900/90 text-white min-h-screen flex items-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/carjordyno.jpg"
          alt="Véhicule Jordyno Auto Rent"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
      </div>

      {/* Overlay pattern subtil */}
      <div className="absolute inset-0 opacity-10 z-10 hidden sm:block">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Cercles décoratifs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -right-20 w-64 sm:w-80 h-64 sm:h-80 bg-blue-400 rounded-full filter blur-3xl opacity-10 z-20"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-20 -left-20 w-64 sm:w-80 h-64 sm:h-80 bg-green-400 rounded-full filter blur-3xl opacity-10 z-20"
      />

      {/* Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge de confiance */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 border border-white/10"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              🇨🇲 Location de voitures à Yaoundé
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg"
          >
            <span className="block">Jordyno</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300 drop-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Auto Rent
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow px-2"
          >
            Vos déplacements en toute sécurité avec chauffeur
          </motion.p>

          {/* Prix mis en avant */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 inline-block border border-white/20 shadow-2xl mx-2 sm:mx-0"
          >
            <p className="text-xl sm:text-2xl md:text-3xl">
              À partir de{' '}
              <span className="font-bold text-3xl sm:text-4xl md:text-5xl text-yellow-300 block sm:inline">
                20 000 FCFA
              </span>
              <span className="text-base sm:text-lg md:text-xl text-blue-200 block sm:inline">/jour</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-1 sm:mt-2 text-blue-200">
              Modèles récents et propres • Chauffeur inclus
            </p>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
              </svg>
              <span className="whitespace-nowrap">Réserver sur WhatsApp</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>

            <Link
              href="/fleet"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 text-sm sm:text-base"
            >
              Voir nos véhicules
            </Link>
          </motion.div>

          {/* Indicateurs de confiance */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-6 mt-8 sm:mt-12 px-2"
          >
            {[
              { icon: '🛡️', text: 'Sécurité garantie' },
              { icon: '⭐', text: 'Chauffeurs pros' },
              { icon: '📍', text: 'Livraison gratuite' },
              { icon: '🔧', text: 'Véhicules récents' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-blue-200 bg-white/10 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full justify-center"
              >
                <span className="text-sm sm:text-base">{item.icon}</span>
                <span className="whitespace-nowrap">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Vague décorative */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white opacity-90" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/>
        </svg>
      </div>
    </div>
  );
}