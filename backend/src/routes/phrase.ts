import mongoose from "mongoose";
import { Router, Request, Response } from "express";
import Phrase from "../models/Phrase.js";
import Author from "../models/Author.js";

const router = Router();

// Ruta GET única (soporta todas, random e ID vía query)
router.get("/", async (req: Request, res: Response) => {
  // Intentar obtener el ID de varias formas por si acaso
  const idValue = req.query.id || req.query.ID || req.query._id;
  
  console.log("--- GET /api/frases ---");
  console.log("Query Params:", JSON.stringify(req.query));
  console.log("Detected ID:", idValue);

  try {
    // 1. Caso: Obtener por ID vía query (?id=...)
    if (idValue && typeof idValue === "string") {
      if (!mongoose.Types.ObjectId.isValid(idValue)) {
        console.log("Invalid ID format:", idValue);
        return res.status(400).json({ error: "Formato de ID inválido" });
      }
      const phrase = await Phrase.findById(idValue).populate("author", "name bio");
      if (!phrase) {
        console.log("Phrase not found for ID:", idValue);
        return res.status(404).json({ error: "Frase no encontrada" });
      }
      console.log("Found phrase, returning single object.");
      return res.json(phrase);
    }

    // 2. Caso: Obtener todas
    const phrases = await Phrase.find().populate("author", "name bio");
    return res.json(phrases);
  } catch (error) {
    console.error("Error in GET /api/frases:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
});

// Mantener random separado o integrarlo (lo dejamos separado con path limpio)
router.get("/random", async (_req: Request, res: Response) => {
  try {
    const count = await Phrase.countDocuments();
    if (count === 0) return res.status(404).json({ error: "No hay frases" });

    const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const phrase = await Phrase.find()
      .sort({ _id: 1 })
      .skip(daySeed % count)
      .limit(1)
      .populate("author", "name bio");
    
    return res.json(phrase[0]);
  } catch (error) {
    return res.status(500).json({ error: "Error en frase aleatoria" });
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

// Eliminar una frase
router.delete("/", async (req: Request, res: Response) => {
  const { id } = req.query; // Usamos query para consistencia con GET

  if (!id || typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID no proporcionado o formato inválido" });
  }

  try {
    const phrase = await Phrase.findByIdAndDelete(id);
    if (!phrase) {
      return res.status(404).json({ error: "Frase no encontrada" });
    }
    res.json({ message: "Frase eliminada correctamente", phrase });
  } catch (error) {
    res.status(500).json({ error: "Error eliminando la frase" });
  }
});


export default router;