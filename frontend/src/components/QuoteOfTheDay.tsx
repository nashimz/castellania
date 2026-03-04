import { useState, useEffect } from "react";
import { getPhraseOfTheDay } from "../services/phraseService";
import type { Phrase } from "../services/phraseService";

function QuoteOfTheDay() {
  const [phrase, setPhrase] = useState<Phrase | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPhrase = async () => {
      try {
        const data = await getPhraseOfTheDay();
        setPhrase(data);
      } catch (err) {
        console.error("Error fetching phrase:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPhrase();
  }, []);

  useEffect(() => {
    if (!phrase) return;

    let currentIndex = 0;
    const fullText = `"${phrase.text}"`;
    
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [phrase]);

  if (loading) {
    return (
      <div className="p-0 md:p-4 animate-pulse">
        <div className="h-6 w-32 bg-gray-700/50 rounded mb-3"></div>
        <div className="h-20 bg-gray-700/30 rounded"></div>
      </div>
    );
  }

  if (error || !phrase) {
    return null; // Don't show anything if there's an error
  }

  return (
    <div className="p-0 md:p-4">
      <h2 className="font-bebas text-xl sm:text-2xl font-semibold mb-3">
        Frase del Día
      </h2>
      <p className="font-bebas text-white font-semibold min-h-6 text-xl sm:text-2xl italic">
        {displayedText}
        {displayedText.length < `"${phrase.text}"`.length && (
          <span className="animate-pulse">|</span>
        )}
      </p>
      {displayedText.length === `"${phrase.text}"`.length && (
        <p className="font-bebas text-white font-semibold mt-2 text-lg sm:text-xl">
          — {phrase.work}
        </p>
      )}
    </div>
  );
}

export default QuoteOfTheDay;
