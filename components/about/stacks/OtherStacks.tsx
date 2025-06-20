"use client";

export const OtherStacks = () => {
  const references = [
    {
      name: "Thomas Seinige",
      job: "Klassenlehrer",
      email: "thomas.seinige@schulen.zuerich.ch",
      phone: "Nach fragen",
    },
    {
      name: "Cyrill Lam",
      job: "Kung-Fu Lehrer",
      email: "zuerich@skema.ch",
      phone: "044 401 40 42",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {references.map((ref) => (
          <div
            key={ref.email}
            className="border border-borderColor bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 group transform hover:scale-105"
          >
            <div className="space-y-3">
              <h3 className="font-bold text-xl text-white group-hover:text-white">
                {ref.name}
              </h3>
              
              <p className="text-gray-300 text-base font-medium group-hover:text-white">
                {ref.job}
              </p>
              
              <div className="space-y-2 pt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-200">
                    E-Mail:
                  </span>
                  <a 
                    href={`mailto:${ref.email}`}
                    className="text-blue-400 hover:text-blue-300 text-sm break-all transition-colors duration-200"
                  >
                    {ref.email}
                  </a>
                </div>
                
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-200">
                    Telefon:
                  </span>
                  <span className="text-gray-300 text-sm group-hover:text-white">
                    {ref.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};