export const Journey = () => {
  const experiences = [
    {
      id: 1,
      title: "Kindergarten Döltschiweg",
      timespan: "Von August 2014 bis Juli 2016.",
      place: "Sammle meine ersten Erfahrungen",
    },
    {
      id: 2,
      place: "Lerne verschiedene Fächer kennen.",
      title: "Schule Küngenmatt",
      timespan: "Von August 2017 bis Juli 2023",
    },
     {
      id: 3,
      place: "Ich lerne schwierigere Fächer kennen.",
      title: "Schule Rebhügel",
      timespan: "Von August 2023 bis Heute",
    },
  ];

  return (
    <div className="max-w-6xl">
      <h1 className="text-lg font-medium text-primary md:text-xl lg:text-2xl mb-2">
        Erfahrungen{" "}
        <span className="block font-extrabold text-transparent text-5xl mt-3 mb-6 lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight">
          Meine Schulzeit und Zeugnisse
        </span>
      </h1>

      <div className="w-96 h-1 bg-gradient-to-r from-purple-500 to-red-500 rounded-full mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {experiences.map((experience) => (
          <div
            key={experience.place}
            className="bg-tertiary border border-borderColor rounded-xl p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:shadow-xl hover:border-orange-400/50 cursor-pointer group transform hover:scale-105">
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white">
              {experience.place}
            </h3>
            <h4 className="font-semibold text-slate-200 mb-2 text-base group-hover:text-white">
              {experience.title}
            </h4>
            <p className="text-primary text-sm group-hover:text-gray-200">
              {experience.timespan}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
