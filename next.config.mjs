// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;





// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['images.unsplash.com', 'via.placeholder.com'], // Ajoutez vos domaines d'images
//   },
// }

// export default nextConfig; // <- Changement ici : export default au lieu de module.exports











/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configuration des images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
    qualities: [90, 75, 50, 25],
    // Optionnel: décommenter si vous avez des problèmes d'images
    // unoptimized: process.env.NODE_ENV === 'production',
  },

  // Important pour @libsql/client sur Vercel
  serverExternalPackages: ['@libsql/client'],

  // Ignorer les erreurs ESLint et TypeScript pendant le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Configuration Turbopack pour le développement
  turbopack: {
    root: process.cwd(),
  },

  // Désactiver la télémétrie
  // (vous pouvez aussi utiliser la variable d'env NEXT_TELEMETRY_DISABLED=1)
};

export default nextConfig;