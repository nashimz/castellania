const API_URL = "http://localhost:3002/api/frases";

export interface Author {
  _id: string;
  name: string;
  bio?: string;
}

export interface Phrase {
  _id: string;
  text: string;
  work: string;
  category: string;
  author: Author;
}

export const getPhraseOfTheDay = async (): Promise<Phrase> => {
  const response = await fetch(`${API_URL}/random`);
  if (!response.ok) {
    throw new Error("Error al obtener la frase del día");
  }
  return response.json();
};

export const getAllPhrases = async (): Promise<Phrase[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error al obtener todas las frases");
  }
  return response.json();
};
