import castellaniImg from "../assets/castellania.png";
import QuoteOfTheDay from "./QuoteOfTheDay";

function HomePage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center md:justify-end text-white relative bg-cover before:absolute before:inset-0 before:bg-black/50 before:z-0"
      style={{
        backgroundImage: `url(${castellaniImg})`,
        backgroundPosition: "center -10px",
      }}
    >
      {/* Content */}
      <div className="relative z-30 text-right px-12 py-12 mr-20">
        <h1 className="font-ephesis  text-5xl font-bold mb-6 text-right">
          Leonardo Castellani
        </h1>
        <h4 className="font-bebas font-semibold text-lg mb-8 max-w-2xl text-right">
          Doctor en psicología, filosofía, teología, sin discusión el más
          importante católico escritor argentino. Y de entre los mejores
          escritores argentinos a secas, sin el “católico”. Incluso tal vez el
          mejor de todos.
        </h3>
        <QuoteOfTheDay />
      </div>
    </div>
  );
}

export default HomePage;
