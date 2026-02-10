export default function WatchListen() {
  return (
    <div className="glass-effect p-5 rounded-xl mobile-card-padding shadow-lg">
      <h3 className="font-bold mb-4 text-lg flex items-center">
        <span className="mr-2">📺</span>
        Watch/Listen
      </h3>
      <div className="space-y-3">
        <div className="flex space-x-3 cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all mobile-touch-target">
          <div className="bg-red-600 w-16 h-12 flex items-center justify-center rounded-lg flex-shrink-0 shadow-sm">
            <span className="text-white text-sm">▶</span>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-sm">BBC News at Six</h4>
            <p className="text-xs text-gray-600">
              Latest headlines and analysis
            </p>
            <div className="text-xs text-red-600 font-medium">LIVE NOW</div>
          </div>
        </div>
        <div className="flex space-x-3 cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-all mobile-touch-target">
          <div className="bg-blue-600 w-16 h-12 flex items-center justify-center rounded-lg flex-shrink-0 shadow-sm">
            <span className="text-white text-sm">🎵</span>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-sm">BBC Radio 4 Today</h4>
            <p className="text-xs text-gray-600">
              Morning news and current affairs
            </p>
            <div className="text-xs text-gray-500">Available on iPlayer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
