import type { Phrase } from "../services/phraseService";
import padreImg from "../assets/padre.jpg";

interface PhraseCardProps {
  phrase: Phrase;
}

function PhraseCard({ phrase }: PhraseCardProps) {
  return (
    <div className="bg-[#1520d]/70 text-white  font-semibold p-4 rounded-3xl shadow-lg max-w-md w-full border border-gray-600 ">
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
          <span className="font-bold font-redrose text-[22px] leading-tight ">
            {phrase.author.name}
          </span>
          <span className="font-semibold text-gray-600 text-sm">castellania.com.ar</span>
        </div>
      </div>

      {/* Phrase Text */}
      <div className="font-chakra italic font-bold text-[18px] leading-normal mb-2 text-white">
        "{phrase.text}"
      </div>
      <div className="font-semibold text-white/80 text-sm">- {phrase.work}</div>
    </div>

    
  );
}

export default PhraseCard;
