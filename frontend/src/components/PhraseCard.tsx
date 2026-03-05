import type { Phrase } from "../services/phraseService";
import padreImg from "../assets/padre.jpg";

interface PhraseCardProps {
  phrase: Phrase;
}

function PhraseCard({ phrase }: PhraseCardProps) {
  return (
    <div className="bg-[#1520d]/70 text-white  font-semibold p-4 rounded-3xl shadow-lg max-w-md w-full border border-gray-700 ">
      <div className="flex gap-3 items-start mb-3">
        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-600">
          <img
            src={padreImg}
            alt={phrase.author.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Author Info */}
        <div className="flex flex-col flex-grow">
          <span className="font-extrabold font-lato text-[20px] leading-tight mt-2">
            {phrase.author.name}
          </span>
        </div>
      </div>

      {/* Phrase Text */}
      <div className="font-lato font-bold text-[18px] leading-normal mb-2 text-white">
        "{phrase.text}"
      </div>
    </div>
  );
}

export default PhraseCard;
