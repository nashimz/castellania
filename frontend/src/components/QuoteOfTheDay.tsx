import { useState, useEffect } from "react";

function QuoteOfTheDay() {
  const fullText = '"The only way to do great work is to love what you do."';
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-0 md:p-4">
      <h2 className="font-bebas text-xl sm:text-2xl font-semibold mb-3">
        Frase del Día
      </h2>
      <p className="font-bebas text-white font-semibold min-h-6 text-xl sm:text-2xl">
        {displayedText}
        {displayedText.length < fullText.length && (
          <span className="animate-pulse">|</span>
        )}
      </p>
    </div>
  );
}

export default QuoteOfTheDay;
