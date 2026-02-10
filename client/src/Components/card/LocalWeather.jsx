export default function LocalWeather() {
  return (
    <div className="glass-effect p-5 rounded-xl shadow-lg">
      <h3 className="font-bold mb-4 flex items-center">
        <span className="mr-2">🌤️</span>
        Local Weather
      </h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center p-2 rounded-lg bg-white/30">
          <span className="font-medium">London</span>
          <span className="flex items-center space-x-1">
            <span>8°C</span>
            <span>🌧️</span>
          </span>
        </div>
        <div className="flex justify-between items-center p-2 rounded-lg bg-white/30">
          <span className="font-medium">Edinburgh</span>
          <span className="flex items-center space-x-1">
            <span>5°C</span>
            <span>❄️</span>
          </span>
        </div>
        <div className="flex justify-between items-center p-2 rounded-lg bg-white/30">
          <span className="font-medium">Cardiff</span>
          <span className="flex items-center space-x-1">
            <span>9°C</span>
            <span>☁️</span>
          </span>
        </div>
        <div className="flex justify-between items-center p-2 rounded-lg bg-white/30">
          <span className="font-medium">Belfast</span>
          <span className="flex items-center space-x-1">
            <span>7°C</span>
            <span>🌦️</span>
          </span>
        </div>
      </div>
    </div>
  );
}
