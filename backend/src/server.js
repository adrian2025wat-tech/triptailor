import express from "express";
import cors from "cors";
import itinerariesRouter from "./routes/itineraries.js";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "triptailor",
  ssl: { rejectUnauthorized: true }
});



app.set("db", db);

// Rutas
app.use("/api/itineraries", itinerariesRouter);

app.get("/health", (req, res) => res.send("OK"));

app.listen(4000, () => console.log("Backend running on port 4000"));
