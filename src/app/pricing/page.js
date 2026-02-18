'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      mirror: false
    });
  }, []);

  const handleWhatsAppClick = (formule, details = '') => {
    const message = encodeURIComponent(
      `Bonjour, je suis intéressé par la formule ${formule}. ${details} Pouvez-vous me donner plus de détails ?`
    );
    window.open(`https://wa.me/237673342789?text=${message}`, '_blank');
  };

  const pricingPlans = [
    {
      categorie: 'Classique',
      sousTitre: 'Pour vos déplacements quotidiens',
      prix: '20 000 - 55 000',
      periode: 'FCFA/jour',
      description: 'Idéal pour vos déplacements quotidiens en ville',
      vehicules: [
        { nom: 'Toyota Corolla', image: '/images/car-toyota-corolla.jpg' },
        { nom: 'Hyundai Accent', image: '/images/car-hyundai-accent.jpg' },
        { nom: 'Kia Rio', image: '/images/car-kia-rio.jpg' }
      ],
      couleur: 'blue',
      icon: '🚗',
      avantages: ['Climatisation', 'Bluetooth', 'Économique', 'Parking facile']
    },
    {
      categorie: 'SUV & 4x4',
      sousTitre: 'Pour les routes et l\'espace',
      prix: '60 000 - 85 000',
      periode: 'FCFA/jour',
      description: 'Parfait pour les familles et les longs trajets',
      vehicules: [
        { nom: 'Toyota RAV4', image: '/images/car-toyota-rav4.jpg' },
        { nom: 'Honda CR-V', image: '/images/car-honda-crv.jpg' },
        { nom: 'Nissan X-Trail', image: '/images/car-nissan-xtrail.jpg' }
      ],
      couleur: 'green',
      icon: '🚙',
      avantages: ['7 places', '4x4', 'Toit ouvrant', 'Grand coffre']
    },
    {
      categorie: 'Prestige',
      sousTitre: 'Pour vos occasions spéciales',
      prix: '90 000 - 150 000',
      periode: 'FCFA/jour',
      description: 'Luxe et élégance pour vos événements',
      vehicules: [
        { nom: 'Mercedes Classe E', image: '/images/car-mercedes-e.jpg' },
        { nom: 'BMW Série 5', image: '/images/car-bmw-5.jpg' },
        { nom: 'Lexus RX', image: '/images/car-lexus-rx.jpg' }
      ],
      couleur: 'purple',
      icon: '✨',
      avantages: ['Cuir premium', 'Sièges chauffants', 'Sono BOSE', 'Toit panoramique']
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      {/* Hero section avec image de fond - responsive */}
      <div className="relative bg-gradient-to-r from-blue-900/90 to-green-800/90 text-white overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/carjordyno11.jpg"
            alt="Jordyno Auto Rent Tarifs"
            fill
            className="object-cover"
            priority
            quality={85} // Réduit pour mobile
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-800/90 mix-blend-multiply"></div>
        </div>

        {/* Motif décoratif - caché sur mobile */}
        <div className="absolute inset-0 opacity-10 z-10 hidden sm:block">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Contenu du hero - responsive */}
        <div className="relative z-20 container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
          {/* Fil d'Ariane - responsive */}
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-blue-200 mb-4 sm:mb-6 justify-center">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <span>›</span>
            <span className="text-white">Tarifs</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl">
              Nos Tarifs
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100 mb-6 sm:mb-8 drop-shadow-lg px-4">
              Des formules adaptées à tous vos besoins et tous les budgets
            </p>
            
            {/* Badges de confiance - responsive */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-white/30">
                ✅ Sans frais cachés
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-white/30">
                🔒 Paiement sécurisé
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-white/30">
                ⚡ Réservation express
              </span>
            </div>
          </motion.div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-gray-50" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/>
          </svg>
        </div>
      </div>

      {/* Section des tarifs - responsive */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* En-tête de section - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4"
        >
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-blue-50 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
            Choisissez votre formule
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-4 sm:mt-6 mb-3 sm:mb-4">
            Des prix transparents, sans surprise
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Tous nos tarifs incluent le chauffeur professionnel. Le carburant est à la charge du client.
          </p>
        </motion.div>

        {/* Grille des tarifs - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.categorie}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Bande de couleur supérieure */}
              <div className={`h-1.5 sm:h-2 w-full bg-gradient-to-r ${
                plan.couleur === 'blue' ? 'from-blue-500 to-blue-600' :
                plan.couleur === 'green' ? 'from-green-500 to-green-600' :
                'from-purple-500 to-purple-600'
              }`}></div>

              {/* Contenu - padding responsive */}
              <div className="p-5 sm:p-6 md:p-8">
                {/* En-tête - responsive */}
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div>
                    <span className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 block">{plan.icon}</span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{plan.categorie}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{plan.sousTitre}</p>
                  </div>
                  <div className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
                    plan.couleur === 'blue' ? 'bg-blue-100 text-blue-700' :
                    plan.couleur === 'green' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    Populaire
                  </div>
                </div>

                {/* Prix - responsive */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{plan.prix}</span>
                  <span className="text-xs sm:text-sm text-gray-600"> /jour</span>
                </div>

                {/* Description - responsive */}
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">{plan.description}</p>

                {/* Avantages - responsive */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 sm:mb-3">Avantages :</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {plan.avantages.map((avantage, i) => (
                      <span
                        key={i}
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs ${
                          plan.couleur === 'blue' ? 'bg-blue-50 text-blue-700' :
                          plan.couleur === 'green' ? 'bg-green-50 text-green-700' :
                          'bg-purple-50 text-purple-700'
                        }`}
                      >
                        {avantage}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Véhicules typiques - responsive */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 sm:mb-3">Véhicules typiques :</h4>
                  <div className="space-y-2 sm:space-y-3">
                    {plan.vehicules.map((v, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={v.image}
                            alt={v.nom}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                          />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-600 truncate">{v.nom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bouton - responsive */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleWhatsAppClick(plan.categorie, `Je suis intéressé par la formule ${plan.categorie}`)}
                  className={`w-full py-3 sm:py-4 px-3 sm:px-4 rounded-lg sm:rounded-xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm ${
                    plan.couleur === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                    plan.couleur === 'green' ? 'bg-green-600 hover:bg-green-700' :
                    'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
                  </svg>
                  Réserver
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparaison rapide - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Comparaison des formules</h3>
            <p className="text-xs sm:text-sm text-blue-100">Choisissez celle qui correspond le mieux à vos besoins</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">{plan.categorie}</h4>
                <p className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{plan.prix}</p>
                <ul className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs text-blue-100">
                  <li>✓ Chauffeur inclus</li>
                  <li>✓ Assurance incluse</li>
                  <li>✓ Livraison gratuite</li>
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Informations détaillées - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Informations importantes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Carburant */}
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-0.5 sm:mb-1">Carburant</h4>
                <p className="text-xs sm:text-sm text-gray-600">À la charge du client. Nous faisons le plein au départ.</p>
              </div>
            </div>

            {/* Chauffeur */}
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-0.5 sm:mb-1">Chauffeur</h4>
                <p className="text-xs sm:text-sm text-gray-600">Inclus dans le prix. Chauffeurs professionnels et courtois.</p>
              </div>
            </div>

            {/* Assurance */}
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-0.5 sm:mb-1">Assurance</h4>
                <p className="text-xs sm:text-sm text-gray-600">Incluse dans tous nos tarifs. Assurance tous risques.</p>
              </div>
            </div>

            {/* Livraison */}
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2 4 4 6-6 4 4M3 12v6h18v-6" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-0.5 sm:mb-1">Livraison</h4>
                <p className="text-xs sm:text-sm text-gray-600">Gratuite à Yaoundé et ses environs immédiats.</p>
              </div>
            </div>
          </div>

          {/* Devis personnalisé - responsive */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg sm:rounded-xl border border-yellow-200">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl">💡</span>
              <div className="flex-1">
                <h4 className="font-semibold text-sm sm:text-base text-yellow-800 mb-1 sm:mb-2">Devis personnalisé</h4>
                <p className="text-xs sm:text-sm text-yellow-700">
                  Pour les locations longue durée (plus d'une semaine) ou les événements spéciaux 
                  (mariages, séminaires), contactez-nous pour un devis sur mesure.
                </p>
                <button
                  onClick={() => handleWhatsAppClick('devis personnalisé', 'Je souhaite un devis pour une location spéciale.')}
                  className="mt-3 sm:mt-4 bg-yellow-600 hover:bg-yellow-700 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ rapide - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">Vous avez des questions ?</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Notre équipe est disponible 7j/7 pour vous répondre sur WhatsApp.
          </p>
          <button
            onClick={() => handleWhatsAppClick('question', 'J\'ai une question concernant les tarifs.')}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z"/>
            </svg>
            Poser une question
          </button>
        </motion.div>
      </div>
    </div>
  );
}