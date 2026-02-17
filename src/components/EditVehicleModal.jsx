'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function EditVehicleModal({ vehicle, onClose, onSave }) {
  const [formData, setFormData] = useState({
    marque: vehicle.marque,
    modele: vehicle.modele,
    prix: vehicle.prix,
    description: vehicle.description,
    categorie: vehicle.categorie,
    imageUrl: vehicle.imageUrl
  });
  const [imagePreview, setImagePreview] = useState(vehicle.imageUrl);
  const [imageFile, setImageFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append('marque', formData.marque);
      formDataObj.append('modele', formData.modele);
      formDataObj.append('prix', formData.prix);
      formDataObj.append('description', formData.description);
      formDataObj.append('categorie', formData.categorie);
      
      if (imageFile) {
        // Si nouvelle image uploadée
        const reader = new FileReader();
        reader.onloadend = async () => {
          formDataObj.append('imageUrl', reader.result);
          await onSave(vehicle.id, formDataObj);
          onClose();
        };
        reader.readAsDataURL(imageFile);
      } else {
        // Garder l'image existante
        formDataObj.append('imageUrl', vehicle.imageUrl);
        await onSave(vehicle.id, formDataObj);
        onClose();
      }
    } catch (error) {
      alert('Erreur lors de la modification');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Modifier le véhicule</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image preview */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image du véhicule
              </label>
              <div className="relative h-40 w-full bg-gray-100 rounded-lg overflow-hidden mb-2">
                <Image
                  src={imagePreview || '/images/placeholder-car.jpg'}
                  alt="Prévisualisation"
                  fill
                  className="object-cover"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            {/* Marque et Modèle */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Marque</label>
                <input
                  type="text"
                  value={formData.marque}
                  onChange={(e) => setFormData({...formData, marque: e.target.value})}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Modèle</label>
                <input
                  type="text"
                  value={formData.modele}
                  onChange={(e) => setFormData({...formData, modele: e.target.value})}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Prix et Catégorie */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prix (FCFA/jour)</label>
                <input
                  type="number"
                  value={formData.prix}
                  onChange={(e) => setFormData({...formData, prix: parseInt(e.target.value)})}
                  required
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                <select
                  value={formData.categorie}
                  onChange={(e) => setFormData({...formData, categorie: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="classique">Classique</option>
                  <option value="prestige">Prestige</option>
                  <option value="suv">SUV</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Boutons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                Annuler
              </button>
              <motion.button
                type="submit"
                disabled={isSaving}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 bg-blue-600 text-white rounded-lg transition ${
                  isSaving ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSaving ? 'Modification...' : 'Enregistrer'}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}