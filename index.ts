import express from "express";
import cors from "cors";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { Account, AccountType, Items } from "./DB/Schema";
import { eq } from "drizzle-orm";
// import { cities, Account, Items } from './DB/Schema';

// for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient), ...)
// for query purposes
const queryClient = postgres(
  "postgres://default:CuDZPqicS1x5@ep-super-bird-a2vvbf5g-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require"
);
const db = drizzle(queryClient);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Get All accounts
app.get("/chartofaccounts", async (req, res) => {
  const data = await db.select().from(Account);
  res.json(data);
});

// // Add New Account
// app.post("/chartofaccounts", async (req, res, next) => {
//   try {
//     const account = req.body;
//     console.log(req.body);

//     const created = await db.insert(Account).values(account);

//     res.send("Account Add Successfully");
//   } catch (error) {
//     next(error);
//   }
//   // res.send("Account Add Successfully");
// });

// // Get One Account
// app.get("/chartofaccount/:id", async (req, res) => {
//   console.log(JSON.stringify(req.params.id));

//   const data = await db
//     .select()
//     .from(Account)
//     .where(eq(Account.id, parseInt(req.params.id)));

//   res.json(data);
// });

// // Update Account
// // app.get("/chartofaccount/:id", async (req, res) => {
// //   const data = await db
// //     .select()
// //     .from(Account)
// //     .where(eq(Account.id, parseInt(req.params.id)));

// //   res.json(data);
// // });

// // Delete Account
// app.delete("/chartofaccounts/:id", async (req, res) => {
//   const data = await db
//     .delete(Account)
//     .where(eq(Account.id, parseInt(req.params.id)));

//   res.json(data);
// });

// app.get("/accountsType", async (req, res) => {
//   const data = await db.select().from(AccountType);

//   res.json(data);
// });

// app.post("/");

// // app.post("/accountsType", async (req, res) => {
// //   const account = req.body;

// //   const created = await db.insert(AccountType).values(accountType);

// //   res.json(created);
// // });

// // const items = [
// //   {
// //     name: "item1",
// //     desc: "good",
// //     purchaseDesc: "",
// //     rate: "perfect",
// //     purchaseRate: "",
// //     usageUnit: "",
// //   },
// //   {
// //     name: "item2",
// //     desc: "bad",
// //     purchaseDesc: "",
// //     rate: "bad",
// //     purchaseRate: "",
// //     usageUnit: "",
// //   },
// //   {
// //     name: "item3",
// //     desc: "good",
// //     purchaseDesc: "",
// //     rate: "good",
// //     purchaseRate: "",
// //     usageUnit: "",
// //   },
// //   {
// //     name: "item4",
// //     desc: "normal",
// //     purchaseDesc: "",
// //     rate: "perfect",
// //     purchaseRate: "",
// //     usageUnit: "",
// //   },
// // ];

// // Get All Items
// app.get("/items", async (req, res) => {
//   const data = await db.select().from(Items);
//   res.send(data);
//   // res.json(data);
// });

// // Get One Item
// app.get("/items", (req, res) => {
//   res.send("Item Displayed Successfully");
// });

// // Add New Item
// app.post("/items", (req, res) => {
//   items.push(req.body);
//   res.send("Items Added Successfully");
// });

// // Delete Item
// app.delete("/items", (req, res) => {
//   res.send("Items Deleted Successfully");
// });

// // Update Item
// app.put("/items", (req, res) => {
//   res.send("Items Updated Successfully");
// });

app.listen(3000, () => console.log("Listening on port 3000..."));
