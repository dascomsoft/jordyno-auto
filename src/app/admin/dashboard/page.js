// // Dashboard administrateur
// import { getVehicles } from '@/lib/actions.js';
// import { logoutAdmin } from '@/lib/actions.js';
// import AdminVehicleForm from '@/components/AdminVehicleForm.jsx';
// import VehicleCard from '@/components/VehicleCard.jsx';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

// // Vérification authentification
// async function checkAuth() {
//   const cookieStore = cookies();
//   const isAdmin = cookieStore.get('admin_session');
  
//   if (!isAdmin || isAdmin.value !== 'authenticated') {
//     redirect('/admin/login');
//   }
// }

// export default async function AdminDashboard() {
//   await checkAuth();
//   const vehicles = await getVehicles();

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* En-tête admin */}
//       <div className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Dashboard Admin - Jordyno Auto Rent
//           </h1>
//           <form action={logoutAdmin}>
//             <button
//               type="submit"
//               className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
//             >
//               Déconnexion
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         {/* Formulaire d'ajout */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <h2 className="text-xl font-semibold mb-4">Ajouter un nouveau véhicule</h2>
//           <AdminVehicleForm />
//         </div>

//         {/* Liste des véhicules */}
//         <h2 className="text-2xl font-bold mb-4">Véhicules existants</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {vehicles.map((vehicle) => (
//             <div key={vehicle.id} className="relative">
//               <VehicleCard vehicle={vehicle} />
              
//               {/* Boutons admin */}
//               <div className="absolute top-2 right-2 flex gap-2">
//                 <button
//                   onClick={() => {
//                     // Implémentez la logique d'édition (modal ou redirection)
//                     alert('Fonctionnalité d\'édition à implémenter');
//                   }}
//                   className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                   </svg>
//                 </button>
                
//                 <form action={async () => {
//                   'use server';
//                   const { deleteVehicle } = await import('@/lib/actions.js');
//                   await deleteVehicle(vehicle.id);
//                 }}>
//                   <button
//                     type="submit"
//                     className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
//                     onClick={(e) => {
//                       if (!confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
//                         e.preventDefault();
//                       }
//                     }}
//                   >
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                     </svg>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }












































// Dashboard administrateur - SERVER COMPONENT
import { getVehicles } from '@/lib/actions.js';
import { logoutAdmin } from '@/lib/actions.js';
import AdminVehicleForm from '@/components/AdminVehicleForm.jsx';
import VehicleCard from '@/components/VehicleCard.jsx';
import AdminVehicleActions from '@/components/AdminVehicleActions.jsx';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// Vérification authentification
async function checkAuth() {
  const cookieStore = cookies();
  const isAdmin = cookieStore.get('admin_session');
  
  if (!isAdmin || isAdmin.value !== 'authenticated') {
    redirect('/admin/login');
  }
}

export default async function AdminDashboard() {
  await checkAuth();
  const vehicles = await getVehicles();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Bouton de déconnexion en haut à droite */}
      <div className="flex justify-end mb-6">
        <form action={logoutAdmin}>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Déconnexion
          </button>
        </form>
      </div>

      {/* Formulaire d'ajout */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Ajouter un nouveau véhicule</h2>
        <AdminVehicleForm />
      </div>

      {/* Liste des véhicules */}
      <h2 className="text-2xl font-bold mb-4">Véhicules existants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="relative">
            <VehicleCard vehicle={vehicle} />
            <AdminVehicleActions vehicle={vehicle} />
          </div>
        ))}
      </div>
    </div>
  );
}