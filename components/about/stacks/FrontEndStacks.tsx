"use client";

export const FrontEndStacks = () => {
  const languages = [
    { name: "Deutsch", flag: "🇩🇪", level: 100, description: "Muttersprache" },
    { name: "Türkçe", flag: "🇹🇷", level: 100, description: "Muttersprache" },
    { name: "Englisch", flag: "🇬🇧", level: 75, description: "Schulkenntnisse im 7. Jahr" },
    { name: "Französisch", flag: "🇫🇷", level: 65, description: "Schulkenntnisse im 4. Jahr" },
  ];

  return (
    <div className="w-full flex flex-col gap-6 col-span-full pr-4">
      {languages.map((lang) => (
        <div key={lang.name} className="flex flex-col gap-2 bg-amber-100 border-2 border-amber-500 rounded-xl p-4 hover:bg-amber-200 transition-all duration-300">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{lang.flag}</span>
            <span className="font-semibold text-lg text-amber-800">{lang.name}</span>
            <span className="text-sm text-amber-600 whitespace-nowrap">{lang.description}</span>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-4 overflow-hidden">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-700"
              style={{ width: `${lang.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};