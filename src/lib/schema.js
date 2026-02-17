// import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// export const vehicles = sqliteTable('vehicles', {
//   id: integer('id').primaryKey({ autoIncrement: true }),
//   marque: text('marque').notNull(),
//   modele: text('modele').notNull(),
//   prix: integer('prix').notNull(),
//   description: text('description').notNull(),
//   imageUrl: text('image_url').notNull(),
//   categorie: text('categorie').default('classique'),
//   createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
// });


















// Schéma de la base de données pour les véhicules
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const vehicles = sqliteTable('vehicles', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  marque: text('marque').notNull(),
  modele: text('modele').notNull(),
  prix: integer('prix').notNull(),
  description: text('description').notNull(),
  image_data: text('image_data'), // Pour les images uploadées en Base64
  image_url: text('image_url'),   // Pour les URLs d'images
  categorie: text('categorie').default('classique'),
  created_at: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});