import express from "express";
import cors from "cors";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { Account, AccountType } from "./DB/Schema";
// import { cities } from './DB/Schema';

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

app.get("/chartofaccounts", async (req, res) => {
  const data = await db.select().from(Account);

  res.json(data);
});

app.post("/chartofaccounts", async (req, res) => {
  const account = req.body;

  const created = await db.insert(Account).values(account);

  res.json(created);
});

app.get("/accountsType", async (req, res) => {
  const data = await db.select().from(AccountType);

  res.json(data);
});

// app.post("/accountsType", async (req, res) => {
//   const account = req.body;

//   const created = await db.insert(AccountType).values(accountType);

//   res.json(created);
// });

app.get("/items", (req, res) => {
  res.send([
    {
      name: "item1",
      desc: "good",
      purchaseDesc: "",
      rate: "perfect",
      purchaseRate: "",
      usageUnit: "",
    },
    {
      name: "item2",
      desc: "bad",
      purchaseDesc: "",
      rate: "bad",
      purchaseRate: "",
      usageUnit: "",
    },
    {
      name: "item3",
      desc: "good",
      purchaseDesc: "",
      rate: "good",
      purchaseRate: "",
      usageUnit: "",
    },
    {
      name: "item4",
      desc: "normal",
      purchaseDesc: "",
      rate: "perfect",
      purchaseRate: "",
      usageUnit: "",
    },
  ]);
});

app.post("/items", (req, res) => {});

app.listen(3000, () => console.log("Listening on port 3000..."));
