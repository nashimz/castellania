import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import PhrasesPage from "./components/PhrasesPage.tsx";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/frases" element={<PhrasesPage />} />
      </Routes>
    </>
  );
}

export default App;
