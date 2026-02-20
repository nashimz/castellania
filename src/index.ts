import express, { Request, Response } from "express";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";
import { join } from "node:path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH_JSON = join(process.cwd(), "src", "frases.json");

// Middlewares
app.use(cors());
app.use(express.json());

interface Frase {
  id: number;
  texto: string;
  obra: string;
  categoria: string;
}

const getDatos = () => {
  try {
    const rawData = fs.readFileSync(PATH_JSON, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error leyendo frases.json:", error);
    return { frases: [] };
  }
};

// --- RUTAS ---

// Ruta de prueba (Saber si el server responde algo)
app.get("/", (req, res) => {
  res.send("Servidor de Tributo al Padre Castellani - Online");
});

app.use((req, res, next) => {
  console.log(`📢 Petición recibida: ${req.method} ${req.url}`);
  next();
});

// Obtener todas las frases
app.get("/api/frases", (req: Request, res: Response) => {
  const data = getDatos();
  res.json(data.frases);
});

app.post("/api/frases", (req: Request, res: Response) => {
  const { texto, obra, categoria } = req.body;
  if (!texto || !obra || !categoria) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }
  const data = getDatos();
  const newFrase: Frase = {
    id: data.frases.length > 0 ? data.frases[data.frases.length - 1].id + 1 : 1,
    texto,
    obra,
    categoria,
  };
  data.frases.push(newFrase);
  try {
    fs.writeFileSync(PATH_JSON, JSON.stringify(data, null, 2), "utf8");
    res.status(201).json(newFrase);
  } catch (error) {
    console.error("Error escribiendo en frases.json:", error);
    res.status(500).json({ error: "Error al guardar la frase" });
  }
});

// Obtener frase aleatoria
app.get("/api/frases/random", (req: Request, res: Response) => {
  const data = getDatos();
  const frases: Frase[] = data.frases;
  const randomIdx = Math.floor(Math.random() * frases.length);
  res.json(frases[randomIdx]);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
});
