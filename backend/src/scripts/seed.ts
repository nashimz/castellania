import "dotenv/config";
import fs from "fs";
import path from "path";
import { join } from "path";
import { fileURLToPath } from "url";
import { connectDB } from "../config/database.js";
import Author from "../models/Author.js";
import Phrase from "../models/Phrase.js";

const seedDatabase = async () => {
  try {
    await connectDB();

    // Eliminar índices antiguos si existen
    try {
      await Phrase.collection.dropIndex("id_1");
      console.log("🗑️ Índice 'id' eliminado");
    } catch (err) {
      // El índice podría no existir, esto es normal
    }

    await Author.deleteMany({});
    await Phrase.deleteMany({});
    console.log("🗑️ Colecciones limpiadas");

    const dataPath = join(process.cwd(), "src", "frases.json");
    const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

    // 2. Crear el autor
    const author = new Author({
      name: data.autor,
      bio: data.biografia_breve,
    });
    await author.save();
    console.log("👤 Autor creado");

    // 3. Mapear e Insertar frases (sin el campo 'id')
    const frasesParaInsertar = data.frases.map((frase: any) => ({
      text: frase.texto, // Asegúrate que coincida con tu Schema
      work: frase.obra,
      category: frase.categoria,
      author: author._id,
    }));

    await Phrase.insertMany(frasesParaInsertar);
    console.log(
      `✅ ${frasesParaInsertar.length} frases insertadas correctamente`,
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};
seedDatabase();
