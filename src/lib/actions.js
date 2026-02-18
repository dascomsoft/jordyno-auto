// Server Actions pour les opérations CRUD
'use server';

import { db } from './db.js';
import { vehicles } from './schema.js';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Vérification admin (middleware simplifié)
async function checkAdmin() {
  const cookieStore = cookies();
  const isAdmin = cookieStore.get('admin_session');
  if (!isAdmin || isAdmin.value !== 'authenticated') {
    redirect('/admin/login');
  }
}

// Récupérer tous les véhicules
export async function getVehicles() {
  try {
    const allVehicles = await db.select().from(vehicles);
    return allVehicles;
  } catch (error) {
    console.error('Erreur lors de la récupération des véhicules:', error);
    return [];
  }
}

// Récupérer les véhicules en vedette (3 premiers)
export async function getFeaturedVehicles() {
  try {
    const featured = await db.select().from(vehicles).limit(3);
    return featured;
  } catch (error) {
    console.error('Erreur lors de la récupération des véhicules vedettes:', error);
    return [];
  }
}


// Ajouter un nouveau véhicule - Version corrigée
export async function addVehicle(formData) {
  await checkAdmin();
  
  try {
    // Récupérer les champs texte
    const marque = formData.get('marque');
    const modele = formData.get('modele');
    const prix = parseInt(formData.get('prix'));
    const description = formData.get('description');
    const categorie = formData.get('categorie') || 'classique';
    
    // Validation basique
    if (!marque || !modele || !prix || !description) {
      return { success: false, message: 'Tous les champs sont obligatoires' };
    }

    // Gérer l'image - On utilise UN SEUL champ "image" du formulaire
    let imageData = null;
    let imageUrl = null;
    
    const imageField = formData.get('image');
    
    if (imageField && typeof imageField === 'object' && imageField.size > 0) {
      // C'est un fichier uploadé → le convertir en Base64 pour image_data
      const bytes = await imageField.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = buffer.toString('base64');
      imageData = `data:${imageField.type};base64,${base64}`;
      console.log('Image uploadée convertie en Base64');
    } else if (imageField && typeof imageField === 'string' && imageField.trim() !== '') {
      // C'est une URL
      imageUrl = imageField;
      console.log('URL d\'image fournie:', imageUrl);
    } else {
      // Image par défaut
      imageUrl = '/images/placeholder-car.jpg';
      console.log('Image par défaut utilisée');
    }

    // CRÉER L'OBJET AVEC LES COLONNES NÉCESSAIRES
    // created_at est automatiquement géré par $defaultFn
    const newVehicle = {
      marque: marque,
      modele: modele,
      prix: prix,
      description: description,
      categorie: categorie,
      image_data: imageData,
      image_url: imageUrl,
      // 👇 SUPPRIMEZ cette ligne
      // created_at: Math.floor(Date.now() / 1000),
    };

    console.log('Insertion du véhicule:', newVehicle);

    await db.insert(vehicles).values(newVehicle);
    revalidatePath('/fleet');
    revalidatePath('/admin/dashboard');
    return { success: true, message: 'Véhicule ajouté avec succès' };
  } catch (error) {
    console.error('Erreur lors de l\'ajout:', error);
    return { success: false, message: 'Erreur lors de l\'ajout: ' + error.message };
  }
}


// Mettre à jour un véhicule
export async function updateVehicle(id, formData) {
  await checkAdmin();

  try {
    const marque = formData.get('marque');
    const modele = formData.get('modele');
    const prix = parseInt(formData.get('prix'));
    const description = formData.get('description');
    const categorie = formData.get('categorie');
    
    // Validation basique
    if (!marque || !modele || !prix || !description) {
      return { success: false, message: 'Tous les champs sont obligatoires' };
    }

    // Gérer l'image pour la mise à jour
    let imageData = null;
    let imageUrl = null;
    
    const imageFile = formData.get('imageFile');
    const imageUrlInput = formData.get('imageUrl');
    
    if (imageFile && imageFile.size > 0) {
      // Nouvelle image uploadée
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = buffer.toString('base64');
      imageData = `data:${imageFile.type};base64,${base64}`;
    } else if (imageUrlInput && imageUrlInput.trim() !== '') {
      // Nouvelle URL
      imageUrl = imageUrlInput;
    }
    // Si pas de nouvelle image, on garde l'ancienne (ne pas inclure dans la MAJ)

    const updatedVehicle = {
      marque,
      modele,
      prix,
      description,
      categorie,
    };

    // N'ajouter les champs image que s'ils ont été modifiés
    if (imageData) updatedVehicle.image_data = imageData;
    if (imageUrl) updatedVehicle.image_url = imageUrl;

    await db.update(vehicles)
      .set(updatedVehicle)
      .where(eq(vehicles.id, id));
    
    revalidatePath('/fleet');
    revalidatePath('/admin/dashboard');
    return { success: true, message: 'Véhicule modifié avec succès' };
  } catch (error) {
    console.error('Erreur lors de la modification:', error);
    return { success: false, message: 'Erreur lors de la modification: ' + error.message };
  }
}

// Supprimer un véhicule
export async function deleteVehicle(id) {
  await checkAdmin();

  try {
    await db.delete(vehicles).where(eq(vehicles.id, id));
    revalidatePath('/fleet');
    revalidatePath('/admin/dashboard');
    return { success: true, message: 'Véhicule supprimé avec succès' };
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    return { success: false, message: 'Erreur lors de la suppression: ' + error.message };
  }
}

// Login admin
export async function loginAdmin(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // Validation basique
  if (!email || !password) {
    return { success: false, message: 'Email et mot de passe requis' };
  }

  // Récupérer les variables d'environnement
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error('Variables d\'environnement ADMIN_EMAIL ou ADMIN_PASSWORD non définies');
    return { success: false, message: 'Erreur de configuration du serveur' };
  }

  if (email === adminEmail && password === adminPassword) {
    // Définir le cookie de session
    cookies().set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 24 heures
      path: '/',
    });
    
    // Rediriger vers le dashboard
    redirect('/admin/dashboard');
  } else {
    return { success: false, message: 'Email ou mot de passe incorrect' };
  }
}

// Logout admin
export async function logoutAdmin() {
  cookies().delete('admin_session');
  redirect('/');
}