import { useState, useEffect } from "react";
import { getAllPhrases } from "../services/phraseService";
import type { Phrase } from "../services/phraseService";
import PhraseCard from "./PhraseCard";
import castellaniImg from "../assets/castellania.png";

function PhrasesPage() {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPhrases = async () => {
      try {
        const data = await getAllPhrases();
        setPhrases(data);
      } catch (err) {
        console.error("Error fetching phrases:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPhrases();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center pt-24">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center pt-24">
        <p className="text-xl font-bebas">Error al cargar las frases...</p>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover relative before:absolute before:inset-0 before:bg-black/70 before:z-0"
      style={{
        backgroundImage: `url(${castellaniImg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="font-ephesis text-5xl md:text-7xl text-white font-bold mb-4">
            Frases del Padre Castellani
          </h1>
        </header>

        <div className="flex flex-wrap justify-center gap-8">
          {phrases.map((phrase) => (
            <PhraseCard key={phrase._id} phrase={phrase} />
          ))}
          {phrases.length === 0 && (
            <p className="text-gray-400 font-bebas text-xl">No se encontraron frases.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhrasesPage;
