export default function SectionCord() {
  return (
   <div className="glass-effect p-5 rounded-xl shadow-lg">
          <h3 className="font-bold mb-4 flex items-center">
            <span className="mr-2">🏛️</span>
            UK Politics
          </h3>
          <div className="space-y-3 text-sm">
            <div className="cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all">
              <h4 className="font-semibold mb-1">PM announces cabinet reshuffle</h4>
              <p className="text-xs text-gray-600">
                Three new ministers appointed to key positions
              </p>
            </div>
            <div className="cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all">
              <h4 className="font-semibold mb-1">
                Opposition calls for early election
              </h4>
              <p className="text-xs text-gray-600">
                Labour leader demands vote of confidence
              </p>
            </div>
          </div>
        </div>
  );
}
