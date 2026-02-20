import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import Author from "./models/Author.js";
import Phrase from "./models/Phrase.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// --- RUTAS ---

// Ruta de prueba (Saber si el server responde algo)
app.get("/", (req, res) => {
  res.send("Servidor de Tributo al Padre Castellani - Online");
});

// Obtener todas las frases
app.get("/api/frases", async (req: Request, res: Response) => {
  try {
    const phrases = await Phrase.find().populate("author", "name bio");
    res.json(phrases);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo frases" });
  }
});

app.post("/api/frases", async (req: Request, res: Response) => {
  const { texto, obra, categoria } = req.body;
  if (!texto || !obra || !categoria) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }
  try {
    const author = await Author.findOne();
    if (!author) {
      return res.status(500).json({ error: "Autor no encontrado" });
    }
    const newPhrase = new Phrase({
      text: texto,
      work: obra,
      category: categoria,
      author: author._id,
    });
    await newPhrase.save();
    await newPhrase.populate("author", "name bio");
    res.status(201).json(newPhrase);
  } catch (error) {
    console.error("Error guardando frase:", error);
    res.status(500).json({ error: "Error al guardar la frase" });
  }
});

// Obtener frase aleatoria
app.get("/api/frases/random", async (req: Request, res: Response) => {
  try {
    const count = await Phrase.countDocuments();
    const randomIdx = Math.floor(Math.random() * count);
    const randomPhrase = await Phrase.findOne()
      .skip(randomIdx)
      .populate("author", "name bio");
    res.json(randomPhrase);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo frase aleatoria" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
});
