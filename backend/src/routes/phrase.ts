import { Router, Request, Response } from "express";
import Phrase from "../models/Phrase.js";
import Author from "../models/Author.js";

const router = Router();

// Obtener todas las frases
router.get("/", async (req: Request, res: Response) => {
  try {
    const phrases = await Phrase.find().populate("author", "name bio");
    res.json(phrases);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo frases" });
  }
});

router.post("/", async (req: Request, res: Response) => {
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

// Obtener frase del día (determinística por fecha)
router.get("/random", async (req: Request, res: Response) => {
  try {
    const count = await Phrase.countDocuments();
    if (count === 0) {
      return res.status(404).json({ error: "No hay frases disponibles" });
    }

    // Usar la fecha actual para generar una semilla (días desde Unix Epoch)
    const now = new Date();
    const daySeed = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
    const randomIdx = daySeed % count;

    const phrases = await Phrase.find()
      .sort({ _id: 1 })
      .skip(randomIdx)
      .limit(1)
      .populate("author", "name bio");
    
    const randomPhrase = phrases[0];

    res.json(randomPhrase);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo frase aleatoria" });
  }
});


export default router;