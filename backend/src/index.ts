import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";

import phraseRoutes from "./routes/phrase.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// --- RUTAS ---
app.use("/api/frases", phraseRoutes);

// Ruta de prueba (Saber si el server responde algo)
app.get("/", (req, res) => {
  res.send("Servidor de Tributo al Padre Castellani - Online");
});


app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
});
