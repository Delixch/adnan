export const Status = () => {
  return (
    <div className="max-w-lg">
      <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
        Meine Zahlen
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="group p-4 sm:p-6 border border-borderColor bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              9
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-slate-300 leading-4 sm:leading-5">
                Schnupperlehren, an denen ich bisher teilnehmen durfte
              </p>
            </div>
          </div>
        </div>
        
        <div className="group p-4 sm:p-6 border border-borderColor bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-500/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              0
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-slate-300 leading-4 sm:leading-5">
                Bisher von mir versandte Bewerbungen für Lehrstellen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
