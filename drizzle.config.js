// /** @type {import('drizzle-kit').Config} */
// module.exports = {
//   schema: './src/lib/schema.js',
//   out: './drizzle',
//   dialect: 'sqlite',
//   driver: 'turso',
//   dbCredentials: {
//     url: process.env.TURSO_DATABASE_URL,
//     authToken: process.env.TURSO_AUTH_TOKEN,
//   },
// }

























/** @type {import('drizzle-kit').Config} */
const config = {
  schema: './src/lib/schema.js',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
};

export default config;