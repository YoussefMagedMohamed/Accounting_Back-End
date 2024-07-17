import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./DB/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgres://default:CuDZPqicS1x5@ep-super-bird-a2vvbf5g-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require'
  
  
    
  }
 
});
