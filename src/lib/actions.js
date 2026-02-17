





// // Server Actions pour les opérations CRUD
// 'use server';

// import { db } from './db.js';
// import { vehicles } from './schema.js';
// import { eq } from 'drizzle-orm';
// import { revalidatePath } from 'next/cache';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

// // Vérification admin (middleware simplifié)
// async function checkAdmin() {
//   const cookieStore = cookies();
//   const isAdmin = cookieStore.get('admin_session');
//   if (!isAdmin || isAdmin.value !== 'authenticated') {
//     redirect('/admin/login');
//   }
// }

// // Récupérer tous les véhicules
// export async function getVehicles() {
//   try {
//     const allVehicles = await db.select().from(vehicles);
//     return allVehicles;
//   } catch (error) {
//     console.error('Erreur lors de la récupération des véhicules:', error);
//     return [];
//   }
// }

// // Récupérer les véhicules en vedette (3 premiers)
// export async function getFeaturedVehicles() {
//   try {
//     const featured = await db.select().from(vehicles).limit(3);
//     return featured;
//   } catch (error) {
//     console.error('Erreur lors de la récupération des véhicules vedettes:', error);
//     return [];
//   }
// }

// // Ajouter un nouveau véhicule
// export async function addVehicle(formData) {
//   await checkAdmin();
  
//   try {
//     // Récupérer l'image (soit uploadée soit URL)
//     let imageUrl = formData.get('imageUrl');
//     const imageFile = formData.get('imageFile');
//     const imageUrlAlt = formData.get('imageUrlAlt');

//     // Priorité : 
//     // 1. Image uploadée (déjà en Base64 dans imageUrl)
//     // 2. URL alternative
//     // 3. Image placeholder par défaut
//     if (!imageUrl || imageUrl === '') {
//       if (imageUrlAlt && imageUrlAlt !== '') {
//         imageUrl = imageUrlAlt;
//       } else {
//         imageUrl = '/images/placeholder-car.jpg';
//       }
//     }

//     // Validation basique
//     if (!imageUrl) {
//       return { success: false, message: 'Veuillez fournir une image' };
//     }

//     const newVehicle = {
//       marque: formData.get('marque'),
//       modele: formData.get('modele'),
//       prix: parseInt(formData.get('prix')),
//       description: formData.get('description'),
//       imageUrl: imageUrl,
//       categorie: formData.get('categorie') || 'classique',
//     };

//     // Vérifier que les champs obligatoires sont remplis
//     if (!newVehicle.marque || !newVehicle.modele || !newVehicle.prix || !newVehicle.description) {
//       return { success: false, message: 'Tous les champs sont obligatoires' };
//     }

//     await db.insert(vehicles).values(newVehicle);
//     revalidatePath('/fleet');
//     revalidatePath('/admin/dashboard');
//     return { success: true, message: 'Véhicule ajouté avec succès' };
//   } catch (error) {
//     console.error('Erreur lors de l\'ajout:', error);
//     return { success: false, message: 'Erreur lors de l\'ajout du véhicule: ' + error.message };
//   }
// }

// // Mettre à jour un véhicule
// // Mettre à jour un véhicule
// export async function updateVehicle(id, formData) {
//   await checkAdmin();

//   try {
//     let imageUrl = formData.get('imageUrl');
    
//     const updatedVehicle = {
//       marque: formData.get('marque'),
//       modele: formData.get('modele'),
//       prix: parseInt(formData.get('prix')),
//       description: formData.get('description'),
//       categorie: formData.get('categorie'),
//     };

//     // Ajouter l'image seulement si elle a été modifiée
//     if (imageUrl && imageUrl !== '') {
//       updatedVehicle.imageUrl = imageUrl;
//     }

//     await db.update(vehicles)
//       .set(updatedVehicle)
//       .where(eq(vehicles.id, id));
    
//     revalidatePath('/fleet');
//     revalidatePath('/admin/dashboard');
//     return { success: true, message: 'Véhicule modifié avec succès' };
//   } catch (error) {
//     console.error('Erreur lors de la modification:', error);
//     return { success: false, message: 'Erreur lors de la modification' };
//   }
// }
// // Supprimer un véhicule
// export async function deleteVehicle(id) {
//   await checkAdmin();

//   try {
//     await db.delete(vehicles).where(eq(vehicles.id, id));
//     revalidatePath('/fleet');
//     revalidatePath('/admin/dashboard');
//     return { success: true, message: 'Véhicule supprimé avec succès' };
//   } catch (error) {
//     console.error('Erreur lors de la suppression:', error);
//     return { success: false, message: 'Erreur lors de la suppression' };
//   }
// }

// // Login admin
// export async function loginAdmin(formData) {
//   const email = formData.get('email');
//   const password = formData.get('password');

//   if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
//     cookies().set('admin_session', 'authenticated', {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 60 * 60 * 24, // 24 heures
//       path: '/',
//     });
//     redirect('/admin/dashboard');
//   } else {
//     return { success: false, message: 'Email ou mot de passe incorrect' };
//   }
// }

// // Logout admin
// export async function logoutAdmin() {
//   cookies().delete('admin_session');
//   redirect('/');
// }





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

// Ajouter un nouveau véhicule
export async function addVehicle(formData) {
  await checkAdmin();
  
  try {
    // Récupérer les champs texte
    const marque = formData.get('marque');
    const modele = formData.get('modele');
    const prix = parseInt(formData.get('prix'));
    const description = formData.get('description');
    const categorie = formData.get('categorie') || 'classique';
    
    // Gérer l'image
    let imageData = null;
    let imageUrl = null;
    
    // Vérifier si un fichier a été uploadé
    const imageFile = formData.get('imageFile');
    const imageUrlInput = formData.get('imageUrl');
    
    if (imageFile && imageFile.size > 0) {
      // C'est un fichier uploadé → le convertir en Base64
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = buffer.toString('base64');
      imageData = `data:${imageFile.type};base64,${base64}`;
    } else if (imageUrlInput && imageUrlInput.trim() !== '') {
      // C'est une URL
      imageUrl = imageUrlInput;
    } else {
      // Image par défaut
      imageUrl = '/images/placeholder-car.jpg';
    }

    const newVehicle = {
      marque,
      modele,
      prix,
      description,
      categorie,
      image_data: imageData,
      image_url: imageUrl,
    };

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
    return { success: false, message: 'Erreur lors de la modification' };
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
    return { success: false, message: 'Erreur lors de la suppression' };
  }
}

// Login admin
export async function loginAdmin(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    cookies().set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 24 heures
      path: '/',
    });
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