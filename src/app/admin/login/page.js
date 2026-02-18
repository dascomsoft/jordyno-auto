'use client';

import { motion } from 'framer-motion';
import { loginAdmin } from '@/lib/actions.js';
import { useFormStatus } from 'react-dom';
import { useState } from 'react';
import Image from 'next/image';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full bg-blue-600 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
        pending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
      }`}
    >
      {pending ? 'Connexion...' : 'Se connecter'}
    </motion.button>
  );
}

export default function AdminLoginPage() {
  const [error, setError] = useState(null);

  async function handleSubmit(formData) {
    const result = await loginAdmin(formData);
    if (result && !result.success) {
      setError(result.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-800 flex items-center justify-center py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Image de fond subtile (optionnel) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/carjordyno8.jpg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      
      {/* Cercles décoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative z-10 mx-4 sm:mx-0"
      >
        {/* Logo ou icône */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Administration</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Connectez-vous pour gérer la flotte</p>
        </div>

        {/* Message d'erreur */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 sm:p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          </motion.div>
        )}

        {/* Formulaire */}
        <form action={handleSubmit} className="space-y-5 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              placeholder="admin@jordyno.com"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            />
          </div>

          <SubmitButton />
        </form>

        {/* Informations par défaut */}
        <div className="mt-5 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-xs sm:text-sm text-blue-700 text-center">
            <span className="font-semibold">Identifiants par défaut :</span>
            <br />
            admin@jordyno.com / Jordyno2024!
          </p>
        </div>

        {/* Lien retour au site */}
        <div className="mt-4 sm:mt-5 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au site
          </a>
        </div>
      </motion.div>
    </div>
  );
}