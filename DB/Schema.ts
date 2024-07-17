import { doublePrecision, foreignKey, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// export const cities = pgTable("cities", {
//   id: serial("id").primaryKey(),
//   name: varchar("name", { length: 256 }),
// });

// Account Type Table
export const AccountType = pgTable("accountType", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  type: varchar("type", { length: 256 }),
});

// Account table
export const Account = pgTable("account", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  code: varchar("code", { length: 256 }),
  description: varchar("description", { length: 256 }),

  balance: doublePrecision('balance'),

  AccountTypeId: serial("accTypeId").references(()=> AccountType.id)
});
