// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'], // Ajoutez vos domaines d'images
  },
}

export default nextConfig; // <- Changement ici : export default au lieu de module.exports