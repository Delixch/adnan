import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

export const Welcome = () => {
  return (
    <div className="max-w-2xl">
      <h1 className="text-base sm:text-lg font-medium text-primary md:text-xl lg:text-2xl">
        Hallo, mein Name ist{" "}
        <span className="block font-bold text-transparent text-3xl sm:text-4xl mt-2 mb-3 lg:text-6xl lg:mt-3 lg:mb-4 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight">
          Eren Aydin.
        </span>
      </h1>

      <div className="w-36 sm:w-20 lg:w-64 h-1 bg-gradient-to-r from-purple-500 to-red-500 rounded-full mb-4 sm:mb-6"></div>

      <h2 className="font-light text-primary text-base sm:text-lg mb-6 lg:text-2xl lg:mb-8 leading-relaxed">
        Ich bin {" "}
        <span className="text-white font-semibold text-base sm:text-lg lg:text-2xl">
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1500}
            words={[
              "freundlich und höflich.",
              "mit anderen respektvoll und fair.",
              "bei wichtigen Themen offen.",
              "gut darin, mit Menschen aus verschiedenen Kulturen auszukommen.",
              "sorgfältig und aufmerksam bei der Erledigung von Aufgaben.",
              "offen für Neues und kann mich gut anpassen.",
              "auch in stressigen Situationen ruhig.",
            ]}
          />
        </span>
      </h2>

      <blockquote className="border-l-4 border-gradient-to-b from-purple-500 to-pink-500 pl-4 sm:pl-6 py-3 sm:py-4 mb-6 sm:mb-8 bg-gray-800/20 rounded-r-lg">
        <p className="text-primary text-sm sm:text-base lg:text-lg italic font-mono leading-relaxed">
          &quot;Nicht das Fallen ist wichtig, sondern jedes Mal wieder aufzustehen.&quot;
        </p>
        <cite className="block text-slate-300 mt-2 text-xs sm:text-sm font-semibold">
          — Confucius
        </cite>
      </blockquote>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 max-w-sm sm:max-w-md">
        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
          <button
            type="button"
            className="w-full sm:flex-1 py-3 px-6 sm:py-4 sm:px-8 rounded-xl font-semibold border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white text-sm sm:text-base">
            Über mich
          </button>
        </Link>

        <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
          <button
            type="button"
            className="w-full sm:flex-1 py-3 px-6 sm:py-4 sm:px-8 rounded-xl font-semibold border-2 border-borderColor bg-black/50 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white backdrop-blur-sm text-sm sm:text-base">
            Schreib mir
          </button>
        </Link>
      </div>
    </div>
  );
};
