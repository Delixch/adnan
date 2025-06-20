"use client";

export const FrontEndStacks = () => {
  // Dilleri ve seviyeleri tanımla
  const languages = [
    {
      name: "Deutsch",
      flag: "🇩🇪",
      level: 100, // Anadili
      description: "Muttersprache",
    },
    {
      name: "Türkçe",
      flag: "🇹🇷",
      level: 100, // Çok iyi
      description: "Muttersprache",
    },
    {
      name: "Englisch",
      flag: "🇬🇧",
      level: 75, // İyi
      description: "Schulkenntnisse im 7. Jahr",
    },
    {
      name: "Französisch",
      flag: "🇫🇷",
      level: 65, // Orta
      description: "Schulkenntnisse im 4. Jahr",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {languages.map((lang) => (
        <div key={lang.name} className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{lang.flag}</span>
            <span className="font-semibold text-lg">{lang.name}</span>
            <span className="text-sm text-gray-400 whitespace-nowrap">{lang.description}</span>
          </div>
          <div className="w-full bg-gray-800 rounded h-3 overflow-hidden">
            <div
              className="h-3 rounded bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-700"
              style={{ width: `${lang.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};